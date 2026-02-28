
    const DB_NAME = 'myNewDynamicDB';
    // const DB_NAME = 'myDynamicDB';const DB_NAME = 'myDynamicDB';
const META_STORE = '__meta__';
const DEVELOPER_VERSION = 1;

let dbPromise;

async function getMetaAndVersion() {
  const dbs = await indexedDB.databases();
  const found = dbs.find(db => db.name === DB_NAME);
//   const currentVersion = found?.version || 0;

  const fallbackVersion = DEVELOPER_VERSION * 10000;
  const currentVersion = Math.max(found?.version || 0, fallbackVersion);

  let userVersion = 0;
  let userStores = [];

  // if (currentVersion > 0) {
  //   const db = await idb.openDB(DB_NAME, currentVersion);
  //   userVersion = await db.get(META_STORE, 'userVersion') || 0;
  //   userStores = await db.get(META_STORE, 'userStores') || [];
  //   db.close();
  // }

  if (found?.version) {
    const db = await idb.openDB(DB_NAME, currentVersion);

    // Check if meta store exists before accessing it
    if (db.objectStoreNames.contains(META_STORE)) {
      userVersion = await db.get(META_STORE, 'userVersion') || 0;
      userStores = await db.get(META_STORE, 'userStores') || [];
    }

    db.close();
  }

  return { currentVersion, userVersion, userStores };
}

async function saveMeta(userVersion, userStores) {
  const db = await dbPromise;
  await db.put(META_STORE, userVersion, 'userVersion');
  await db.put(META_STORE, userStores, 'userStores');
}

async function openDynamicDB(newStores = []) {
  const { currentVersion, userVersion, userStores } = await getMetaAndVersion();

  // Merge and get unique stores
  const allStores = new Set([...userStores, ...newStores]);

  // Detect stores that really don't exist in IndexedDB yet
  const tempDb = await idb.openDB(DB_NAME, currentVersion);
  const actualMissingStores = Array.from(allStores).filter(store => !tempDb.objectStoreNames.contains(store));
  tempDb.close();

  // Only upgrade if there are actually new object stores
  if (actualMissingStores.length === 0) {
    dbPromise = idb.openDB(DB_NAME, currentVersion);
    return dbPromise;
  }

  const nextUserVersion = userVersion + 1;
  const nextVersion = Math.max(currentVersion + 1, DEVELOPER_VERSION * 10000 + nextUserVersion);

  dbPromise = idb.openDB(DB_NAME, nextVersion, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(META_STORE)) {
        db.createObjectStore(META_STORE);
      }

      for (const store of actualMissingStores) {
        if (!db.objectStoreNames.contains(store)) {
          db.createObjectStore(store, { keyPath: 'id', autoIncrement: true });
        }
      }
    }
  });

  await saveMeta(nextUserVersion, Array.from(allStores));
  return dbPromise;
}


    // --- CRUD Functions ---
    async function writeData(storeName, data) {
      const db = await dbPromise;
      return db.put(storeName, data);
    }

    async function readAllData(storeName) {
      const db = await dbPromise;
      return db.getAll(storeName);
    }

    async function readData(storeName, id) {
      const db = await dbPromise;
      return db.get(storeName, id);
    }

    async function deleteItem(storeName, id) {
      const db = await dbPromise;
      return db.delete(storeName, id);
    }

    async function clearStore(storeName) {
      const db = await dbPromise;
      return db.clear(storeName);
    }


    async function deleteDB(DB_NAME) {
      
  // Close any open connection first
  if (dbPromise) {
    const db = await dbPromise;
    db.close();
    dbPromise = null;
  }
  
  indexedDB.deleteDatabase(DB_NAME);
    }
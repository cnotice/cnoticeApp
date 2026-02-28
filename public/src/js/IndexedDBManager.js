// Assumes idb-umd.js is loaded before this file
// Exposes global `idb` object

class IndexedDBManager {
  constructor(dbName, developerVersion = 1) {
    this.dbName = dbName;
    this.devVersion = developerVersion;
    this.META_STORE = '__meta__';
    this.dbPromise = null;
  }

  async init(newStores = []) {
    const { currentVersion, userVersion, userStores } = await this._getMeta();

    const tempDb = await idb.openDB(this.dbName, currentVersion);
    const missingStores = newStores.filter(s => !tempDb.objectStoreNames.contains(s));
    tempDb.close();

    if (missingStores.length === 0) {
      this.dbPromise = idb.openDB(this.dbName, currentVersion);
      this._setupVersionChangeHandler();
      return this.dbPromise;
    }

    const nextUserVersion = userVersion + 1;
    const nextVersion = Math.max(currentVersion + 1, this.devVersion * 1000 + nextUserVersion);

    this.dbPromise = idb.openDB(this.dbName, nextVersion, {
      upgrade: (db) => {
        if (!db.objectStoreNames.contains(this.META_STORE)) {
          db.createObjectStore(this.META_STORE);
        }

        for (const store of missingStores) {
          if (!db.objectStoreNames.contains(store)) {
            db.createObjectStore(store, { keyPath: 'id', autoIncrement: true });
          }
        }
      }
    });

    this._setupVersionChangeHandler();

    await this._saveMeta(nextUserVersion, [...new Set([...userStores, ...missingStores])]);
    return this.dbPromise;
  }

  async _getMeta() {
    const dbs = await indexedDB.databases();
    const found = dbs.find(db => db.name === this.dbName);
    // const currentVersion = found?.version || 0;
    const currentVersion = Math.max(found?.version || 0, this.devVersion * 1000);


    let userVersion = 0;
    let userStores = [];

    if (currentVersion > 0) {
      const db = await idb.openDB(this.dbName, currentVersion);
      userVersion = await db.get(this.META_STORE, 'userVersion') || 0;
      userStores = await db.get(this.META_STORE, 'userStores') || [];
      db.close();
    }

    return { currentVersion, userVersion, userStores };
  }

  async _saveMeta(userVersion, userStores) {
    const db = await this.dbPromise;
    await db.put(this.META_STORE, userVersion, 'userVersion');
    await db.put(this.META_STORE, userStores, 'userStores');
  }

  _setupVersionChangeHandler() {
    this.dbPromise.then(db => {
      db.onversionchange = () => {
        db.close();
        alert('Database has been updated in another tab. Please refresh the page.');
      };
    });
  }

  // CRUD
  async write(store, data) {
    const db = await this.dbPromise;
    return db.put(store, data);
  }

  async read(store, id) {
    const db = await this.dbPromise;
    return db.get(store, id);
  }

  async readAll(store) {
    const db = await this.dbPromise;
    return db.getAll(store);
  }

  async delete(store, id) {
    const db = await this.dbPromise;
    return db.delete(store, id);
  }

  async clear(store) {
    const db = await this.dbPromise;
    return db.clear(store);
  }
}

// Expose globally (for use in <script>)
window.IndexedDBManager = IndexedDBManager;

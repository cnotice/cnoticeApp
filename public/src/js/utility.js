
var dbPromise = idb.open('cnotNewIDB', 1, function (db) {
  // if (!db.objectStoreNames.contains('cnotposts')) {
  //   db.createObjectStore('cnotposts', {keyPath: '_id'});
  // }
  
  if (!db.objectStoreNames.contains('cnotposts2')) {
    db.createObjectStore('cnotposts2', {keyPath: '_id'});
  }
});

function writeData(st, data) {
  return dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readwrite');
      var store = tx.objectStore(st);
      console.log(st);
      console.log(store);
      console.log(data);
      store.put(data);
      return tx.complete;
    });
}

function readAllData(st) {
  return dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readonly');
      var store = tx.objectStore(st);
      return store.getAll();
    });
}

function clearAllData(st) {
  return dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readwrite');
      var store = tx.objectStore(st);
      store.clear();
      return tx.complete;
    });
}

function deleteItemFromData(st, id) {
  dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readwrite');
      var store = tx.objectStore(st);
      store.delete(id);
      return tx.complete;
    })
    .then(function() {
      console.log('Item deleted!');
    });
}
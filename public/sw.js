// // self.addEventListener('install', function(event) {
// //   self.skipWaiting();
// // });

// // self.addEventListener('activate', function(event) {
// //   event.waitUntil(
// //     self.registration.unregister().then(function(success) {
// //       return clients.matchAll().then(function(clients) {
// //         clients.forEach(client => client.navigate(client.url)); // Force reload
// //       });
// //     })
// //   );
// // });


// importScripts('/src/js/idb.js');
// importScripts('/src/js/utility.js');

// var CACHE_STATIC_NAME = 'static-v21';
// var CACHE_DYNAMIC_NAME = 'dynamic-v2';
// var STATIC_FILES = [
// //   '/',
//   '/combi/quiz/ansfc.html',
//   '/combi/quiz/ansmc.html',
//   '/combi/quiz/ansow.html',
//   '/combi/quiz/ansow2.html',
//   '/combi/1signin.html',
//   '/combi/2login.html',
//   '/combi/about.html',
//   '/combi/all.html',
//   '/combi/attendance.html',
//   '/combi/attendance1.html',
//   '/combi/calendar.html',
//   '/combi/class.html',
//   '/combi/dashboard.html',
//   '/combi/degrees.html',
//   '/combi/fc.html',
//   '/combi/guide.html',
//   '/combi/home.html',
//   '/combi/hub.html',
//   '/combi/ifp.html',
//   '/combi/insprofile.html',
  
//   '/combi/keywords.html',
//   '/combi/Keywords.html',

//   '/combi/logs.html',
//   '/combi/mc.html',
//   '/combi/notice.html',
//   '/combi/ow.html',
//   '/combi/profile.html',
//   '/combi/profile1.html',
//   '/combi/qp.html',
//   '/combi/quickplay.html',
//   '/combi/result.html',
//   '/combi/revfc.html',
//   '/combi/review.html',
//   '/combi/revise.html',
//   '/combi/revmc.html',
//   '/combi/revow.html',
//   '/combi/settings.html',
//   '/combi/sfp.html',
//   '/combi/signin.html',
//   '/combi/students.html',

//   '/combi/studyaccount.html',
//   '/combi/StudyAccount.html',

//   '/combi/stuprofile.html',
//   '/combi/subject.html',
//   '/combi/subjectnotice.html',
//   '/combi/syllabus.html',
//   '/combi/task.html',
//   '/combi/teachers.html',
//   '/combi/teaprofile.html',
//   '/combi/tfp.html',
//   '/combi/timetable.html',


//   '/combi/attendance1.js',
//   '/combi/class.js',
//   '/combi/dashboard.js',
//   '/combi/home.js',
//   '/combi/hub.js',
//   '/combi/ifp.js',
//   '/combi/marquee.js',
//   '/combi/marqueesubjects.js',
//   '/combi/reviewquiz.js',
//   '/combi/signin.js',
//   '/combi/studyaccount.js',
//   '/combi/subject.js',
//   '/combi/subjects.js',
//   '/combi/timer.js',

  
//   '/src/helperBox/announce.png',
//   '/src/helperBox/back.png',
//   '/src/helperBox/brokenHeart.png',
//   '/src/helperBox/cancel.png',
//   '/src/helperBox/close.png',
//   '/src/helperBox/crown.png',
//   '/src/helperBox/ecgHeart.png',
//   '/src/helperBox/edit.png',
//   '/src/helperBox/error.png',
//   '/src/helperBox/flag.png',
//   '/src/helperBox/hide.png',
//   '/src/helperBox/home.png',
//   '/src/helperBox/info.png',
//   '/src/helperBox/menudots.png',
//   '/src/helperBox/note.png',
//   '/src/helperBox/pen.png',
//   '/src/helperBox/sad.png',
//   '/src/helperBox/sorry.png',
//   '/src/helperBox/thumbDown.png',
//   '/src/helperBox/thumbUp.png',
//   '/src/helperBox/trophy.png',
//   '/src/helperBox/trophy2.png',
//   '/src/helperBox/trophy3.png',
//   '/src/helperBox/trophy4.png',
//   '/src/helperBox/unhide.png',
//   '/src/helperBox/xShield.png',

//   '/src/images/chrome.png',
//   '/src/images/cnotice.png',
//   '/src/images/google.png',
  
//   '/src/menuBox/compass.png',
//   '/src/menuBox/guide.png',
//   '/src/menuBox/logs.png',
//   '/src/menuBox/profile.png',
//   '/src/menuBox/settings.png',
  
//   '/src/subjectBox/account.png',
//   '/src/subjectBox/add.png',
//   '/src/subjectBox/attendance.png',
//   '/src/subjectBox/block.png',
//   '/src/subjectBox/blockhide.png',
//   '/src/subjectBox/calendar.png',
//   '/src/subjectBox/decide.png',
//   '/src/subjectBox/degree.png',
//   '/src/subjectBox/empty.png',
//   '/src/subjectBox/flash.png',
//   '/src/subjectBox/flash2.png',
//   '/src/subjectBox/flash3.png',
//   '/src/subjectBox/hide.png',
//   '/src/subjectBox/image.png',
//   '/src/subjectBox/keywords.png',
//   '/src/subjectBox/lock.png',
//   '/src/subjectBox/multi.png',
//   '/src/subjectBox/notice.png',
//   '/src/subjectBox/one.png',
//   '/src/subjectBox/qa2.png',
//   '/src/subjectBox/qa8.png',
//   '/src/subjectBox/question.png',
//   '/src/subjectBox/score.png',
//   '/src/subjectBox/students.png',
//   '/src/subjectBox/study.png',
//   '/src/subjectBox/subjects.png',
//   '/src/subjectBox/syllabus.png',
//   '/src/subjectBox/teachers.png',
//   '/src/subjectBox/timetable.png',
//   '/src/subjectBox/timetable2.png',
//   '/src/subjectBox/timetable3.png',
//   '/src/subjectBox/unhide.png',

//   '/combi/estyle.css'


// ];


// // self.addEventListener('install', function (event) {
// //   console.log('[Service Worker] Installing Service Worker ...', event);
// //   event.waitUntil(
// //     caches.open(CACHE_STATIC_NAME)
// //       .then(function (cache) {
// //         console.log('[Service Worker] Precaching App Shell');
// //         cache.addAll(STATIC_FILES);
// //       }).catch(err => {
// //     console.error('Failed to cache assets:', err);
// //   })
// //   )
// // });
// self.addEventListener('install', function (event) {
//   console.log('[Service Worker] Installing Service Worker ...', event);
//   self.skipWaiting(); // Optional: activate immediately

//   event.waitUntil(
//     caches.open(CACHE_STATIC_NAME)
//       .then(function (cache) {
//         console.log('[Service Worker] Precaching App Shell');
//         return cache.addAll(STATIC_FILES); // ✅ Must return this!
//       })
//       .catch(err => {
//         console.error('Failed to cache assets:', err);
//       })
//   );
// });

// // self.addEventListener('activate', function (event) {
// //   console.log('[Service Worker] Activating Service Worker ....', event);
// //   event.waitUntil(
// //     caches.keys()
// //       .then(function (keyList) {
// //         return Promise.all(keyList.map(function (key) {
// //           if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
// //             console.log('[Service Worker] Removing old cache.', key);
// //             return caches.delete(key);
// //           }
// //         }));
// //       })
// //   );
// //   return self.clients.claim();
// // });
// self.addEventListener('activate', function (event) {
//   console.log('[Service Worker] Activating Service Worker ....', event);
  
//   event.waitUntil(
//     caches.keys()
//       .then(function (keyList) {
//         return Promise.all(
//           keyList.map(function (key) {
//             if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
//               console.log('[Service Worker] Removing old cache.', key);
//               return caches.delete(key);
//             }
//           })
//         );
//       })
//       .then(() => {
//         return self.clients.claim(); // ✅ Now safe inside promise chain
//       })
//   );
// });


// // self.addEventListener('fetch', function(event) {
// //   event.respondWith(
// //     fetch(event.request)
// //       .then(function(res) {
// //         return caches.open(CACHE_DYNAMIC_NAME)
// //                 .then(function(cache) {
// //                   cache.put(event.request.url, res.clone());
// //                   return res;
// //                 })
// //       })
// //       .catch(function(err) {
// //         return caches.match(event.request);
// //       })
// //   );
// // });

// // Cache-only
// // self.addEventListener('fetch', function (event) {
// //   event.respondWith(
// //     caches.match(event.request)
// //   );
// // });
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       if (response) {
//         return response;
//       }
//       return fetch(event.request); // or a custom offline fallback
//     }).catch(err => {
//       console.warn('Fetch failed:', err);
//       return caches.match('/offline.html'); // optional fallback
//     })
//   );
// });


// // Network-only
// // self.addEventListener('fetch', function (event) {
// //   event.respondWith(
// //     fetch(event.request)
// //   );
// // });
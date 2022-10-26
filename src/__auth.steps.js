/* 
AUTH SETUP
1. create firebase project
2. enable web
3. enable sign in method
4. install firebase
5. get firebase config in our firebase.config.js file
6. export app from firebasel.config.js
*/

/* 
1. create UserContext(Auth Context): UserContext --> component name, UserContext provides AuthContext
2. create AuthContext
3. set AuthContext.Provider
4. Make sure to set the children
5. export AuthContext to be used inside useContext hook
6. get form data
7. getAuth in the UserContext

*/

/* 
FIREBASE HOSTING
--------------------
//one time for each computer
1. npm install -g firebase-tools
2. firebase login

//for each project one time
3. firebase init
4. make sure: for public directory: we select build
5. single page applicaiton: y

//for every deploy
6. npm run build
7. firebase deploy
*/
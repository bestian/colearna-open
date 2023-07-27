import { boot } from 'quasar/wrappers'
import { initializeApp, setLogLevel } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getFirestore, collection } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
import { getAuth } from 'firebase/auth'
import { VueFire, VueFireAuth } from 'vuefire'

setLogLevel('silent')
// Get a Firestore instance
export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyA46RXYrOGComnQ-dCj6Tg0AV-ukF1gKik',
  authDomain: 'colearna-website-reboot.firebaseapp.com',
  projectId: 'colearna-website-reboot',
  storageBucket: 'colearna-website-reboot.appspot.com',
  messagingSenderId: '604289007690',
  appId: '1:604289007690:web:01e08f52ce7fd6e99326b3',
  measurementId: 'G-3EJ2NVQF2Y'
});

export const db = getDatabase(firebaseApp)
export const auth = getAuth(firebaseApp)
export const functions = getFunctions()

// used for the firestore refs
export const db2 = getFirestore(firebaseApp)
// here we can export reusable database references
export const mailRef = collection(db2, 'mail')

// 'async' is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {  //, router
  setLogLevel('silent')
  app.config.errorHandler = () => null;
  app.config.warnHandler = () => null;
  app
    .use(VueFire, {
      // imported above but could also just be created here
      firebaseApp,
      modules: [
        // we will see other modules later on
        VueFireAuth(),
      ],
    })
})

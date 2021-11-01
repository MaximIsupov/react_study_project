import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDa7d70sBBkko_8McnWyJ8GE5ycDu0ZY-0",
    authDomain: "my-awesome-project-123-255bc.firebaseapp.com",
    databaseUrl: 'https://my-awesome-project-123-255bc-default-rtdb.firebaseio.com/',
    projectId: "my-awesome-project-123-255bc",
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;
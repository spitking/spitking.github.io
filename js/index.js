import { collection, getDocs, } from "firebase/firestore";
import db from "./firebase";
console.log("Spit Kingz");
//const querySnapshot = await ;
getDocs(collection(db, "events")).then(function (events) {
    console.log("Events");
    console.log(events);
});
// const events = querySnapshot.docs.map((doc) => Event.fromCloud(doc));

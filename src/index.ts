import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  setDoc,
} from "firebase/firestore";
import db from "./firebase";
import Event from "./models/event";

console.log("Spit King");

//const querySnapshot = await ;
getDocs(collection(db, "events")).then((querySnapshot) => {
  console.log("querySnapshot");
  console.log(querySnapshot);
  const events = querySnapshot.docs.map((doc) => Event.fromCloud(doc));
  console.log("events");
  console.log(events);
  const people = events
    .map((event) => event.people)
    .reduce((total, current) => total + current, 0)
    .toLocaleString();
  const kilograms = Math.round(
    events
      .map((event) => event.kilograms)
      .reduce((total, current) => total + current, 0)
  ).toLocaleString();
  console.log(events.length);
  console.log(people);
  console.log(kilograms);
  const summary = document.getElementById("summary");
  if (summary) {
    summary.innerText = `The Spit King has cooked ${kilograms} kilograms of meat to perfection for ${people} people at ${events.length} events!`;
  }
});
// const events = querySnapshot.docs.map((doc) => Event.fromCloud(doc));

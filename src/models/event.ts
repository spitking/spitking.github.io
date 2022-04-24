import {
  DocumentData,
  QueryDocumentSnapshot,
  Timestamp,
} from "firebase/firestore";

class Event {
  readonly id: string;
  readonly name: string;
  readonly date: Date;
  readonly kilograms: number;
  readonly people: number;
  readonly postcode: number;

  constructor(
    id: string,
    name: string,
    date: Date,
    people: number,
    kilograms: number,
    postcode: number
  ) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.people = people;
    this.kilograms = kilograms;
    this.postcode = postcode;
  }

  static blank() {
    return new Event("", "", new Date(), 0, 0, 0);
  }

  static fromCloud(document: QueryDocumentSnapshot<DocumentData>) {
    const data = document.data();
    return new Event(
      document.id,
      data.name,
      (data.date as Timestamp).toDate(),
      data.people,
      data.kilograms,
      data.postcode
    );
  }
}

export default Event;

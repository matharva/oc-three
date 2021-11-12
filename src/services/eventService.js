import { refType } from "@mui/utils";
import firebase from "firebase";
import { eventDetails } from "../data";
import axios from "axios";

const userRef = firebase.firestore().collection("Users");
const eventRef = firebase.firestore().collection("Events");

async function getEvent(name) {
  // Get event and
  let item = [];
  let querySnapShot = await eventRef.where("Title", "==", name).get();
  querySnapShot.forEach((doc) => {
    // console.log('The user data is: ',doc.data())
    item.push(doc.data());
  });
  return item[0];
}

async function getUser(emailId) {
  let item = [];
  // return new Promise(resolve=>{

  let querySnapShot = await userRef.where("email", "==", emailId).get();
  // console.log('The data is: ',querySnapShot)
  querySnapShot.forEach((doc) => {
    // console.log('The user data is: ',doc.data())
    item.push(doc.data());
  });
  return item[0];
  // return 1;
}

async function createUser(emailId, phoneNumber, name, uid) {
  // console.log('The data is: ',emailId,phoneNumber,name);
  // userRef.add({
  //   college:"",
  //   email:emailId,
  //   name:name,
  //   phoneNumber:phoneNumber,
  // }).then(docRef=>{
  //   console.log("Document written with ID: ", docRef.id);
  // })
  let newUserRef = userRef.doc(uid);

  // let querySnapShot = await newUserRef.set({
  //   college:"",
  //   email:emailId,
  //   name:name,
  //   phoneNumber:phoneNumber,
  //   uid:newUserRef.id
  // })
  // console.log('The new user created in createUser: ',newUserRef.id);
  let data = {
    college: "",
    email: emailId,
    name: name,
    phoneNumber: phoneNumber,
    uid: newUserRef.id,
  };

  //  newUserRef.set(data).then(user=>{

  //  });
  await newUserRef.set(data);
  console.log("The new user creat createer: ", newUserRef.get());
  let currUser = await (await newUserRef.get()).data();
  console.log("Dard: ", currUser);
  // let item = [];
  return currUser;
}

async function setUserPhoneNumber(phoneNumber, currentUser) {
  let currUser = userRef.doc(currentUser.uid);
  await currUser.update({
    phoneNumber: phoneNumber,
  });

  currUser = await (await currUser.get()).data();

  console.log("Dard: ", currUser);

  return currUser;
}

async function addEvent() {
  // let newEventQueryRef = eventRef.doc();
  // console.log('Events is: ',eventDetails[1]);
  // let data = eventDetails[1];
  // await newEventQueryRef.set(data);
  // console.log('The new user creat createer: ',newEventQueryRef.get());
  // let newEvent = await (await newEventQueryRef.get()).data();
  // console.log('Dard: ',newEvent);
  // return newEvent;
}

async function postPayment(postData) {
  try {
    // let url = process.env.OCULUS_API + '/registrationDetails';
    let url = "https://oculus-2022.herokuapp.com/registrationDetails/";
    let data = await axios.post(url, postData);
    console.log("The post data is: ", data.data);
    return data.data;
  } catch (e) {
    console.log(`ERROR OCCURED IN PAYMENT API: ${e}`);
  }
}

async function joinUser(postData) {
  try {
    // let url = process.env.OCULUS_API + '/registrationDetails';
    let url = "https://oculus-2022.herokuapp.com/addToTeam/";
    let data = await axios.post(url, postData);
    console.log("The post data is: ", data.data);
    return data.data;
  } catch (e) {
    console.log(`ERROR OCCURED IN JOIN USER API: ${e}`);
  }
}

async function getUserRegistrationDetails(postData) {
  try {
    // let url = process.env.OCULUS_API + '/registrationDetails';
    let url = "https://oculus-2022.herokuapp.com/userRegistrationDetails/";
    let data = await axios.post(url, postData);
    console.log("The post data is: ", data.data);
    return data.data;
  } catch (e) {
    console.log(`ERROR OCCURED IN USER REGISTRATION API: ${e}`);
  }
}

export const eventService = {
  getEvent,
  getUser,
  createUser,
  setUserPhoneNumber,
  addEvent,
  postPayment,
  joinUser,
  getUserRegistrationDetails,
};

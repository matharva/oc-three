import firebase from "firebase";
import { eventDetails } from "../data";
import axios from "axios";
import randomString from "randomstring";

const userRef = firebase.firestore().collection("Users");
const eventRef = firebase.firestore().collection("Events");
const sponserRef = firebase.firestore().collection("Sponsers");

const API_URL = "http://localhost:8000";
// const API_URL = "https://oculus-2022.herokuapp.com"

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
    phoneNumber: phoneNumber || "",
    uid: newUserRef.id,
    inviteCode: randomString.generate(7),
    invited: 0,
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
  // for (let i = 0; i < eventDetails.length; i++) {
  //   let newEventQueryRef = eventRef.doc();
  //   console.log("Events is: ", eventDetails[i]);
  //   // let data = {
  //   //   Data: "14 Mar",
  //   //   Description: "",
  //   //   Title: "Model United Nations",
  //   //   Fee: [{ Fee: "60", Type: "Team(2)" }],
  //   //   Category: "Pre-Events",
  //   //   Prizes: "Rs. 10000",
  //   //   rules: [],
  //   //   faq: [],
  //   //   isSingle: false,
  //   //   max: 2,
  //   // };
  //   await newEventQueryRef.set(eventDetails[i]);
  //   console.log("The new user creat createer: ", newEventQueryRef.get());
  //   let newEvent = await (await newEventQueryRef.get()).data();
  //   console.log("Dard: ", newEvent);
  //   // return newEvent;
  // }
}

async function postPayment(postData) {
  try {
    // let url = process.env.REACT_APP_OCULUS_API + "/registrationDetails/";
    let url = process.env.REACT_APP_OCULUS_API + "/adminAddOfflineTeam/";
    console.log(url);
    // let url = "https://oculus-2022.herokuapp.com/registrationDetails/";
    let data = await axios.post(url, postData);
    console.log("The post data is: ", data.data);
    return data.data;
  } catch (e) {
    console.log(`ERROR OCCURED IN PAYMENT API: ${e}`);
  }
}

async function joinUser(postData) {
  try {
    let url = process.env.REACT_APP_OCULUS_API + "/adminUpdateTeamMembers/";
    console.log(url);
    // let url = "https://oculus-2022.herokuapp.com/addToTeam/";
    let data = await axios.post(url, postData);
    console.log("The post data is: ", data.data);
    return data.data;
  } catch (e) {
    console.log(`ERROR OCCURED IN JOIN USER API: ${e}`);
  }
}

async function getUserRegistrationDetails(postData) {
  try {
    let url = process.env.REACT_APP_OCULUS_API + "/userRegistrationDetails/";
    console.log(url);
    // let url = "https://oculus-2022.herokuapp.com/userRegistrationDetails/";
    let data = await axios.post(url, postData);
    console.log("The post data is: ", data.data);
    return data.data;
  } catch (e) {
    console.log(`ERROR OCCURED IN USER REGISTRATION API: ${e}`);
  }
}

async function getSponsers() {
  try {
    let item = [];
    let querySnapShot = await sponserRef.get();
    querySnapShot.forEach((doc) => {
      // console.log('The user data is: ',doc.data())
      item.push(doc.data());
    });
    return item[0].Sponsers;
  } catch (e) {
    console.log("The getSponser is: ", e);
  }
}

console.log("The code is: ", process.env.REACT_APP_OCULUS_API);
// console.log("The sponsers are: ", getSponsers());

export const eventService = {
  getEvent,
  getUser,
  createUser,
  setUserPhoneNumber,
  addEvent,
  postPayment,
  joinUser,
  getUserRegistrationDetails,
  getSponsers,
};

import { refType } from "@mui/utils";
import firebase from "firebase";

const userRef = firebase.firestore().collection('Users');
const eventRef = firebase.firestore().collection('Events');


async function getEvent(name) {
  // Get event and
  let item = [];
  let querySnapShot = await eventRef.where('Title','==',name).get();
  querySnapShot.forEach(doc=>{
    // console.log('The user data is: ',doc.data())
    item.push(doc.data());
  })
  return item[0];
}

async function getUser(emailId){
  let item = [];
  // return new Promise(resolve=>{

  let querySnapShot = await userRef.where('email','==',emailId).get();
  // console.log('The data is: ',querySnapShot)
  querySnapShot.forEach(doc=>{
    // console.log('The user data is: ',doc.data())
    item.push(doc.data());
  })
  return item[0];
  // return 1;
}

async function createUser(emailId,phoneNumber,name){
  // console.log('The data is: ',emailId,phoneNumber,name);
  // userRef.add({
  //   college:"",
  //   email:emailId,
  //   name:name,
  //   phoneNumber:phoneNumber,
  // }).then(docRef=>{
  //   console.log("Document written with ID: ", docRef.id);
  // })
  let newUserRef = userRef.doc();

  // let querySnapShot = await newUserRef.set({
  //   college:"",
  //   email:emailId,
  //   name:name,
  //   phoneNumber:phoneNumber,
  //   uid:newUserRef.id
  // })
  // console.log('The new user created in createUser: ',newUserRef.id);
  let data = {
    college:"",
    email:emailId,
    name:name,
    phoneNumber:phoneNumber,
    uid:newUserRef.id
  }

  //  newUserRef.set(data).then(user=>{

    //  });
    await newUserRef.set(data);
    console.log('The new user creat createer: ',newUserRef.get());
  let currUser = await (await newUserRef.get()).data();
  console.log('Dard: ',currUser);
  // let item = [];
  return currUser;
}


export const eventService = {
  getEvent,
  getUser,
  createUser
};

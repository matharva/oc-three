import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useHistory, useRouteMatch } from "react-router";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useAuth } from "../contexts/AppContext";
import { eventService } from "../services/eventService";
// Icons
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import "../styles/loginModal.scss";

const LoginContainer = ({ isOpen, setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(false);
  const history = useHistory();
  const { currentUser, setCurrentUser } = useAuth();
  const { url } = useRouteMatch();
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: async (data) => {
        console.log("Data from firebase: ", data);

        let user = await eventService.getUser(data.user.email);
        console.log("The user returned is: ", user);
        if (!user) {
          user = await eventService.createUser(
            data.user.email,
            data.user.phoneNumber,
            data.user.displayName,
            data.user.uid
          );
          console.log("The new user created is:", user);
        }

        localStorage.setItem(
          "oculus-auth",
          JSON.stringify({
            name: data.user.displayName,
            email: data.user.email,
            photo:
              "https://lh3.googleusercontent.com/a/AATXAJygoxwXt-1TfxCyFDFo5aDfky3OiPFnVSGJcVRp=s96-c",
            phoneNumber: user.phoneNumber,
            uid: user.uid,
          })
        );
        setCurrentUser({
          name: data.user.displayName,
          email: data.user.email,
          photo:
            "https://lh3.googleusercontent.com/a/AATXAJygoxwXt-1TfxCyFDFo5aDfky3OiPFnVSGJcVRp=s96-c",
          phoneNumber: user.phoneNumber,
          uid: user.uid,
        });
        setIsOpen(false);

        // user idhar se ghusao
        // window.location.assign(url);
        // Do not automatically redirect.
        return false;
      },
    },
  };

  const logout = () => {
    console.log("FIrebase user: ", firebase.auth().currentUser);
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        localStorage.setItem("oculus-auth", null);
        setCurrentUser(null);
        setIsOpen(false);

        console.log("The user is signed out");
        history.push("/");
      })
      .catch(function (error) {
        // An error happened.
        console.log("An error occured during this process: ", error);
      });
  };

  useEffect(() => {
    // firebase.auth().signOut().then(function() {
    //   // Sign-out successful.
    //   localStorage.setItem('oculus-auth',null);
    //   setCurrentUser(null);
    //   setIsOpen(false);

    //   console.log('The user is signed out');
    // }).catch(function(error) {
    //   // An error happened.
    //   console.log('An error occured during this process: ',error);
    // });

    if (window.innerWidth > 720) {
      setIsMobile(false);
    } else setIsMobile(true);
    const resizeListener = () => {
      if (window.innerWidth > 720) {
        setIsMobile(false);
      } else setIsMobile(true);
    };
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: 0,
      transform: "translate(-50%, -50%)",
      height: "60vh",
      width: `${!isMobile ? "50vw" : "90vw"}`,
    },
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="cross-child" onClick={() => setIsOpen(false)}>
          <PhoneIcon style={isMobile || true ? {} : { color: "white" }} />
        </div>
        {!currentUser ? (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        ) : (
          <div className="logout-div">
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default LoginContainer;

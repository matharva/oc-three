import React, { useEffect } from "react";
import { useHistory } from "react-router";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useAuth } from "../../../contexts/AppContext";
import { eventService } from "../../../services/eventService";
// Icons
import { PhoneIcon, AddIcon, WarningIcon, CloseIcon } from "@chakra-ui/icons";
import "../../../styles/loginModal.scss";
import { OC_BG_DARK } from "../../../services/helpers";
import Login from "../../../assets/login1.svg";
import Logout from "../../../assets/login3.svg";

import {
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Box,
} from "@chakra-ui/react";

const LoginContainer = () => {
  const history = useHistory();
  const { currentUser, setCurrentUser, onLoginModalClose } = useAuth();
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
              data.user.photoURL ||
              "https://lh3.googleusercontent.com/a/AATXAJygoxwXt-1TfxCyFDFo5aDfky3OiPFnVSGJcVRp=s96-c",
            phoneNumber: user.phoneNumber,
            uid: user.uid,
            inviteCode: user.inviteCode,
            invited: user.invited,
          })
        );
        setCurrentUser({
          name: data.user.displayName,
          email: data.user.email,
          photo:
            data.user.photoURL ||
            "https://lh3.googleusercontent.com/a/AATXAJygoxwXt-1TfxCyFDFo5aDfky3OiPFnVSGJcVRp=s96-c",
          phoneNumber: user.phoneNumber,
          uid: user.uid,
          inviteCode: user.inviteCode,
          invited: user.invited,
        });
        onLoginModalClose();

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
        onLoginModalClose();

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
  }, []);

  return (
    <Stack
      boxShadow={"2xl"}
      height={"100%"}
      p={10}
      spacing={8}
      align={"center"}
      justify={"center"}
    >
      {/* Login Image */}
      <Box style={{ width: "200px" }}>
        <Image
          w="100%"
          // src={!currentUser ? Login : Logout}
          src={Login}
          // src={`https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?size=338&ext=jpg`}
          alt="Segun Adebayo"
        />
      </Box>
      {!currentUser ? (
        <Stack align={"center"} spacing={2}>
          <Heading fontSize={"3xl"} color={"white"} textAlign={"center"}>
            Login before you proceed
          </Heading>
          <Text fontSize={"lg"} color={"gray.500"} textAlign={"center"}>
            It'll take just a second
          </Text>
        </Stack>
      ) : (
        <>
          <Stack align={"center"} spacing={2}>
            <Heading fontSize={"3xl"} color={"white"} textAlign={"center"}>
              Logout
            </Heading>
            <Text fontSize={"lg"} color={"gray.500"} textAlign={"center"}>
              ????????????????????????????????????
            </Text>
          </Stack>
        </>
      )}

      {/* Login Image */}

      {/* Google Login Button */}
      <Stack
        spacing={4}
        direction={{ base: "column", md: "row" }}
        w={"full"}
        display="flex"
        justifyContent="center"
      >
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
      </Stack>
    </Stack>
  );
};

export default LoginContainer;

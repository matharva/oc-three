import { useDisclosure } from "@chakra-ui/hooks";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { eventService } from "../services/eventService";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [modalContent, setModalContent] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isLoginModalOpen,
    onOpen: onLoginModalOpen,
    onClose: onLoginModalClose,
  } = useDisclosure();

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem("oculus-auth"));
    console.log("Current User", user);
    if (user) {
      let newUserData = await eventService.getUser(user.email);
      newUserData.photo = user.photo;
      localStorage.setItem(
        "oculus-auth",
        JSON.stringify({
          name: newUserData.name,
          email: newUserData.email,
          photo:
            newUserData.photo ||
            "https://lh3.googleusercontent.com/a/AATXAJygoxwXt-1TfxCyFDFo5aDfky3OiPFnVSGJcVRp=s96-c",
          phoneNumber: newUserData.phoneNumber,
          uid: newUserData.uid,
          inviteCode: newUserData.inviteCode,
          invited: newUserData.invited,
        })
      );
      console.log("lol", newUserData);
      setCurrentUser(newUserData);
    }
  }, []);

  const value = {
    jello: "jello",
    currentUser,
    setCurrentUser,
    isOpen,
    onOpen,
    onClose,
    setModalContent,
    isLoginModalOpen,
    onLoginModalOpen,
    onLoginModalClose,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

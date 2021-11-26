import { useDisclosure } from "@chakra-ui/hooks";
import React, { useContext, useState, useEffect } from "react";
import ModalContainer from "../components/registration/ModalContainer";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [modalContent, setModalContent] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("oculus-auth"));
    console.log("Current User", user);
    if (user) setCurrentUser(user);
  }, []);

  const value = {
    jello: "jello",
    currentUser,
    setCurrentUser,
    isOpen,
    onOpen,
    onClose,
    setModalContent,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* <ModalContainer modalContent={modalContent} /> */}
    </AuthContext.Provider>
  );
};

export default AuthContext;

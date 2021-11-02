import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useHistory, useRouteMatch } from "react-router";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useAuth } from "../contexts/AppContext";
// Icons
import CloseIcon from "@mui/icons-material/Close";

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
        setCurrentUser({
          name: data.user.displayName,
          email: data.user.email,
          photo: data.user.photoURL,
          phone: data.user.phoneNumber,
        });
        setIsOpen(false);

        localStorage.setItem(
          "oculus-auth",
          JSON.stringify({
            name: data.user.displayName,
            email: data.user.email,
            photo: data.user.photoURL,
            phone: data.user.phoneNumber,
          })
        );
        // user idhar se ghusao
        // window.location.assign(url);
        // Do not automatically redirect.
        return false;
      },
    },
  };

  useEffect(() => {
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
          <CloseIcon style={isMobile || true ? {} : { color: "white" }} />
        </div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </Modal>
    </div>
  );
};

export default LoginContainer;

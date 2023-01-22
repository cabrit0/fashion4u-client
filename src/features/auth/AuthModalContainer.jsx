import React from "react";
import SignupModal from "../auth/SignupModal";
import LoginModal from "./LoginModal";

const AuthModalContainer = ({ modalVisible, setModalVisible, authType }) => {
  return (
    <>
      {authType === "signup" && (
        <SignupModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      {authType === "login" && (
        <LoginModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </>
  );
};

export default AuthModalContainer;

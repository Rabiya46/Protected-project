import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userData } = useSelector((state) => state.signIn);
  const { username, lastName, image, gender, id, firstName, email } = userData;

  return (
    <StContainer key={id}>
      <StContent>
        <h1>First Name: {firstName}</h1>
        <img src={image} alt="Profile" />
        <h2>Last Name: {lastName}</h2>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Gender: {gender}</p>
      </StContent>
    </StContainer>
  );
};

export default Profile;

const StContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
});

const StContent = styled("div")({
  width: "400px",
  textAlign: "center",
  backgroundColor: "white",
  borderRadius: "1rem",
  padding: "1rem",
  transition: "0.2s",
  "&:hover": {
    boxShadow: "0px 10px 20px 5px rgba(27, 71, 154, 0.927)",
    transform: "translateY(-5px)",
  },
});

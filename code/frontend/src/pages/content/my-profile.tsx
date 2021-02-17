import React from "react";
import {useUser} from "../../context/userContext";
import "./my-profile.css";

export const MyProfile: React.FC = () => {
  const {
    login,
    firstName,
    lastName,
    city,
    street,
    postCode,
    email,
    phoneNumber,
    position,
    terminationDate,
    birthDate,
    pesel,
    salary,
    sex,
    startDate,
    status,
  } = useUser();

  return (
    <>
      <h1>{login}</h1>
      <div className="myProfileContainer">
        <div className="box ">
          <div>
            Name: {firstName} {lastName}
          </div>
          <div>City: {city}</div>
          <div>Street: {street} </div>
          <div>Post Code: {postCode}</div>
          <div>Birth Date: {birthDate}</div>
          <div>Email: {email} </div>
          <div>Phone Number: {phoneNumber} </div>
          <div>Pesel: {pesel} </div>
          <div>Gender: {sex === "m" ? "male" : "female"} </div>
        </div>
        <div className="box ">
          <div>Position: {position} </div>
          <div>Status: {status} </div>
          <div>Start Date: {startDate} </div>
          <div>Termination Date: {terminationDate} </div>
          <div>Salary: {salary} </div>
        </div>
      </div>
    </>
  );
};

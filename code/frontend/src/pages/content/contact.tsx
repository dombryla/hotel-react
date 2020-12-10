import React from "react";
import "./contact.css";

export const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h1 className="logo logo__big">Good Hotel</h1>
      <div>
        <p>Adama Zielińskiego 35</p>
        <p>St. 32-059 Kraków POLAND</p>
        <p>Tel.No. +48 12 345 67 89</p>
      </div>
      <div>
        <h3>Reception</h3>
        <p>Tel.No. +48 12 345 67 89 </p>
        <p>Email: reception@goodhotel.com</p>
      </div>
      <div>
        <h3>Group Booking Department</h3>
        <p>Tel.No. +48 12 345 67 89 </p>
        <p>Email: busines@goodhotel.com</p>
      </div>
    </div>
  );
};

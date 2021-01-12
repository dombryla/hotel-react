import React from "react";

import "./input-select.css";

const positions = [
  {value: "Front Office Manager", status: "director"},
  {value: "Receptionist", status: "manager"},
  {value: "Bellboy", status: "manager"},
  {value: "Executive Housekeeper", status: "director"},
  {value: "Housekeeper", status: "manager"},
  {value: "Restaurant Manager", status: "director"},
  {value: "Chef", status: "director"},
  {value: "Cooks", status: "manager"},
  {value: "Waiter", status: "manager"},
  {value: "Bar Manager", status: "director"},
  {value: "Barman", status: "manager"},
  {value: "Barist", status: "manager"},
  {value: "Technical Manager", status: "director"},
  {value: "Conservator", status: "manager"},
  {value: "Accountant", status: "manager"},
  {value: "Event Planner", status: "manager"},
  {value: "Concierge", status: "manager"},
  {value: "Meeting Coordinator", status: "manager"},
  {value: "BOSS!!!", status: "/hire/new-director"},
];

interface InputSelectProps {
  name: string;
  title: string;
  status: string;
  reference: any;
}

export const InputSelect: React.FC<InputSelectProps> = ({
  name,
  title,
  status,
  reference,
}) => {
  const options = positions
    .filter((option) => option.status === status)
    .map((option) => (
      <option key={option.value} value={option.value}>
        {option.value}
      </option>
    ));

  return (
    <div className="inputSelectFormContainer">
      <label htmlFor={name}>{title}</label>
      <select name={name} ref={reference} className="inputFormSelect">
        {options}
      </select>
    </div>
  );
};

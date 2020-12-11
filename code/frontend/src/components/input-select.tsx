import React from "react";
import {useLocation} from "react-router-dom";

const positions = [
  {value: "Front Office Manager", path: "/hire/new-manager"},
  {value: "Receptionist", path: "/hire/new-worker"},
  {value: "Bellboy", status: "/hire/new-worker"},
  {value: "Executive Housekeeper", path: "/hire/new-manager"},
  {value: "Housekeeper", path: "/hire/new-worker"},
  {value: "Restaurant Manager", path: "/hire/new-manager"},
  {value: "Chef", path: "/hire/new-manager"},
  {value: "Cooks", path: "/hire/new-worker"},
  {value: "Waiter", path: "/hire/new-worker"},
  {value: "Bar Manager", path: "/hire/new-manager"},
  {value: "Barman", path: "/hire/new-worker"},
  {value: "Barist", path: "/hire/new-worker"},
  {value: "Technical Manager", path: "/hire/new-manager"},
  {value: "Conservator", path: "/hire/new-worker"},
  {value: "Accountant", path: "/hire/new-worker"},
  {value: "Event Planner", path: "/hire/new-worker"},
  {value: "Concierge", path: "/hire/new-worker"},
  {value: "Meeting Coordinator", path: "/hire/new-worker"},
  {value: "BOSS!!!", path: "/hire/new-director"},
];

interface InputSelectProps {
  name: string;
  title: string;
  reference: any;
}

export const InputSelect: React.FC<InputSelectProps> = ({
  name,
  title,
  reference,
}) => {
  const {pathname} = useLocation();

  const options = positions
    .filter((option) => option.path === pathname)
    .map((option) => (
      <option key={option.value} value={option.value}>
        {option.value}
      </option>
    ));

  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <select name={name} ref={reference}>
        {options}
      </select>
    </div>
  );
};

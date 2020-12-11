import React from "react";
import {useLocation} from "react-router-dom";

const positions = [
  {value: "Front Office Manager", status: "/hire/new-manager"},
  {value: "Receptionist", status: "/hire/new-worker"},
  {value: "Bellboy", status: "/hire/new-worker"},
  {value: "Executive Housekeeper", status: "/hire/new-manager"},
  {value: "Housekeeper", status: "/hire/new-worker"},
  {value: "Restaurant Manager", status: "/hire/new-manager"},
  {value: "Chef", status: "/hire/new-manager"},
  {value: "Cooks", status: "/hire/new-worker"},
  {value: "Waiter", status: "/hire/new-worker"},
  {value: "Bar Manager", status: "/hire/new-manager"},
  {value: "Barman", status: "/hire/new-worker"},
  {value: "Barist", status: "/hire/new-worker"},
  {value: "Technical Manager", status: "/hire/new-manager"},
  {value: "Conservator", status: "/hire/new-worker"},
  {value: "Accountant", status: "/hire/new-worker"},
  {value: "Event Planner", status: "/hire/new-worker"},
  {value: "Concierge", status: "/hire/new-worker"},
  {value: "Meeting Coordinator", status: "/hire/new-worker"},
  {value: "BOSS!!!", status: "/hire/new-director"},
];

export const InputSelectPosition: React.FC = () => {
  return <div>siema</div>;
};

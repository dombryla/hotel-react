import React from "react";
import {useForm} from "react-hook-form";
import {useLocation} from "react-router-dom";
import {InputForm} from "../../components/input-form";
import {MsgRed} from "../../components/msg-red";

import "./new-manager.css";

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

type UserProps = {
  login: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  sex: string;
  birthdate: string;
  phoneNumber: string;
  street: string;
  postCode: string;
  city: string;
  pesel: string;
  salary: number;
};

export const NewManager: React.FC = () => {
  const {pathname} = useLocation();

  const {register, handleSubmit, errors} = useForm<UserProps>({
    mode: "all",
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="newManagerForm">
        <div className="formColumn">
          <InputForm
            title="Login"
            name="login"
            reference={register({required: true, minLength: 5})}
            error={errors.login ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <InputForm
            title="Password"
            name="password"
            type="password"
            reference={register({required: true})}
            error={errors.password ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <InputForm
            title="Email"
            name="email"
            reference={register({required: true})}
            error={errors.email ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <InputForm
            title="First name"
            name="firstName"
            reference={register({required: true})}
            error={errors.firstName ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <InputForm
            title="Last name"
            name="lastName"
            reference={register({required: true})}
            error={errors.lastName ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <label>
            Sex
            <label>
              Female
              <input
                name="sex"
                type="radio"
                value="Female"
                ref={register({required: true})}
              />
            </label>
            <label>
              Male
              <input
                name="sex"
                type="radio"
                value=" Male"
                ref={register({required: true})}
              />
            </label>
            {errors.sex && <MsgRed>This is required</MsgRed>}
          </label>
          <label>
            Birthday
            <input
              type="date"
              name="birthdate"
              ref={register({required: true})}
            />
            {errors.birthdate && <MsgRed>This is required</MsgRed>}
          </label>
          <InputForm
            title="Phone number"
            type="number"
            name="phoneNumber"
            reference={register({required: true})}
            error={errors.phoneNumber ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <InputForm
            title="Street"
            name="street"
            reference={register({required: true})}
            error={errors.street ? true : false}
            errorMessage="This field is required"
          ></InputForm>
        </div>
        <div className="formColumn">
          <InputForm
            title="Post code"
            name="postCode"
            reference={register({required: true})}
            error={errors.postCode ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <InputForm
            title="City"
            name="city"
            reference={register({required: true})}
            error={errors.city ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <InputForm
            title="PESEL"
            type="number"
            name="pesel"
            reference={register({required: true})}
            error={errors.pesel ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <InputForm
            title="Salary"
            type="number"
            name="salary"
            reference={register({required: true})}
            error={errors.phoneNumber ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

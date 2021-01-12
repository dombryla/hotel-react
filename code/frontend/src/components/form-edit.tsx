import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useUser} from "../context/userContext";

import {useForm} from "react-hook-form";
import {InputForm} from "./input-form";
import {InputSelect} from "./input-select";
import {InputData} from "./input-data";
import {MsgRed} from "./msg-red";
import {Button} from "./button";

import {
  addWorker,
  getEditWorkerData,
  editWorker,
} from "../workerBackendFrontend";

import "./form-hire.css";

export type UserProps = {
  directorId?: number;
  managerId?: number;
  employeeId?: number;
  login: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  sex: string;
  birthDate: string;
  phoneNumber: string;
  street: string;
  postCode: string;
  city: string;
  pesel: string;
  salary: number;
  position: string;
  startDate: string;
  terminationDate: string;
  employer?: number;
  status?: string;
};

export const FormEdit: React.FC = () => {
  const user = useUser();
  const status = user.status;
  const [worker, setWorker] = useState<UserProps>();
  const {pathname} = useLocation();

  useEffect(() => {
    getEditWorkerData({status, pathname}).then((data) => {
      setWorker(data[0]);
    });
  }, [status, pathname]);
  const employer = user.directorId ? user.directorId : user.managerId;

  const {register, handleSubmit, errors} = useForm<UserProps>({
    mode: "all",
  });

  const onSubmit = (data: UserProps) => {
    data.status = status;
    editWorker({data, pathname});
  };

  if (worker === undefined) {
    return <div>pusto</div>;
  }
  const {
    login,
    password,
    email,
    firstName,
    lastName,
    sex,
    birthDate,
    phoneNumber,
    street,
    postCode,
    city,
    pesel,
    salary,
    position,
    startDate,
    terminationDate,
  } = worker;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="newWorkerForm">
        <div className="formColumn">
          <InputForm
            defaultValue={login}
            title="Login"
            name="login"
            reference={register({required: true, minLength: 5})}
            error={errors.login ? true : false}
            errorMessage="Login must be at least 5 chars long."
          ></InputForm>
          <InputForm
            title="Password"
            name="password"
            type="password"
            reference={register({
              pattern: /(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[1-9]{1,})[\w!@#$%^&*łążźćśńóŁĄŻŹĆŃÓ()+]{5,16}/,
              required: true,
            })}
            error={errors.password ? true : false}
            errorMessage="Password includes a lower, upper case and a number."
          ></InputForm>
          <InputForm
            defaultValue={email}
            title="Email"
            name="email"
            reference={register({
              pattern: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/,
            })}
            error={errors.email ? true : false}
            errorMessage="Please enter the valid email."
          ></InputForm>
          <InputForm
            defaultValue={firstName}
            title="First name"
            name="firstName"
            reference={register({required: true})}
            error={errors.firstName ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <InputForm
            defaultValue={lastName}
            title="Last name"
            name="lastName"
            reference={register({required: true})}
            error={errors.lastName ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <label className="inputRadioForm">
            <div className="inputRadioForm__Label">Sex</div>
            <div className="inputRadioForm__CheckboxArea">
              <div className="inputRadioForm__Position">
                <label className="inputRadioCheckbox">
                  <div>Female</div>
                  <div>
                    <input
                      name="sex"
                      type="radio"
                      value="f"
                      ref={register({required: true})}
                    />
                  </div>
                </label>
                <label className="inputRadioCheckbox">
                  <div>Male</div>
                  <div>
                    <input
                      name="sex"
                      type="radio"
                      value="m"
                      ref={register({required: true})}
                    />
                  </div>
                </label>
              </div>
              <div>{errors.sex && <MsgRed>This field is required</MsgRed>}</div>
            </div>
          </label>
          <InputData
            defaultValue={birthDate}
            title="Birth Date"
            name="birthDate"
            reference={register({required: true})}
            error={errors.birthDate ? true : false}
            errorMessage="This field is required"
          ></InputData>
          <InputForm
            defaultValue={phoneNumber}
            title="Phone number"
            type="number"
            name="phoneNumber"
            reference={register({required: true, minLength: 9, maxLength: 9})}
            error={errors.phoneNumber ? true : false}
            errorMessage="Phone number consist 9 digits."
          ></InputForm>
          <InputForm
            defaultValue={street}
            title="Street"
            name="street"
            reference={register({required: true})}
            error={errors.street ? true : false}
            errorMessage="This field is required"
          ></InputForm>
        </div>
        <div className="formColumn">
          <InputForm
            defaultValue={postCode}
            title="Post code"
            name="postCode"
            reference={register({pattern: /^[0-9]{2}-[0-9]{3}$/})}
            error={errors.postCode ? true : false}
            errorMessage="Please enter valid post code."
          ></InputForm>
          <InputForm
            defaultValue={city}
            title="City"
            name="city"
            reference={register({required: true})}
            error={errors.city ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <InputForm
            defaultValue={pesel}
            title="PESEL"
            type="number"
            name="pesel"
            reference={register({required: true, minLength: 11, maxLength: 11})}
            error={errors.pesel ? true : false}
            errorMessage="PESEL consist of 11 digits."
          ></InputForm>
          <InputForm
            defaultValue={salary}
            title="Salary"
            type="number"
            name="salary"
            reference={register({required: true})}
            error={errors.salary ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <InputSelect
            title="Position"
            name="position"
            status={status}
            reference={register({required: true})}
          ></InputSelect>
          <InputData
            defaultValue={startDate}
            title="Start Date"
            name="startDate"
            reference={register({required: true})}
            error={errors.startDate ? true : false}
            errorMessage="This field is required"
          ></InputData>
          <InputData
            defaultValue={terminationDate}
            title="Termination Date"
            name="terminationDate"
            reference={register({required: true})}
            error={errors.terminationDate ? true : false}
            errorMessage="This field is required"
          ></InputData>
          <Button>Submit</Button>
        </div>
      </form>
    </>
  );
};

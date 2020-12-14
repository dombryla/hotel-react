import React from "react";
import {useForm} from "react-hook-form";
import {InputForm} from "./input-form";
import {InputSelect} from "./input-select";
import {InputData} from "./input-data";
import {MsgRed} from "./msg-red";
import {Button} from "./button";

import "./form-hire.css";

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
  startDate: string;
  terminationDate: string;
};

export const NewManager: React.FC = () => {
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
          <label className="inputRadioForm">
            <div className="inputRadioForm__Label">Sex</div>
            <div className="inputRadioFom__CheckboxArea">
              <div className="mama">
                <label className="inputRadioCheckbox">
                  <div>Female</div>
                  <div>
                    <input
                      name="sex"
                      type="radio"
                      value="Female"
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
                      value="Male"
                      ref={register({required: true})}
                    />
                  </div>
                </label>
              </div>
              <div>{errors.sex && <MsgRed>This field is required</MsgRed>}</div>
            </div>
          </label>
          <InputData
            title="Birth Date"
            name="birthdate"
            reference={register({required: true})}
            error={errors.birthdate ? true : false}
            errorMessage="This field is required"
          ></InputData>
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
            error={errors.salary ? true : false}
            errorMessage="This field is required"
          ></InputForm>
          <InputSelect
            title="Position"
            name="position"
            reference={register({required: true})}
          ></InputSelect>
          <InputData
            title="Start Date"
            name="startDate"
            reference={register({required: true})}
            error={errors.startDate ? true : false}
            errorMessage="This field is required"
          ></InputData>
          <InputData
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

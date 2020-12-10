import React from "react";
import {InputForm} from "../../components/input-form";
import {useForm} from "react-hook-form";

type UserProps = {
  login: string;
  password: string;
  firstname: string;
};

export const NewManager: React.FC = () => {
  const {register, handleSubmit, errors} = useForm<UserProps>();
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          name="login"
          reference={register({required: true, minLength: 5})}
          error={errors.login ? true : false}
          errorMessage="This field is required"
        ></InputForm>
        <InputForm
          name="password"
          type="password"
          reference={register({required: true})}
          error={errors.password ? true : false}
          errorMessage="This field is required"
        ></InputForm>

        <input type="submit" />
      </form>
    </>
  );
};

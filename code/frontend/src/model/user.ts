export type User = {
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
  status: Position;
};

type Position = "director" | "manager" | "employee";

export const getEmployerId = (user: User): number | undefined => {
  return user.directorId ? user.directorId : user.managerId;
}

export const setEmployer = (user: User, employer: number): User => {
  return {
    ...user,
    employer,
  };
};

const {
  addDirector,
  addManager,
  addWorker,
  editDetailsManager,
  editDetailsWorker,
  deleteManager,
  deleteWorker,
  selectManagerToEdit,
  selectWorkerToEdit,
  getManagersList,
  getWorkersList,
} = require("./service");
const { renderHirePageAuthentication } = require("./authentication");

module.exports = {
  hirePage: (req, res) => {
    let employer = req.session.user.status;
    let status = req.params.status;
    renderHirePageAuthentication(req, res, employer, status);
  },
  hire: (req, res) => {
    let msg = "User has been successfully added!!!";
    let login = req.body.login;
    let password = req.body.password;
    let salary = req.body.salary;
    let position = req.body.position;
    let startDate = req.body.startDate;
    let terminationDate = req.body.terminationDate;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let sex = req.body.sex;
    let birthDate = req.body.birthDate;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;
    let street = req.body.street;
    let postCode = req.body.postCode;
    let city = req.body.city;
    let pesel = req.body.pesel;
    let status = "";
    let employer = req.body.employer;
    switch (req.params.status) {
      case "new-director":
        {
          status = "director";
          addDirector(
            res,
            login,
            password,
            salary,
            position,
            startDate,
            terminationDate,
            firstName,
            lastName,
            sex,
            birthDate,
            email,
            phoneNumber,
            street,
            postCode,
            city,
            pesel,
            status
          );
          // .then(res.redirect("/"));
        }
        break;
      case "new-manager":
        {
          status = "manager";

          addManager(
            res,
            login,
            password,
            salary,
            position,
            startDate,
            terminationDate,
            firstName,
            lastName,
            sex,
            birthDate,
            email,
            phoneNumber,
            street,
            postCode,
            city,
            pesel,
            status,
            employer
          );
          //   .then(res.redirect("/"));
        }
        break;
      case "new-worker":
        {
          status = "worker";
          addWorker(
            res,
            login,
            password,
            salary,
            position,
            startDate,
            terminationDate,
            firstName,
            lastName,
            sex,
            birthDate,
            email,
            phoneNumber,
            street,
            postCode,
            city,
            pesel,
            status,
            employer
          );
          // .then(res.redirect("/"));
        }
        break;
    }
  },
  editPage: (req, res) => {
    let employee = req.params.id;
    if (req.headers.status == "director") {
      selectManagerToEdit(employee).then((result) => res.json(result));
    } else if (req.headers.status == "manager") {
      selectWorkerToEdit(employee).then((result) => res.json(result));
    } else {
      res.status(500).send(err);
    }
  },
  editDetailsOfemployee: (req, res) => {
    let employee = req.params.id;
    let password = req.body.password;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let sex = req.body.sex;
    let birthDate = req.body.birthDate;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;
    let street = req.body.street;
    let postCode = req.body.postCode;
    let city = req.body.city;
    let pesel = req.body.pesel;
    let salary = req.body.salary;
    let position = req.body.position;
    let startDate = req.body.startDate;
    let terminationDate = req.body.terminationDate;
    if (req.body.status == "director") {
      editDetailsManager(
        req,
        res,
        employee,
        password,
        firstName,
        lastName,
        sex,
        birthDate,
        email,
        phoneNumber,
        street,
        postCode,
        city,
        pesel,
        salary,
        position,
        startDate,
        terminationDate
      );
      // .then(res.redirect("/list/managers"));
    } else if (req.body.status == "manager") {
      editDetailsWorker(
        req,
        res,
        employee,
        password,
        firstName,
        lastName,
        sex,
        birthDate,
        email,
        phoneNumber,
        street,
        postCode,
        city,
        pesel,
        salary,
        position,
        startDate,
        terminationDate
      );
      // .then(res.redirect("/list/workers"));
    }
  },
  deleteEmployee: (req, res) => {
    let employee = req.params.id;
    if (req.headers.status == "director") {
      deleteManager(req, res, employee).then(
        res.json({ msg: "User has been deleted" })
      );
    } else if (req.headers.status == "manager") {
      deleteWorker(req, res, employee).then(
        res.json({ msg: "User has been deleted" })
      );
    }
  },
  staffList: (req, res) => {
    if (req.params.status === "managers" && req.headers.status === "director") {
      getManagersList()
        .then((result) => staffListRender(req, res, result))
        .catch((err) => res.status(500).send(err));
    } else if (
      req.params.status == "workers" &&
      req.headers.status == "manager"
    ) {
      let managerId = req.headers.employerid;
      getWorkersList(managerId)
        .then((result) => staffListRender(req, res, result))
        .catch((err) => res.status(500).send(err));
    } else {
      res.redirect("/");
    }
  },
};

function staffListRender(req, res, result) {
  // res.render("list-worker", {
  //   title: "Good Hotel | View Employees",
  //   employees: result
  // });
  return res.json(result);
}
function renderEditPage(req, res, result) {
  res.status(200).render("edit-worker.ejs", {
    title: result[0].firstName + " " + result[0].lastName,
    worker: result[0],
    message: "",
    errors: "",
  });
}

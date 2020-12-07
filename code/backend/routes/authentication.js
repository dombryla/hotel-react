const bcrypt = require("bcryptjs");

const SELECT_DIRECTOR_QUERY =
  'SELECT d.directorId, d.salary, d.position, date_format(d.startDate, "%D %M %Y") AS startDate, date_format(d.terminationDate, "%D %M %Y") AS terminationDate, l.login, l.password, l.status, c.firstName, c.lastName, c.sex, date_format(c.birthDate, "%D %M %Y") AS birthDate, c.email, c.phoneNumber, c.street, c.postCode, c.city, c.pesel FROM directors AS d, log_details AS l, contacts AS c WHERE d.contactId = c.contactId AND d.logdetailId = l.logdetailId AND l.login = "';
const SELECT_MANAGER_QUERY =
  'SELECT m.managerId, m.salary, m.position, date_format(m.startDate, "%D %M %Y") AS startDate, date_format(m.terminationDate, "%D %M %Y") AS terminationDate, l.login, l.password, l.status, c.firstName, c.lastName, c.sex, date_format(c.birthDate, "%D %M %Y") AS birthDate, c.email, c.phoneNumber, c.street, c.postCode, c.city, c.pesel FROM managers AS m, log_details AS l, contacts AS c WHERE m.contactId = c.contactId AND m.logdetailId = l.logdetailId AND l.login = "';
const SELECT_WORKER_QUERY =
  'SELECT e.employeeId, e.salary, e.position, date_format(e.startDate, "%D %M %Y") AS startDate, date_format(e.terminationDate, "%D %M %Y") AS terminationDate, l.login, l.password, l.status, c.firstName, c.lastName, c.sex, date_format(c.birthDate, "%D %M %Y") AS birthDate, c.email, c.phoneNumber, c.street, c.postCode, c.city, c.pesel FROM employees AS e, log_details AS l, contacts AS c WHERE e.contactId = c.contactId AND e.logdetailId = l.logdetailId AND l.login = "';

module.exports = {
  getLoginPage: (req, res) => {
    renderLoginPage(req, res, "");
  },
  login: (req, res) => {
    let login = req.headers.login;
    let password = req.headers.password;
    let user = "";
    let query = 'SELECT * FROM log_details WHERE login = "' + login + '"';
    db.query(query, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      user = result[0];
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            return res.status(500).send(err);
          }
          if (result == true) {
            switch (user.status) {
              case "director":
                {
                  renderHomePage(req, res, SELECT_DIRECTOR_QUERY, login);
                }
                break;
              case "manager":
                {
                  renderHomePage(req, res, SELECT_MANAGER_QUERY, login);
                }
                break;
              case "worker":
                {
                  renderHomePage(req, res, SELECT_WORKER_QUERY, login);
                }
                break;
            }
          } else {
            renderLoginPage(req, res, "Password is incorrect");
          }
        });
      } else {
        renderLoginPage(req, res, "Username is not exist");
      }
    });
  },
  logout: (req, res) => {
    req.session.destroy((err) => {
      console.log("LogOut");
    });
  },
  checkAuthenticated: (req, res, next) => {
    let userId = req.session.userId;

    // if (userId == null) {
    //   res.redirect("/login");
    //   return;
    // }
    // next();
  },
  checkNotAuthenticated: (req, res, next) => {
    let userId = req.session.userId;
    if (userId != null) {
      res.redirect("/");
      return;
    }
    next();
  },
  checkIfDirector: (req, res, next) => {
    let userStatus = req.session.user.status;
    if (userStatus != "director") {
      res.redirect("/");
      return;
    }
    next();
  },
  checkIfManager: (req, res, next) => {
    let userStatus = req.session.user.status;
    if (userStatus != "manager") {
      res.redirect("/");
      return;
    }
    next();
  },
  renderHirePageAuthentication: (req, res, employer, status) => {
    if (employer == "director" && status == "new-director") {
      renderHirePage(req, res);
    } else if (employer == "director" && status == "new-manager") {
      renderHirePage(req, res);
    } else if (employer == "manager" && status == "new-worker") {
      renderHirePage(req, res);
    } else {
      res.redirect("/");
    }
  },
};
function renderLoginPage(req, res, msg) {
  result = {
    gotAccess: false,
    user: msg,
  };
  return res.status(401).json(result);
}
function renderHomePage(req, res, SELECT_QUERY, login) {
  query = SELECT_QUERY + login + '"';
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    req.session.userId = result[0].login;
    req.session.user = result[0];
    result = {
      gotAccess: true,
      user: result[0],
    };
    return res.json(result);
  });
}
function renderHirePage(req, res) {
  res.render("add-worker.ejs", {
    title: "Good Hotel | Hire a new worker",
    message: "",
    errors: "",
    validated: "",
    checkLogin: "",
  });
}

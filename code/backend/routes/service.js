const bcrypt = require("bcryptjs");

const {
  INSERT_INTO_DIRECTORS,
  INSERT_INTO_MANAGERS,
  INSERT_INTO_EMPLOYMENT_MANAGER,
  SELECT_MANAGERS,
  SELECT_MANAGER,
  SELECT_DETAILS_TO_EDIT_MANAGER,
  DELETE_FROM_EMPLOYMENT_MANAGER,
  DELETE_FROM_MANAGERS,
} = require("./directors-queries");
const {
  INSERT_INTO_EMPLOYEES,
  INSERT_INTO_EMPLOYMENT_WORKER,
  SELECT_WORKERS,
  SELECT_WORKER,
  SELECT_DETAILS_TO_EDIT_WORKER,
  DELETE_FROM_EMPLOYMENT_WORKER,
  DELETE_FROM_EMPLOYEES,
} = require("./managers-queries");

const INSERT_INTO_LOG_DETAILS =
  'INSERT INTO `log_details` (login, password, status) values ("';
const INSERT_INTO_CONTACTS =
  'INSERT INTO `contacts` (firstName, lastName, sex, birthDate, email, phoneNumber, street, postCode, city, pesel) values ("';
const DELETE_FROM_CONTACTS = 'DELETE FROM `contacts` WHERE contactId = "';
const DETELE_FROM_LOG_DETAILS =
  'DELETE FROM `log_details` WHERE logDetailId = "';
const saltRounds = 10;

module.exports = {
  addDirector: (
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
  ) => {
    return new Promise((resolve, reject) => {
      bcrypt
        .hash(password, saltRounds)
        .then((hash) =>
          Promise.all([
            insertIntoLogDetails(INSERT_INTO_LOG_DETAILS, login, hash, status),
            insertIntoContacts(
              INSERT_INTO_CONTACTS,
              firstName,
              lastName,
              sex,
              birthDate,
              email,
              phoneNumber,
              street,
              postCode,
              city,
              pesel
            ),
          ])
        )
        .then((result) =>
          insertAccordingToStatus(
            INSERT_INTO_DIRECTORS,
            salary,
            position,
            startDate,
            terminationDate,
            result[0],
            result[1]
          )
        )
        .then(resolve())
        .catch((err) => res.status(500).send(err));
    });
  },
  addManager: (
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
  ) => {
    return new Promise((resolve, reject) => {
      bcrypt
        .hash(password, saltRounds)
        .then((hash) =>
          Promise.all([
            insertIntoLogDetails(INSERT_INTO_LOG_DETAILS, login, hash, status),
            insertIntoContacts(
              INSERT_INTO_CONTACTS,
              firstName,
              lastName,
              sex,
              birthDate,
              email,
              phoneNumber,
              street,
              postCode,
              city,
              pesel
            ),
          ])
        )
        .then((result) =>
          insertAccordingToStatus(
            INSERT_INTO_MANAGERS,
            salary,
            position,
            startDate,
            terminationDate,
            result[0],
            result[1]
          )
        )
        .then((worker) =>
          insertEmployment(INSERT_INTO_EMPLOYMENT_MANAGER, employer, worker)
        )
        .then((msg) => res.send({msg: "ok"}))
        .catch((err) => res.status(500).send(err));
    });
  },
  addWorker: (
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
  ) => {
    return new Promise((resolve, reject) => {
      bcrypt
        .hash(password, saltRounds)
        .then((hash) =>
          Promise.all([
            insertIntoLogDetails(INSERT_INTO_LOG_DETAILS, login, hash, status),
            insertIntoContacts(
              INSERT_INTO_CONTACTS,
              firstName,
              lastName,
              sex,
              birthDate,
              email,
              phoneNumber,
              street,
              postCode,
              city,
              pesel
            ),
          ])
        )
        .then((result) =>
          insertAccordingToStatus(
            INSERT_INTO_EMPLOYEES,
            salary,
            position,
            startDate,
            terminationDate,
            result[0],
            result[1]
          )
        )
        .then((worker) =>
          insertEmployment(INSERT_INTO_EMPLOYMENT_WORKER, employer, worker)
        )
        .then((msg) => res.send({msg: "ok"}))
        .catch((err) => res.status(500).send(err));
    });
  },
  selectManagerToEdit: (employee) => {
    return new Promise((resolve, reject) => {
      resolve(selectEmployeeToEdit(SELECT_MANAGER, employee));
    });
  },
  selectWorkerToEdit: (employee) => {
    return new Promise((resolve, reject) => {
      resolve(selectEmployeeToEdit(SELECT_WORKER, employee));
    });
  },
  editDetailsManager: (
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
  ) => {
    return new Promise((resolve, reject) => {
      Promise.all([
        selectDetails(SELECT_DETAILS_TO_EDIT_MANAGER, employee),
        bcrypt.hash(password, saltRounds),
      ])
        .then((result) =>
          Promise.all([
            updateLogDetails(result[1], result[0].logDetailId),
            updateContacts(
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
              result[0].contactId
            ),
            updateManagers(
              salary,
              position,
              startDate,
              terminationDate,
              employee
            ),
          ])
        )
        .then(resolve())
        .catch((err) => res.status(500).send(err));
    });
  },
  editDetailsWorker: (
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
  ) => {
    return new Promise((resolve, reject) => {
      Promise.all([
        selectDetails(SELECT_DETAILS_TO_EDIT_WORKER, employee),
        bcrypt.hash(password, saltRounds),
      ])
        .then((result) =>
          Promise.all([
            updateLogDetails(result[1], result[0].logDetailId),
            updateContacts(
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
              result[0].contactId
            ),
            updateWorkers(
              salary,
              position,
              startDate,
              terminationDate,
              employee
            ),
          ])
        )
        .then(resolve())
        .catch((err) => res.status(500).send(err));
    });
  },
  deleteManager: (req, res, employee) => {
    return new Promise((resolve, reject) => {
      selectDetails(SELECT_DETAILS_TO_EDIT_MANAGER, employee)
        .then((result) =>
          Promise.all([
            changeEmploymentWorker(employee),
            removeFromDB(DELETE_FROM_EMPLOYMENT_MANAGER, employee),
            removeFromDB(DELETE_FROM_MANAGERS, employee),
            removeFromDB(DELETE_FROM_CONTACTS, result.contactId),
            removeFromDB(DETELE_FROM_LOG_DETAILS, result.logDetailId),
          ])
        )
        .then((msg) => res.send({status: "ok"}))
        .catch((err) => res.status(500).send(err));
    });
  },
  deleteWorker: (req, res, employee) => {
    return new Promise((resolve, reject) => {
      selectDetails(SELECT_DETAILS_TO_EDIT_WORKER, employee)
        .then((result) =>
          Promise.all([
            removeFromDB(DELETE_FROM_EMPLOYMENT_WORKER, employee),
            removeFromDB(DELETE_FROM_EMPLOYEES, employee),
            removeFromDB(DELETE_FROM_CONTACTS, result.contactId),
            removeFromDB(DETELE_FROM_LOG_DETAILS, result.logDetailId),
          ])
        )
        .then((msg) => res.send({status: "ok"}))
        .catch((err) => res.status(500).send(err));
    });
  },
  getManagersList: () => {
    return new Promise((resolve, reject) => {
      resolve(getStaffList(SELECT_MANAGERS));
    });
  },
  getWorkersList: (managerId) => {
    return new Promise((resolve, reject) => {
      query = SELECT_WORKERS + managerId + '"';
      resolve(getStaffList(query));
    });
  },
};

function selectEmployeeToEdit(QUERY, employee) {
  return new Promise((resolve, reject) => {
    let query = QUERY + employee + '"';
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

function removeFromDB(QUERY, Id) {
  return new Promise((resolve, reject) => {
    query = QUERY + Id + '"';
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

function insertEmployment(INSERT_EMPLOYMENT_QUERY, employer, worker) {
  return new Promise((resolve, reject) => {
    query = INSERT_EMPLOYMENT_QUERY + employer + '", "' + worker + '")';
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
function insertAccordingToStatus(
  INSERT_ACCORDING_TO_STATUS_QUERY,
  salary,
  position,
  startDate,
  terminationDate,
  logDetailId,
  contactId
) {
  return new Promise((resolve, reject) => {
    if (INSERT_ACCORDING_TO_STATUS_QUERY != "") {
      query =
        INSERT_ACCORDING_TO_STATUS_QUERY +
        salary +
        '", "' +
        position +
        '", "' +
        startDate +
        '", "' +
        terminationDate +
        '", "' +
        contactId +
        '", "' +
        logDetailId +
        '")';
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result.insertId);
      });
    } else {
      resolve();
    }
  });
}
function insertIntoContacts(
  INSERT_QUERY,
  firstName,
  lastName,
  sex,
  birthDate,
  email,
  phoneNumber,
  street,
  postCode,
  city,
  pesel
) {
  return new Promise((resolve, reject) => {
    query =
      INSERT_QUERY +
      firstName +
      '", "' +
      lastName +
      '", "' +
      sex +
      '", "' +
      birthDate +
      '", "' +
      email +
      '", "' +
      phoneNumber +
      '", "' +
      street +
      ' ", "' +
      postCode +
      '", "' +
      city +
      '", "' +
      pesel +
      '")';
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result.insertId);
    });
  });
}
function insertIntoLogDetails(INSERT_QUERY, login, hash, status) {
  return new Promise((resolve, reject) => {
    query = INSERT_QUERY + login + '", "' + hash + '", "' + status + '")';
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result.insertId);
    });
  });
}

function getStaffList(query) {
  return new Promise((resolve, reject) => {
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}
function updateLogDetails(hash, logDetailId) {
  return new Promise((resolve, reject) => {
    query =
      'UPDATE `log_details` SET password = "' +
      hash +
      '" WHERE logDetailId = "' +
      logDetailId +
      '"';
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result.insertId);
    });
  });
}
function updateContacts(
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
  contactId
) {
  return new Promise((resolve, reject) => {
    query =
      'UPDATE `contacts` SET firstName="' +
      firstName +
      '", lastName = "' +
      lastName +
      '", sex="' +
      sex +
      '", birthDate = "' +
      birthDate +
      '", email = "' +
      email +
      '", phoneNumber = "' +
      phoneNumber +
      '", street ="' +
      street +
      '", postCode ="' +
      postCode +
      '", city = "' +
      city +
      '", pesel = "' +
      pesel +
      '" WHERE contactId = "' +
      contactId +
      '"';
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result.insertId);
    });
  });
}
function updateManagers(
  salary,
  position,
  startDate,
  terminationDate,
  employee
) {
  return new Promise((resolve, reject) => {
    query =
      'UPDATE `managers` SET salary = "' +
      salary +
      '", position = "' +
      position +
      '", startDate = "' +
      startDate +
      '", terminationDate = "' +
      terminationDate +
      '" WHERE managerId = "' +
      employee +
      '"';
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
function updateWorkers(salary, position, startDate, terminationDate, employee) {
  return new Promise((resolve, reject) => {
    query =
      'UPDATE `employees` SET salary = "' +
      salary +
      '", position = "' +
      position +
      '", startDate = "' +
      startDate +
      '", terminationDate = "' +
      terminationDate +
      '" WHERE employeeId = "' +
      employee +
      '"';
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

function selectDetails(QUERY, employee) {
  return new Promise((resolve, reject) => {
    query = QUERY + employee + '"';
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve({
        contactId: result[0].contactId,
        logDetailId: result[0].logDetailId,
      });
    });
  });
}
function changeEmploymentWorker(employee) {
  return new Promise((resolve, reject) => {
    query =
      "SELECT managerId, COUNT(managerId) as amountOfWorker FROM employment_worker GROUP BY managerId ORDER BY COUNT(managerId) LIMIT 2";
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else if (result[0].managerId == employee) {
        query =
          'update employment_worker set managerId = "' +
          result[1].managerId +
          '" where managerId = "' +
          employee +
          '"';
      } else {
        query =
          'update employment_worker set managerId = "' +
          result[0].managerId +
          '" where managerId = "' +
          employee +
          '"';
      }
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  });
}

module.exports = {
  INSERT_INTO_EMPLOYEES:
    'INSERT INTO `employees` (salary, position, startDate, terminationDate, contactId, logDetailId) values("',
  INSERT_INTO_EMPLOYMENT_WORKER:
    'INSERT INTO employment_worker (managerId, employeeId) VALUES ("',
  SELECT_WORKERS:
    'SELECT e.employeeId, e.salary, e.position, date_format(e.startDate, "%D %M %Y") as startDate, date_format(e.terminationDate, "%D %M %Y") as terminationDate, l.login, l.password, l.status, c.firstName, c.lastName, c.sex, date_format(c.BirthDate, "%D %M %Y") as BirthDate, c.email, c.phoneNumber, c.street, c.postCode, c.city, c.pesel FROM employees AS e, log_details AS l, contacts AS c , employment_worker AS ew WHERE e.contactId = c.contactId AND e.logdetailId = l.logdetailId AND ew.employeeId = e.employeeId AND ew.managerId = "',
  SELECT_WORKER:
    'SELECT c.contactId, c.firstName, c.lastName, c.sex, date_format(c.BirthDate, "%Y-%m-%d") as birthDate, c.email, c.phoneNumber, c.street, c.postCode, c.city, c.pesel, e.employeeId, e.salary, e.position, date_format(e.startDate, "%Y-%m-%d") as startDate, date_format(e.terminationDate, "%Y-%m-%d") as terminationDate, l.logDetailId, l.login, l.password, l.status FROM contacts AS c, employees AS e , log_details AS l WHERE c.contactId = e.contactId AND l.logDetailId = e.logDetailId AND e.employeeId ="',
  SELECT_DETAILS_TO_EDIT_WORKER:
    'SELECT l.logDetailId, c.contactId FROM employees AS e, log_details AS l, contacts AS c WHERE e.contactId = c.contactId AND e.logdetailId = l.logDetailId AND employeeId = "',
  DELETE_FROM_EMPLOYMENT_WORKER:
    'DELETE FROM `employment_worker` WHERE employeeId ="',
  DELETE_FROM_EMPLOYEES: 'DELETE FROM `employees` WHERE employeeId = "'
};

module.exports = {
  INSERT_INTO_DIRECTORS:
    'INSERT INTO `directors` (salary, position, startDate, terminationDate, contactId, logDetailId) values("',
  INSERT_INTO_MANAGERS:
    'INSERT INTO `managers` (salary, position, startDate, terminationDate, contactId, logDetailId) values("',
  INSERT_INTO_EMPLOYMENT_MANAGER:
    'INSERT INTO employment_manager (directorId, managerId) VALUES ("',
  SELECT_MANAGERS:
    'SELECT m.managerId, m.salary, m.position, date_format(m.startDate, "%D %M %Y") as startDate, date_format(m.terminationDate, "%D %M %Y") as terminationDate, l.login, l.password, l.status, c.firstName, c.lastName, c.sex, date_format(c.BirthDate, "%D %M %Y") as BirthDate, c.email, c.phoneNumber, c.street, c.postCode, c.city, c.pesel FROM managers AS m, log_details AS l, contacts AS c WHERE m.contactId = c.contactId AND m.logdetailId = l.logdetailId',
  SELECT_MANAGER:
    'SELECT c.contactId, c.firstName, c.lastName, c.sex, date_format(c.BirthDate, "%Y-%m-%d") as birthDate, c.email, c.phoneNumber, c.street, c.postCode, c.city, c.pesel, m.managerId, m.salary, m.position, date_format(m.startDate, "%Y-%m-%d") as startDate, date_format(m.terminationDate, "%Y-%m-%d") as terminationDate, l.logDetailId, l.login, l.password, l.status FROM contacts AS c, managers AS m , log_details AS l WHERE c.contactId = m.contactId AND l.logDetailId = m.logDetailId AND m.managerId = "',
  SELECT_DETAILS_TO_EDIT_MANAGER:
    'SELECT l.logDetailId, c.contactId FROM managers AS m, log_details AS l, contacts AS c WHERE m.contactId = c.contactId AND m.logdetailId = l.logDetailId AND managerId = "',
  DELETE_FROM_EMPLOYMENT_MANAGER:
    'DELETE FROM `employment_manager` WHERE managerId ="',
  DELETE_FROM_MANAGERS: 'DELETE FROM `managers` WHERE managerId = "'
};

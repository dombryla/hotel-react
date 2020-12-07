const {check, validationResult} = require('express-validator');

module.exports = {
    validate: [
        // check('Login').isLength({min:5, max:30}).withMessage('Login must be at least 5 chars long.'),
        // check('Password').matches(/(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[1-9]{1,})[\w!@#$%^&*łążźćśńóŁĄŻŹĆŃÓ()_\+]{5,16}/).withMessage('Password must be 5-16 characters and include a lower, upper case and a number.'),

        check('login').isLength({min:1, max:30}).withMessage('Login must be at least 5 chars long.'),
        check('password').isLength({min:1}).withMessage('Password must be 5-16 characters and include a lower, upper case and a number.'),



        check('firstName').isLength({min:1, max:30}).withMessage("Name is required."),
        check('lastName').isLength({min:1, max:30}).withMessage("Surname is required."),
        check('sex').isLength({min:1}).withMessage('Sex is required.'),
        check('birthDate').isLength({min:10}).withMessage('This field is required.'),
        check('email').isEmail().withMessage('Please enter the valid email.'),
        check('phoneNumber').isLength({min:9, max:9}).withMessage('Phone number consist 9 digits.'),
        check('street').isLength({min:1, max:30}).withMessage('Street is required.'),
        check('postCode').matches(/^[0-9]{2}-[0-9]{3}$/).withMessage('Please enter valid post code.'),
        check('city').isLength({min:1, max:30}).withMessage('City is required.'),
        check('pesel').isLength({min:11, max:11}).withMessage('PESEL consist of 11 digits.'),
        check('salary').isLength({min:1, max:8}).withMessage('You can not earn more then 10000000.'),
        check('position').matches(/^[A-Z].{1,}/).withMessage('Choose a position.'),
        check('startDate').isLength({min:10}).withMessage('This field is required.'),
        check('terminationDate').isLength({min:10}).withMessage('This field is required.')
        ],

    checkValidationHire: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).render('add-worker', {
            title: "Good Hotel | Employee details",
            validated: req.body,
            errors: errors.mapped(),
            checkLogin: ""
        });
        }
        next();
    },
    checkValidationUpdate: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).render('edit-worker', {
            title: "Good Hotel | Employee details",
            worker: req.body,
            errors: errors.mapped() 
        });
        }
        next();
    },
    checkLoginExist: (req, res, next) => {
        let login = req.body.login;
        let userName = ''
        let query = 'SELECT * FROM log_details WHERE login = "'+login+'"';
        db.query(query, (err, result) => {
            if(err){
                return res.status(500).send(err)
            }
            userName = result[0]
            if(userName){
                return res.status(400).render('add-worker', {
                    title: "Good Hotel | Employee details",
                    validated: req.body,
                    errors: "",
                    checkLogin: "Username has already exist"
                })
            }else{
                next()
            }
        })
    }
}
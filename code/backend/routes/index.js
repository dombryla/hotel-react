module.exports = {
    getHomePage: (req, res) => {
        switch(req.session.user.status){
            case "director":{
                res.render('home.ejs', {
                    title: req.session.user.firstName+ " "+ req.session.user.lastName,
                    message:""                                        
                })
                break;
            }case "manager":{
                res.render('home-manager',{
                    title: req.session.user.firstName+ " "+ req.session.user.lastName,
                    message:""
                })
                break;
            }case "worker":{
                res.render('home-worker',{
                    title: req.session.user.firstName+ " "+ req.session.user.lastName,
                    message:""
                })
                break;
            }
        }
    }
};
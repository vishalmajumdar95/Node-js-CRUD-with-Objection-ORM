var express = require('express');
const router = express.Router();
const UserService = require("../service/user");
const service = new UserService();

// Get Homepage
router.get('/homepage', (req, res) => {
    console.log({ "success": "Welcome on the home page" });
    res.send({ "message": "Welcome on the home page" })
});

// Post The User For Signup
router.post('/signup', async(req, res) => {
    console.log(req.body);
    await service.create(req.body).then((data) => {
        console.log("Signup successfully....");
        console.log("User", data);
        res.send({ "message": "Signup successfully...." });
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
});

// Get The User
router.get('/getalluser', (req, res) => {
    service.findAll().then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })

});

// Get The All User
router.get('/getuser/:id', (req, res) => {
    service.findById(req.params.id).then((data) => {
        console.log({ "success": data })
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
});

//Put The User With The update
router.put('/user_update/:id', async(req, res) => {
    const user = req.params.id;
    service.updateById(user, req.body).then((data) => {
        if (data > 0) {
            res.send({ "success": `Id ${user} details updated` });
        } else {
            res.send({ "message": "Sorry user not found" })
        }
    }).catch((err) => {
        res.send(err)
    })
});

// Delete The User
router.delete('/user_delete/:id', (req, res) => {
    const userId = req.params.id;
    service.deleteById(userId).then((data) => {
        if (data > 0) {
            res.send({ 'success': `Id ${req.params.id} deleted successfully` });
        } else {
            res.send({ "message": "Sorry user not found" })
        }
    }).catch((err) => {
        res.send(err)
    })
});

// Post the User for login
router.post('/login', async(req, res) => {
    const userdata = await service.emailChecking(req.body.email);
    if (userdata) {
        const passCheck = await service.PassChecking(userdata, req.body.password);
        if (passCheck) {
            console.log({ "Message": "Login successfully" })
            res.send({ "Message": "Login successfully" });
        } else {
            res.send({ "sorry": "wrong password! " });
        }
    } else {
        res.send({ "sorry": "This email not exist!" });
    }
})
module.exports = router;
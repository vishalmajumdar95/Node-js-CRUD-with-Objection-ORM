const Users = require("../model/user");
const bcrypt = require("bcrypt");

module.exports = class UserService {
    // Create Service
    async create(details) {
        const pass = await bcrypt.hash(details.password, 5)
        details['password'] = pass
        return await Users.query().insert(details);
    };

    // Find Service
    async findAll(txn) {
        const users = await Users.query(txn)
        console.log(users, "txn users")
        return users
    };

    //Find All Service
    async findById(userid) {
        const userId = await Users.query().findById(userid);
        if (userId === undefined) {
            return ({ "Sorry": "User id not found" })
        }
        return userId;
    };

    //Update User Service
    async updateById(id, update) {
        const upd = await Users.query().findById(id).patch(update);
        return upd
    };

    //Delete User Service
    async deleteById(usersId) {
        const del = await Users.query().deleteById(usersId);
        console.log(usersId, "userId")
        return del
    };

    //Email Checker Service
    async emailChecking(email) {
        const userDetails = await Users.query().findOne({
            email: email
        })
        return userDetails;
    };

    //Password Checker Service
    async PassChecking(userInfo, Pass) {
        return await bcrypt.compare(Pass, userInfo.password)
    }
};
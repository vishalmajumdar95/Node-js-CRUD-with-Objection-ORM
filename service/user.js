const Users = require("../model/user");

const bcrypt = require("bcrypt");

module.exports = class UserService {
    async create(details) {
        const pass = await bcrypt.hash(details.password, 5)
        details['password'] = pass
        return await Users.query().insert(details);
    }

    async findAll(txn) {
        const users = await Users.query(txn)
        console.log(users, "txn users")
        return users
    }

    async findById(userid) {
        const userId = await Users.query().findById(userid);
        if (userId === undefined) {
            return ({ "Sorry": "User id not found" })
        }
        return userId;
    }

    async updateById(id, update) {
        const upd = await Users.query().findById(id).patch(update);
        return upd

    }

    async deleteById(usersId) {
        const del = await Users.query().deleteById(usersId);
        console.log(usersId, "userId")
        return del
    }

    async emailChecking(email) {
        const userDetails = await Users.query().findOne({
            email: email
        })
        return userDetails;
    }

    async PassChecking(userInfo, Pass) {
        return await bcrypt.compare(Pass, userInfo.password)
    }
};
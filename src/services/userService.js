const User = require('../models/userModel');

class UserService {
    async createUser(data) {
        const user = new User(data);
        return user.save();
    }

    async getUserById(id) {
        return User.findById(id);
    }

    async updateUser(id, data) {
        return User.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteUser(id) {
        return User.findByIdAndDelete(id);
    }

    async getAllUsers() {
        return User.find();
    }
}

module.exports = new UserService();

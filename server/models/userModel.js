/** @format */

mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		trim: true,
		unique: [true, 'username already taken'],
		required: [true, 'A user must have a username '],
	},

	role: {
		type: String,
		enum: ['competitor', 'coach', 'volunteer', 'admin'],
		default: 'volunteer',
	},

	password: {
		type: String,
		trim: true,
		required: [true, 'A user must have a password '],
		select: false,
		minlength: 8,
	},

	passwordConfirm: {
		type: String,
		trim: true,
		required: [true, 'Please confirm your password '],
		select: false,
		validate: {
			// This only works on .save()
			validator: function (el) {
				return el === this.password;
			},
			message: 'Passwords are not the same!',
		},
	},

	email: {
		type: String,
		trim: true,
		required: [true, 'A user must have an email '],
		lowercase: true,
		validate: [validator.isEmail],
		unique: [true, 'email already used'],
	},

	school: String,

	coursework: {
		major: [{ type: String }],
		minor: [{ type: String }],
	},

	categories: {
		biology: {
			type: Boolean,
			default: 0,
		},
		chemistry: {
			type: Boolean,
			default: 0,
		},
		earthSpace: {
			type: Boolean,
			default: 0,
		},
		energy: {
			type: Boolean,
			default: 0,
		},
		mathematics: {
			type: Boolean,
			default: 0,
		},
		physics: {
			type: Boolean,
			default: 0,
		},
	},

	passwordChangedAt: Date,
});

userSchema.pre('save', async function (next) {
	// Only runs if the password is created or modified
	if (!this.isModified('password')) return next();

	// Hash the password with cost of 12
	this.password = await bcrypt.hash(this.password, 12);

	// Delete the password confirm field.
	this.passwordConfirm = undefined;
	next();
});

userSchema.methods.correctPassword = async function (
	candidatePassword,
	userPassword
) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
	if (this.passwordChangedAt) {
		const changedTimestamp = parseInt(
			this.passwordChangedAt.getTime() / 1000,
			10
		);
		return JWTTimestamp < changedTimestamp;
	}
	return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;

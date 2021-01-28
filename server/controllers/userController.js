/** @format */

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../models/userModel');
const { Mongoose } = require('mongoose');

// Retrieve all the docs
exports.listAll = catchAsync(async (req, res) => {
	const users = await User.find();

	// Send response
	res.status(200).json({
		status: 'success',
		results: users.length,
		data: { users },
	});
});

/* Show the current user */
exports.getUser = catchAsync(async (req, res) => {
	const user = await User.findById(req.user._id);

	//console.log(user);

	if (!user) {
		return next(new AppError('Username:' + id + ' not found.', 404));
	} else {
		res.status(200).json({
			status: 'success',
			data: user,
		});
	}
});

exports.updateUser = catchAsync(async (req, res, next) => {
	let id = req.params.id;
	const user = await User.findOneAndUpdate(id, req.body, {
		new: true,
		runValidators: true,
	});
	if (!user) {
		return next(new AppError('Username:' + id + ' not found.', 404));
	} else {
		res.status(200).json({
			status: 'success',
			data: user,
		});
	}
});

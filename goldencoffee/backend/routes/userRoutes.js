import express from 'express'
import bcrypt from 'bcrypt'
import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import { isAuth, generateToken } from '../utils.js'
// import nodemailer from 'nodemailer'
// import sendgridTransport from 'nodemailer-sendgrid-transport'


// JEG KAN IKKE FÅ MAIL TIL AT VIRKE - DERFOR UDKOMMENTERET
// const transporter = nodemailer.createTransport(sendgridTransport({
// 	auth:{
// 		api_user: "eP6YsZdwQXaLlW6ADTzrlQ",
// 		api_key:"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"
// 	}
// }))

const userRouter = express.Router()

userRouter.post(
	'/signin',
	expressAsyncHandler(async (req, res) => {
		const user = await User.findOne({ email: req.body.email })
		if (user) {
			if (bcrypt.compareSync(req.body.password, user.password,10)) {
				res.send({
					_id: user._id,
					name: user.name,
					email: user.email,
					isAdmin: user.isAdmin,
					token: generateToken(user),
				})
				return
			}
		}
		res.status(401).send({ message: 'Invalid email or password' })
	})
)

userRouter.post(
	'/signup',
	expressAsyncHandler(async (req, res) => {
		const newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password,10),
		})
		const user = await newUser.save()

		// user=>{
		// 	transporter.sendMail({
		// 		to:user.email,
		// 		from:"no-reply@goldencoffee.com",
		// 		subject: 'Welcome to Golden Coffee',
		// 		html:"<h1>Welcome my friend!</h1>"
		// 	})
		// 	// .catch(err=>
		// 	// 	console.log(err))
		// }

		res.send({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user),
		})
	})
)


userRouter.put(
	'/profile',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.user._id)
		if (user) {
			user.name = req.body.name || user.name
			user.email = req.body.email || user.email
			if (req.body.password) {
				user.password = bcrypt.hashSync(req.body.password, 8)
			}

			const updatedUser = await user.save()
			res.send({
				_id: updatedUser._id,
				name: updatedUser.name,
				email: updatedUser.email,
				isAdmin: updatedUser.isAdmin,
				token: generateToken(updatedUser),
			})
		} else {
			res.status(404).send({message: 'User not found'})
		}
	})
)

export default userRouter

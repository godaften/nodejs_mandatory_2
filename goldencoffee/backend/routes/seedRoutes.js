import express from 'express'
import Product from '../models/productModel.js'
import data from '../data.js'
import User from '../models/userModel.js'

const seedRouter = express.Router()

seedRouter.get('/', async (req, res) => {
	//await Product.remove({})
	await Product.deleteMany({})
	const createdProducts = await Product.insertMany(data.products)
	//await User.remove({})
	await User.deleteMany({})
	const createdUsers = await User.insertMany(data.users)
	res.send({ createdProducts, createdUsers })
})
export default seedRouter

// localhost:5000/api/seed
// deletes all data in collection
// inserts data from data.js

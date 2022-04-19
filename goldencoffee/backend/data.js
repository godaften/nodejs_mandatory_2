import bcrypt from 'bcrypt'

const data = {
	users: [
		{
			name: 'admin',
			email: 'admin@goldencoffee.com',
			password: bcrypt.hashSync('123456',10), 
			isAdmin: true,
		},	
		// {
		// 	name: 'John',
		// 	email: 'user@goldencoffee.com',
		// 	password: bcrypt.hashSync('123456',5),
		// 	isAdmin: false,
		// },
		// {
		// 	name: 'Jens',
		// 	email: 'jens@goldencoffee.com',
		// 	password: bcrypt.hashSync('123456',10),
		// 	isAdmin: false,
		// },
	],

	products: [
		{
			//	_id: '1',
			name: 'Light Roasted',
			slug: 'light-roasted',
			category: 'Coffee Variants',
			image: '/images/light-roasted-1.jpg', // Perhaps resize image with 1:1 ratio
			price: 100,
			brand: 'Golden Coffee',
			description: 'Light roasted coffee beans',
		},
		{
			//	_id: '2',
			name: 'Medium Roasted',
			slug: 'medium-roasted',
			category: 'Coffee Variants',
			image: '/images/medium-roasted-1.jpg',
			price: 100,
			brand: 'Golden Coffee',
			description: 'Medium roasted coffee beans',
		},
		{
			//	_id: '3',
			name: 'Dark Roasted',
			slug: 'dark-roasted',
			category: 'Coffee Variants',
			image: '/images/dark-roasted-1.jpg',
			price: 100,
			brand: 'Golden Coffee',
			description: 'Dark roasted coffee beans',
		},
		{
			//	_id: '4',
			name: 'Espresso',
			slug: 'espresso',
			category: 'Coffee Variants',
			image: '/images/dark-roasted-1.jpg',
			price: 100,
			brand: 'Golden Coffee',
			description: 'Dark roasted coffee beans for espresso',
		},
	],
}

export default data

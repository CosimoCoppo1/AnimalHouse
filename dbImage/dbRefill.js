const express = require('express');
const app     = express();
const Pet     = require('../models/pet')
const Section = require('../models/section')
const Product = require('../models/product')
const Service  = require('../models/service')
const Location = require('../models/location')
const Bookable = require('../models/bookable_service')
const Question = require('../models/question')
const Curiosity = require('../models/curiosity')
const User    = require('../models/user')
const Post    = require('../models/postModel')
const Score   = require('../models/gamescore')
const UserPet = require('../models/userPet')
const Reservation = require('../models/reservation')
const fs      = require('fs').promises;
const path    = require('path');

let dbPopulate = async function()
{
	await Pet.deleteMany();
	await Section.deleteMany();
	await Product.deleteMany();
	await Location.deleteMany();
	await Service.deleteMany();
	await Bookable.deleteMany();
	await User.deleteMany();
	await Post.deleteMany();
	await Question.deleteMany();
	await Curiosity.deleteMany();
	await Score.deleteMany();
	await UserPet.deleteMany();
	await Reservation.deleteMany();

	/* https://mongoosejs.com/docs/api.html#model_Model-syncIndexes */
	await Pet.syncIndexes();
	await Section.syncIndexes();
	await Product.syncIndexes();
	await Location.syncIndexes();
	await Service.syncIndexes();
	await Bookable.syncIndexes();
	await User.syncIndexes();
	await Post.syncIndexes();
	await Question.syncIndexes();
	await Curiosity.syncIndexes();
	await Score.syncIndexes();
	await UserPet.syncIndexes();
	await Reservation.syncIndexes();

	let petsMap = {};
	petsMap = await petPopulate();

	let sectionsMap = {};
	sectionsMap = await sectionsPopulate(petsMap);

	await productsPopulate(petsMap, sectionsMap);

	let locationsMap = {};
	locationsMap = await locationsPopulate();
	
	let servicesMap = {};
	servicesMap = await servicesPopulate(petsMap);

	let bookableServicesMap = {};
	bookableServicesMap = await BookableServicePopulate(petsMap, locationsMap, servicesMap);

	let userMap = {};
	userMap = await userPopulate();
	await postPopulate(userMap);
	await questionPopulate();
	await curiosityPopulate();
	await gamescorePopulate(userMap);
	await userPetPopulate(userMap, petsMap);

	await reservationPopulate(userMap, bookableServicesMap);
}

async function petPopulate()
{
	let petsMap = {};
	let pets = await fs.readFile(
		path.join(global.rootDir, 'dbImage/pets.json')
		, 'utf8');

	pets = JSON.parse(pets);

	for (let i = 0; i < pets.length; i++) {
		const p = new Pet(pets[i]);
		const pnew = await p.save();

		petsMap[pnew.name] = pnew._id;
	}

	return petsMap;
}

async function sectionsPopulate(petsMap)
{
	let sectionsMap = {};
	let sections = await fs.readFile(
		path.join(global.rootDir, 'dbImage/sections.json'),
		'utf8');

	sections = JSON.parse(sections);

	for (let i = 0; i < sections.length; i++) {
		let petName = sections[i].pet;
		sections[i].pet = petsMap[sections[i].pet];

		const s = new Section(sections[i]);
		const snew = await s.save();

		sectionsMap[`${petName}-${snew.name}`] = snew._id;
	}

	return sectionsMap;
}

async function productsPopulate(petsMap, sectionsMap)
{
	let products = await fs.readFile(
		path.join(global.rootDir, 'dbImage/products.json')
		,'utf8');

	products = JSON.parse(products);

	for (let i = 0; i < products.length; i++) {
		products[i].section = sectionsMap[`${products[i].pet}-${products[i].section}`];
		products[i].pet = petsMap[products[i].pet];

		const p = new Product(products[i]);
		await p.save();
	}
}

async function locationsPopulate()
{
	let locationsMap = {};
	let locations = await fs.readFile(
		path.join(global.rootDir, 'dbImage/locations.json'), 
		'utf8');

	locations = JSON.parse(locations);

	for (let i = 0; i < locations.length; i++) {
	
		const l = new Location(locations[i]);
		const lnew = await l.save();

		locationsMap[`${lnew.city}-${lnew.address}`] = lnew._id;
	}

	return locationsMap;
}

async function servicesPopulate(petsMap)
{
	let servicesMap = {};
	let services = await fs.readFile(
		path.join(global.rootDir, 'dbImage/services.json'), 
		'utf8');
	
	services = JSON.parse(services);

	for (let i = 0; i < services.length; i++) {
		const petName = services[i].pet;
		services[i].pet = petsMap[petName];
		const s = new Service(services[i]);
		const snew = await s.save();

		servicesMap[`${snew.name}-${petName}`] = snew._id;
	}

	return servicesMap;
}

async function BookableServicePopulate(petsMap, locationsMap, servicesMap)
{
	let bookableServicesMap = {};
	let bookable_services = await fs.readFile(
		path.join(global.rootDir, 'dbImage/bookable_services.json'), 
		'utf8');

	bookable_services = JSON.parse(bookable_services);

	for (let i = 0; i < bookable_services.length; i++) {

		let key = `${bookable_services[i].pet}-${bookable_services[i].location}-${bookable_services[i].service}-${bookable_services[i].day}`;
	
		bookable_services[i].pet = petsMap[bookable_services[i].pet];
		bookable_services[i].location = locationsMap[bookable_services[i].location];
		bookable_services[i].service = servicesMap[bookable_services[i].service];

		const b = new Bookable(bookable_services[i]);
		const bnew = await b.save();

		bookableServicesMap[key] = bnew._id;
	}

	return bookableServicesMap;
}

async function userPopulate()
{
	let userMap = {};
	let users = await fs.readFile(
		path.join(global.rootDir, 'dbImage/users.json'), 
		'utf8');

	users = JSON.parse(users);

	for (let i = 0; i < users.length; i++) {
		const u = new User(users[i]);
		await u.save();

		userMap[u.email] = u._id;
	}

	return userMap;
}


async function postPopulate(userMap)
{
	let posts = await fs.readFile(
		path.join(global.rootDir, 'dbImage/posts.json'), 
		'utf8');

	posts = JSON.parse(posts);

	for (let i = 0; i < posts.length; i++) {
		posts[i].user = userMap[posts[i].user];
		const p = new Post(posts[i]);
		await p.save();
	}
}

async function questionPopulate()
{
	let questions = await fs.readFile(
		path.join(global.rootDir, 'dbImage/questions.json'), 
		'utf8');

	questions = JSON.parse(questions);

	for (let i = 0; i < questions.length; i++) {
		const q = new Question(questions[i]);
		await q.save();
	}
}

async function curiosityPopulate()
{
	let curiosities = await fs.readFile(
		path.join(global.rootDir, 'dbImage/curiosities.json'), 
		'utf8');

	curiosities = JSON.parse(curiosities);

	for (let i = 0; i < curiosities.length; i++) {
		const c = new Curiosity(curiosities[i]);
		await c.save();
	}
}

async function gamescorePopulate(userMap)
{
	let scores = await fs.readFile(
		path.join(global.rootDir, 'dbImage/gamescores.json'), 
		'utf8');

	scores = JSON.parse(scores);

	for (let i = 0; i < scores.length; i++) {
		scores[i].user = userMap[scores[i].user];
		const s = new Score(scores[i]);
		await s.save();
	}
}

async function userPetPopulate(userMap, petMap)
{
	let userPets = await fs.readFile(
		path.join(global.rootDir, 'dbImage/userPets.json'), 
		'utf8');

	userPets = JSON.parse(userPets);

	for (let i = 0; i < userPets.length; i++) {
		userPets[i].user = userMap[userPets[i].user];
		userPets[i].pet  = petMap[userPets[i].pet];
		const up = new UserPet(userPets[i]);
		await up.save();
	}
}

async function reservationPopulate(userMap, bookableServicesMap)
{
	let reservations = await fs.readFile(
		path.join(global.rootDir, 'dbImage/reservations.json'), 
		'utf8');

	reservations = JSON.parse(reservations);

	for (let i = 0; i < reservations.length; i++) {
		reservations[i].user = userMap[reservations[i].user];
		reservations[i].bookable_service = bookableServicesMap[reservations[i].bookable_service];
		const r = new Reservation(reservations[i]);
		await r.save();
	}
}

module.exports = {
	'dbPopulate': dbPopulate
};

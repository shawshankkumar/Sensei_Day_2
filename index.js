const fs = require('fs');
const express = require('express');
const app = express();
console.log('hello world, welcome to sensei!');
const readline = require('readline');
const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// setTimeout(() => {
// 	console.log('Hello World!');
// }, 1000); //ms

// console.log('hello friend');

// let data = fs.readFileSync('readMe.txt', 'utf-8');
// console.log(data);
// fs.writeFileSync('writeMe.txt', data);

// fs.readFile('readMe.txt', 'utf-8', (error, data) => {
// 	console.log('File read');
// 	fs.writeFile('writeMe.txt', data, (error) => {
// 		console.log('File written');
// 	});
// });

// console.log('printed');

// read.question('Enter your name: ', (name) => {
// 	let data1 = fs.readFileSync('temp1.txt', 'utf-8');
// 	let data2 = fs.readFileSync('temp2.txt', 'utf-8');
// 	console.log(data1 + ' ' + name + data2);
// 	let finaldata = data1 + ' ' + name + data2;
// 	fs.writeFileSync('welcome.txt', finaldata);
// 	read.close();
// });

app.get('/', (request, response) => {
	response.send('Welcome to Sensei, I hope you are having fun');
});

app.get('/sensei', (request, response) => {
	response.send('Welcome to Sensei!This is the Sensei Route');
});

app.get('/welcome', (request, response) => {
	fs.readFile('welcome.txt', 'utf-8', (error, data) => {
		response.send(data);
	});
});

app.get('*', (request, response) => {
	//Default route comes at last
	response.send(
		'Error 404. Wait a minute who and where are you? go back to the home page'
	);
});

app.listen(3000, () => {
	console.log('Who dareth awaken the server?');
});

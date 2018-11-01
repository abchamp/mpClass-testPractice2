var express = require('express');
var router = express.Router();

const f = require('util').format;
const assert = require('assert');

const user = encodeURIComponent('test');
const password = encodeURIComponent('test1234');
const authMechanism = 'DEFAULT';
var dbName = "react-mobile"

var MongoClient = require('mongodb').MongoClient;
// moogose
const dbUrl = f("mongodb://%s:%s@ds113693.mlab.com:13693/%s", user, password, dbName);

var ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res) {
    MongoClient.connect(dbUrl, function(err, client) {
		// assert.equal(null, err);
		// console.log("Connected successfully to server");
	  
		const db = client.db(dbName).collection('todo').find({}).toArray(function (err, result) {
			client.close();
			if (err) res.send(err);
			res.status(200);
			res.send(result);
		});
	  });
});

router.post('/', function (req, res) {
	MongoClient.connect(dbUrl, function(err, client) {
		const db = client.db(dbName).collection('todo').insertOne(req.body, function (err, result) {
			client.close();
			if (err) res.send(err);
			res.status(200);
			res.send("Insert Success");
			// assert.equal(2, result.insertedCount);
		})
	})
})

router.delete('/', function (req, res) {
	MongoClient.connect(dbUrl, function(err, client) {
		const db = client.db(dbName).collection('todo').deleteOne({ _id: ObjectID(req.body._id)}, function(err, result){
			client.close();
			if (err) res.send(err);
			res.status(200);
			res.send("remove Success");
			// assert.equal(2, result.insertedCount);
		});
	})
})

router.put('/', function (req, res) {
	MongoClient.connect(dbUrl, function(err, client) {
		id = req.body._id
		const { ['_id']: selected, ...putData } = req.body;
		const db = client.db(dbName).collection('todo').update({ _id: ObjectID(id)}, putData, function (err, result) {
			client.close();
			if (err) res.send(err);
			res.status(200);
			res.send("update Success");
		})
	})
})

module.exports = router;
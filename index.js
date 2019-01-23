#!/usr/bin/env node

const jwt = require('jsonwebtoken');

const scope = process.argv[2];
const kid = process.argv[3];
const secret = process.argv[4];
const userId = process.argv[5];
const expirationMs = Date.now() + 3600000; // now +1h in unix time ms

console.log(JSON.stringify({
	keyId: kid,
	secret,
	scope
}, null, 4));

console.log(`\nExpires at time: ${new Date(expirationMs)}\n`);

const token = jwt.sign({
	scope,
  userId,
	exp: expirationMs / 1000 // expires at unix time seconds
}, secret, {
	header: {
		kid
	}
});

console.log(token);

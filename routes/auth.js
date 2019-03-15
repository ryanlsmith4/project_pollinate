// const express = require('express');
// Declare router for use
const router = require('express').Router();

const { landing } = require('../controllers/auth');

router.get('/', landing);

module.exports = router;

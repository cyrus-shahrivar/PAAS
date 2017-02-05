const helper = require('../helpers/greeters');
const greet = helper.jsonGreeter;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(bodyParser.json());

router.get('/:greetType/:to/:from', function(req, res, next) {
    var greeting;
    switch (req.params.greetType) {
        case 'gm':
            greeting = 'Good Morning';
            break;
        case 'gd':
            greeting = 'Good Day';
            break;
        case 'ge':
            greeting = 'Good Evening';
            break;
        case 'gn':
            greeting = 'Good Night';
            break;
        default:
            greeting = 'Hello';
    }
    res.json(greet(greeting, req.params.to, req.params.from));
});

module.exports = router;

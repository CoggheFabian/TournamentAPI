const express = require('express');
const app = require("../app");
const jwt = require("jsonwebtoken");

function validateToken (req, res, next)
{
    // check header or url parameters or post parameters for token
    let tokenwithHeadings = req.headers.authorization;
    let tokenWithoutHeadings = tokenwithHeadings.split('Bearer ')[1];
    // decode token
    if (tokenwithHeadings) {
        // verifies secret and checks exp
        //This secret schould not be in here in plain text
        jwt.verify(tokenWithoutHeadings, 'marcy9d8534b48w951b9287d492b256x', function(err, decoded)
        {
            if (!err) {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                req.token = tokenWithoutHeadings;
                return next();
            }
            return res.json({ success: false, message: 'Failed to authenticate token.' });
        });
    }
    else
    {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
}

module.exports = validateToken;
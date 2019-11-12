'use strict';

const activity = require('./activity');

exports.index = function (req, res) {
    if (!req.session.token) {
        res.render('index', {
            title: 'Unauthenticated',
            errorMessage: 'This app may only be loaded via Salesforce Marketing Cloud',
        });
    } else {
        res.render('index', {
            title: 'Journey Builder Activity',
            results: activity.logExecuteData,
        });
    }
};

exports.login = function (req, res) {
    console.log('req.body: ', req.body);
    res.redirect('/');
};

exports.logout = function (req, res) {
    req.session.token = '';
};
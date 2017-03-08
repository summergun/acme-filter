const express = require('express');
const swig = require('swig');
const app = express();

app.set('view engine','html');
app.engine('html',swig.renderFile);
swig.setDefaults({cache:false});
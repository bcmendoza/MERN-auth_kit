// require mongoose and supporting modules
const mongoose = require('mongoose')
const path = require('path')

// connect mongoose and configure path
mongoose.connect('mongodb://localhost/mernStarter')
mongoose.set('debug', true)
mongoose.Promise = global.Promise;

// read all files in models path and require each
const fs = require('fs');
const models_path = path.join(__dirname, '../models/')
fs.readdirSync(models_path).forEach((file) => {
    if(file.indexOf('.js') >= 0)
      require(models_path + '/' + file)
})
const dotenv = require('dotenv');
const fs = require('fs');
const mongoose = require('mongoose');
const Tour = require('./../../models/tourModel')


dotenv.config({ path: './../../config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)


mongoose.connect(DB).then(() =>
    console.log('DB connection Succesful')
).catch((err) => console.log(err))

// READ JON FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'))

// IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Tour.create(tours)
        console.log('data successfully loaded')
    }
    catch (err) {
        console.log(err)
    }
    process.exit()

}

// Delete All Data From Collection

const deleData = async () => {
    try {
        await Tour.deleteMany()
        console.log('data successfully Deleted')
    }
    catch (err) {
        console.log(err)
    }
    process.exit()

}



if(process.argv[2] === '--import'){
    importData()
}
else if(process.argv[2] === '--delete'){
    deleData()
}
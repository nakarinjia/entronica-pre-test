const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
const mysql = require('mysql2')
const multer = require('multer')
const fs = require('fs');
const path = require('path');
const app = express();



app.use(cors());
app.use(bodyparser.json());

const port = process.env.PORT || 8080

// api upload image

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'entronica',
    port: 3308
})

db.connect(err => {
    if(err) {
        console.log('database connection error!!')
    } else {
        console.log('DATABASE CONNECTED!')
    }
})


app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})

app.get('/user', (req,res) => {
    // console.log('assets',assets)
})

// get all province list
app.get('/api/province', (req,res) => {
    const provinceList = readProvincesFromFile();
    res.json(provinceList);
})


app.get('/api/district', (req,res) => {
    const districtList = readDistrictFromFile();
    const provinceId = req.query.provinceId;
    console.log('req',req.query.provinceId)
    if(!provinceId) {
        res.json(districtList);
    } 
    const filteredDistricts = districtList.filter(district => district.PROVINCE_ID == provinceId);
    res.json(filteredDistricts);
})

app.get('/api/subDistrict', (req,res) => {
    const subDistrictList = readSubDistrictFromFile();
    const districtId = req.query.districtId;
    if(!districtId) {
        res.json([]);
    } 
    const filteredSubDistrict = subDistrictList.filter(subDistrict => subDistrict.DISTRICT_ID == districtId);
    res.json(filteredSubDistrict);
})


// function

function readProvincesFromFile() {
    try {
        
        const data = fs.readFileSync(path.resolve(__dirname, './assets/data/province.json'));
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading file:", error);
        return [];
    }
}

function readDistrictFromFile() {
    try {
        
        const data = fs.readFileSync(path.resolve(__dirname, './assets/data/district.json'));
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading file:", error);
        return [];
    }
}

function readSubDistrictFromFile() {
    try {
        
        const data = fs.readFileSync(path.resolve(__dirname, './assets/data/sub-district.json'));
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading file:", error);
        return [];
    }
}
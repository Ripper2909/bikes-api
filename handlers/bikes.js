const db = require('../models');

//Create a bike
exports.createBike = async (req, res) => {
    try {
        let newBike = await db.Bike.create(req.body);
        console.log(newBike);
        return res.status(200).json({
            message: 'Bike successfuly created!',
            newBike
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not create your bike.',
            error: err
        });
    }
};

//Get all bikes
exports.getAllBikes = async (req, res) => {
    try {
        let bikes = await db.Bike.find();
        return res.status(200).json(bikes);
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not find your bikes.',
            error: err
        });
    }
};

//Get one bike
exports.getOneBike = async (req, res) => {
    try {
        let thisBike = await db.Bike.findById(req.params.id);
        return res.status(200).json(thisBike);
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not get your bike.',
            error: err
        });
    }
};

//Update one bike
exports.updateOneBike = async (req, res) => {
    try {
        let bikeToUpdate = await db.Bike.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        return res.status(200).json({
            message: 'Bike updated!',
            bikeToUpdate
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not modify your bike.',
            error: err
        });
    }
};

//Delete one bike
exports.deleteOneBike = async (req, res) => {
    try {
        await db.Bike.findByIdAndRemove(req.params.id);
        return res.status(200).json('Bike deleted !');
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not delete your bike.',
            error: err
        });
    }
};
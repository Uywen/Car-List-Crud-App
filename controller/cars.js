import {v4  as uuid} from "uuid"

let cars = []

export const getCars = (req, res) => {
    res.send(cars)
}

export const createCar = (req,res) => {
    const car = req.body;
    //uuid generates an automatic id to each car added to the list
    cars.push({...car,id :uuid()})
    // displays when a user has been added successfully
    res.send("User added successfully")
}

// gets a car by the id
export const getCarId = (req,res) => {
    const singleCar = cars.filter((car) => car.id === req.params.id);
    res.send(singleCar)
}

// deletes the car based on the id
// returns the the cars that have not been deleted
export const deleteCar = (req, res) => {
    cars = cars.filter((car) => car.id !== req.params.id);
    res.send("Car deleted successfully")
}

// used to update the cars
// by their body in postman
export const updateCar = (req, res) => {
    const car = cars.find((car) => car.id === req.params.id);

    car.make = req.body.make
    car.model = req.body.model
    car.registration = req.body.registration
    car.owner = req.body.owner
    car.previousowner = req.body.previousowner
    car.image = req.body.previousowner

    res.send("Car details have been updated")
}
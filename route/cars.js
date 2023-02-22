import express from "express";

// all the functions in the controller.js
import {getCars , createCar , getCarId, deleteCar, updateCar} from "../controller/cars.js"

const router = express.Router()

// all the routes of the functions with their respective actions
router.get('/cars', getCars)
router.post('/car', createCar)
router.get('/car/:id', getCarId)
router.delete('/car/:id', deleteCar)
router.put('/car/:id', updateCar)

export default router
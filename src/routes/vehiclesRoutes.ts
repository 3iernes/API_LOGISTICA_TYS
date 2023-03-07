import { Router } from "express";
import {getVehicles,
    getVehicle,
    createVehicle,
    modVehicle,
    delVehicle} from '../controllers/vehiclesController'
const router = Router()

router.route('/vehicles').get(getVehicles)
router.route('/vehicles/:id_vehiculo').get(getVehicle)
router.route('/vehicles').post(createVehicle)
router.route('/vehicles').put(modVehicle)
router.route('/vehicles/:id_vehiculo').delete(delVehicle)
export default router
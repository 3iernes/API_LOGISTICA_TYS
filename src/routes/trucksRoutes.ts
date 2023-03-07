import { Router } from "express";
import {getTrucks} from '../controllers/trucksController'
const router = Router()

router.route('/trucks').get(getTrucks)
//router.route('/trucks').post()
//router.route('/trucks').patch()
//router.route('/trucks').delete()

export default router
import { Request,Response } from "express"
import { fetchTrucks } from "../services/truckServices"
import { Vehicle } from "../interfaces/Vehicle"
import { auditError } from "../utils/errorHandler"

const getTrucks = async(req: Request,res: Response)=>{
    try {
        const trucks:Vehicle[] = await fetchTrucks()
        return res.json(trucks)
    } catch (error) {
        auditError(`getTrucks: ${error}`,`${req.method} ${req.originalUrl}`)
        return res.status(500).json({msj:'Algo salio mal'})
    }
}

export {getTrucks}
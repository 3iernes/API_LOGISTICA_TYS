import { Request,Response } from "express"
import { selectTrucks,
    selectTruck,
    insertVehicle,
    updateVehicle,
deleteVehicle } from "../services/truckServices"
import { Vehicle } from "../interfaces/Vehicle"
import { auditError } from "../utils/errorHandler"

const getVehicles = async(req: Request,res: Response)=>{
    try {
        const trucks:Vehicle[] = await selectTrucks()
        return res.json(trucks)
    } catch (error) {
        auditError(`getVehicles: ${error}`,`${req.method} ${req.originalUrl}`)
        return res.status(500).json({msj:'Algo salio mal'})
    }
}
const getVehicle = async(req: Request, res:Response)=>{
    try {
        const {id_vehiculo} = req.params
        if(!id_vehiculo){
            return res.status(400).json({msj:'El id es un campo obligatorio.'})    
        }
        const truck:Vehicle = await selectTruck(parseInt(id_vehiculo))
        return res.json(truck)
    } catch (error) {
        auditError(`getVehicle: ${error}`,`${req.method} ${req.originalUrl}`)
        return res.status(500).json({msj:'Algo salio mal'})
    }
}
const createVehicle = async(req: Request,res: Response)=>{
    try {
        const {body} = req
        if(!body){
            return res.status(400).json({msj:'Ingrese los campos requeridos.'})    
        }        
        const id_inserted_vehicle = await insertVehicle(body)
        return res.json(id_inserted_vehicle)
    } catch (error) {
        auditError(`createVehicle: ${error}`,`${req.method} ${req.originalUrl}`)
        return res.status(500).json({msj:'Algo salio mal'})
    }
}
const modVehicle = async(req: Request,res: Response)=>{
    try {
        const {body} = req
        if(!body){
            return res.status(400).json({msj:'Ingrese los campos requeridos.'})    
        }    
        const id_updated_vehicle = await updateVehicle(body)
        return res.json(id_updated_vehicle)
    } catch (error) {
        auditError(`updateVehicle: ${error}`,`${req.method} ${req.originalUrl}`)
        return res.status(500).json({msj:'Algo salio mal'})
    }
}
const delVehicle = async(req: Request,res: Response)=>{
    try {
        const {id_vehiculo} = req.params
        if(!id_vehiculo){
            return res.status(400).json({msj:'El id es un campo obligatorio.'})    
        }
        const id_inserted_vehicle = await deleteVehicle(parseInt(id_vehiculo))
        return res.json(id_inserted_vehicle)
    } catch (error) {
        auditError(`deleteVehicle: ${error}`,`${req.method} ${req.originalUrl}`)
        return res.status(500).json({msj:'Algo salio mal'})
    }
}
export {getVehicles,
    getVehicle,
    createVehicle,
    modVehicle,
    delVehicle
}
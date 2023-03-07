import { Vehicle } from "../interfaces/Vehicle";
import { getConnection } from "../database/connect";
import {
    getVehicles,
    getVehicle,
    createVehicle,
    modVehicle,
    disableVehicle
} from "../database/queries/vechilesQueries";

const selectTrucks = async (): Promise<Vehicle[]> => {
    try {
        const db_pool = await getConnection()
        const db_result = await db_pool.request()
            .execute(getVehicles)
        return db_result.recordset
    } catch (error) {
        throw error
    }
}
const selectTruck = async (id_vehiculo: number): Promise<Vehicle> => {
    try {
        const db_pool = await getConnection()
        const db_result = await db_pool.request()
            .input('id_vehiculo', id_vehiculo)
            .execute(getVehicle)
        return db_result.recordset[0]
    } catch (error) {
        throw error
    }
}
const insertVehicle = async (v: Vehicle): Promise<Number> => {
    try {
        const db_pool = await getConnection()
        const db_result = await db_pool.request()
            .input('tipo', v.tipo)
            .input('patente', v.patente)
            .input('numChasis', v.numChasis)
            .input('numMotor', v.numMotor)
            .input('numMovil', v.numMovil)
            .execute(createVehicle)
        return db_result.recordset[0].id
    } catch (error) {
        throw error
    }
}
const updateVehicle = async (v: Vehicle): Promise<number> => {
    try {
        const db_pool = await getConnection()
        const db_result = await db_pool.request()
            .input('id', v.id)
            .input('tipo', v.tipo)
            .input('patente', v.patente)
            .input('numChasis', v.numChasis)
            .input('numMotor', v.numMotor)
            .input('numMovil', v.numMovil)
            .execute(modVehicle)
        return db_result.recordset[0].id
    } catch (error) {
        throw error
    }
}
const deleteVehicle = async (id_vehiculo: number) => {
    try {
        const db_pool = await getConnection()
        await db_pool.request()
            .input('id', id_vehiculo)
            .execute(disableVehicle)
        return true
    } catch (error) {
        throw error
    }
}
export {
    selectTrucks,
    selectTruck,
    insertVehicle,
    updateVehicle,
    deleteVehicle
}
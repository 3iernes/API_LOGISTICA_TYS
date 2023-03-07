import { getConnection } from "../database/connect";
import { Vehicle } from "../interfaces/Vehicle";

const fetchTrucks = async (): Promise<Vehicle[]> => {
    try {
        const db_pool = await getConnection()
        const db_result = await db_pool.request()
            .query('SELECT * FROM vehicsulos')
        return db_result.recordset
    } catch (error) {
        throw error
    }
}
export { fetchTrucks }
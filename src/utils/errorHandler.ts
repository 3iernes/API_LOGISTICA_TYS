import * as fs from 'fs'
const fileName = 'logError.csv';
const filePath = './' + fileName;

const auditError = async (error: string,scope:string) => {
    console.log(error)
    const row = `${scope};${error};${new Date().toLocaleString()}\n`
    fs.appendFile(filePath, row, err => {
        if (err) {
            console.log(`Error auditando error xd: ${error}`)
        }
    })
};

export { auditError };
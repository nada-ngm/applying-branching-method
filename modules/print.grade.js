const read = require("./read.grades")

async function print(){
    try{
        const data = await read()
        console.log(data)
    }catch(error){
        console.log(error.message)
    }
}

module.exports = print
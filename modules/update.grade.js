const read = require("./read.grades")
const save = require("./save.grades")

async function update(id,grade){
    
    if(!id||!grade){
        console.log("Can not update a record with incomplete data")
        return
    }

    try{
        const grades = await read()
        const record = grades.find((g)=>{
           return g.id==id
        }) 
        if(!record){
            console.log("This record does not exist")
            return
        }
        record.grade = grade
        await save(grades)
        console.log("Record is updated successfully")   

    }catch(error){
        console.log(error.message)
    }

}


module.exports = update

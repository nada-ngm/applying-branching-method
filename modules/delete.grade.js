const read = require("./read.grades")
const save = require("./save.grades")

async function deleteGrade(id){

    if(!id){
        console.log("Can not delete a record without its ID")
        return
    }

    try{
        const grades = await read()
        const index = grades.findIndex((g)=>{
           return g.id==id
        })
        if(index==-1){
            console.log("This record does not exist")
            return
        }
        grades.splice(index,1)
        await save(grades)
        console.log("Record is deleted successfully")   


    }catch(error){
        console.log(error.message)
    }

}


module.exports = deleteGrade

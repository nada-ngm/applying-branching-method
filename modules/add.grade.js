const read = require("./read.grades")
const save = require("./save.grades")

async function add(name,subject,grade){

    if(!name||!subject||!grade){

        console.log("Can not add grade with incomplete data")
        return

    }

    try{
        const grades = await read()
        let id =1
        if(grades.length) id = grades[grades.length-1].id+1

        let record = {
            id,
            name,
            subject,
            grade
        }
        grades.push(record)
        await save(grades) 
        console.log("Record is added successfully")   

    }catch(error){
        console.log(error.message)
    }

}


module.exports = add
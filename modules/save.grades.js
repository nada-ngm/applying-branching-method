const {writeFile} = require("fs").promises
const path = require("path")
const filePath = path.join(__dirname,"../data/grades.json")

async function save(grades){

    try{

        await writeFile(filePath,JSON.stringify(grades,null,2))

    }catch(error){

        console.log(error.message)

    }

}

module.exports = save
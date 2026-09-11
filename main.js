const add = require("./modules/add.grade")
const deleteGrade = require("./modules/delete.grade")
const print = require("./modules/print.grade")
const update = require("./modules/update.grade")


async function main(){

await add("","ioe",79)
await add("Gana","English",88)
await add("Hossam","Physics",70)
await add("Sameh","Geology",93)
await add("Kholoud","Arabic",90)

await deleteGrade(7)
await deleteGrade(3)

await update(4,86)
await update(27,56)

await print()

}

main()
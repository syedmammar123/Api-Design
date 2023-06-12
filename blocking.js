// blocking means k ap aik code likho tou wo line by line(sync) work kare eg:


// const a="yo"
// console.log(a)

//ab yaha pehle a initialize hoga phir hi program agay barhe ga :), tou abhi tou yeh chunnu sa task tha  but suppose you are doing a cpu intesive task like fiboonaci ora alogorithm and 20000 req at a time , ...it would be insane, so we try to do tasks asyncronously matlb har jaga nhi lekn jaha zarori ho waha

const fs = require('fs/promises')
const path = require('path')
const read = async () => {
    const result = fs.readFile(path.join(__dirname,'package.json'),'utf-8')
    return result
}
read().then(f=>console.log(f))
console.log('me bad mai ho par pehle chala')


//npm i supertest @types/supertest jest @types/jest ts-jest
//npx ts-jest config:init
  
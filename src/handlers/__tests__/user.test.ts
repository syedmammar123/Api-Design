// describe('user handeler',()=>{
//     it('should do smthg when smthg happens',()=>{
//         expect(1).toBe(1)
//     })
// })

import * as user from '../user'

describe('user handeler',()=>{
    it('should create a new user', async ()=>{
    const req = {body:{username:'hello', password: 'hi'}}
    const res = {json({token}){
        expect(token).toBeTruthy()
    }}
    await user.createNewUser(req,res,()=>{})
})

})
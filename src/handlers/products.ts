import prisma from "../db";

//GET ALL
export const getProducts = async (req,res) => {
    // console.log(req.user)
    const user = await prisma.user.findUnique({
        where:{
            // id: req.res.user.id
            id: req.user.id
        },
        include:{
            products : true
        }
    })
    res.json({data:user.products})
}

//GET one
export const getOneProduct = async (req,res) => {
    const id = req.params.id
    const product = await prisma.product.findFirst({
        where:{
            id,
            belongsToId:req.user.id
        }
    })
    res.json({data:product})
}

export const createProduct = async (req,res) => {
    // try{
    // }
    const product = await prisma.product.create({
        data:{
            name:req.body.name,
            belongsToId:req.user.id
        }
    })
    res.json({data:product})
        
}

export const updateProduct = async (req,res,next) => {
    try{
        const updated = await prisma.product.update({
            where:{
                id_belongsToId:{
                    id:req.params.id,
                    belongsToId:req.user.id
                }
            },
            data:{
                name:req.body.name,
               }
        })
        res.json({data:updated})
    }catch(e){
        next(e)
    }
    
}

//delete One
export const deleteProduct = async (req,res) => {
    const deleted = await prisma.product.delete({
        where:{
            id_belongsToId:{
                id:req.params.id,
                belongsToId:req.user.id
            }
        }
    })
    res.json({data:deleted})
}
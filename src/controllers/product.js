import Joi  from "joi";
import Product from "../models/product";


const productSchema = Joi.object({
    name : Joi.string().required(),
    price : Joi.number().required(),
    desc : Joi.string().required(),
    status : Joi.boolean().required(),
    quality : Joi.number().required(),
});


export const getAll = async (req, res) => {
    try {
        const data = await Product.find();

        if(data.length == 0){
            return res.json({
                message : "ko co sp nao ",
            })
        }

        return res.json(data);
    } catch (error) {
    }
}

export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findOne({_id: id});

        if(data.length === 0){
            return res.status(400).json({
                message : "ko co sp nao ",
            })
        }

        return res.status(200).json(
            data
        );
    } catch (error) {
        return res.status(400).json({
            message:error,
        });
    }
}


export const create = async (req, res) => {
    try {
        const body = req.body;
        const {error} = productSchema.validate(body);

        if(error){
            return res.json({
                message: error.details[0].message,
            })
        }
        const data = await Product.create(body);
        if(data.length === 0){
            return res.status(400).json({
                message : "them that bai ",
            })
        }

        return res.status(200).json({
            message:"them thanh cong",
            data,
        }
        );
    } catch (error) {
        return res.status(400).json({
            message:error,
        });
    }
}

export const remove = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id);

        return res.json({
            message:"xoa thanh cong",
            data,
        }
        );
    } catch (error) {
        return res.status(400).json({
            message:error,
        });
    }
}



export const update = async (req, res) => {
    try {
        
        const data = await Product.findByIdAndUpdate(req.params.id, req.body , {new :true});

        if(!data){
            return res.status(400).json({
                message : "cap nhap that bai ",
            })
        }

        return res.status(200).json({
            message:"cap nhap thanh cong",
            data,
        }
        );
    } catch (error) {
        return res.status(400).json({
            message:error,
        });
    }
}
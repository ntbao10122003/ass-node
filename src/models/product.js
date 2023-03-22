import mongoose from "mongoose";

const productSchema = ({
    name : {
        type : String,
        require:true,
    },


    price : {
        type : Number,
        require:true,
    },

    desc : {
        type : String,
        require:true,
    },


    status : {
        type : Boolean,
        require:true,
    },

    quality : {
        type : String,
        require:true,
    },


})

export default mongoose.model("Product", productSchema);
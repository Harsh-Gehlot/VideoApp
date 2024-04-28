import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema({
    videoId:{
        type:String,
        required :true,
    },
    title:{
        type:String,
        required :true,
    },
    desc:{
        type:String,
        required :true,
    },
    imgUrl:{
        type:String,
        required :true, 
    },
    videoUrl:{
        type:String,
        required :true,
    },
    views:{
        type:Number,
        default: 0,
    },
    tags:{
        type:[String],
        default: [],
    },
    likes:{
        type:[String],
        default: [],
    },
    unlikes:{
        type:[String],
        default: [],
    },
},
    { timestamps: true }
);

export default mongoose.model("APPCOMMENTS", CommentsSchema);
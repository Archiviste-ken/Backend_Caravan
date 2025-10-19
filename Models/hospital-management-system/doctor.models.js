import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        enum: ["M","F","O"]
    },
    qualification:{
        type: String,
        required: true
    },
    experienceInYears:{
        type: Number,
        default: 0
    },
    worksInHospital:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
],
},{timestamps: true})

export const Doctor = mongoose.model("Doctor",doctorSchema) 
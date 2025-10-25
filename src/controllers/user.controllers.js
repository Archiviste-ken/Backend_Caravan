import { asyncHandler } from "../utils/asyncHandler.js"


const registerUser = asyncHandler( async (req, res) => {
    // logic to register user
    
    // get user data from frontend
    // validation - not empty
    // check if user already exists
    // check for images, check for avatar
    // upload them to cloudinary ,avatar
    //create user object - creation entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response to frontend

     const {fullname,email,username,password}= req.body
     console.log("email: ", email);
     
    // res.status(500).json({
    //     message: "chandu is gay"
    // })
})

export { registerUser };
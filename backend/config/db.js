import mongoose from "mongoose";
export const connectDB=async()=>{
   await mongoose.connect('mongodb+srv://anupamaverma2101:0S4vxbWjD7yAUFnz@cluster0.kjxbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').
   then(()=>console.log("DB connected"))
}

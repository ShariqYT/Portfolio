import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.User || model("User", UserSchema);
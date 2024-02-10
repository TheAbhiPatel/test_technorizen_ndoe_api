import { Document, Schema, model } from "mongoose";

interface IBaseUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface IUserSchema extends IBaseUser, Document {}

const userSchema = new Schema<IUserSchema>({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const userModel = model<IUserSchema>("user", userSchema);

export default userModel;

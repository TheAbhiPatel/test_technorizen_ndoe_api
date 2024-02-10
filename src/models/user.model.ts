import { Document, Schema, model } from "mongoose";

interface IBaseUser {
  name: string;
  email: string;
  password: string;
}

interface IUserSchema extends IBaseUser, Document {}

const userSchema = new Schema<IUserSchema>({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = model<IUserSchema>("user", userSchema);

export default userModel;

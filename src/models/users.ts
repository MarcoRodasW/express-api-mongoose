import { Schema, model } from "mongoose";
import type { User } from "types/users.types";

const userSchema = new Schema<User>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		userName: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

export const UserModel = model<User>("User", userSchema);

import { Schema, model } from "mongoose";
import type { Roles } from "types/roles.types";

const rolesSchema = new Schema<Roles>(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

export const RolesModel = model<Roles>("Roles", rolesSchema);

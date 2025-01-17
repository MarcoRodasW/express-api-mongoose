import { RolesModel } from "@models/roles";
import type { IRolesRepository, Roles } from "types/roles.types";

export class RolesRepository implements IRolesRepository {
	async create(data: Roles): Promise<Roles> {
		const newRole = new RolesModel(data);
		return await newRole.save();
	}

	async getAll(): Promise<Roles[]> {
		return await RolesModel.find().exec();
	}

	async getById(id: string): Promise<Roles | null> {
		const role = await RolesModel.findById(id).exec();
		return role;
	}

	async update(id: string, data: Partial<Roles>): Promise<Roles | null> {
		const role = await RolesModel.findByIdAndUpdate(id, data, {
			new: true,
		}).exec();
		return role;
	}

	async delete(id: string): Promise<boolean> {
		const deleted = await RolesModel.findByIdAndDelete(id).exec();
		return deleted !== null;
	}
}

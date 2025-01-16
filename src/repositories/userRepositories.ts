import { UserModel } from "@models/users";
import type { IUserRepository, User } from "types/users.types";

export class UserRepository implements IUserRepository {
	private users: User[] = [
		{
			id: "1",
			name: "Marco",
			email: "marco@example.com",
			userName: "marco",
		},
	];

	async create(data: User): Promise<User> {
		const newUser = new UserModel(data);
		return await newUser.save();
	}

	async getAll(): Promise<User[]> {
		return await UserModel.find().exec();
	}

	async getById(id: string): Promise<User | null> {
		const user = await UserModel.findById(id).exec();
		return user;
	}

	async update(id: string, data: Partial<User>): Promise<User | null> {
		const user = await UserModel.findByIdAndUpdate(id, data, {
			new: true,
		}).exec();
		return user;
	}

	async delete(id: string): Promise<boolean> {
		const deleted = await UserModel.findByIdAndDelete(id).exec();
		return deleted !== null;
	}
}

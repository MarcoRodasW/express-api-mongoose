import type { IUserRepository, IUserService, User } from "types/users.types";

export class UserService implements IUserService {
	private userRepository: IUserRepository;

	constructor(userRepository: IUserRepository) {
		this.userRepository = userRepository;
	}

	async create(data: User): Promise<User> {
		return this.userRepository.create(data);
	}

	async getAll(): Promise<User[]> {
		return this.userRepository.getAll();
	}

	async getById(id: string): Promise<User | null> {
		return this.userRepository.getById(id);
	}

	async update(id: string, data: Partial<User>): Promise<User | null> {
		return this.userRepository.update(id, data);
	}

	async delete(id: string): Promise<boolean> {
		return this.userRepository.delete(id);
	}
}

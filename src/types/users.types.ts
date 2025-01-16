import type { Repository } from "./repository.types";

export interface User {
	id: string;
	name: string;
	email: string;
	userName: string;
}

export interface IUserRepository extends Repository<User> {}

export interface IUserService {
	getAll: () => Promise<User[]>;
	create: (data: User) => Promise<User>;
	getById: (id: string) => Promise<User | null>;
	update: (id: string, data: Partial<User>) => Promise<User | null>;
	delete: (id: string) => Promise<boolean>;
}

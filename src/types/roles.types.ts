import type { Repository } from "./repository.types";

export interface Roles {
	id: string;
	name: string;
}

export interface IRolesRepository extends Repository<Roles> {}

export interface IRolesService {
	getAll: () => Promise<Roles[]>;
	create: (data: Roles) => Promise<Roles>;
	getById: (id: string) => Promise<Roles | null>;
	update: (id: string, data: Partial<Roles>) => Promise<Roles | null>;
	delete: (id: string) => Promise<boolean>;
}

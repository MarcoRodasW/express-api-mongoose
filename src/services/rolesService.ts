import type { IRolesRepository, IRolesService, Roles } from "types/roles.types";

export class RolesService implements IRolesService {
	private rolesRepository: IRolesRepository;

	constructor(rolesRepository: IRolesRepository) {
		this.rolesRepository = rolesRepository;
	}

	async create(data: Roles): Promise<Roles> {
		return this.rolesRepository.create(data);
	}

	async getAll(): Promise<Roles[]> {
		return this.rolesRepository.getAll();
	}

	async getById(id: string): Promise<Roles | null> {
		return this.rolesRepository.getById(id);
	}

	async update(id: string, data: Partial<Roles>): Promise<Roles | null> {
		return this.rolesRepository.update(id, data);
	}

	async delete(id: string): Promise<boolean> {
		return this.rolesRepository.delete(id);
	}
}

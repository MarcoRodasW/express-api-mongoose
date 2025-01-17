import { RolesRepository } from "@repositories/rolesRepositories";
import { UserRepository } from "@repositories/userRepositories";
import { RolesService } from "@services/rolesService";
import { UserService } from "@services/userService";
import { Router } from "express";
import type { IRolesRepository, IRolesService, Roles } from "types/roles.types";
import type { IUserRepository, IUserService, User } from "types/users.types";

const router: Router = Router();

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

const rolesRepository: IRolesRepository = new RolesRepository();
const rolesService: IRolesService = new RolesService(rolesRepository);

export default () => {
	router.get("/hello", (req, res) => {
		res.json({ message: "Hello World!" });
	});

	//Users routes
	router.get("/users", async (req, res) => {
		const users = await userService.getAll();
		res.json(users);
	});

	router.get("/users/:id", async (req, res) => {
		const user = await userService.getById(req.params.id);
		res.json(user);
	});

	router.post("/users", async (req, res) => {
		const newUser: User = req.body;
		const result = await userService.create(newUser);
		res.json(result);
	});

	router.put("/users/:id", async (req, res) => {
		const user = await userService.update(req.params.id, req.body);
		res.json(user);
	});

	router.delete("/users/:id", async (req, res) => {
		const deleted = await userService.delete(req.params.id);
		res.json({ deleted });
	});

	//Roles routes
	router.get("/roles", async (req, res) => {
		const roles = await rolesService.getAll();
		res.json(roles);
	});

	router.get("/roles/:id", async (req, res) => {
		const role = await rolesService.getById(req.params.id);
		res.json(role);
	});

	router.post("/roles", async (req, res) => {
		const newRole: Roles = req.body;
		const result = await rolesService.create(newRole);
		res.json(result);
	});

	router.put("/roles/:id", async (req, res) => {
		const role = await rolesService.update(req.params.id, req.body);
		res.json(role);
	});

	router.delete("/roles/:id", async (req, res) => {
		const deleted = await rolesService.delete(req.params.id);
		res.json({ deleted });
	});

	return router;
};

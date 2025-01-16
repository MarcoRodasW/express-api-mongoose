import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/userService";
import { Router } from "express";
import type { IUserRepository, IUserService, User } from "types/users.types";

const router: Router = Router();

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);
export default () => {
	router.get("/hello", (req, res) => {
		res.json({ message: "Hello World!" });
	});

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

	return router;
};

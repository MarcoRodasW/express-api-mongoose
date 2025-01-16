interface ApiResponse<T> {
	message: string;
	success: boolean;
	errors: string[] | null;
	code: number;
	data: T | null;
}

exports.success = function <T>(
	data: T,
	message = "Success",
	code = 200,
): ApiResponse<T> {
	return this.json({
		message,
		success: true,
		errors: null,
		code,
		data,
	});
};

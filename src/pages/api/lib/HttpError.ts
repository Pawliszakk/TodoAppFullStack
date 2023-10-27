export const HttpError = (message: string, status: number) => {
	return { message, code: status };
};

const createError = (status: number, name: string, message: string) => ({
  status,
  name,
  message
});

const unauthorizedError = () => createError(401, 'UnauthorizedError', 'You are not authorized to perform this action.');

const invalidCredentialsError = () => createError(401, 'InvalidCredentialsError', 'Incorrect email or password.');

const notFoundError = (resource: string) => createError(404, 'NotFoundError', `No ${resource} found.`);

const duplicatedError = () => createError(409, 'DuplicatedError', 'Duplicate resource found');

const BadRequestError = () => createError(400, 'Bad Request', 'invalid request');

const unprocessableEntityError = (message: string[]) =>
  createError(422, 'UnprocessableEntityError', `Invalid request data: ${message}`);

export default {
  unauthorizedError,
  notFoundError,
  invalidCredentialsError,
  duplicatedError,
  unprocessableEntityError,
  BadRequestError
};

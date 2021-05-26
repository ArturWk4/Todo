const Joi = require("joi");

const isLoginPayloadValid = (payload) => {
  const { username, password } = payload;
  const schema = Joi.object({
    username: Joi.string().min(2).required(),
    password: Joi.string().min(8).max(100).required(),
  });
  const { error } = schema.validate({ username, password });
  return !error;
};

const isRegistrationPayloadValid = (payload) => {
  const schema = Joi.object({
    username: Joi.string().min(2).required(),
    password: Joi.string().min(8).max(100).required(),
    name: Joi.string().required(),
  });
  const { error } = schema.validate(payload);
  return !error;
};

const isCreateTaskPayloadValid = (payload) => {
  const schema = Joi.object({
    title: Joi.string().min(2).required(),
    priorityId: Joi.required(),
  });
  const { error } = schema.validate(payload);
  return !error;
};


module.exports = {
  isLoginPayloadValid,
  isRegistrationPayloadValid,
  isCreateTaskPayloadValid,
};

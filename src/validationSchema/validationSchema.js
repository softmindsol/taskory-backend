import Joi from "joi";


const registerValidation = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "First Name is required",
    "any.required": "First Name is required",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "Last Name is required",
    "any.required": "Last Name is required",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email Address is required",
      "string.email": "Email Address must be a valid email",
      "any.required": "Email Address is required",
    }),
  password: Joi.string()
    .min(8)
    .max(30)
    .required()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .messages({
      "string.min": "Password must be at least {#limit} characters long.",
      "string.max": "Password must be no more than {#limit} characters long.",
      "string.empty": "Password cannot be an empty field.",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      "any.required": "Password is required.",
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "any.only": "Confirm Password must match Password.",
      "string.empty": "Confirm Password is required.",
    }),
  role: Joi.string()
    .valid("client", "freelancer")
    .required()
    .messages({
      "string.empty": "Role is required.",
      "any.only": "Role must be either 'Client' or 'Freelancer'.",
      "any.required": "Role is required.",
    }),
  agreedToTerms: Joi.boolean().valid(true).required().messages({
    "any.only": "You must agree to the Terms of Service.",
    "any.required": "Agreement to Terms of Service is required.",
  }),
});

export {
    registerValidation,
  };
  
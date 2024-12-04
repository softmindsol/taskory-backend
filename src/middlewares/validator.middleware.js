import { addValidation } from '../utils/addValidation.js'
import { registerValidation } from '../validationSchema/validationSchema.js'


export const registerValidator = (req, _, next) => addValidation(req, _, next, registerValidation)

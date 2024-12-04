import express from 'express'
import { registerValidator } from '../middlewares/validator.middleware.js';
import {
  registerUser,
} from '../controllers/user.controller.js'

const router = express.Router();

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 example: "SecurePassword123!"
 *               role:
 *                 type: string
 *                 enum: [client, freelancer]
 *                 example: "client"
 *               agreedToTerms:
 *                 type: Boolean
 *                 example: "true"
 *     responses:
 *       201:
 *         description: User registerd successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "61a5c0b7b86d9c1234abcd12"
 *                 firstName:
 *                   type: string
 *                   example: "John"
 *                 lastName:
 *                   type: string
 *                   example: "Doe"
 *                 email:
 *                   type: string
 *                   example: "john.doe@example.com"
 *                 role:
 *                   type: string
 *                   example: "client"
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal server error
*/

router.route('/register').post( registerUser)


export default router

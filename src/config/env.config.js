// Load environment variables
import dotenv from 'dotenv'
dotenv.config({
  path: './.env'
})
// Define environment variables
 
// const { NODE_ENV, MONGODB_URI, SERVER_URL, PASS_SECRET, JWT_SECRET, PORT, EMAIL, PASSWORD, CORS_ORIGIN, CLIENT_URL } = process.env
const { DB_URL , PORT ,NODE_ENV  } = process.env

// Define Swagger stage URL based on environment
const SWAGGER_STAGE_URL = NODE_ENV === 'production' ? SERVER_URL : `http://localhost:${PORT}`

// Export environment variables
// export { NODE_ENV, MONGODB_URI, PASS_SECRET, JWT_SECRET, PORT, EMAIL, PASSWORD, CORS_ORIGIN, CLIENT_URL, SWAGGER_STAGE_URL }
export { DB_URL , PORT , SWAGGER_STAGE_URL}
 
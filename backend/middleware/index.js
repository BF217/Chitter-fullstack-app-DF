import verifyToken from "./verifyToken.js";
import checkDuplicateUsernameOrEmail from "./checkDuplicateUsernameOrEmail.js";

const middlewareConfig = { verifyToken, checkDuplicateUsernameOrEmail };

export default middlewareConfig;

// Imports the Express framework to access the Router API.
import express from "express";

// Imports the controller responsible for handling the email-sending logic.
import { sendMail } from "../controllers/sendmail.ts";

// Creates a new instance of an Express router.
// Routers allow grouping related routes into modular units.
const router = express.Router();

// Defines the POST endpoint `/sendmail`.
// When a request hits this route, the `sendMail` controller is executed.
router.post("/sendmail", sendMail);

// Exports the router so it can be mounted in the main application (index.ts).
export default router;

// Imports the Express framework, responsible for handling HTTP server logic.
import express from "express";

// Imports CORS middleware, required to allow external clients (frontends) to access the API.
import cors from "cors";

// Imports the email route handler.
// Note: In TS + TSX environments, the `.ts` extension must be explicitly included.
import router from "./routes/sendMail.ts";

// Creates the main Express application instance.
const app = express();

// Defines the port where the HTTP server will listen for incoming requests.
const port = 3000;

// Enables Cross-Origin Resource Sharing.
// This allows clients hosted on different domains or ports to consume this API.
app.use(cors());

// Enables the built-in body parser for JSON payloads.
// This allows access to request data via `req.body`.
app.use(express.json());

// Mounts the imported router under the `/api` path.
// Example endpoint: POST /api/sendmail
app.use("/api", router);

// Starts the HTTP server on the specified port.
// Logs a confirmation message once the server is ready.
app.listen(port, () => {
    console.log("Server running on PORT:", port);
});

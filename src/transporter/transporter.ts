// Loads environment variables from the .env file into process.env.
// This must be imported before accessing any environment-based configuration.
import "dotenv/config";

// Imports Nodemailer, the library used to handle SMTP email delivery.
import nodemailer from "nodemailer";

// Creates and configures the SMTP transporter used to send emails.
// In this case, Gmail's SMTP server is used with SSL (port 465).
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",   // SMTP hostname
    port: 465,                // SSL port for secure Gmail SMTP
    secure: true,             // Enables SSL/TLS encryption
    auth: {
        user: process.env.GUSER,  // Email account used for authentication
        pass: process.env.GPASS   // App password (NOT a regular Gmail password)
    }
});

// Exports the transporter instance so it can be reused across controllers.
// The transporter should be created only once to avoid unnecessary reconnections.
export default transporter;

import "dotenv/config";
import express from "express";
import transporter from "../transporter/transporter.ts";

type Request = express.Request;
type Response = express.Response;

export async function sendMail(req: Request, res: Response) {
    const { email } = req.body;

    try {
        const info = await transporter.sendMail({
            from: process.env.GUSER,
            to: email,
            subject: "Nodemailer Test",
            html: `
                <h1>Nodemailer Test</h1>
                <p>This is just a test email sent using Nodemailer.</p>
                <a href="https://nodemailer.com">Visit nodemailer.com</a>
            `
        });

        console.log("Email sent:", info.messageId);
        return res.json({ msg: "Success." });

    } catch (err) {
        console.error("Error sending email:", err);
        return res.status(400).json({ error: "Failed to send email." });
    }
}

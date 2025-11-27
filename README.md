# 📧 Email Delivery Service – Node.js, TypeScript, TSX, Nodemailer
<p align="center">
<img src="https://img.shields.io/badge/Node.js-25.x-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-ESM-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Nodemailer-SMTP-yellow?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Runtime-TSX-orange?style=for-the-badge"/>
</p>
This project implements a minimal and modular email delivery API, built with Node.js, Express, TypeScript (ESM), and Nodemailer.
It exposes REST endpoints for sending transactional emails, such as verification messages, account notifications, and automated system alerts.

## ⚙️ Architecture Overview

### The service adopts a clean and modular structure:

#### Express Router Layer
- Responsible for HTTP routing and request mapping.

#### Controller Layer
- Handles business logic for email dispatching.

#### Transport Layer (Nodemailer)
- Configures SMTP transport using environment variables.

#### Config Layer
- Manages application-level environment configuration (dotenv).

```
The runtime uses TSX, enabling direct execution of TypeScript modules with full support for ESM imports without requiring transpilation.
```

## 📁 Project Structure
```bash
src/
├── controllers/
│   └── sendmail.ts          # Email dispatch logic
│
├── routes/
│   └── sendMail.ts          # API route definition
│
├── transporter/
│   └── email.ts             # Nodemailer SMTP transport instance
│
└── index.ts                 # Application entrypoint (Express server)
```
## 🔧 Environment Configuration

### Create a .env file at the project root:
```bash
GUSER=your_email_address
GPASS=your_smtp_or_app_password
PORT=3000
```

### SMTP Requirements:

For Gmail, an App Password is mandatory.
Standard credentials will not work if 2FA is enabled.

## 🛠 Installation & Setup

### Install dependencies:
```bash
npm install
```

### Run the development server (ESM runtime enabled via tsx):
```bash
npm run dev
```
## ▶️ Runtime Execution

### The application is executed using TSX, enabling TypeScript ESM execution without compilation:
```bash
tsx watch index.ts
```

### Supported import style:
```bash
import router from "./src/routes/sendMail.ts";
```
### 🌐 API Endpoint Specification:
```bash
POST /api/sendmail
```
#### Description: Dispatches a transactional email using the configured SMTP transport.
### Request Body
```bash
{
  "email": "recipient@example.com"
}
```
### Success Response (200 OK)
```bash
{
  "msg": "Sucesso."
}
```
### Error Response (400 Bad Request)
```bash
{
  "error": "Erro ao enviar o email."
}
```
## 📦 Nodemailer Transport Configuration

### The SMTP client is instantiated as follows (simplified):
```bash
import nodemailer from "nodemailer";

export default nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GUSER,
        pass: process.env.GPASS
    }
});
```
Transport instance is imported across controllers to ensure a single, reusable connection.

## 🧪 Testing

### You can test the endpoint using:
#### cURL
```
curl -X POST http://localhost:3000/api/sendmail \
  -H "Content-Type: application/json" \
  -d '{"email":"recipient@example.com"}'
```
Postman / Thunder Client

Use POST request with JSON body identical to the sample above.

## 🔒 Security Considerations

### SMTP credentials must never be committed to version control.

- .env is strictly ignored via .gitignore.

- App passwords should be used instead of raw login credentials.

- Rate limiting or authentication is recommended for production deployment.

- Ensure HTTPS termination at the reverse proxy or load balancer layer.

## 🧩 Extensibility

### The architecture allows easy expansion:

- HTML email templating (Handlebars, MJML, EJS)

- Token-based verification emails

- Email queue system (BullMQ + Redis)

- Microservice conversion (gRPC / RabbitMQ events)

- Multi-provider fallback (SES, SendGrid, Mailgun)

- Logging & monitoring (Winston, Grafana, Prometheus)

## 📄 License

### MIT License. Use and modify freely for personal or commercial projects.
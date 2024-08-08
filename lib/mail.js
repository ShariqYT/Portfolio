import nodemailer from 'nodemailer';

export async function sendEmail({ to, name, message }) {

    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        },
    })

    try {
        const result = await transport.verify();
    } catch (error) {
        return;
    }

    try {
        const sendResult = transport.sendMail({
            name: name,
            from: SMTP_EMAIL,
            to,
            subject: 'Email Received',
            html: `
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Received</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }

        .container {
            width: 100%;
            max-width: 700px;
            margin: 30px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .header {
            background: linear-gradient(90deg, #6f00ff, #a700ff);
            color: #ffffff;
            padding: 30px;
            border-radius: 12px 12px 0 0;
            text-align: center;
            font-size: 26px;
            font-weight: bold;
            letter-spacing: 1px;
        }

        .content {
            padding: 20px;
            font-size: 16px;
            line-height: 1.6;
        }

        .highlight {
            color: #6f00ff;
            font-weight: bold;
        }

        blockquote {
            border-left: 5px solid #6f00ff;
            padding-left: 20px;
            margin-left: 0;
            color: #555;
            font-style: italic;
            background-color: #f0f5ff;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
        }

        blockquote p {
            white-space: pre-wrap;
        }

        a {
            color: #6f00ff;
            text-decoration: none;
            font-weight: bold;
        }

        a:hover {
            text-decoration: underline;
            color: #a700ff;
        }

        .footer {
            font-size: 0.875rem;
            color: #888;
            text-align: center;
            padding: 10px;
            border-top: 1px solid #ddd;
            margin-top: 20px;
        }

        .button {
            display: inline-block;
            background-color: #6f00ff;
            color: #ffffff;
            padding: 14px 24px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            text-align: center;
            margin-top: 20px;
            transition: background-color 0.3s ease;
            box-shadow: 0 4px 8px rgba(104, 0, 189, 0.2);
            
        }

        .button:hover {
            background-color: #5a00e0;
            color:white
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            Thank You for Your Message!
        </div>
        <div class="content">
            <p>Hello <span class="highlight">${name}</span>,</p>
            <p>Thank you for reaching out. I have received your message and will get back to you shortly.</p>
            <p>Here’s a summary of your message:</p>
            <blockquote>
                <p><strong>Message:</strong> ${message}</p>
            </blockquote>
            <p>If you have any further questions or additional information, feel free to reply to this email.</p>
            <p>Best regards,</p>
            <p><strong>Mohammad Shariq</strong><br>
                <a href="mailto:shariqmohd737@gmail.com">shariqmohd737@gmail.com</a><br>
                <a href="https://www.linkedin.com/in/mohd-shariq-sheikh/">LinkedIn Profile</a>
            </p>
            <a href="https://shariq-portfolio.netlify.app" class="button">Visit My Portfolio Website</a>
        </div>
        <div class="footer">
            <p>This email was sent as a confirmation of your contact form submission. If you did not initiate this request, please ignore this email.</p>
        </div>
    </div>
</body>

</html>

      `,
        })
    } catch (error) {
        throw error
    }
}

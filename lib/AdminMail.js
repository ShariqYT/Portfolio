import nodemailer from 'nodemailer';

export async function sendEmail({ from, name, message }) {

    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    // Create transporter
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        },
    });

    // Verify the connection
    try {
        await transport.verify();
    } catch (error) {
        console.error('SMTP connection verification failed:', error);
        return;
    }

    // Send the email
    try {
        const sendResult = await transport.sendMail({
            from, // Sender address
            to: SMTP_EMAIL, // Receiver address (admin email)
            subject: `Email from ${from}`, // Email subject
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Email from ${name}</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f0f2f5;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: 20px auto;
                            background-color: #ffffff;
                            border-radius: 10px;
                            overflow: hidden;
                            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            background: linear-gradient(90deg, #7e22ce, #a855f7);
                            color: #ffffff;
                            padding: 20px;
                            text-align: center;
                        }
                        .header h1 {
                            margin: 0;
                            font-size: 24px;
                        }
                        .content {
                            padding: 20px;
                        }
                        .content p {
                            font-size: 16px;
                            line-height: 1.6;
                            color: #333333;
                            white-space: pre-wrap;
                        }
                        .footer {
                            background-color: #f1f1f1;
                            padding: 15px;
                            text-align: center;
                            font-size: 12px;
                            color: #777777;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <h1>Subject: Inquiry Regarding Portfolio</h1>
                        </div>
                        <div class="content">
                            <p>${message}</p>
                        </div>
                        <div class="footer">
                            <p>This email was sent by ${from}</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error; // Re-throw the error for higher-level handling
    }
}

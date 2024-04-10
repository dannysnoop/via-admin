"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailTemplatePassword = exports.generateRandomOTP = exports.mailSendPassword = exports.SendEmailResetPassword = void 0;
const nodemailer = require('nodemailer');
const SendEmailResetPassword = (email = '', otp = '') => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'dannysnoop123@gmail.com',
            pass: 'pbuo kxru jmno xzxg',
        },
    });
    const mailOptions = {
        from: 'dannysnoop123@gmail.com',
        to: email,
        subject: 'Reset password from VIA',
        html: mailTemplate
            .replace('{{ username }}', email)
            .replace('{{ otp }}', otp),
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred while sending email:', error);
        }
        else {
            console.log('Email sent successfully:', info.response);
        }
    });
};
exports.SendEmailResetPassword = SendEmailResetPassword;
const mailSendPassword = (email = '', password = '') => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'dannysnoop123@gmail.com',
            pass: 'pbuo kxru jmno xzxg',
        },
    });
    const mailOptions = {
        from: 'dannysnoop123@gmail.com',
        to: email,
        subject: 'Temporary password VIA',
        html: exports.mailTemplatePassword
            .replace('{{ username }}', email)
            .replace('{{ password }}', password),
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred while sending email:', error);
        }
        else {
            console.log('Email sent successfully:', info.response);
        }
    });
};
exports.mailSendPassword = mailSendPassword;
function generateRandomOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
exports.generateRandomOTP = generateRandomOTP;
const mailTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset OTP</title>
  <style>
    /* Inline CSS styles for the email template */
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333;
    }

    p {
      color: #666;
      line-height: 1.6;
    }

    strong {
      color: #007bff;
    }

    .footer {
      margin-top: 20px;
      font-size: 12px;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Password Reset OTP</h1>
    <p>Hello {{ username }},</p>
    <p>Your OTP for resetting the password is: <strong>{{ otp }}</strong></p>
    <p>Please use this OTP to reset your password. This OTP is valid for 10 minutes.</p>
    <p>If you didn't request a password reset, please ignore this email.</p>
    <div class="footer">
      <p>Best regards,<br>VIA Team</p>
    </div>
  </div>
</body>
</html>`;
exports.mailTemplatePassword = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Our Platform</title>
  <style>
    /* Inline CSS styles for the email template */
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333;
    }

    p {
      color: #666;
      line-height: 1.6;
    }

    .password {
      background-color: #f8f9fa;
      padding: 10px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 18px;
    }

    .cta-button {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to Our Platform</h1>
    <p>Dear {{ username }},</p>
    <p>Your account has been successfully created. Here is your temporary password:</p>
    <div class="password">{{ password }}</div>
    <p>Please log in using this password and change it immediately for security reasons.</p>
    <a href="#" class="cta-button">Log In Now</a>
    <p>If you have any questions or need assistance, feel free to contact us.</p>
    <p>Best regards,<br>Your Platform Team</p>
  </div>
</body>
</html>`;
//# sourceMappingURL=send-email-reset-password.js.map
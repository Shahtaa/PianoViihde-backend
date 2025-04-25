const express = require('express');
const morgan = require('morgan');  // Подключаем morgan
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();


// Настроим morgan для логирования HTTP-запросов
const app = express();
app.use(morgan('combined'));  // Используем формат 'combined', который включает все детали запроса

// Configuring transport for sending emails
const transporter = nodemailer.createTransport({
  host: 'smtp.forwardemail.net',  // SMTP-сервер для Forward Email
  port: 2525,  // Используем порт 465 для SSL
  secure: false,  // Включаем SSL
  auth: {
    user: process.env.EMAIL_USER,  // В твоем случае это info@piano.symfosium.fi
    pass: process.env.EMAIL_PASS,  // Твой алиасный пароль от Forward Email
  },
});

// Handling POST request for sending an email
router.post('/', async (req, res) => {
  const { name, email, phone, subject, date, message } = req.body;
  const formattedPhone = phone?.startsWith('+') ? phone : `+${phone}`;


  console.log('Received form data:', {
    name,
    email,
    phone,
    subject,
    date,
    message,
  });

  try {
    // Checking if EMAIL_USER and EMAIL_PASS are loaded
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('EMAIL_USER or EMAIL_PASS is missing in environment variables');
    }

    // Email content
    const mailOptions = {
      from: `"Piano&Viihde's Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'info@piano.symfosium.fi',
      subject: `Uusi Keikkakysely: ${subject || 'No Subject'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${formattedPhone || 'Not provided'}
        Date: ${date || 'Not provided'}
        Message: ${message}
      `,  // Это текстовая версия для почтовых клиентов, которые не поддерживают HTML
      html: `
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body {
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 30px auto;
              background-color: #ffffff;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }
            .header {
              background-color: #2e86de;
              color: white;
              padding: 20px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              padding: 20px;
              line-height: 1.6;
              color: #333333;
            }
            .content p {
              margin: 10px 0;
            }
            .label {
              font-weight: bold;
            }
            .footer {
              padding: 15px;
              font-size: 12px;
              text-align: center;
              color: #999999;
              background-color: #f0f0f0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Uusi Keikkakysely</h1>
            </div>
            <div class="content">
              <p><span class="label">Nimi:</span> ${name}</p>
              <p><span class="label">Sähköposti:</span> ${email}</p>
              <p><span class="label">Puhelin:</span> ${formattedPhone || 'Ei ilmoitettu'}</p>
              <p><span class="label">Tapahtuman päivämäärä:</span> ${date || 'Ei ilmoitettu'}</p>
              <p><span class="label">Viesti:</span></p>
              <p>${message}</p>
            </div>
            <div class="footer">
              Tämä viesti on lähetetty verkkosivustosi lomakkeen kautta.<br>
              PianoSymfosium.fi
            </div>
          </div>
        </body>
      </html>
    `, // Это HTML-версия письма для пользователей, которые могут его просматривать
      replyTo: email,
    };
    

    // Sending email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.toString() });
  }
});

module.exports = router;

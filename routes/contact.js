const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// Проверяем, загружены ли переменные
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '*****' : 'Not set');

// Настройка транспорта для отправки email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Обработка POST-запроса для отправки email
router.post('/', async (req, res) => {
  const { name, email, phone, subject, date, message } = req.body;

  console.log('Received form data:', {
    name,
    email,
    phone,
    subject,
    date,
    message,
  });

  try {
    // Проверяем, загружены ли EMAIL_USER и EMAIL_PASS
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('EMAIL_USER or EMAIL_PASS is missing in environment variables');
    }

    // Содержание письма
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`, // Фиксируем "from"
      to: 'anton.devaaja@gmail.com', // Твой email
      subject: `New Message: ${subject || 'No Subject'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Date: ${date || 'Not provided'}
        Message: ${message}
      `,
      replyTo: email, // Это ОК, но from и replyTo не должны конфликтовать
    };

    // Отправляем email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.toString() });
  }
});

module.exports = router;

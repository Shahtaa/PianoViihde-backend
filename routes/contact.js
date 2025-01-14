const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

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

  console.log('Получены данные из контактной формы:', {
    name,
    email,
    phone,
    subject,
    date,
    message,
  });

  try {
    // Содержание письма
    const mailOptions = {
      from: email, // Email отправителя (из формы)
      to: 'anton.devaaja@gmail.com', // Ваш email для получения сообщений
      subject: `Новое сообщение: ${subject || 'Без темы'}`,
      text: `
        Имя: ${name}
        Email: ${email}
        Телефон: ${phone || 'Не указан'}
        Дата: ${date || 'Не указана'}
        Сообщение: ${message}
      `,
    };

    // Отправка email
    await transporter.sendMail(mailOptions);

    console.log('Email успешно отправлен');
    res.status(200).json({ message: 'Email успешно отправлен!' });
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
    res.status(500).json({ message: 'Ошибка при отправке email' });
  }
});

module.exports = router;

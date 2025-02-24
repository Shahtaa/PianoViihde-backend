const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// Checking if the variables are loaded
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '*****' : 'Not set');

// Configuring transport for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Handling POST request for sending an email
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
    // Checking if EMAIL_USER and EMAIL_PASS are loaded
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('EMAIL_USER or EMAIL_PASS is missing in environment variables');
    }

    // Email content
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`, 
      to: 'anton.devaaja@gmail.com', // YOur mail
      subject: `New Message: ${subject || 'No Subject'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Date: ${date || 'Not provided'}
        Message: ${message}
      `,
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

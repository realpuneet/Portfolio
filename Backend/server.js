require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  // Nodemailer configuration to send email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.RECIPIENT_EMAIL, // Sender's email from form data
    to: email, // Email to receive the messages
    subject: `Message from ${name}`,
    text: `Nam`, // Use the message field
  };

  // Sending email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Failed to send email.');
    }
    console.log('Email sent:', info.response);
    res.send('Email sent successfully.');
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
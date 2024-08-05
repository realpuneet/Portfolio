import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4m5rbeg', 'template_6afewdo', form.current, {
        publicKey: 'R7ZM5X8eDArdyv30C',
      })
      .then(
        () => {
          setAlertMessage('Message sent successfully!');
          setTimeout(() => {
            setAlertMessage('');
          }, 3000);
          form.current.reset();
        },
        (error) => {
          setAlertMessage(`Failed to send message: ${error.text}`);
          setTimeout(() => {
            setAlertMessage('');
          }, 3000);
        },
      );
  };

  const contact_info = [
    { logo: 'mail', text: 'puneety259@gmail.com' },
    { logo: 'logo-whatsapp', text: '+91 9399336702' },
    { logo: 'location', text: 'Nasrullaganj, India' },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 mx-auto md:p-6 p-3 rounded-lg">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="px-2 py-1"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="px-2 py-1"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={10}
              className="px-2 py-1"
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex gap-4 w-fit items-center">
                <div className="min-w-[3rem] min-h-[3rem] text-2xl flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-base">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
        {alertMessage && (
          <div className="alert mt-4 p-2 bg-cyan-600 text-white rounded">
            {alertMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

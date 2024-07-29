import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send', formData);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
      setTimeout(() => setStatus({ type: '', message: '' }), 3000); // Hide message after 3 seconds
      console.log(response.data);
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message' });
      setTimeout(() => setStatus({ type: '', message: '' }), 3000); // Hide message after 3 seconds
      console.error(error);
    }
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

        {status.message && (
          <p className={`text-white mt-4 ${status.type === 'error' ? 'bg-red-500' : 'bg-green-500'} p-2 rounded`}>
            {status.message}
          </p>
        )}

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 mx-auto md:p-6 p-3 rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-2 py-1"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-2 py-1"
              onChange={handleChange}
              value={formData.email}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              className="px-2 py-1"
              onChange={handleChange}
              value={formData.message}
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
      </div>
    </section>
  );
};

export default Contact;

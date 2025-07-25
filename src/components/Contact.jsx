import { useEffect, useState } from "react";
import Button from "../ui/Button";
import emailjs from "@emailjs/browser";

export default function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(" ");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (onSuccess, onError) => {
    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setIsSent("Please complete all fields");
      return;
    }

    emailjs
      .send(
        "service_o6nxh54",
        "template_rrwqfcp",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "70zcNCIby157J202Z"
      )
      .then((result) => {
        if (onSuccess) onSuccess(result);
      })
      .catch((error) => {
        if (onError) onError(error);
      });
  };

  const handleSubmit = () => {
    sendEmail(
      (res) => {
        console.log(res.text);
        setIsSent("Message sent successfully");
        // Clear after send
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (err) => {
        console.error(err.text);
        setIsSent("Something went wrong");
      }
    );

    setTimeout(() => {
      setIsSent(" ");
    }, 5000);
  };

  return (
    <section id={id} className="contact-container">
      <h2>Contact us</h2>
      <div className="input-container">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <textarea
        className="text-area"
        name="message"
        placeholder="Type message here..."
        value={formData.message}
        onChange={handleChange}
      />
      <div>
        <p>{isSent}</p>
      </div>
      <Button handler={handleSubmit}>Send</Button>
    </section>
  );
}

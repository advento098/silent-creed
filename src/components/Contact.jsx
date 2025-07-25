import { useState } from "react";
import Button from "../ui/Button";

export default function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    // console.log("Collected data:", formData);
    // Call your email API here (e.g., EmailJS, Nodemailer backend)

    setIsSent(true);
    // Clear after send
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setIsSent(false);
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
          placeholder="Email"
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
      <p>{isSent ? "Your message is sent!" : ""}</p>
      <Button handler={handleSubmit}>Send</Button>
    </section>
  );
}

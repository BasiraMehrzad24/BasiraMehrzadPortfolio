import { useEffect, useState } from "react";

function Contact() {
  useEffect(() => {
    const savedName = localStorage.getItem("name");

    const savedEmail = localStorage.getItem("email");

    const savedMessage = localStorage.getItem("message");

    if (savedName) setName(savedName);

    if (savedEmail) setEmail(savedEmail);

    if (savedMessage) setMessage(savedMessage);

    if (savedName || savedEmail || savedMessage) {
      setHasSavedData(true);
    }
  }, []);

  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  const [email, setEmail] = useState("");
  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  const [message, setMessage] = useState("");
  useEffect(() => {
    localStorage.setItem("message", message);
  }, [message]);

  // staets
  const [hasSavedData, setHasSavedData] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [showToast, setShowToast] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit() {
    let valid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      valid = false;
    } else {
      setMessageError("");
    }

    if (valid) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("message");

      setHasSavedData(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <>
      {hasSavedData && (
        <p className="saved-hint">📌 You have an unsent message saved.</p>
      )}
      <section className="contact">
        <h2>Contact me!</h2>

        <div className="contact-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (e.target.value.trim()) {
                  setNameError("");
                }
              }}
            />
            {nameError && <p className="error">{nameError} </p>}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value.trim()) {
                  setEmailError("");
                }
              }}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>

          <div className="form-group">
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (e.target.value.trim()) {
                  setMessageError("");
                }
              }}
            />
            {messageError && <p className="error">{messageError}</p>}
          </div>

          <button onClick={handleSubmit}>Send Message</button>
        </div>

        {showToast && <div className="toast"> message sent successfully!</div>}
      </section>
      <div className="preview-card">
        <div className="preview-header">
          <span>💬</span>
          <h3>Message Preview</h3>
        </div>

        <div className="preview-item">
          <label>Name</label>
          <p>{name || "Your name will appear here"}</p>
        </div>

        <div className="preview-item">
          <label>Email</label>
          <p>{email || "your@email.com"}</p>
        </div>

        <div className="preview-item">
          <label>Message</label>
          <p>{message || "Start typing your message..."}</p>
        </div>
      </div>
    </>
  );
}

export default Contact;

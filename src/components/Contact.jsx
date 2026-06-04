import { useEffect, useState } from "react";

function Contact() {
  // this useEffect use for get name email and message for showing them in perview
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

  // this part is set the state for name email and msg
  // useEffects are foe saving the inputs to browser local storage

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
  const [emailHint, setEmailHint] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!email) {
        setEmailHint("");
        return;
      }
      const emailRegex = /\S+@\S+\.\S+/;
      if (emailRegex.test(email)) {
        setEmailHint("Valid Email");
      } else {
        setEmailHint("Please enter a valid email");
      }
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [email]);

  // state for toast that appear for 3 second
  const [showToast, setShowToast] = useState(false);

  // check the type of email
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // this function use for validation , and show toast if it's send message successfully
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

      // this part remove the form after successful submition
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
      <section className="contact" id="contact">
        <h2>Contact me!</h2>
        {hasSavedData && (
          <p className="saved-hint">📌 You have an unsent message saved.</p>
        )}
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
            {emailHint && (
              // this part check if the email is a valid type or not and show msg under input
              <p
                className={`email-hint ${
                  emailHint === "Valid Email" ? "success" : "error"
                }`}
              >
                {emailHint}
              </p>
            )}
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

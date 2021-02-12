import { useState } from "react";
import { motion } from "framer-motion";
function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [email, message];
    const header = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    setSent(true);
    fetch("/contact", header)
      .then((response) => response.json())
      .catch((err) => console.error(err.message));
  };
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1>Contact</h1>
        <p>
          For bulk orders, questions, comments or concerns, please send us a
          message!
        </p>
        {!sent ? (
          <div>
            <form style={styles.form} onSubmit={() => handleSubmit()}>
              <input
                placeholder="Email"
                onChange={onEmailChange}
                type="email"
                name="email"
                value={email}
                style={styles.inputTop}
              />

              <input
                placeholder="Message"
                onChange={onMessageChange}
                type="text"
                name="projectType"
                value={message}
                style={styles.inputBottom}
              />

              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={handleSubmit}
                type="submit"
                style={styles.button}
              >
                Submit
              </motion.button>
            </form>
          </div>
        ) : (
          "We look forward to reading your message!"
        )}
      </div>
    </div>
  );
}

export default Contact;

const styles = {
  wrapper: {
    backgroundColor: "#3485BC",
    color: "#fff",
  },
  container: {
    padding: "5em",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputTop: {
    borderRadius: "5px 5px 0 0",
    borderBottom: ".5px solid #333",
    border: "1px",
  },
  inputBottom: {
    borderTop: ".5px solid #333",
    borderRadius: "0 0 5px 5px",
    border: "1px",
  },
  button: {
    background:
      "linear-gradient(82deg, rgba(141,200,74,1) 0%, rgba(52,133,188,1) 100%)",
    border: "none",
    padding: "4px 0",
    width: "211px",
    borderRadius: "5px",
  },
};

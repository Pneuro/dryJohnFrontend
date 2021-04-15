import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import "dotenv";
function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onMessageChange = (e) => setMessage(e.target.value);
  function handleSubmit(e) {
    const MAIL_USER = process.env.MAIL_USER;
    const MAIL_TEMPLATE_ID = process.env.MAIL_TEMPLATE_ID;
    const MAIL_SERVICE_ID = process.env.MAIL_SERVICE_ID;
    const MAIL_ACCESS_TOKEN = process.env.MAIL_ACCESS_TOKEN;

    init(MAIL_USER);
    e.preventDefault();

    emailjs
      .sendForm(MAIL_SERVICE_ID, MAIL_TEMPLATE_ID, e.target, MAIL_USER)
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const styles = {
    wrapper: {
      backgroundColor: "#3485BC",
      color: "#fff",
      position: "relative",
      zIndex: "1",
      padding: "8em 0 8em 0",
    },
    container: {
      padding: "5em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
                name="message"
                value={message}
                style={styles.inputBottom}
              />

              <motion.button
                whileHover={{ scale: 1.1 }}
                type="submit"
                style={styles.button}
              >
                Submit
              </motion.button>
            </form>
          </div>
        ) : (
          "Thanks!"
        )}
      </div>
    </div>
  );
}

export default Contact;

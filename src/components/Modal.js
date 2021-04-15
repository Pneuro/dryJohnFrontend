import { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

const MAIL_USER = process.env.MAIL_USER;
const MAIL_TEMPLATE_ID = process.env.MAIL_TEMPLATE_ID;
const MAIL_SERVICE_ID = process.env.MAIL_SERVICE_ID;
const MAIL_ACCESS_TOKEN = process.env.MAIL_ACCESS_TOKEN;
init(MAIL_USER);
console.log(process.env);
export default function Modal({ setModal }) {
  const [contactSent, setContactSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhoneChange = (e) => setPhone(e.target.value);
  const onMessageChange = (e) => setMessage(e.target.value);

  // Send POST request to backend to add data to database
  // const data = [name, email, phone, message];
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("/api/contact", headers).then(
  //     (res) =>
  //       res
  //         .json()
  //         .then((res) => console.log(res))
  //         .catch((err) => console.error(err))
  //   );

  //   setContactSent(true);
  //   setModal(false);
  // };
  // const headers = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // };
  
  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d75tve8",
        "dry_john",
        e.target,
        "user_rDK5kppEAA50sEtArxyPx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  const styles = {
    wrapper: {
      position: "absolute",
      background: "#222d",
      color: "#fff",
      zIndex: 4,
      width: "100vw",
      height: "100vh",
      zIndex: 50,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    input: {
      height: "25px",
      border: ".5px black solid",
      borderRadius: "5px",
      width: "350px",
      marginTop: "10px",
    },
    inputCheck: {
      height: "25px",
      border: ".5px black solid",
      borderRadius: "5px",
      display: "flex",

      marginTop: "10px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    close: {
      position: "absolute",
      top: "200px",
      right: "200px",
      margin: "50px",
      cursor: "pointer",
      zIndex: 50,
    },
    line1: {
      background: "#fff",
      width: "25px",
      height: "3px",
      margin: "3px",
      transform: "rotate(-45deg) translateY(4px)",
    },
    line2: {
      background: "#fff",
      width: "25px",
      height: "3px",
      margin: "3px",
      transform: "rotate(45deg)translateY(-4px)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div onClick={() => setModal(false)} style={styles.close}>
        <div style={styles.line1}></div>
        <div style={styles.line2}></div>
      </div>
      <div style={styles.container}>
        <h1>Contact</h1>
        {!contactSent ? (
          <form style={styles.form} onSubmit={handleSubmit} method="POST">
            <input
              style={styles.input}
              placeholder="Name"
              type="text"
              name="name"
              onChange={onNameChange}
            />
            <input
              style={styles.input}
              placeholder="Email Address"
              name="email"
              type="email"
              onChange={onEmailChange}
            />
            <input
              style={styles.input}
              placeholder="Phone Number"
              type="text"
              name="phone_number"
              onChange={onPhoneChange}
            />
            <input
              style={styles.input}
              name="message"
              placeholder="Message"
              type="textarea"
              onChange={onMessageChange}
            />

            <button type="submit">Submit</button>
          </form>
        ) : (
          <p>We will contact you as soon as possible!</p>
        )}
      </div>
    </div>
  );
}

import emailjs from "emailjs-com";
import { init } from "emailjs-com";

const MAIL_USER = process.env.MAIL_USER;
const MAIL_TEMPLATE_ID = process.env.MAIL_TEMPLATE_ID;
const MAIL_SERVICE_ID = process.env.MAIL_SERVICE_ID;
const MAIL_ACCESS_TOKEN = process.env.MAIL_ACCESS_TOKEN;

init(MAIL_USER);
export default function handleSubmit(e) {
  e.preventDefault();
  console.log("Event", process.env.MAIL_USER);
  emailjs.sendForm(MAIL_SERVICE_ID, MAIL_TEMPLATE_ID, e.target, MAIL_USER).then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
}

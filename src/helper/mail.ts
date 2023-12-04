import {
  NODEMAILER_SERVICE,
  SEND_MAIL_RESET_PASSWORD_CONTENT,
  SEND_MAIL_RESET_PASSWORD_SUBJECT,
  SEND_MAIL_VERYFY_EMAIL_CONTENT,
  SEND_MAIL_VERYFY_EMAIL_SUBJECT,
  SERVER_MAIL_ACCOUNT,
  SERVER_MAIL_PASSWORD,
} from "../config/mail.enum";
import getRandomCode from "./randomNumber";

const nodemailer = require("nodemailer");

const sendMailVerifyAccount = (sendTo: string, idToken: string) => {
  const transporter = nodemailer.createTransport({
    service: NODEMAILER_SERVICE,
    auth: {
      user: SERVER_MAIL_ACCOUNT,
      pass: SERVER_MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: SERVER_MAIL_ACCOUNT,
    to: sendTo,
    subject: SEND_MAIL_VERYFY_EMAIL_SUBJECT,
    text: `${SEND_MAIL_VERYFY_EMAIL_CONTENT}\n${process.env.URL_BASE}/verifyToken/${idToken}`,
  };

  transporter.sendMail(mailOptions, function (error: Error, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const sendMailResetPassword = (sendTo: string, code: string) => {
  const transporter = nodemailer.createTransport({
    service: NODEMAILER_SERVICE,
    auth: {
      user: SERVER_MAIL_ACCOUNT,
      pass: SERVER_MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: SERVER_MAIL_ACCOUNT,
    to: sendTo,
    subject: SEND_MAIL_RESET_PASSWORD_SUBJECT,
    text: `${SEND_MAIL_RESET_PASSWORD_CONTENT}${code}`,
  };

  transporter.sendMail(mailOptions, function (error: Error, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const sendMail = { sendMailVerifyAccount, sendMailResetPassword };

export default sendMail;

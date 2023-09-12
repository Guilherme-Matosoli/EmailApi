import nodemailer from "nodemailer";

const { EMAIL, PASSWORD } = process.env;

export const transporter = nodemailer.createTransport({
  host: 'smtp.elasticemail.com', 
  port: 2525,
  secure: false, 
  auth: {
    user: EMAIL, 
    pass: PASSWORD,
  },
});
import { Request, Response } from "express";
import { transporter } from "../services/nodeMailer";

export class SendMailController{
  async send( req: Request, res: Response ){
    await transporter.sendMail({
      from: '"Guilherme Matos" <guilhermematosgto2015@outlook.com>',
      to: "guilhermematosgto2015@outlook.com",
      replyTo: "brunaalvess22267@gmail.com",
      subject: "kk",
      text: "teste"
    })

    res.status(200).send()
  };
}
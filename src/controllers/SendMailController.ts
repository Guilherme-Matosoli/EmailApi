import { Request, Response } from "express";
import { transporter } from "../services/nodeMailer";

export class SendMailController{
  async send( req: Request, res: Response ){
    try{
      const { mail, name, subject, message } = req.body;

      if(!mail || !name || !subject || !message){
        return res.status(442).json( { message: "Missing fields" } )
      };
  
      await transporter.sendMail({
        from: '"Guilherme Matos" <guilhermematosgto2015@outlook.com>',
        to: mail,
        replyTo: mail,
        subject: `${ subject } - ${ mail }`,
        text: message
      });
  
      res.status(201).send( { status: "success" } )
    }
    catch(err){
      console.log(err)
      return res.status(500).json( { message: "Internal Server Error" } )
    }
  }
}
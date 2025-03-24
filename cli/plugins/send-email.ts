import { createTransport } from 'nodemailer'
import { input } from '../utils'

export default async function sendEmail() {
  try {
    const username = await input('')
    const passwd = await input('')

    const transport = createTransport({
      host:'',
      port:587,
      secure:false,
      auth:{
        user:'',
        pass:''
      }    
    })
  
    const sentMessageInfo = await transport.sendMail({
      from:'',
      to:'',
      subject:'',
      text:''
    })
  } catch(e) {

  }

}

import { createInterface } from 'node:readline'
import { stdin, stdout } from 'node:process'
import { writeFile } from 'node:fs/promises'
import { promisify } from 'node:util'
import { TextToSpeechClient } from '@google-cloud/text-to-speech'
import say from 'say'

export function input(query:string):Promise<string> {
  return new Promise((resolve, reject)=>{
    const r = createInterface({ input:stdin, output:stdout })
    
    r.question(query, answer=>{
      resolve(answer)
    })
  })
}

export async function speak(text:string, filepath?:string) {
  if(filepath) {
    const client = new TextToSpeechClient()

    const [ speechResponse ] = await client.synthesizeSpeech({
      input:{text},
      voice:{
        languageCode:'en-US',
        ssmlGender:'NEUTRAL'
      },
      audioConfig:{
        audioEncoding:'MP3'
      }
    })

    await writeFile('./greet.mp3', speechResponse.audioContent, 'binary')

  } else {
    say.speak(text, 'Good News', 1.0, (err:string)=>{
      if(err) {
        console.error(err)
      }
    })
  }
}


import { createInterface } from 'node:readline'
import { stdin, stdout } from 'node:process'

export function input(query:string) {
  return new Promise((resolve, reject)=>{
    const r = createInterface({ input:stdin, output:stdout })
    
    r.question(query, answer=>{
      r.close()
      resolve(answer)
    })
  })
}

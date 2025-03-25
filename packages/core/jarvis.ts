import { verifyAuth } from './verify'
import { speak, input  } from './utils'

async function getUserCommand() {
  const userInput = await input('> ')
  return userInput
}

const manual = {
  'are you there':'Yes Sir, at your service',
  'who made you':'Yes Sir, my master build me in AI',

}

class Jarvis {
  async greet() {
    await speak('I am jarvis. Please tell me how can I help you sir ?')
  }

  executeOnce(command:string) {
    for(const pattern in manual) {
      if(command.includes(pattern)) {
        speak(manual[pattern])
      }
    }
    process.exit()
  }

  cmdLoop() {
    while(true) {
      break
    }
  }

  async executor(command:string) {
    if(!verifyAuth()) return

    if(command) {
      this.executeOnce(command)
    } else {
      this.cmdLoop()
    }
  }
}

export async function wakeUpJarvis() {
  const bot = new Jarvis()
  await bot.greet()
  const command = await getUserCommand()
  bot.executor(command)
}

wakeUpJarvis()

export default Jarvis

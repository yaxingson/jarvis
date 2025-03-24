class Jarvis {
  executeOnce(command:string) {
    process.exit()
  }

  cmdLoop() {
    while(true) {
      break
    }
  }

  async executor(command:string) {
    if(command) {
      this.executeOnce(command)
    } else {
      this.cmdLoop()
    }
  }
}

async function setup() {
  const jarvis = new Jarvis()
  const command = 'game'
  await jarvis.executor(command)
}

setup().catch(e=>{

})

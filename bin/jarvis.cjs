// cli/index.ts
var Jarvis = class {
  executeOnce(command) {
    process.exit();
  }
  cmdLoop() {
    while (true) {
      break;
    }
  }
  async executor(command) {
    if (command) {
      this.executeOnce(command);
    } else {
      this.cmdLoop();
    }
  }
};
async function setup() {
  const jarvis = new Jarvis();
  const command = "game";
  await jarvis.executor(command);
}
setup().catch((e) => {
});

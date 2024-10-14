import { EOL, arch, userInfo, homedir, cpus } from "os";

export const os = async (...params) => {
    const flag = params[0].trim();

    switch (flag) {
      case "--EOL":
        console.log(JSON.stringify(EOL));
        break;
      case "--cpus":
        const cp = cpus().map(({ model, speed }) => ({
          model,
          speed: speed * 0.001,
        }));
        console.table(cp);
        break;
      case "--homedir":
        console.log(homedir());
        break;
      case "--username":
        console.log(userInfo().username);
        break;
      case "--architecture":
        console.log(arch());
        break;
      default:
        throw new Error();
    }
};
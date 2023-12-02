import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { TOKEN_LIB, saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token doesn't exist");
    return;
  }
  try {
    await saveKeyValue("token", TOKEN_LIB.token);
    printSuccess("Token saved successfully");
  } catch (error) {
    printError(error.message);
  }
};

const startCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  
  if (args.s) {
    // save city
  }
  if (args.t) {
    return saveToken(args.t);
    // save token
  }

  getWeather('London')
};
startCLI();

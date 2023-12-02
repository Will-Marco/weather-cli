import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR:") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen("Success:") + " " + message);
};

const printHelp = () => {
  console.log(dedent`${chalk.bgYellow("HELP:")}
  -s: [CITY] for install city
  -h: for help
  -t: [API_KEY] for saving token 
`);
};

const printWeather = (response, icon) => {
  console.log(dedent`${chalk.bgCyanBright("WEATHER:")} ${response.name}'s weather 
	${icon}  ${response.weather[0].description}
	Temperature: ${response.main.temp}°C (feels like ${response.main.feels_like})
	Humidity: ${response.main.humidity}%
	Wind speed: ${response.wind.speed}
  `);
};

export { printError, printSuccess, printHelp, printWeather };

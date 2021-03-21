#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import application, { Option } from "commander";
import { generateStore, initStore } from "./actions/store.actions";
import { COMMANDS } from "./di/types/command.types";
import { createCommand } from "./factories/command.factory";

const bootstrap = () => {
	const PACKAGE_JSON = require(`${__dirname}/../package.json`);
	const VERSION = PACKAGE_JSON.version;
	const AUTHOR = PACKAGE_JSON.author;
	const HOMEPAGE = PACKAGE_JSON.homepage;

	application
		.version(VERSION, "-v, --version", "Output the current version.")
		.usage("<command> [options]")
		.helpOption("-h, --help", "Output usage information.");

	application.command("show-off").action(() => {
		const sign = figlet.textSync("empire", { font: "ANSI Shadow" });

		console.log(chalk.bold.blue(sign));
		console.log(`${chalk.bold.green("Author")}:\t ${chalk.cyan(AUTHOR)}`);
		console.log(`${chalk.bold.green("GitHub")}:\t ${chalk.cyan(HOMEPAGE)}`);
	});

	application
		.command("component <name>")
		.alias("c")
		.option("-C, --no-css-module", "Generate component without css-module.")
		.addOption(
			new Option(
				"-r, --redux <type>",
				"Generate component for connect to redux store."
			).choices(["state", "dispatch", "both"])
		)
		.action(createCommand(COMMANDS.GenerateComponent).execute);

	application
		.command("store <name>")
		.alias("s")
		.action(createCommand(COMMANDS.GenerateStore).execute);

	application.command("new-store").alias("ns").action(initStore);

	application
		.command("new <name>")
		.alias("n")
		.action(createCommand(COMMANDS.InitProject).execute);

	if (!process.argv.slice(2).length) {
		application.outputHelp();
	}

	application.parse(process.argv);
};

bootstrap();

#!/usr/bin/env node

import * as arg from "arg";
import { exit } from "process";
import { writeln } from "./output/write";

const args = arg.default({
  "--dryRun": Boolean,
  "--help": Boolean,
});

const exitProg = (exitCode: number) => {
  writeln(`createversion: exit with code ${exitCode}`);
  exit(exitCode);
};

if (args["--help"]) {
  writeln(`Help - createversion

  createversion [options]
  or
  npx @jecap/createversion [options]

Options

  --type            Currently only TypeScript is supported
  --dryRun          Run in dryMode. Nothing will be installed.
  --help            Show help
`);
  exitProg(0);
}

if (args["--dryRun"]) {
  writeln("ng-updater: Running in `dryRun` mode");
}

exitProg(0);

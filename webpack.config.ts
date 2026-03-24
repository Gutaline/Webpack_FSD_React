import path from "path";
import dotenv from "dotenv";
import { Configuration } from "webpack";
import { buildConfig } from "./configWebpack/buildConfig";
import { buildMode } from "./configWebpack/types/configTypes";

export default (argv: Configuration) => {
  const mode = argv.mode || buildMode.DEVELOPMENT;

  dotenv.config({
    path: path.resolve(__dirname, `.env.${mode}`),
  });

  const config: Configuration = buildConfig(mode as buildMode);

  return config;
};

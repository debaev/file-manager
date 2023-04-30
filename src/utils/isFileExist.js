import { existsSync } from "fs";
import { resolve } from "path";

export default function isFileExist(currentDir, srcPath) {
  const isFileExist = existsSync(resolve(currentDir, srcPath));

  return !isFileExist;
}
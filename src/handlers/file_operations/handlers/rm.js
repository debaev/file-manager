import { statSync, unlinkSync } from 'fs';
import { resolve } from 'path';

export default async function rm(currentDir, pathToFile) {
  const isFileExist = statSync(resolve(currentDir, pathToFile)).isFile();
  if (!isFileExist) throw Error;
  unlinkSync(resolve(currentDir, pathToFile));
};
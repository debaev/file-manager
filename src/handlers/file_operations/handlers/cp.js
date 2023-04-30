import { createReadStream, createWriteStream, statSync } from "fs";
import { resolve } from "path";

export default async function cp(currentDir, srcPath, destPath) {
    const isFileExist = statSync(resolve(currentDir, srcPath)).isFile();
    const isDirectoryExist = statSync(resolve(currentDir, destPath)).isDirectory();

    if (!isFileExist || !isDirectoryExist) throw Error;

    const fileToCopy = createReadStream(resolve(currentDir, srcPath));
    const destFilePath = createWriteStream(resolve(currentDir, destPath, srcPath));

    fileToCopy.pipe(destFilePath);
};
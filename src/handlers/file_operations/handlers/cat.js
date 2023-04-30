import { createReadStream, statSync } from "fs";
import { EOL } from "os";
import { resolve } from "path";

export default async function cat(currentDir, path) {
    const isFileExist = statSync(resolve(currentDir, path)).isFile();
    if (!isFileExist) throw Error;

    const readStream = createReadStream(resolve(currentDir, path), 'utf8');
    readStream.on('data', chunk => process.stdout.write(chunk));
    readStream.on('end', () => process.stdout.write(EOL));
};
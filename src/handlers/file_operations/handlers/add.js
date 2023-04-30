import { resolve } from 'path';
import { openSync } from 'fs';

export default async function add(currentDir, srcPath) {
	openSync(resolve(currentDir, srcPath), 'w');
};

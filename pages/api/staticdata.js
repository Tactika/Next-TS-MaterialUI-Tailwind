import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {

    const jsonDir = path.join(process.cwd(), "json");

    const fileContents = await fs.readFile(jsonDir + "/data.json", "utf8");

    res.status(200).json(JSON.parse(fileContents));
}
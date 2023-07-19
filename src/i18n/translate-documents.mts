import "dotenv/config";
import fs from "fs";
import path from "path";
const API_KEY = process.env.API_KEY_DEEPL ?? "";

const SOURCE_PATH = "src/blogposts";
const TARGET_PATH = "src/i18n/locales";

const language = "de";
const sourceFile = `${process.cwd()}/${SOURCE_PATH}/gut-feeling-estimates.md`;
const translatedDocument = await translateMarkdownDocument(
  sourceFile,
  language
);
const filename = path.basename(sourceFile);
const targetPath = `${process.cwd()}/${TARGET_PATH}/${language}/blogposts/${filename}`;
await fs.promises.mkdir(targetPath, { recursive: true });
await fs.promises.writeFile(
  `${targetPath}/${filename}`,
  translatedDocument,
  "utf8"
);

//translate a markdown do given by path with DeepL api leverage fetch api
async function translateMarkdownDocument(
  documentPath: string,
  targetLanguage: string
): Promise<string> {
  // Read the markdown document
  const document = await fs.promises.readFile(documentPath, "utf-8");

  // Translate the document using the DeepL API
  const response = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `DeepL-Auth-Key ${API_KEY}`,
    },
    body: JSON.stringify({
      text: [document],
      target_lang: targetLanguage,
      split_sentences: "1",
    }),
  });

  if (response.status !== 200) {
    console.log(await response.text());
    throw new Error(`DeepL API returned status ${response.status}`);
  }

  const responseObj = await response.json();
  return responseObj.translations[0].text;
}

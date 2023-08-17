import "dotenv/config";
import fs from "fs";
import path from "path";
const API_KEY = process.env.API_KEY_DEEPL ?? "";

const DIR = "blogposts";
const SOURCE_PATH = `src/i18n/locales/en/${DIR}`;
const TARGET_PATH = "src/i18n/locales";
const targetLanguage = "de";

const markdownFiles = await findMarkdownFiles(
  `${process.cwd()}/${SOURCE_PATH}`
);

//better to translate serially to not overload the service
markdownFiles.forEach(async (markdownFile) => {
  const filename = path.basename(markdownFile);
  const targetPath = `${process.cwd()}/${TARGET_PATH}/${targetLanguage}/${DIR}/`;
  const targetFile = `${targetPath}/${filename}`;

  //blocking is ok, as long as we process serially
  if (fs.existsSync(targetFile)) {
    console.log(`File ${targetFile} already exists, skipping`);
    return;
  }

  const translatedDocument = await translateMarkdownDocument(
    markdownFile,
    targetLanguage
  );

  await fs.promises.mkdir(targetPath, { recursive: true });
  await fs.promises.writeFile(targetFile, translatedDocument, "utf8");
});

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

async function findMarkdownFiles(directoryPath: string): Promise<string[]> {
  const files = await fs.promises.readdir(directoryPath);
  const markdownFiles = files.filter((file) => path.extname(file) === ".md");
  const markdownFilePaths = markdownFiles.map((file) =>
    path.join(directoryPath, file)
  );
  return markdownFilePaths;
}

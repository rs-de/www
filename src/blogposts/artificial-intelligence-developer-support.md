## Artificial Intelligence developer support: An example in 2023

Using new stuff in side projects is a good way to learn. In this post I will document usage of [Github Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) (GCC) while implementing some feature to my site.

### Context

Within my personal website there are blog posts written in [markdown](https://en.wikipedia.org/wiki/Markdown) format. Since technical IT documents are heavily influenced by english language writing such documents in english feels easier. But in order to be polite to none native english speaking users why not deliver such content in other languages? So I decided to offer translated versions, too.

### The MVP (minimum viable product)

Some documents written in english and formatted in markdown should be auto translated to a given set of languages.

### Development concept to get the MVP

1. Lookup markdown files in given directory
1. Lookup target languages the files should be translated to
1. Translate the files using a translation service for each target-language
1. Save the translated files to a given directory
1. Use the translated versions in the website

### Implementation with support of GCC and [DeepL api](https://www.deepl.com/pro-api)

At the time of writing this post, GCC was in preview and only available for [VSCode Insiders](https://code.visualstudio.com/insiders/).

#### Translation with DeepL api

The heart of the MVP is the translation of the markdown files, so lets start and create a script for it:

##### **translate-documents.ts**

```

```

It is empty, since I want to use GCC: Let AI do the initial work. So I just right clicked into the file in order to see how to start GCC (nowbody can remember all the commands, right?) and I got this:
![context menu to start GCC](/blog/ai-example-01.png)
I clicked **Start Code Chat** and got a chat dialog, where I could tell GCC what I want it to do:
![GCC chat dialog](/blog/ai-example-02.png)
It took about 5 seconds and GCC came up with this:

```
import fs from "fs";
import path from "path";
import axios from "axios";

const API_URL = "https://api-free.deepl.com/v2/translate";
const API_KEY = "YOUR_DEEPL_API_KEY";

async function translateMarkdownDocument(
  documentPath: string,
  targetLanguage: string
): Promise<string> {
  const document = fs.readFileSync(documentPath, "utf-8");
  const documentName = path.basename(documentPath);
  const documentExtension = path.extname(documentPath);
  const documentWithoutExtension = documentName.replace(documentExtension, "");
  const translatedDocumentPath = path.join(
    path.dirname(documentPath),
    `${documentWithoutExtension}_${targetLanguage}${documentExtension}`
  );

  const response = await axios.post(API_URL, null, {
    params: {
      auth_key: API_KEY,
      text: document,
      target_lang: targetLanguage,
      tag_handling: "xml",
      split_sentences: "none",
      preserve_formatting: "1",
      formality: "default",
    },
  });

  const translatedDocument = response.data.translations[0].text;
  fs.writeFileSync(translatedDocumentPath, translatedDocument);

  return translatedDocument;
}

```

Wow! Not bad.  
But this is a good example that the human user has to judge and adapt the result.
First, I did not like the usage of axios as http client, which would require to install it.
Since it is good to avoid extra packages I just told GCC to leverage node's build-in fetch api instead:

> translate a markdown document given by path with DeepL api leverage fetch api

After 2 sec. GCC came up with this:

```
import fs from "fs";
import path from "path";

const API_KEY = "YOUR_DEEPL_API_KEY";

//translate a markdown do given by path with DeepL api leverage fetch api
async function translateMarkdownDocument(
  documentPath: string,
  targetLanguage: string
): Promise<string> {
  // Read the markdown document
  const document = fs.readFileSync(documentPath, "utf-8");

  // Translate the document using the DeepL API
  const response = await fetch("https://api.deepl.com/v2/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      auth_key: API_KEY,
      text: document,
      target_lang: targetLanguage,
      tag_handling: "xml",
      split_sentences: "nonewlines",
    }),
  });

  return (await response.json()).translations[0].text;
}

// Example usage
const documentPath = "/path/to/markdown/document.md";
const targetLanguage = "DE"; // German
translateMarkdownDocument(documentPath, targetLanguage)
  .then((translatedDocument) => {
    console.log(translatedDocument);
  })
  .catch((error) => {
    console.error(error);
  });
```

Crazy, right? GCC even added an example usage of the function it created.

The next thing to correct was the mixture of sync and async code, since a synchronous call
is blocking the event loop and should be avoided. So I told GCC to make the function async, and voila GCC did it.

#### Does the translation function work?

The short answer: no. Following issues came up:

- Some basic error handling was missing
- The API_KEY is required to be sent as "Authorization" header
- The DeepL service URL was wrong (free version)
- The DeepL body parameters (tag_handling and split_sentences) did not work with markdown, the translated result lost it's new lines.
- The body parameter "text" was required to be an array of strings

It was not a big deal to fix the issues. Here is the working version:

```typescript
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
```

### Conclusion

_First:_ I will continue using GCC. It seems to save time, at least because getting
examples and hints is so close to the code.  
_But:_ The developer has to know what he is doing. I believe it does not make sense
to tell junior developers not to use it – since they will ;-) – But they should
carefully read the generated code and ask themselves "Do I understand the code?" and learn, if not.

And last but not least, here the [translated version (german)](/de/blog/artificial-intelligence-developer-support/)

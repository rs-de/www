## Unterstützung für Entwickler im Bereich der künstlichen Intelligenz: Ein Beispiel im Jahr 2023

Die Verwendung neuer Dinge in Nebenprojekten ist ein guter Weg, um zu lernen. In diesem Beitrag werde ich die Verwendung von [Github Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) (GCC) bei der Implementierung einiger Funktionen auf meiner Website dokumentieren.

### Kontext

Auf meiner persönlichen Website gibt es Blogbeiträge, die im [markdown](https://en.wikipedia.org/wiki/Markdown) Format geschrieben sind. Da technische IT-Dokumente stark von der englischen Sprache beeinflusst sind, ist es einfacher, solche Dokumente in Englisch zu schreiben. Aber um den nicht Englisch sprechenden Nutzern gegenüber höflich zu sein, warum nicht solche Inhalte in anderen Sprachen anbieten? Also habe ich beschlossen, auch übersetzte Versionen anzubieten.

### Das MVP (minimum viable product)

Einige Dokumente, die in Englisch geschrieben und in Markdown formatiert sind, sollten automatisch in eine bestimmte Anzahl von Sprachen übersetzt werden.

### Entwicklungskonzept zur Erstellung des MVP

1. Nachschlagen von Markdown-Dateien im angegebenen Verzeichnis
1. Nachschlagen der Zielsprachen, in die die Dateien übersetzt werden sollen
1. Übersetze die Dateien mit Hilfe eines Übersetzungsdienstes für jede Zielsprache
1. Speichern Sie die übersetzten Dateien in einem bestimmten Verzeichnis
1. Verwenden Sie die übersetzten Versionen auf der Website

### Implementierung mit Unterstützung von GCC und [DeepL api](https://www.deepl.com/pro-api)

Zum Zeitpunkt der Erstellung dieses Beitrags war GCC in der Vorschau und nur für [VSCode Insider](https://code.visualstudio.com/insiders/) verfügbar.

#### Übersetzung mit DeepL api

Das Herzstück des MVP ist die Übersetzung der Markdown-Dateien, also fangen wir an und erstellen ein Skript dafür:

##### **translate-documents.ts**

```

```

Sie ist leer, da ich GCC verwenden möchte: Lass AI die erste Arbeit machen. Also habe ich einfach mit der rechten Maustaste in die Datei geklickt, um zu sehen, wie man GCC startet (jeder kann sich doch alle Befehle merken, oder?) und ich bekam das hier:
![Kontextmenü zum Starten von GCC](/blog/ai-example-01.png)
Ich klickte auf **Start Code Chat** und bekam einen Chat-Dialog, in dem ich GCC sagen konnte, was ich tun wollte:
![GCC Chat-Dialog](/blog/ai-example-02.png)
Es dauerte etwa 5 Sekunden und GCC zeigte mir folgendes an:

```
import fs from "fs";
import path von "path";;
import axios aus "axios";

const API_URL = "https://api-free.deepl.com/v2/translate";
const API_KEY = "YOUR_DEEPL_API_KEY";

async-Funktion translateMarkdownDocument(
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
      split_sentences: "keine",
      preserve_formatting: "1",
      Formalität: "default",
    },
  });

  const translatedDocument = response.data.translations[0].text;
  fs.writeFileSync(translatedDocumentPath, translatedDocument);

  return translatedDocument;
}

```

Wow! Nicht schlecht.  
Aber dies ist ein gutes Beispiel dafür, dass der menschliche Benutzer das Ergebnis beurteilen und anpassen muss.
Zunächst gefiel mir die Verwendung von axios als http-Client nicht, da dies eine Installation erfordern würde.
Da es gut ist, zusätzliche Pakete zu vermeiden, habe ich GCC angewiesen, stattdessen die in Node eingebaute fetch api zu nutzen:

> übersetze ein durch Pfad angegebenes Markdown-Dokument mit DeepL api leverage fetch api

Nach 2 Sek. kam GCC mit diesem Ergebnis an:

```
import fs aus "fs";
import path from "path";

const API_KEY = "YOUR_DEEPL_API_KEY";

//Übersetzen eines durch path angegebenen Markdown-Dokuments mit DeepL api leverage fetch api
async Funktion translateMarkdownDocument(
  documentPath: string,
  targetLanguage: string
): Promise<string> {
  // Lesen des Markdown-Dokuments
  const document = fs.readFileSync(documentPath, "utf-8");

  // Übersetzen des Dokuments mit der DeepL API
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

// Beispielverwendung
const documentPath = "/pfad/zu/markdown/document.md";
const targetLanguage = "DE"; // Deutsch
translateMarkdownDocument(documentPath, targetLanguage)
  .then((translatedDocument) => {
    console.log(translatedDocument);
  })
  .catch((error) => {
    console.error(error);
  });
```

Verrückt, oder? Der GCC hat sogar ein Beispiel für die Verwendung der von ihm erstellten Funktion hinzugefügt.

Als Nächstes musste die Mischung aus synchronem und asynchronem Code korrigiert werden, da ein synchroner Aufruf
die Ereignisschleife blockiert und vermieden werden sollte. Also habe ich GCC angewiesen, die Funktion asynchron zu machen, und voila, GCC hat es getan.

#### Funktioniert die Übersetzungsfunktion?

Die kurze Antwort: nein. Folgende Probleme traten auf:

- Einige grundlegende Fehlerbehandlungen fehlten
- Der API_KEY muss als "Authorization"-Header gesendet werden
- Die URL des Dienstes DeepL war falsch (kostenlose Version)
- Die DeepL body-Parameter (tag_handling und split_sentences) funktionierten nicht mit markdown, das übersetzte Ergebnis verlor seine neuen Zeilen.
- Der Body-Parameter "text" musste ein Array von Strings sein

Es war keine große Sache, die Probleme zu beheben. Hier ist die funktionierende Version:

```Typescript
//Übersetzen eines Markdown-Dokuments, das über den Pfad angegeben wurde, mit DeepL api leverage fetch api
async Funktion translateMarkdownDocument(
  documentPath: string,
  targetLanguage: string
): Promise<string> {
  // Lesen des Markdown-Dokuments
  const document = await fs.promises.readFile(documentPath, "utf-8");

  // Übersetzen des Dokuments mit der DeepL API
  const response = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Autorisierung: `DeepL-Auth-Key ${API_KEY}`,
    },
    body: JSON.stringify({
      text: [document],
      target_lang: targetLanguage,
      split_sentences: "1",
    }),
  });

  if (response.status !== 200) {
    console.log(await response.text());
    throw new Error(`DeepL API liefert Status ${response.status}`);
  }

  const responseObj = await response.json();
  return responseObj.translations[0].text;
}
```

### Schlussfolgerung

Erstens:_ Ich werde weiterhin GCC verwenden. Es scheint Zeit zu sparen, zumindest weil man
Beispielen und Hinweisen so nah am Code ist.  
Aber:_ Der Entwickler muss wissen, was er tut. Ich glaube, es macht keinen Sinn
jungen Entwicklern zu sagen, dass sie es nicht benutzen sollen - denn sie werden es tun ;-) - Aber sie sollten
den generierten Code sorgfältig lesen und sich fragen "Verstehe ich den Code?" und lernen, wenn nicht.

import { GetStaticPropsContext } from "next";
import fs from "fs/promises";
import { blogposts } from "@/i18n/locales/en/blogposts";

export async function loadMarkdown(
  context: GetStaticPropsContext,
  file: { name?: string; dir: string } = { dir: "blogposts" },
) {
  const locale = context.locale;
  const id = file.name ?? encodeURIComponent(String(context.params?.id ?? ""));

  if (!file.name && !blogposts.find((post) => post.id === id)) {
    throw new Error("Not found");
  }

  if (locale && locale !== "en") {
    return await fs.readFile(
      `./src/i18n/locales/${locale}/${file.dir}/${id}.md`,
      "utf8",
    );
  } else {
    return await fs.readFile(
      `./src/i18n/locales/en/${file.dir}/${id}.md`,
      "utf8",
    );
  }
}

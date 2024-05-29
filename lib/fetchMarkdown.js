import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const projectDirectory = path.join(process.cwd(), "projects");

export function getSortedProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(projectDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const slug = fileName.replace(/\.md$/, "");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const htmlContent = marked(matterResult.content);

    return {
      content: htmlContent,
      slug,
      ...matterResult.data,
    };
  });
  // Sort posts by id
  return allProjectsData.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

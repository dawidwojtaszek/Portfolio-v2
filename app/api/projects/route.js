import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projectDirectory = path.join(process.cwd(), "projects");
    const fileNames = fs.readdirSync(projectDirectory);
    const allProjectsData = fileNames.map((fileName) => {
      const fullPath = path.join(projectDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const slug = fileName.replace(/\.md$/, "");

      const matterResult = matter(fileContents);
      const htmlContent = marked(matterResult.content);

      return {
        content: htmlContent,
        slug,
        ...matterResult.data,
      };
    });
    console.log("asd;lfkljasd;lfkj");
    console.log(allProjectsData);

    return NextResponse.json({
      success: true,
      data: allProjectsData,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

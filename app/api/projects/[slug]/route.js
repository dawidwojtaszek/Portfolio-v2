import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { NextResponse } from "next/server";

export async function GET(res, req) {
  const { slug } = req.params;
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
    const project = allProjectsData.filter((e) => e.slug === slug);
    return NextResponse.json({
      success: true,
      data: project.length != 0 ? project : null,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

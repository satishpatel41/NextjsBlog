import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, content} = await request.json();
  await connectMongoDB();
  await Blog.create({ title, content});
  return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find();
  return NextResponse.json({ blogs });
}

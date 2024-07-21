// Package imports
import { NextResponse } from "next/server";

// Local imports
import useDB from "@/app/actions/db";
import { NextErrorHandler } from "../errorHandler";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name } = body;
    const db = useDB();

    await db.executeQuery("INSERT INTO users (name) VALUES ($1)", [name]);

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextErrorHandler(error);
  }
}

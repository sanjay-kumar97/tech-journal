// Package imports
import { NextResponse } from "next/server";

// Local imports
import { useDB } from "../../actions/db";
import { NextErrorHandler } from "../errorHandler";

export async function POST(request) {
  try {
    const db = await useDB();
    const body = await request.json();
    const { name } = body;

    await db.executeQuery("INSERT INTO users (name) VALUES ($1)", [name]);

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextErrorHandler(error);
  }
}

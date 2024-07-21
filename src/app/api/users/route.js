// Package imports
import { NextResponse } from "next/server";

// Local imports
import useDB from "@/app/actions/db";
import { NextErrorHandler } from "../errorHandler";

export async function GET() {
  try {
    const db = useDB();
    const users = await db.executeQuery("SELECT * FROM users");

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextErrorHandler(error);
  }
}

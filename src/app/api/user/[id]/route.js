// Package imports
import { NextResponse } from "next/server";

// Local imports
import { useDB } from "../../actions/db";
import { NextErrorHandler } from "../../errorHandler";

export async function GET(_request, { params }) {
  try {
    const { id: userId } = params;

    if (!userId) throw new Error("Missing userId");

    const db = useDB();
    const user = await db.executeQuery("SELECT * FROM users WHERE id = ($1)", [
      userId,
    ]);

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextErrorHandler(error);
  }
}

export async function DELETE(_request, { params }) {
  try {
    const { id: userId } = params;

    if (!userId) throw new Error("Missing userId");

    const db = useDB();
    await db.executeQuery("DELETE FROM users WHERE id = ($1)", [userId]);

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextErrorHandler(error);
  }
}

export async function PATCH(request, { params }) {
  try {
    const { id: userId } = params;

    if (!userId) throw new Error("Missing userId");

    const body = await request.json();
    const { name } = body;

    const db = useDB();
    await db.executeQuery("UPDATE users SET name = ($1) WHERE id = ($2)", [
      name,
      userId,
    ]);

    return NextResponse.json(
      { message: "User modified successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextErrorHandler(error);
  }
}

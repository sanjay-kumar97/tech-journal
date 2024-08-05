import { NextResponse } from "next/server";

export const NextErrorHandler = (error) => {
  console.log("Error in Next API: ", error);
  return NextResponse.json(
    { error: error?.message || "Internal Server Error" },
    { status: 500 }
  );
};

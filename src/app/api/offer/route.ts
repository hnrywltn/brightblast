import { NextRequest, NextResponse } from "next/server";
import offer from "../../../utility/data/offer";

export async function POST(req: NextRequest) {
  return NextResponse.json(offer);
}

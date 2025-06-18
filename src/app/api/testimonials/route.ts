import { NextRequest, NextResponse } from "next/server";
import testimonials from "../../../utility/data/testimonials";

export async function POST(req: NextRequest) {
  return NextResponse.json(testimonials);
}

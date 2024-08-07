import { NextResponse } from "next/server";
import prisma from "@repo/db/client";

export const GET = async () => {
  await prisma.user.create({
    data: {
      email: "shre@gmail.com",
      name: "shree",
    },
  });
  return NextResponse.json({
    message: "hi there",
  });
};

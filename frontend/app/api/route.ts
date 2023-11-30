import User from "../models/user";
import connect from "../utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, username } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }
  const newUser = new User({
    email,
    username,
  });

  try {
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
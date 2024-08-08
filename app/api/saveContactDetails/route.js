import connectDB from "@/db/connectDB";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(request) {
    try {
        await connectDB();

        const { name, email, message } = await request.json();

        // Check if all fields are provided
        if (!name || !email || !message) {
            return NextResponse.json({error: "All fields are required" }, { status: 400 });
        }

        // Check if a message from this email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: `You have already sent a message.\n I will get back to you as soon as possible.` }, { status: 400 }); // Use 409 Conflict
        }

        // Save the new message
        const user = new User({ name, email, message });
        await user.save();

        return NextResponse.json({ success: true, message: `Thank you for contacting me.\n I will get back to you as soon as possible.` }, { status: 200 });

    } catch (error) {
        console.error("Error handling request:", error); // Log the error for debugging
        return NextResponse.json({error: "An unexpected error occurred. Please try again later." }, { status: 500 });
    }
}

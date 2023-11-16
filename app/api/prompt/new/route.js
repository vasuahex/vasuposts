import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { useSession } from "next-auth/react";

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();
    const { data: session } = useSession();

    try {
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });
        if (session === undefined || session === null) {
            await newPrompt.save();
        }
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}

import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import nodemailer from "nodemailer"
export const GET = async (request) => {
    try {
        await connectToDB()
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "bandari.ajaykumar2001@gmail.com",
                pass: "krdf yvaa hptc lzzy",
            },
        });
        const mailOptions = {
            // from: "venugopalreddy9493@gmail.com",
            // to: "venugopalreddy9493@gmail.com",
            subject: "Login with otp",
            html: `Enter this   OPT to verifying the user<b></b>`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent:' + info.response);
            }
        })

        const prompts = await Prompt.find({}).populate('creator')

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 
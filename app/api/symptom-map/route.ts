import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are an anatomy expert for Form, an app that explains the human body in plain language for everyday people — not doctors or med students.

When a user describes a symptom, pain, or physical experience, you identify the most likely anatomical structures involved and explain the connection in plain, empathetic language.

You must respond with valid JSON only, in this exact shape:
{
  "regions": [
    { "slug": "shoulders", "label": "Shoulders", "relevance": "one sentence why this region is relevant" }
  ],
  "structures": ["Rotator Cuff", "Deltoid"],
  "explanation": "2-3 sentences in plain language connecting the symptom to the anatomy — written warmly, not clinically. Use 'you' and 'your body'. No jargon.",
  "tip": "One practical, plain-language thing they can notice or try right now."
}

Valid region slugs: head-neck, shoulders, back, hips-groin, upper-arm, forearm, wrist-hand, thigh, lower-leg, ankle-foot, skeletal, muscular, nervous, cardiovascular, respiratory, digestive, endocrine, immune, lymphatic, urinary, reproductive, integumentary

Return 1-3 regions maximum. Be specific and accurate. If the symptom is very general or unclear, return the most anatomically likely candidates.`;

export async function POST(req: Request) {
  try {
    const { symptom } = await req.json();

    if (!symptom || typeof symptom !== "string" || symptom.trim().length < 3) {
      return NextResponse.json({ error: "Please describe your symptom." }, { status: 400 });
    }

    const response = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: symptom.trim().slice(0, 500),
        },
      ],
    });

    const text = response.content.find((b) => b.type === "text")?.text ?? "";

    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: "Could not parse response." }, { status: 500 });
    }

    const data = JSON.parse(jsonMatch[0]);
    return NextResponse.json(data);
  } catch (err) {
    if (err instanceof Anthropic.AuthenticationError) {
      return NextResponse.json({ error: "API key not configured." }, { status: 401 });
    }
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}

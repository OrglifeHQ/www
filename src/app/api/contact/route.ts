import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();

    if (
        data &&
        data.name &&
        data.email &&
        data.phone &&
        data.subject &&
        data.message
    ) {
        return new Response(
            JSON.stringify({
                success: true,
            }),
            {
                status: 201,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    return new Response(
        JSON.stringify({
            success: false,
            message: "Something went wrong!",
        }),
        {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}

import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { API_URL, PUBLISH } from '@/components/endpoint';

export async function POST(request: NextRequest, response: NextResponse) {
    const cookieStore = cookies();
    let api;
    const body = await request.json();

    try {
        api = await axios.post(
            API_URL + PUBLISH,
            { ...body },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            },
        );

        if (api.status === 200) {
            const response = NextResponse.json(
                {
                    code: 200,
                    ...api.data,
                },
                { status: 200 },
            );
            return response;
        }
    } catch (err: any) {
        return NextResponse.json(
            {
                code: err?.response?.status,
                ...err?.response?.data,
            },
            { status: err?.response?.status },
        );
    }
}

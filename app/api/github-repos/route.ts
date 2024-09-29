import { NextResponse } from 'next/server';
import { Octokit } from "@octokit/core";

// Cache the response for 1 hour (3600 seconds)
export const revalidate = 3600;

export async function GET() {
  const token = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;
  const octokit = new Octokit({
    auth: token
  });

  try {
    const response = await octokit.request('GET /users/SidhantCodes/repos', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return NextResponse.json({ error: 'Failed to fetch repositories' }, { status: 500 });
  }
}

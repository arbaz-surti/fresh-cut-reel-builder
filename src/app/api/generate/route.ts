import { NextRequest, NextResponse } from 'next/server';

// Allow larger body sizes for image uploads
export const dynamic = 'force-dynamic';

// Extend timeout to 60s (max for Vercel Hobby plan)
// n8n workflow needs ~40-50s for image upload + video generation + caption
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const image = formData.get('image') as File | null;
    const description = formData.get('description') as string | null;

    // Validate inputs
    if (!image) {
      return NextResponse.json(
        { success: false, error: 'Image is required' },
        { status: 400 }
      );
    }

    if (!description || description.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Description is required' },
        { status: 400 }
      );
    }

    // Get webhook URL from environment
    const webhookUrl = process.env.N8N_GENERATE_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('N8N_GENERATE_WEBHOOK_URL is not configured');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Forward to n8n webhook
    const n8nFormData = new FormData();
    n8nFormData.append('data', image);
    n8nFormData.append('description', description);

    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: n8nFormData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('n8n webhook error:', errorText);
      return NextResponse.json(
        { success: false, error: 'Failed to generate reel. Please try again.' },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Generate API error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

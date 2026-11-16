import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get('title') || 'Different Type of Vibe';
    const subtitle = searchParams.get('subtitle') || searchParams.get('artist') || 'Untagged Beat Leases & VIP Pass';
    const metaInfo = searchParams.get('meta') || searchParams.get('bpm') || '24-Bit Studio WAV • Stems Trackout';
    const badge = searchParams.get('badge') || 'PRODUCED BY ONZIEB';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#090514',
            backgroundImage: 'radial-gradient(circle at 25% 25%, #2e1065 0%, #090514 65%)',
            padding: '60px 70px',
            fontFamily: 'sans-serif',
            color: '#ffffff',
            border: '8px solid #3b1464',
          }}
        >
          {/* Top Bar: Brand & Producer Badge */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  fontWeight: 'bold',
                }}
              >
                V
              </div>
              <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '3px', color: '#c084fc' }}>
                DIFFERENT TYPE OF VIBE
              </span>
            </div>
            <div
              style={{
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                border: '1px solid rgba(168, 85, 247, 0.5)',
                color: '#d8b4fe',
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '6px 16px',
                borderRadius: '999px',
                letterSpacing: '1px',
              }}
            >
              {badge.toUpperCase()}
            </div>
          </div>

          {/* Center: Title & Subtitle */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h1
              style={{
                fontSize: title.length > 35 ? '48px' : '58px',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-1px',
                maxWidth: '1000px',
              }}
            >
              {title}
            </h1>
            <p style={{ fontSize: '26px', color: '#a78bfa', margin: 0, fontWeight: 500 }}>
              {subtitle}
            </p>
          </div>

          {/* Bottom Tags Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', gap: '14px' }}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#e9d5ff',
                  fontSize: '15px',
                  padding: '8px 18px',
                  borderRadius: '10px',
                  fontWeight: 600,
                }}
              >
                {metaInfo}
              </div>
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: '#6ee7b7',
                  fontSize: '15px',
                  padding: '8px 18px',
                  borderRadius: '10px',
                  fontWeight: 600,
                }}
              >
                ✓ 100% Royalty-Free Keep
              </div>
            </div>

            <div style={{ fontSize: '18px', fontWeight: 700, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>⭐⭐⭐⭐⭐ 4.9/5</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate image: ${e.message}`, { status: 500 });
  }
}

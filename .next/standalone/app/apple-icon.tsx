import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1E3A5F',
          borderRadius: '36px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 4H10V18H18V22H6V4Z"
              fill="#D4AF37"
            />
            <circle
              cx="18"
              cy="6"
              r="3"
              fill="#4A90E2"
            />
          </svg>
          <span
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#D4AF37',
              fontFamily: 'system-ui',
              letterSpacing: '2px',
            }}
          >
            LuxUp
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

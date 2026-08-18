import * as React from 'react';

interface BeatDeliveryEmailProps {
  customerEmail: string;
  beatTitle: string;
  licenseType: string;
  downloadUrl: string;
}

export const BeatDeliveryEmail: React.FC<BeatDeliveryEmailProps> = ({
  beatTitle,
  licenseType,
  downloadUrl,
}) => (
  <div style={{ fontFamily: 'sans-serif', backgroundColor: '#09090b', color: '#ffffff', padding: '32px' }}>
    <h1 style={{ color: '#10b981', fontSize: '24px', marginBottom: '16px' }}>Your Beat Download is Ready!</h1>
    <p style={{ fontSize: '16px', color: '#e4e4e7' }}>
      Thank you for purchasing <strong>{beatTitle}</strong> ({licenseType.toUpperCase()} License).
    </p>
    <div style={{ margin: '32px 0' }}>
      <a
        href={downloadUrl}
        style={{
          backgroundColor: '#10b981',
          color: '#000000',
          padding: '12px 24px',
          borderRadius: '6px',
          fontWeight: 'bold',
          textDecoration: 'none',
          display: 'inline-block',
        }}
      >
        Download Beat & License
      </a>
    </div>
    <p style={{ fontSize: '12px', color: '#a1a1aa' }}>
      If you have any questions or need custom stems/trackouts, reply directly to this email.
    </p>
  </div>
);
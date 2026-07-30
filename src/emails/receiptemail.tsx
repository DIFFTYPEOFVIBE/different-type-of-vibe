import * as React from 'react';

interface ReceiptEmailProps {
  customerEmail?: string;
  beatTitle?: string;
}

export const ReceiptEmail: React.FC<ReceiptEmailProps> = ({
  customerEmail,
  beatTitle,
}) => (
  <div>
    <h1>Thank you for your purchase!</h1>
    <p>Your receipt for {beatTitle || 'your beat purchase'} has been processed.</p>
  </div>
);

export default ReceiptEmail;
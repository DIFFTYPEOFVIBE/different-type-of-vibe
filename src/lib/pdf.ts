// src/lib/pdf.ts
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

interface LicenseDetails {
  customerEmail: string;
  beatTitle: string;
  licenseType: string;
  purchaseDate: string;
}

export async function generateLicensePDF({
  customerEmail,
  beatTitle,
  licenseType,
  purchaseDate,
}: LicenseDetails): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Title Header
  page.drawText('BEAT LICENSE AGREEMENT', {
    x: 50,
    y: 730,
    size: 22,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });

  page.drawText(`License Type: ${licenseType.toUpperCase()} LICENSE`, {
    x: 50,
    y: 700,
    size: 14,
    font: fontBold,
    color: rgb(0.2, 0.6, 0.4),
  });

  // Divider
  page.drawLine({
    start: { x: 50, y: 680 },
    end: { x: 550, y: 680 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
  });

  // Order Info
  page.drawText(`Date: ${purchaseDate}`, { x: 50, y: 640, size: 10, font: fontRegular });
  page.drawText(`Licensee (Buyer): ${customerEmail}`, { x: 50, y: 620, size: 10, font: fontRegular });
  page.drawText(`Track Title: "${beatTitle}"`, { x: 50, y: 600, size: 12, font: fontBold });

  // Standard License Terms Sample
  const terms = [
    '1. GRANT OF RIGHTS: Licensor grants Licensee a non-exclusive right to reproduce',
    '   and distribute commercial recordings featuring the track specified above.',
    '2. STREAMING LIMITS: Up to 500,000 audio streams across platforms (Spotify, Apple Music).',
    '3. CREDIT REQUIREMENT: Licensee must credit Producer in metadata (e.g. "Prod. by [Name]").',
    '4. PERFORMANCE: Non-profit live performances permitted. Synchronization rights reserved.',
  ];

  let yPosition = 540;
  page.drawText('TERMS & CONDITIONS:', { x: 50, y: yPosition, size: 12, font: fontBold });
  
  terms.forEach((line) => {
    yPosition -= 25;
    page.drawText(line, { x: 50, y: yPosition, size: 10, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  });

  // Save PDF bytes
  return await pdfDoc.save();
}
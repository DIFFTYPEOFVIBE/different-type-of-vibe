// src/lib/pdf.ts
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

interface LicenseDetails {
  customerEmail: string;
  beatTitle: string;
  licenseType: string;
  purchaseDate: string;
  orderId?: string;
}

export async function generateLicensePDF({
  customerEmail,
  beatTitle,
  licenseType,
  purchaseDate,
  orderId,
}: LicenseDetails): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const licenseId = orderId
    ? `DTV-${String(orderId).toUpperCase().slice(0, 16)}`
    : `DTV-${Date.now().toString(36).toUpperCase()}`;

  const isProOrStems = /pro|stem|unlimited/i.test(licenseType);
  const streamCap = isProOrStems ? '500,000' : '100,000';

  // Title Header
  page.drawText('DIFFERENT TYPE OF VIBE — OFFICIAL BEAT LICENSE', {
    x: 45,
    y: 740,
    size: 17,
    font: fontBold,
    color: rgb(0.15, 0.1, 0.35),
  });

  page.drawText(`License Tier: ${licenseType.toUpperCase()}`, {
    x: 45,
    y: 714,
    size: 12,
    font: fontBold,
    color: rgb(0.1, 0.55, 0.35),
  });

  page.drawLine({
    start: { x: 45, y: 698 },
    end: { x: 555, y: 698 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
  });

  // Order Metadata
  page.drawText(`Certificate License ID: ${licenseId}`, { x: 45, y: 672, size: 10, font: fontBold });
  page.drawText(`Issue Date (UTC): ${purchaseDate}`, { x: 45, y: 654, size: 10, font: fontRegular });
  page.drawText(`Licensor (Producer): Onzieb / Different Type of Vibe LLC (ASCAP)`, { x: 45, y: 636, size: 10, font: fontRegular });
  page.drawText(`Licensee (Buyer): ${customerEmail}`, { x: 45, y: 618, size: 10, font: fontRegular });
  page.drawText(`Licensed Work(s): "${beatTitle}"`, { x: 45, y: 598, size: 11, font: fontBold });

  const terms = [
    '1. GRANT OF NON-EXCLUSIVE RIGHTS: Licensor grants Licensee a non-exclusive license to',
    '   record original vocals over the licensed instrumental(s) to create one (1) new song.',
    '   Onzieb retains 100% ownership of the underlying instrumental master recording.',
    `2. COMMERCIAL STREAMING CAP: Cleared for up to ${streamCap} monetized audio streams`,
    '   across Spotify, Apple Music, Tidal, Amazon Music, Audiomack, and Boomplay.',
    '3. PUBLISHING & PRO SPLITS (ASCAP): Songwriting and publishing rights shall be split',
    '   50% to Licensor (Onzieb / ASCAP) and 50% to Licensee. Mandatory credit: "Prod. by Onzieb".',
    '4. STRICT PROHIBITION ON CONTENT ID: Licensee is strictly prohibited from registering',
    '   the instrumental or derivative song with YouTube Content ID, DistroKid YouTube Money,',
    '   TuneCore Content ID, Meta Rights Manager, or any audio fingerprinting service.',
    '5. IRREVOCABLE DIGITAL DELIVERY & REFUND POLICY: Because untagged master audio files',
    '   are delivered immediately upon checkout, this transaction is final and non-refundable.',
    '   Any unauthorized chargeback immediately revokes all rights granted herein.',
  ];

  let yPosition = 558;
  page.drawText('BINDING LICENSE TERMS & PROTECTIONS:', { x: 45, y: yPosition, size: 11, font: fontBold });

  terms.forEach((line) => {
    yPosition -= 22;
    page.drawText(line, { x: 45, y: yPosition, size: 9.5, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
  });

  page.drawLine({
    start: { x: 45, y: 230 },
    end: { x: 555, y: 230 },
    thickness: 0.8,
    color: rgb(0.8, 0.8, 0.8),
  });

  page.drawText('Verified & Digitally Executed by Different Type of Vibe LLC (https://www.differenttypeofvibe.com)', {
    x: 45,
    y: 210,
    size: 9,
    font: fontBold,
    color: rgb(0.3, 0.3, 0.3),
  });
  page.drawText('Full Terms: https://www.differenttypeofvibe.com/terms | Refund Policy: https://www.differenttypeofvibe.com/refund-policy', {
    x: 45,
    y: 194,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.4, 0.4, 0.4),
  });

  return await pdfDoc.save();
}

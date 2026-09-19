import { guard, callApi, respond, fail, str } from '../lib/apiverve.js';

const MARGINS = [0, 1, 2, 4];

/** POST /api/qr { value, margin }: a PNG QR code, returned as a temporary download URL. */
export async function POST(request) {
  const blocked = guard(request);
  if (blocked) return blocked;

  const body = await request.json().catch(() => ({}));
  const value = str(body.value, 500);
  const margin = Number(body.margin ?? 0);
  if (!value) return fail('Enter a URL or text for the QR code');
  if (!MARGINS.includes(margin)) return fail(`Margin must be one of ${MARGINS.join(', ')}`);

  return respond(() => callApi('qrcodegenerator', { json: { value, margin, format: 'png' } }));
}

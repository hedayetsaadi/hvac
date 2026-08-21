// Demo service-request endpoint; connect this handler to a CRM or email service for production.
export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    if (!body.name || !body.phone || !body.email || !body.service) return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    return Response.json({ ok: true, receivedAt: new Date().toISOString() });
  } catch { return Response.json({ ok: false, error: "Invalid request" }, { status: 400 }); }
}
// End demo service-request endpoint.

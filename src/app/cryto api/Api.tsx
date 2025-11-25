export async function GET() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
      headers: {
        "x-cg-demo-api-key": process.env.COINGECKO_KEY ?? "",
      }
    });

    if (!res.ok) {
      return Response.json({ error: "API request failed" }, { status: 500 });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

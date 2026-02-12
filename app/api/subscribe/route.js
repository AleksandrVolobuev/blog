export async function POST(req) {
  const data = await req.json();
  const email = typeof data?.email === "string" ? data.email.trim() : "";
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!email || !isEmailValid) {
    return Response.json(
      {
        success: false,
        message: "Неверный email",
      },
      { status: 400 }
    );
  }

  return Response.json({
    success: true,
    message: "Заявка отправлена",
    data: { email },
  });
}

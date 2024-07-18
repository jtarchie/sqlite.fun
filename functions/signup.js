import { Resend } from "resend";

export async function onRequest(context) {
  const resend = new Resend(context.env.RESEND_API_TOKEN);
  const { searchParams } = new URL(context.request.url);
  const email = searchParams.get("email");

  console.log(`email: ${email}`);

  const response = await resend.contacts.create({
    audienceId: "47583396-2a91-4e17-9248-5a669359592a",
    email: email,
  });
  if (response.error) {
    console.log(`error: ${JSON.stringify(response.error)}`);
    return new Response("Nope", { status: response.status });
  }

  return new Response("OK!");
}

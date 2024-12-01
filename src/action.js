import service from "./service";

export default async function createEnvelopeAction({ request }) {
  const formData = await request.formData();

  const signer1_name = formData.get("f_name");
  const signer1_email = formData.get("f_email");

  const signer2_name = formData.get("s_name");
  const signer2_email = formData.get("s_email");
  const first_party = {
    name: signer1_name,
    email: signer1_email,
  };
  const second_party = {
    name: signer2_name,
    email: signer2_email,
  };
  return await service.createEnvelope(first_party, second_party);
}

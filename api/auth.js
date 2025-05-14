import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: "public_nFMpAj1rWN1eIxqek5j80wqS7PI=",
  privateKey: "private_pCAY23VskFTdz3jcNjuZx7P9qtQ=",
  urlEndpoint: "https://ik.imagekit.io/waf0lxw6e"
});

export default function handler(req, res) {
  if (req.method === "GET") {
    const authenticationParameters = imagekit.getAuthenticationParameters();
    return res.status(200).json(authenticationParameters);
  }

  res.status(405).json({ error: "Method not allowed" });
}

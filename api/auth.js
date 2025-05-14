export default async function handler(req, res) {
  const crypto = await import("crypto");

  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;

  const timestamp = Math.floor(Date.now() / 1000);
  const signature = crypto
    .createHash("sha1")
    .update(timestamp + privateKey)
    .digest("hex");

  res.status(200).json({
    signature,
    expire: timestamp,
    token: publicKey
  });
}

import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: "public_nFMpAj1rWN1eIxqek5j80wqS7PI=",
  privateKey: "private_pCAY23VskFTdz3jcNjuZx7P9qtQ=",
  urlEndpoint: "https://ik.imagekit.io/waf0lxw6e"
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Test endpoint
    return res.status(200).json({ message: "Hello from ImageKit Auth API!" });
  }

  if (req.method === "POST") {
    const { file, fileName, folder } = req.body;

    if (!file || !fileName) {
      return res.status(400).json({ error: "file and fileName are required" });
    }

    try {
      const response = await imagekit.upload({
        file, // base64 atau URL
        fileName,
        folder // misalnya "/komik/abcd/chapter-1"
      });

      return res.status(200).json({ success: true, data: response });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
        }

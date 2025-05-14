import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: "public_nFMpAj1rWN1eIxqek5j80wqS7PI=",
  privateKey: "private_pCAY23VskFTdz3jcNjuZx7P9qtQ=",
  urlEndpoint: "https://ik.imagekit.io/waf0lxw6e"
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "Hello from ImageKit Auth API!" });
  }

  if (req.method === "POST") {
    try {
      const { file, fileName, folder } = req.body;
      console.log("Received body:", req.body);

      if (!file || !fileName) {
        return res.status(400).json({ error: "file and fileName are required" });
      }

      const response = await imagekit.upload({
        file,
        fileName,
        folder,
      });

      return res.status(200).json({ success: true, data: response });
    } catch (error) {
      console.error("Upload error:", error.message);
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}

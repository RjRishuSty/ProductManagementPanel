export const uploadToCloudinary = async (file) => {
  const CLOUD_NAME = "dzdv0wfep";
  const UPLOAD_PRESET = "Product_manage_app";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Image upload failed");
  }

  const data = await response.json();
  return data.secure_url; // ✅ final image link
};

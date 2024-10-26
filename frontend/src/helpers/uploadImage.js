const url = `https://api.cloudinary.com/v1_1/dem5itpyn/image/upload`;

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "paepvhr4");

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed with status: ${response.status}`);
    }

    // console.log("successful");
    return response.json();

  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

export default uploadImage;

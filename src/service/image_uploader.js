class ImageUploader {
  async upload(file) {
    const url = "https://api.cloudinary.com/v1_1/dfq0er970/image/upload";
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "dcfvzp2n");

    const result = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await result.json();
  }
}

export default ImageUploader;

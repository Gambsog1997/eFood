let CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/depxg1jxy/image/upload";

const imgUrl = (image) => {
  let base64Img = `data:image/jpg;base64,${image.base64}`;

  let data = {
    file: base64Img,
    "upload-preset": "e-food-prototype",
  };

  fetch(CLOUDINARY_URL, {
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    method: "POST",
  })
    .then(async (r) => {
      let data = await r.json();

      setPhoto(data.url);
    })
    .catch((err) => console.log(err));
};

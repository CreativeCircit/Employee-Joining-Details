<<<<<<< HEAD
const cloudinary  = require("../config/cloudinary");
const streamifier = require("streamifier");


const uploadToCloudinary = (fileBuffer, folder = "profiles") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        transformation: [{ width: 500, height: 500, crop: "fill" }],
      },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

module.exports = uploadToCloudinary;
=======
const cloudinary  = require("../config/cloudinary");
const streamifier = require("streamifier");


const uploadToCloudinary = (fileBuffer, folder = "profiles") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        transformation: [{ width: 500, height: 500, crop: "fill" }],
      },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

module.exports = uploadToCloudinary;
>>>>>>> 97d6a8b9c8949fdabad2be4eca703e5ef61b3f65

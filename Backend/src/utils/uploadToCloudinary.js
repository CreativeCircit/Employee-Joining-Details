const cloudinary  = require("../config/cloudinary");
const streamifier = require("streamifier");


const uploadToCloudinary = (fileBuffer, folder = "profiles") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        transformation: [
          { 
            width: 600, 
            height: 800,       
            crop: "thumb",     
            gravity: "face",   
            zoom: 0.8          
          },
          { fetch_format: "auto", quality: "auto" } 
        ],
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

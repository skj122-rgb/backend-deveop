import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_keys:process.env.CLOUDINARY_API_KEYS,
    api_secret:process.env.CLOUDINARY_API_SECRET
});




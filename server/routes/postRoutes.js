import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key:process.env.api_key,
  api_secret:process.env.api_secret,
  //secure:true
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};


const uploadPreset  = process.env.VITE_UPLOAD_PRESET  ; 
router.route('/').get(async (req, res ,next) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
  //next() ; 
});

router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    
    const photoUrl = await cloudinary.uploader.upload(photo,opts);  

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

export default router;
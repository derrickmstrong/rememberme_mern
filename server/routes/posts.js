import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js';

// setup router
export const postsRouter = express.Router();

// setup routes from localhost:5000/posts/ url
// get route
postsRouter.get('/', getPosts);
// post route
postsRouter.post('/', createPost);
// update route
postsRouter.patch('/:id', updatePost);
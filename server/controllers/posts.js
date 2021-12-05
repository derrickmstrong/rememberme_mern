// import modals
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        // find all postMessages in the db
        // remember this is an asychronous action so it will take time to find PostMessage hence async/await
        const postMessages = await PostMessage.find()
        // respond with status 200 and json of postMessages
        res.status(200).json(postMessages);
    } catch (error) {
        //respond with error status and message
        res.status(404).json({ message: error.message })
    }
};

export const createPosts = async (req, res) => {
  // get req body which is our post
  const post = req.body

  // create new post Message (which is an object)
  const newPost = new PostMessage(post)

  try {
      // save post to db (asynchronously)
      await newPost.save()
      // send response and post
      // response codes ref: https://www.restapitutorial.com/httpstatuscodes.html
      res.status(201).json(newPost)
  } catch (error) {
      res.status(409).json({ message: error.message })
  }
};


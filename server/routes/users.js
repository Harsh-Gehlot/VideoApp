import express from "express";
import { } from "../controllers/User.js";

const router = express.Router()

//update user 
router.put("/:id",verifyToken, update)

//delete user 
router.delete("/:id", delteUser)

// get a user 
router.get("/find/:id", getUser )

// subscribe a user 
router.put("/sub/:id", subscribe)

// unsubscribe a user 
router.put("/unsub/:id", unsubscribe)

//like a video 
router.put("/like/:videoId", like)

// dislike a video
router.put("/dislike/:videoIdd", dislike)
 
export default router;

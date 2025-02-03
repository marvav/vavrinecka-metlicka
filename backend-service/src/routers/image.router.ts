import express, {Router} from 'express';
import {imageController} from "../controllers/image.controller";

export const imageRouter = (): Router => {
    const imageRouter = express.Router();
    imageRouter.get("/:id", imageController.getImage);
    imageRouter.use((_req, res) => {
        res.status(404).send('Image request could not be routed');
    });
    return imageRouter;
};

import {Request, Response} from "express";
import {getImageRequestSchema} from "../validationSchemas/validationSchemas";
import {parseRequest} from "../utils";
import imageRepository from "../repositories/image.repository";

const getImage = async (req: Request, res: Response) => {
    const request = await parseRequest(getImageRequestSchema, req, res);
    if (request === null) {
        res.status(500).send('Requested invalid Image');
        return;
    }

    const event = await imageRepository.getImage(request.params.id);
    res.send({ item: event, message: 'Image read' });
};

export const imageController = {
    getImage,
};

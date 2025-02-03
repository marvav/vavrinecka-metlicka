import {Image} from "../types.js";


export const imageRepository = {
    async getImage(id: string): Promise<Image> {
        return {id: id, image: ""};
    },
};

export default imageRepository;

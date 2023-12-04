import { Request, Response } from "express";
import {
  uploadBirdImage,
  uploadNestImage,
  uploadAvataImage,
} from "../services/upload.service";

export const uploadBird = async (req: Request, res: Response) => {
  const image = req.file;
  const id = req.params.id;
  if (image) {
    const bird = await uploadBirdImage(image.filename, Number(id));
    res.status(200).json(bird);
  }
};

export const uploadNest = async (req: Request, res: Response) => {
  const image = req.file;
  const id = req.params.id;
  if (image) {
    const nest = await uploadNestImage(image.filename, Number(id));
    res.status(200).json(nest);
  } else {
    throw new Error("image not found");
  }
};

export const uploadAccount = async (req: Request, res: Response) => {
  const image = req.file;
  const id = req.params.id;
  if (image) {
    const nest = await uploadAvataImage(image.filename, Number(id));
    res.status(200).json(nest);
  } else {
    throw new Error("image not found");
  }
};

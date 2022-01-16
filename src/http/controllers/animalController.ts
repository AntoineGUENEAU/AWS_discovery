import {Request, Response} from "express";
import animalList from "../../animals/list";

const list = async function (req: Request, res: Response) {
  res.json({success: true, list: animalList() })
}

const detail = async function (req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  res.json({success: true, animal : animalList()[id]})
}

export {list, detail}

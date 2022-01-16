import express, {Router} from "express";
import {list, detail} from "../controllers/animalController";

const router: Router = express.Router();

router.get('/', list)
router.get('/:id', detail)

export {router};

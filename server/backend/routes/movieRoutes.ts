import { Router, Request, Response } from "express";
import pool from "../databasePool";

const router = Router();
router.get("/", async (req: Request, res: Response) => {
    pool.query(
        "SELECT id, title, poster, movie_name_for_url, banner_image, banner_video FROM full_movie_info ORDER BY id ASC",
        (error, response) => {
            if (error) return console.log(error);
            res.status(200).send(response.rows);
        }
    );
});

router.get("/:movieName", async (req: any, res: Response) => {
    pool.query(
        `SELECT * FROM full_movie_info WHERE movie_name_for_url = '${req.params.movieName}' `,
        (error, response) => {
            if (error) return console.log(error);

            res.status(200).send(response.rows);
        }
    );
});

export default router;

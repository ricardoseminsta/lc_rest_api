import { db } from '../models/Games'
import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const games = async (req: Request, res: Response) => {
    res.status(200);
    let games = db.games
    res.json({games})
}

export const game = async (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    if(id){
        let game = db.games.find(g => g.id === id);
        if(game != undefined){
            res.status(200)
            return res.json({ game });
        }
    }
   res.status(404).send({error: 'Game not found'});
}

export const newGame = async (req: Request, res: Response) => {
    let { id, title, price, year } = req.body;
    db.games.push({
        id,
        title,
        price,
        year
    });
    res.status(201);
    res.json({ db })
}

export const remove = (req: Request, res: Response) => {
    let id = parseInt(req.params.id);

    if(id) {
        let index = db.games.findIndex(g => g.id == id);
        if(index != -1) {
            db.games.splice(index, 1);
            res.status(200)
            return res.json({ db })
        }
    }
    res.status(404).send({error: 'Game not found'});
}
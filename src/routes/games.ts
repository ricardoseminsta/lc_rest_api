import { Router } from 'express';
import * as GameController from '../controllers/gameController'

const router = Router();

router.get('/ping', GameController.ping)
router.get('/games', GameController.games)
router.get('/game/:id', GameController.game)
router.post('/newgame', GameController.newGame)
router.delete('/game/:id', GameController.remove)

export default router;
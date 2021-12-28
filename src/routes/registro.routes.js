import { Router } from 'express';
import { getRegistro,createRegistro,getRegistroByCurp,deleteRegistro } from "../controllers/registro.controller";

const router = Router();

router.get('/registro',getRegistro);
router.post('/registro',createRegistro);
router.post('/registro/:id',getRegistroByCurp);
router.delete('/registro/:id',deleteRegistro);

export default router;
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
     res.send('Desde /api/users');
})

router.post('/', (req, res) => {
     res.send('Desde /api/users');
})

export default router;
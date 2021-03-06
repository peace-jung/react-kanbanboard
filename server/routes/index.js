import express from 'express';
import account from './account';
import classroom from './classroom';

const router = express.Router();
// /api/*
router.use('/account', account);
router.use('/classroom', classroom);

export default router;
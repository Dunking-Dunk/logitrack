import express from "express";

const router = express.Router();

router.post('/api/users/logout', (req, res) => {
    console.log('logout')
    res.cookie('token', '', {}).json('logged out')
})

export {router as signoutRouter}
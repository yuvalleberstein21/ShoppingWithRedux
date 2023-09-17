const router = require('express').Router();


router.get('/', (req, res) => {
    res.send("hello user");
});

router.post('/post', (req, res) => {
    const username = req.body.username;
    console.log(username);
});

module.exports = router;
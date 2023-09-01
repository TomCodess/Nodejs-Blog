const express = require('express');
const router = express.Router();

//Routes

//Basic route function, app.get app.post etc. the '' is the /*something*
// then we use a req and res with arrow function
router.get('', (req, res) => {
    res.send("anyong");
});




//Exports the router so it can be used in app.js
module.exports = router;
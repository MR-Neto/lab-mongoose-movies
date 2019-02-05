const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

/* GET products listing. */
router.get('/', (req, res, next) => {
    Celebrity.find({})
        .then((celebrities) => {
            res.render('celebrities/celebrities', { celebrities });
        })
        .catch((error) => {
            next(error);
        });
});

router.get('/detail/:id/delete', (req, res, next) => {

    console.log("inside");
    const { id } = req.params;

    Celebrity.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch((error) => {
            next(error);
        });
});

router.get('/detail/:id', (req, res, next) => {

    const { id } = req.params;

    Celebrity.findById(id)
        .then((celebrity) => {
            res.render('celebrities/detail', { celebrity });
        })
        .catch((error) => {
            next(error);
        });
});



router.get('/create', (req, res, next) => {
    res.render('celebrities/create');
});


router.post('/create', (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({ name, occupation, catchPhrase })
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch((error) => {
            next(error);
        });
});


module.exports = router;

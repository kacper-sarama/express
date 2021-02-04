const express = require('express');
const News = require('../models/news');

const router = express.Router();

router.all('*', (req, res, next) => {
  // console.log(req.session)
  if(!req.session.admin) {
    res.redirect('login')

    return;
  }

  next();
});

/* GET home page. */
router.get('/', (req, res) => {
  News.find({}, (error, data) => {
    res.render('admin/index', { title: 'Admin', data });
  });
});

router.get('/news/add', (req, res) => {
  res.render('admin/news-form', {title: 'Dodaje news', body: {}, errors: {}});
});

router.post('/news/add', (req, res) => {
  const body =  req.body;

    const newsData = new News(body);
    const errors = newsData.validateSync();

  newsData.save((error) => {
    if(error) {
      res.render('admin/news-form', {title: 'Dodaj news', errors, body });
      return;
    }

    res.redirect('/admin');
  })
});

router.get('/news/delete/:id', (req, res) => {
  News.findByIdAndDelete(req.params.id, (error) => {
    res.redirect('/admin');
  })
});


module.exports = router;

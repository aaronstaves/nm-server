import express from 'express';
import TVDB from 'node-tvdb';
import config from 'config';

/* eslint-disable no-param-reassign */

if (!config.has('tvdb.apiKey')) {
  throw new Error('No API Key defined in config/default.json');
}

const apiKey = config.get('tvdb.apiKey');

const tvdb = new TVDB(apiKey);
const app = express();
const bannerBaseUrl = 'http://thetvdb.com/banners';

app.get('/search/:series', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  tvdb.getSeriesByName(req.params.series)
    .then((response) => {
      response.forEach((show) => {
        show.seriesName = show.seriesName.trim();
        if (show.banner === '') {
          show.image = '';
        } else {
          show.image = `${bannerBaseUrl}/${show.banner}`;
        }
      });
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(3000);

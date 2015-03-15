'use strict';

import 'babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import yargs from 'yargs';
import routes from './routes';

const argv = yargs.option('p', {alias: 'port', default: 3000}).argv;

const app = {
  main: express(),
  api: express()
};

const bootstrap = () => {
  app.api.use(methodOverride('X-HTTP-Method-Override'));
  app.api.use(bodyParser.json({limit: '5mb'}));
  app.api.use(morgan('combined'));

  app.main.use(express.static(`${__dirname}/../client`));
  app.main.use(morgan('combined'));
  app.main.use('/api', app.api);
};

const listen = () => {
  app.main.listen(argv.port, function() {
    console.log('Listening localhost:%d', argv.port);
  });
};

export default () => {
  bootstrap();
  routes(app);
  listen();
};

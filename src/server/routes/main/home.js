'use strict';

export default (main) => {
  main.get('/',  (req, res) => {
    res.render('/index.html');
  });
};

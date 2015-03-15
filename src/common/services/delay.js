'use strict';

const async = (f) => {
  let it = f();
  (function iterate({done, value}) {
    if(!done) {
      if('then' in value) {
        value.then(
          (...args) => { iterate(it.next(...args)); },
          (err) => { it.throw(err) }
        );
      } else {
        it.throw(new Error('The yielded value must be a Promise'));
      }
    }
  })(it.next());
};

const promise = (f) => (...args) => new Promise((resolve, reject) => {
  f(...args, (err, ...results) => {
    if(err) { reject(err); } else { resolve(...results); }
  });
});

export {async, promise};

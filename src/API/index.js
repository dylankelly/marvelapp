import { APIKEY, BASEURL, APIVERSION } from './constants';

var request = require('superagent');
var config = require('./tests/mock.config');
var mock = require('superagent-mock');

const test = mock(request, config);

console.log(test);

function getApiReq(url, params) {
  const queryStrings = {
    ...params,
    apikey: APIKEY
  }
  return new Promise((resolve, reject) => {
    request
      .get(`${BASEURL}/${APIVERSION}/public/${url}`)
      .query(queryStrings)
      .set('Accept', 'application/json')
      .end((error, res) => {
         error ? reject(error) : resolve(res);
      });
  });
}

export default getApiReq;
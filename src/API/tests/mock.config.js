import comics from './mocks/comics';

module.exports = [
  {
    pattern: 'https://gateway.marvel.com/v1/public/comics?apikey=7b6ac860bf16768e26187e985a3616dc',
    fixtures: function (match, params, headers) {
      console.log('mock data');
      return comics();
    },
    callback: function (match, data) {
      return { 
        status: "OK",
        data,
      };
    },
  },
];
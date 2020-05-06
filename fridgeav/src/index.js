import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { request } from 'http';

//link & libraries
const siteUrl = "https://www.whirlpoolparts.com/PartSearch/ProductBrandAllModels?brandId=200&productId=4";
const rp = require('request-promise');
//const $ = require('cheerio');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//data scrape
/*rp(siteUrl)
  .then(function(html){
    //success!
    const fridgeModelNumbers = [];
    for (let i = 0; i < 45; i++) {
      fridgeModelNumbers.push($('.contentTop > .productBrandModels').text());
    }
    console.log(fridgeModelNumbers);
    
    //console.log($('contentTop > a', html));

  })
  .catch(function(err){
    //handle error
  });*/

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  
  return cheerio.load(result.data);
};

const $ = await fetchData();
const fridgeLink = $('.contentTop > .productBrandModels').text();
console.log(fridgeLink)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

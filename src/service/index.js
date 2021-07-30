import axios from 'axios';
import { MAIN_URL, API_KEY } from './../constants';

export const getStockDetail = (code) => {
  const params = {
    function: 'OVERVIEW',
    symbol: code,
    apikey: API_KEY,
  };

  return axios({
    method: 'GET',
    url: `${MAIN_URL}`,
    params,
  });
};

export const getStockPrice = (code, interval = '5min') => {
  const params = {
    function: 'TIME_SERIES_INTRADAY',
    symbol: code,
    apikey: API_KEY,
    interval,
  };

  return axios({
    method: 'GET',
    url: `${MAIN_URL}`,
    params,
  });
};

export const getStockList = (nameStr) => {
  const params = {
    function: 'SYMBOL_SEARCH',
    keywords: nameStr,
    apikey: API_KEY,
  };

  return axios({
    method: 'GET',
    url: `${MAIN_URL}`,
    params,
  });
};

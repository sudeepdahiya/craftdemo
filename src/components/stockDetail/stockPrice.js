import React, { useEffect, useState } from 'react';
import { getStockPrice } from './../../service';
import Loader from './../loader';
import ErrorPage from './../error';

import './stockPrice.css';

const StockPrice = (props) => {
  const { stockId } = props;
  const [stockPrice, setStockPrice] = useState(null);
  const [error, setError] = useState(null);

  const getStockDetail = async () => {
    const { data } = await getStockPrice(stockId);
    error && setError(false);
    stockPrice && setStockPrice(null);
    const lastPrice = [];
    if (data['Time Series (5min)']) {
      const keysList = Object.keys(data['Time Series (5min)']);
      for (let key in data['Time Series (5min)'][keysList[0]]) {
        lastPrice.push({
          text: key,
          value: data['Time Series (5min)'][keysList[0]][key],
        });
      }
      const priceDetail = {
        lastRefresh: data['Meta Data']['3. Last Refreshed'],
        lastPrice,
      };
      setStockPrice(priceDetail);
    } else {
      setError('Internal Server error. Please try again');
    }
  };

  useEffect(() => {
    getStockDetail();
  }, [stockId]);

  if (error) {
    return <ErrorPage message={error} />;
  }
  if (!stockPrice) {
    return <Loader />;
  }
  return (
    <div className="stockPriceDetail">
      <div>
        <span>Last Refresh Price:</span> <div>{stockPrice.lastRefresh}</div>
      </div>

      {stockPrice.lastPrice.map((price) => {
        return (
          <div key={price.text}>
            <span> {price.text}</span> : <div>{price.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StockPrice;

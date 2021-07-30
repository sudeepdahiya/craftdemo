import React, { useEffect, useState } from 'react';
import { getStockDetail } from './../../service';
import StockPriceDetail from './stockPrice';
import Loader from './../loader';
import Error from './../error';
import './index.css';

let timeOut;

const StockDetail = (props) => {
  const { stockId, onSuccess, refreshTime } = props;
  const [stockDetail, setStockDetail] = useState(null);
  const [error, setError] = useState(false);

  const getDetail = async () => {
    error && setError(false);
    stockDetail && setStockDetail(null);
    clearTimeout(timeOut);
    const { data } = await getStockDetail(stockId);
    if (data.Name) {
      onSuccess(stockId);
      setStockDetail(data);
    } else if (data.Note) {
      setError(data.Note);
    } else if (Object.keys(data).length === 0) {
      setError('Stock not found');
    } else {
      setError('Internal server error');
    }
  };

  useEffect(() => {
    clearTimeout(timeOut);
    if (refreshTime) {
      timeOut = setTimeout(getDetail, refreshTime);
    }
  }, [refreshTime, stockDetail]);

  useEffect(() => {
    getDetail();
  }, [stockId]);

  if (error) {
    return <Error message={error} />;
  }
  return (
    <>
      {stockDetail ? (
        <div className="stockDetail">
          <div>
            {' '}
            <span>Name:</span> <div>{stockDetail.Name}</div>
          </div>
          <div>
            <span>Symbol:</span> <div>{stockDetail.Symbol}</div>
          </div>
          <div>
            <span>Description:</span> <div>{stockDetail.Description}</div>
          </div>
          <div>
            {' '}
            <span>PE Ratio:</span> <div>{stockDetail.PERatio}</div>
          </div>
          <div>
            {' '}
            <span>Market Cap:</span> <div>{stockDetail.MarketCapitalization}</div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <StockPriceDetail stockId={stockId} />
    </>
  );
};

export default StockDetail;

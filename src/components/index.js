import AutoComplete from './autoComplete';
import StockDetail from './stockDetail';
import Slider from './slider';
import { getStockList } from './../service';
import AppContext from './../reducer/AppContext';
import { useContext } from 'react';
import { SET_CURRENT_STOCK, ADD_SERACH_LIST, SET_REFRESH_TIME } from './../reducer';
import { REFRESH_TIMER } from './../constants';
import RadioButton from './radioButton';

import './index.css';
/**
 *
 * Main logical class: mainting state (other option can be redux/sagas/thunk)
 */
function App() {
  const { state, dispatch } = useContext(AppContext);

  const onSuccess = (stockId) => {
    dispatch({ type: ADD_SERACH_LIST, payload: stockId });
  };

  const changeRefresh = (time) => {
    dispatch({ type: SET_REFRESH_TIME, payload: time });
  };

  const changeStock = (val) => {
    dispatch({ type: SET_CURRENT_STOCK, payload: val });
  };

  return (
    <div className="App">
      <header className="App-header">Stock Information</header>
      <div className="container">
        <div>
          <AutoComplete
            service={getStockList}
            codeKey={'1. symbol'}
            nameKey={'2. name'}
            onSelect={changeStock}
          />
          <RadioButton list={REFRESH_TIMER} name="timer" onClick={changeRefresh} />
        </div>
        <div>
          <Slider list={state.stockList} currentValue={state.currentStock} onChange={changeStock} />
          {state.currentStock && (
            <StockDetail
              stockId={state.currentStock}
              onSuccess={onSuccess}
              refreshTime={state.refreshTime}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

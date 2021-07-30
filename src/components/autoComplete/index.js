import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from './../../utils';
import { debounce_timer } from './../../constants';
import Error from './../error';

import './index.css';

const AutoComplete = (props) => {
  const { service, codeKey, nameKey, onSelect } = props;

  const [list, setList] = useState([]);
  const [showList, toggleShow] = useState(true);
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const handleSelect = (autoValue) => {
    toggleShow(false);
    onSelect(autoValue);
    setValue(autoValue);
  };

  const handleChange = async (val) => {
    toggleShow(false);
    if (val) {
      try {
        const { data } = await service(val);
        const { bestMatches } = data;
        if (bestMatches) {
          const listData = [];
          bestMatches.map((match) => {
            listData.push({
              code: match[codeKey],
              name: match[nameKey],
            });
          });
          toggleShow(true);
          setList(listData);
        } else {
          setError('Internal Server Error');
        }
      } catch (e) {
        setError('Internal Server Error');
      }
    }
  };

  const getDropDownList = useCallback(debounce(handleChange, debounce_timer), []);

  const onChange = (e) => {
    setValue(e.target.value);
    getDropDownList(e.target.value);
  };

  return (
    <div className="autoComplete">
      {error && <Error message={error} />}
      <input type="text" onChange={onChange} value={value} />
      {value && (
        <span className="clear" onClick={() => setValue('')}>
          x
        </span>
      )}
      <div className="autoList">
        {showList &&
          list.map(({ code, name }) => {
            return (
              <div key={code} onClick={() => handleSelect(code)}>
                {code} : {name}
              </div>
            );
          })}
      </div>
      <button type="button" onClick={() => handleSelect(value)}>
        Done
      </button>
    </div>
  );
};

export default AutoComplete;

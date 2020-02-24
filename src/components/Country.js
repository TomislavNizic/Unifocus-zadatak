import React from 'react';

const country = (props) => {

    return (
      <tr>
          <td>
              {props.country}
          </td>
          <td>
              {props.size}
          </td>
          <td>
              {props.population}
          </td>
      </tr>
    );
};

export default country;

// struktura tablice u koju importamo podatke sa API-a
import mockyio from '../apis/mockyio';

export const fetchData = () => async dispatch => {
      const response = await mockyio.get('/5c6a81f1330000061b7f4b0b');

      dispatch({ type: 'FETCH_DATA', payload: response.data.tableData})
    };

    // uvoz podataka sa mockyio linka te dispatch u state app-a
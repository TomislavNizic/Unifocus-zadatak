export default (state = [], action) => {

    switch(action.type){
        case 'FETCH_DATA':
            return action.payload;
        case 'ADD_ROW':
            return state.concat([action.data]);
        default:
            return state;
    }
};

/* reducer koji vraća importirane podatke kroz case 'FETCH_DATA' te kroz case 'ADD_ROW' vraća nove
podatke u sljedeći red tablice */

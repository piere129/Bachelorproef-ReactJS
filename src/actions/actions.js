import { Datainitialiser } from '../data/DataInitialiser';

export const fetchAllProducts = () => dispatch => {
   
    var d = new Datainitialiser();
    console.log(d.products);

        dispatch({
            type: 'fetchAllProducts',
            res: d.products
        });
};


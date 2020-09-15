import React from 'react';
import Proptyps from 'prop-types';
const Error = ({mensaje}) => {
    return ( 
        <p className="red darken-4 error">{mensaje}</p> 
     );
}

Error.Proptyps = {
    mensaje: Proptyps.string.isRequired
}
 
export default Error;
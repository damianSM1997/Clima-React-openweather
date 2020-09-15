import React, {useState } from 'react';
import Error from './Error';
import Proptyps from 'prop-types';
const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {


    const [error, guardarError] = useState(false);

    //funcion que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    //cuando el usuario da click en el boton 
    const handleSubmit = e => {
        e.preventDefault();
        // validar 
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        
        //pasar al elemento principal

        guardarConsultar(true);

    }


    //extraer ciudad y pais
    const {ciudad, pais} = busqueda;

    return (  
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Los dos campos son obligatorios"/> : null}
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad</label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pias"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais</label>
            </div>

            
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>
        </form>
    );
}

Formulario.Proptyps = {
    busqueda: Proptyps.object.isRequired,
    guardarBusqueda: Proptyps.func.isRequired,
    guardarConsultar: Proptyps.func.isRequired
}
 
export default Formulario;
import React, {Fragment} from "react";
import styled from "@emotion/styled";
import { primeraMayuscula } from "../helper";
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    //extraer de datos
    const {marca,year,plan} = datos;

    if(marca==='' || year==='' || plan==='') return null;
    return ( 
        <ContenedorResumen>
        <h2>Resumen de cotización</h2>
        <ul>
            <li>Marca: {primeraMayuscula(marca)}</li>
            <li>Plan: {primeraMayuscula(plan)}</li>
            <li>Año: {primeraMayuscula(year)}</li>
        </ul>
        </ContenedorResumen>
     );
}
 
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
export default Resumen;
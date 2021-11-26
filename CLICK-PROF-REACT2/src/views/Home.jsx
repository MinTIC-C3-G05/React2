import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TarjetasGrupales from '../components/TarjetasGrupales';
import FormularioComponente from '../components/FormularioComponente';

import TarjetaInicio from '../components/TarjetaInicio';





function Home() {
    return (
        <React.Fragment>
        
       <TarjetaInicio/>


        <TarjetasGrupales/>
        <br/>
        <br/>
        <br/>
        <FormularioComponente/>

        </React.Fragment>
    )
}

export default Home

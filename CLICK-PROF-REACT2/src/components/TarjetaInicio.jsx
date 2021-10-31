import React from 'react'
import Logo from '../img/CLIK_PROF_LOGO.png';
import '../css/TarjetaInicio.css'

function TarjetaInicio() {
    return (
        <div>
        <section class="TarjetaInicio">
        <h1>CLICK-PROF <small class="text-muted" >Do you want to test your English? </small></h1>
        <h4>Take our diagnostic test!</h4>
      </section>
    
    
      <div class="container mt-5 border imagenInicio">
        <div class="row fotoContainer" >
          <div class="col-xs-12 col-sm-6 col-sm-push-9">
            <h5 class="text-muted"> ENGLISH TEST </h5>
            <p class="text-dark" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores perspiciatis iure assumenda aliquam
              repudiandae sequi illum fuga, minus itaque culpa placeat dolores, corporis blanditiis. Commodi rerum fugit vel
              quaerat. </p>
            <button class="button btn-primary EnglishTest" Onclick="location.href='EnglishLevelTest_p1.html'">ENGLISH TEST
            </button>
          </div>
          <div class="col-sm-3 col-md-3 foto" >
            <img src={Logo} alt="Logo picture" class=" rounded img-fluid"/>
          </div>
        </div>
      </div>
      </div>
    )
}

export default TarjetaInicio
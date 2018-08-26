import React, { Component } from 'react';
import './SlideBox.css';

class SlideBox extends Component {
    state = {  }
    render() { 
        return (
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="https://startupi.com.br/wp-content/uploads/2018/03/programa%C3%A7%C3%A3o.jpg" alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="http://www.simi.org.br/files/2018/MAIO/conheca-cursos-de-programacao-gratis-1132x600.jpg" alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://thumbs.dreamstime.com/b/javascript-front-end-code-computer-programming-source-abstract-screen-web-developer-digital-technology-modern-background-104079253.jpg" alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div> 
        );
    }
}
 
export default SlideBox;
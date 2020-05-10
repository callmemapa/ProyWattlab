import React from 'react';
import { Translation } from 'react-i18next';
import './style/slides.css';

class Slides extends React.Component {
    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../imagenes/slides/Cali.jpg" className="d-block w-100" alt="holaaa"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="../imagenes/slides/Slide1.jpg" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block d-sm-block d-xs-block">
                            <Translation>
                                {(t, { i18n }) => <h3 style={{color: "white"}}>{t('homepage.slides_homepage.sld2h_title')}</h3>}
                            </Translation>
                            <Translation>
                                {(t, { i18n }) => <p>{t('homepage.slides_homepage.sld2h_description')}</p>}
                            </Translation>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../imagenes/slides/Slide0.jpg" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block d-xs-block">
                            <Translation>
                                {(t, { i18n }) => <h1 style={{fontWeight: "bold"}}>{t('homepage.slides_homepage.sld3h_title')}</h1>}
                            </Translation>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}
export default Slides;
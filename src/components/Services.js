import WebDesignIllustration from '../assets/img/web-design.png';
import MobileIllustration from '../assets/img/mobile-programing.png';
import Uiux from '../assets/img/uiux.png';

const Services = () => {
    return <div className="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 justify-content-center text-center mx-auto">
                    <h2 className="fw-bold">Our Services</h2>
                    <p>At DigiWave, our expert team delivers innovative solutions tailored to your needs, empowering you in the digital age.</p>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 my-3 col-sm-12">
                    <div className="card card-webdesign">
                        <div className="card-body">
                            <img src={WebDesignIllustration} alt="" />
                            <h5 className="card-title fw-bold py-2">Web Design</h5>
                            <p className="card-text">From simple landing pages to complex web applications, we create dynamic, user-friendly websites using the latest technology.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 my-3 col-sm-12">
                    <div className="card card-mobile">
                        <div className="card-body">
                            <img src={MobileIllustration} alt="" />
                            <h5 className="card-title fw-bold py-2">Mobile Development</h5>
                            <p className="card-text">From simple landing pages to complex web applications, we create dynamic, user-friendly websites using the latest technology.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 my-3 col-sm-12">
                    <div className="card card-uiux">
                        <div className="card-body">
                            <img src={Uiux} alt="" />
                            <h5 className="card-title fw-bold py-2">UI/UX</h5>
                            <p className="card-text">From simple landing pages to complex web applications, we create dynamic, user-friendly websites using the latest technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Services;
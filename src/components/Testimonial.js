import Profile1 from '../assets/img/profile-1.png';
import Profile2 from '../assets/img/profile-2.png';
import Profile3 from '../assets/img/profile-3.png';

const Testimonial = () => {
    return <div className="testimoni">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 text-center mx-auto">
                    <h2 className="fw-bold">Over 1000+ people trust us</h2>
                    <p>At DigiWave, our clients' success is our top priority. Hear from the businesses we've helped transform with our innovative solutions and exceptional service.</p>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 my-3 col-sm-12">
                    <div className="card card-testi1">
                        <div className="card-body text-center">
                            <img src={Profile1} alt="" className='pb-3' />
                            <p className="comment">“Working with DigiWave was a game-changer for us. Their attention to detail and dedication to delivering the best product exceeded our expectations. Our website's traffic has doubled!”</p>
                            <div className="nick-testi">
                                <h6 className="card-title fw-bold">John Doe</h6>
                                <p className='title'>Sales Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 my-3 col-sm-12">
                    <div className="card card-testi2">
                        <div className="card-body text-center">
                            <img src={Profile2} alt="" className='pb-3' />
                            <p className="comment">“The team at DigiWave brought our vision to life. Their custom solutions perfectly matched our needs, and the results speak for themselves. Highly recommended!”</p>
                            <div className="nick-testi">
                                <h6 className="card-title fw-bold">Sarah M</h6>
                                <p className='title'>UX Researcher</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 my-3 col-sm-12">
                    <div className="card card-testi3">
                        <div className="card-body text-center">
                            <img src={Profile3} alt="" className='pb-3' />
                            <p className="comment">“From start to finish, DigiWave was a true partner. They listened, understood our goals, and delivered a solution that has boosted our business performance significantly.”</p>
                            <div className="nick-testi">
                                <h6 className="card-title fw-bold">Samuel Christ</h6>
                                <p className='title'>Product Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Testimonial;
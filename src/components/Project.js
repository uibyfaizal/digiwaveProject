import Card from 'react-bootstrap/Card';

import Arrow from '../assets/img/arrow.png';
import CardProject1 from '../assets/img/project1.png';
import CardProject2 from '../assets/img/project2.png';
import CardProject3 from '../assets/img/project3.png';

const Project = () => {
    return <div className="project">
        <div className="container">
            <div className="row d-lg-flex">
                <div className="col-lg-6">
                    <h2 className="fw-bold">See Our Projects</h2>
                    <h2 className="fw-bold">Discover Our Latest Projects</h2>
                    <p>At TechHome, we take pride in delivering top-notch solutions that drive results. Explore some of our recent projects and see how we've helped businesses like yours thrive in the digital world.</p>
                </div>
                <div className="col">
                    <img src={Arrow} alt="" className='arrow' />
                </div>
            </div>

            <div className="row card-project d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 py-2 col-sm-6">
                    <Card>
                        <Card.Img variant="top" src={CardProject1} />
                        <Card.Body>
                            <p><span className='fw-bold text-warning'>Clients :</span> Justin Stefany</p>
                            <p><span className='fw-bold text-warning'>Description :</span> Developed a comprehensive e-commerce platform featuring user-friendly navigation, secure payment integration, and a dynamic product catalog to enhance the shopping experience.</p>

                            <a href="/" className='btn btn-dark'>See Portfolio</a>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 col-md-6 py-2 col-sm-6">
                    <Card>
                        <Card.Img variant="top" src={CardProject2} />
                        <Card.Body>
                            <p><span className='fw-bold text-warning'>Clients :</span> Taylor Swift</p>
                            <p><span className='fw-bold text-warning'>Description :</span> Developed a comprehensive e-commerce platform featuring user-friendly navigation, secure payment integration, and a dynamic product catalog to enhance the shopping experience.</p>
                            <a href="/" className='btn btn-dark'>See Portfolio</a>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 col-md-6 py-2 col-sm-6">
                    <Card>
                        <Card.Img variant="top" src={CardProject3} />
                        <Card.Body>
                            <p><span className='fw-bold text-warning'>Clients :</span> Jonah J. Jamson</p>
                            <p><span className='fw-bold text-warning'>Description :</span> Developed a comprehensive e-commerce platform featuring user-friendly navigation, secure payment integration, and a dynamic product catalog to enhance the shopping experience.</p>
                            <a href="/" className='btn btn-dark'>See Portfolio</a>
                        </Card.Body>
                    </Card>
                </div>
                {/* <a href="#see" className='btn btn-see'>See Others</a> */}
            </div>
        </div>
    </div>
}

export default Project;
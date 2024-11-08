import FeaturedImg from '../assets/img/img-featured-content.png';

const Featured = () => {
    return <div className="featured">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 content-img">
                    <img src={FeaturedImg} alt="" />
                </div>

                <div className="col-lg-6 content-text">
                    <h2 className='fw-bold'>Our Featured</h2>
                    <p>Intuitive design, scalable solutions, and custom services to boost your business performance.</p>
                    <div className="list-featured">
                        <div className="list">
                            <i className="fa-solid fa-circle-check px-1"></i>
                            <p><span className='fw-bold'>User-Friendly Design,</span> Experience seamless navigation and an intuitive interface designed to enhance user satisfaction and engagement.</p>
                        </div>
                        <div className="list">
                            <i className="fa-solid fa-circle-check px-1"></i>
                            <p><span className='fw-bold'>Scalability,</span> Our scalable solutions grow with your business, ensuring you can handle increased traffic and demand effortlessly.</p>
                        </div>
                        <div className="list">
                            <i className="fa-solid fa-circle-check px-1"></i>
                            <p><span className='fw-bold'>Customization,</span> Benefit from tailor-made solutions that meet your unique needs, giving you the flexibility to achieve your specific goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Featured;
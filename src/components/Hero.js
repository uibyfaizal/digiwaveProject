import ImgHero from "../assets/img/img-hero-content.png";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Hero = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div className="hero">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 content-text">
                    <h1 className="fw-bold">Welcome to <span className="logo-default">Digi</span><span className="logo-color">Wave</span></h1>
                    <p>Transform your ideas into reality with our expert web and app development services.</p>
                    <p>Your Partner in Innovation</p>
                    <a href="#contact" className="btn btn-primary" onClick={handleShow}>Contact Us</a>
                </div>

                <div className="col-lg-6 content-img">
                    <img src={ImgHero} alt="" />
                </div>
            </div>
        </div>

        {/* Modal */}
        <Modal show={show} onHide={handleClose} className="modal">
            <Modal.Header closeButton>
                <Modal.Title>

                    <h5 className="fw-bold">Connect With Us</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card text-dark bg-light mb-3">
                    <div className="card-header fw-bold">Got questions? Let's talk!</div>
                    <div className="card-body">
                        <p className="card-text">We're just a message away! Connect with us to discuss how we can support your business goals.</p>
                    </div>
                </div>

                <p>Email</p>
                <InputGroup size="md" className="mb-3 input">
                    <Form.Control
                        aria-label="Small"
                        placeholder="Input your email"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>

                <p>Project Name</p>
                <InputGroup size="md" className="mb-3 input">
                    <Form.Control
                        aria-label="Small"
                        placeholder="Tell us your project name"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>

                <p>Project Details</p>
                <Form.Control as="textarea" aria-label="With textarea" placeholder="Please describe about your project" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={handleClose}>
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
}

export default Hero;
import Logo from '../assets/img/logo-digiwave-white.png';

const Footer = () => {
    return <footer className="footer">
        <div className="footer-container">
            <div className="footer-section about">
                <a href="#logo"><img src={Logo} alt="" /></a>
                <p>Empowering business with innovative tech solutions. Let us help you reach new heights in the digital world.</p>
            </div>

            <div className="footer-section links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="footer-section fservices">
                <h4>Our Services</h4>
                <ul>
                    <li><a href="#web-development">Web Development</a></li>
                    <li><a href="#mobile-app">Mobile App Development</a></li>
                    <li><a href="#digital-marketing">UI/UX Designer</a></li>
                </ul>
            </div>

            <div className="footer-section fcontact">
                <h4>Contact Us</h4>
                <p>Email: info@digiwave.com</p>
                <p>Phone: +1 234 567 890</p>
                <div className="socials">
                    <a href="#facebook"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#twitter"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#linkedin"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Digiwave. All Rights Reserved</p>
            <p>Created by <a href="https://www.instagram.com/uibyfaizal">UIBYFAIZAL</a></p>
        </div>
    </footer>
}

export default Footer;
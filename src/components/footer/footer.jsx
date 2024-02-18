import './footer.scss'
import footerr from '../img/footer-r.png'
import group from '../img/Group10.png'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <img src={footerr} alt="footer" className="footer__img" />
                    <div className="footer__centre">
                        <h2 className="footer__heading">
                            Luxury & Fancy Chair
                        </h2>
                        <p className="footer__text">All the Lorem Ipsum generators on the Internet tend to predefined chunks  this the first true generator on the Internet. </p>
                        <span className="footer__line"></span>
                    </div>
                    <div className="footer__fon">
                        <span className="footer__head">20K+ <span className="footer__heade">People Visiting this year</span></span>
                        <span className="footer__head">15 <span className="footer__heade">Years Experience</span></span>
                        <div className="footer__bot">
                            <img src={group} alt="footer" className="footer__ppp" width={116} height={36} />
                            <span className='footer__short'></span>
                            <div className="texta">
                                <span className="footer__p">Trust Members</span>
                                <span className="footer__te">More than 50k peoples integrate with us.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
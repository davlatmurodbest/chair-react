import './header.scss'
import home from '../img/likeuy.png'
import logo from '../img/headerlogo.png'
import navbar from '../img/navbar.png'

function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <a href="#link" className="header__links">
                        <img src={home} alt="home" className="header__uy" width={31} height={31} />
                        <img src={logo} alt="logo" className="header__logo" width={91} height={30} />
                    </a>
                    <nav className="header__list">
                        <a href="#link" className="header__link">About</a>
                        <a href="#link" className="header__link">Blog</a>
                        <a href="#link" className="header__link">Agency</a>
                        <a href="#link" className="header__link">Featured</a>
                        <a href="#link" className="header__link">Price</a>
                    </nav>
                    <img src={navbar} alt="navbar" className="header__navbar" width={30} height={14} />
                </div>
            </header>
        </>
    )
}

export default Header;
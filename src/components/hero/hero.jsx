import './hero.scss'
import facebook from '../img/Facebook.svg'
import insta from '../img/insta.svg'
import twitter from '../img/twitter.svg'
import chair1 from '../img/chair1.png'
import chair2 from '../img/chair2.png'
import chair3 from '../img/chair3.png'
import React from 'react'
import vektor from '../img/Vector.png'

export default function Hero() {

    let chairlist = [
        {
            id: 0,
            img: chair1
        },
        {
            id: 1,
            img: chair2
        },
        {
            id: 2,
            img: chair3
        },
    ]

    let [value, setimg] = React.useState(chair1)

    let change = (img) => {
        setimg(img)
    }

    let xref = React.useRef(0)

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__icons">
                        <img style={{ paddingTop: '500px' }} src={facebook} alt="facebook" />
                        <img src={insta} alt="facebook" />
                        <img src={twitter} alt="facebook" />
                    </div>
                    <div className="hero__info">
                        <span className='hero__span'>100% Quality Guranty</span>
                        <h1 className="hero__heading">Find Classy Furnitures For Your Comfort</h1>
                        <p className="hero__text">
                            All the Lorem Ipsum generators on the Internet tend to predefined chunks  this the first true generator on the Internet.
                        </p>
                        <span className='hero__start'>Start From</span>
                        <p className="hero__p">102.99 USD</p>
                        <button className='hero__btn' type="button" onClick={() => {
                            xref.current.classList.add('modal--open')
                        }}>Buy Now</button>
                    </div>
                    <div className="hero__chairs">
                        <span className="hero__bg" >
                            <span className="hero__wite">.
                                <span className="hero__bgbg">
                                    <div className="hero__smal">
                                        <img src={value} alt="api" className="hero__pic" width={800} height={800} />
                                    </div>
                                </span>
                            </span>
                            <div className="hero__colors">
                                <span className="hero__nom">Popular shades</span>
                                <span className="hero__color1"></span>
                                <span className="hero__color2"></span>
                                <span className="hero__color3"></span>
                                <span className="hero__color4"></span>
                            </div>
                        </span>
                        <div className="hero__buttons">
                            {chairlist.map((row) => (
                                <button className="hero__but" onClick={() => { change(row.img) }}>
                                    <img src={row.img} alt="chair" className="hero__jon" />
                                    <p className="jon__text">Comfort chairs</p>
                                </button>
                            ))}
                            <span className="circle">
                                <img src={vektor} alt="vektor" className="vektor" />
                            </span>
                        </div>
                    </div>
                    <form className="modal" ref={xref} >
                        <div className="modal__inner">
                            <button className="btn" onClick={() =>  {
                                xref.current.classList.remove('modal--open')
                            }}>X</button>
                            <h2 className="modal__heading">
                                Buyurtma berish uchun Formni to'ldiring
                            </h2>
                            <input className='email' type="email" placeholder='Email' />
                            <input className='email' type="text" placeholder='Username' />
                            <div className="peyment">
                                <select className='select' name="Choice" >
                                    <option value="null">Choose payment type</option>
                                    <option value="Cash">Cash</option>
                                    <option value="online">Online</option>
                                    <option value="Recieved">When received</option>
                                </select>
                                <select className='select' name="Choice" >
                                    <option value="null">Online payment type</option>
                                    <option value="Payme">PayMe</option>
                                    <option value="Paynet">Paynet</option>
                                    <option value="click">Click</option>
                                    <option value="other">other way</option>
                                </select>
                            </div>
                            <button className='submit' type='submit' > Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
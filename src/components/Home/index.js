import LogoTitle  from '../../assets/images/logo-2.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArr = ['a', 'r', 'i', ' ', 'F', 'i', 'l', 'o', 'n']
    const jobArr = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    //Not working bounce hover effect
    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])


    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>y</span>
                <span className={`${letterClass} _14`}>a,</span>
                <br /> 
                <span className={`${letterClass} _15`}>I'</span>
                <span className={`${letterClass} _16`}>m</span>
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArr}
                    idx={17}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArr}
                    idx={22}/>
                </h1>
                <h2>JavaScript Developer</h2>
                <div className='btn'>
                    <Link to="/contact" className='flat-button'>Contact Me</Link>
                    <Link to="https://github.com/Mari-devop" target='_blank' className='flat-button'>My Projects</Link>
                </div>
                
            </div>
            {/* <Logo /> */}
        </div>
    )
}


export default Home;
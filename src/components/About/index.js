import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJira, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    // useEffect(() => {
    //         return setTimeout(() => {
    //            setLetterClass('text-animate-hover')
    //         }, 4000)
    //      }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
            <p>I have the skills to understand business goals, establish effective cooperation with all key stakeholders. Ability to create roadmaps and ensure effective execution throughout the project lifecycle. I can effectively plan, organize and manage project resources.</p>
            <p>I understand the website development cycle and also familiar with technical processes. I have experience working with task managers (Jira, Trello, Slack, various CRMs). I understand the principles of digital marketing and SEO promotion.</p>
            <p>I am currently studying programming for 13 months and looking for a job as a frontend developer. Completed DevEducation course and continued the Frontend Engineer course from Codecademy.</p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                <div className="face1">
                    <FontAwesomeIcon icon={faSass} color="#DD0031" />
                </div>
                <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>

                </div>

            </div>
        </div>
    )
}

export default About;
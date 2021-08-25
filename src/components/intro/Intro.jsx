import './intro.scss'
import {ExpandMore} from '@material-ui/icons';
import { useEffect, useRef } from 'react';
import { init } from 'ityped'

function Intro() {
    const textRef = useRef();
    
    useEffect(() => {
        init(textRef.current, { showCursor: true, strings: [
            'an Engineer by Profession', 'a Developer by Passion', 'an Engineer by day', 'a Developer by night'
        ], typeSpeed: 100, backSpeed: 50, backDelay: 1000})
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me_mobile.jpg" alt="myFace" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi! I'm</h2>
                    <h1>Louis</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ExpandMore className='expand' style={{ fontSize: 50 }}/>
                </a>
            </div>
        </div>
    )
}

export default Intro
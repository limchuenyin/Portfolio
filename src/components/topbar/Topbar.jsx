import './topbar.scss'
import {Person, Mail} from '@material-ui/icons'

function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={menuOpen? 'topbar active': 'topbar'}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>
                        intro
                    </a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+65 9633 2205</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>limchuenyin@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>    
                        <span className='line2'></span>    
                        <span className='line3'></span>    
                    </div>        
                </div>
            </div>
        </div>
    )
}

export default Topbar

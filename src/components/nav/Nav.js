import './nav.css'
import navimg from '../../assets/navIcon.png'

export default function Nav() {
    return (
        <div>
            <div className='container'>
                <img src={navimg} alt="nav icon" className="nav-icon" />
                <h1 className='nav-title'>Chat Site</h1>
            </div>
            <hr></hr>
        </div>
    )
}


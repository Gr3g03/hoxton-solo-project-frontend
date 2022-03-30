import { Link } from "react-router-dom"
import './Header.css'

function Header({ signOut }) {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>

            <div className='header__center'>
                <input type="text" />
                <img src='./src/assets/search.svg' alt='' />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <img src='./src/assets/language.svg' alt='' />
                <img src='./src/assets/expand.svg' alt='' />
                <img src='./src/assets/avatar.svg' alt='' />
                <button className="sign_out" onClick={signOut}>SIGN OUT</button>
            </div>
        </div>
    )
}

export default Header
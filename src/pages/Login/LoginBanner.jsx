import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Register from "./Register";


function Banner({ signUp, login }) {

    const navigate = useNavigate()

    function handleOnClick() {
        setShow(true)
    }
    const [show, setShow] = useState(false)

    return (
        <div className='banner'>
            <div className='banner__search'>
            </div>
            <div className='banner__info'>
                <main className="login__main">
                    <div className="login">
                        <img
                            src=""
                            alt=""
                        />

                        <form onSubmit={login}>
                            <input
                                placeholder="Email"
                                name='email'
                                type="email"
                            />
                            <input
                                placeholder="Password"
                                name='password'
                                type="password"
                            />
                            <button type="submit" onSubmit={(e) => {
                                e.preventDefault()
                                navigate('/home')
                            }}>
                                Login
                            </button>
                        </form>
                        <span className='Education_list'>
                            Not a member?{` `}
                            <button className="register_Button" onClick={() =>
                                handleOnClick()
                            }>
                                <span >Register now</span></button>
                            <Register show={show} setShow={setShow} signUp={signUp} />
                        </span>
                    </div>
                    <div className="right_logi__section">
                        <img src='' alt="" />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Banner
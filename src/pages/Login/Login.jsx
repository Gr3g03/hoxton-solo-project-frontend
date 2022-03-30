import HomeLogin from './HomeLogin';
export default function Login({ signUp, login }) {
    return (
        <div className="Login_form">

            <HomeLogin signUp={signUp} login={login} />

        </div>
    )
}
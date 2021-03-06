// import LoginCard from "./LoginCard";
// import './login.css'
import LoginBanner from "./LoginBanner";


export default function HomeLogin({ signUp, login }) {

    return (
        <section className='home'>
            <LoginBanner signUp={signUp} login={login} />


            <div className='home__section'>
                <div className='card'>
                    <img src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" alt="" />
                    <div className="card__info">
                        <h2>"Online Experiences"</h2>
                        <h4>"Unique activities we can do together, led by a world of hosts."</h4>
                        <h3>100</h3>
                    </div>
                </div>

                <div className='card'>
                    <img src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" alt="" />
                    <div className="card__info">
                        <h2>"Online Experiences"</h2>
                        <h4>"Unique activities we can do together, led by a world of hosts."</h4>
                        <h3>100</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

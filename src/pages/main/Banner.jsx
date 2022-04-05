import { useState } from "react";
import Search from "./Search";
import { useNavigate } from 'react-router-dom';
import Upload from "./UploadAirbnb";


function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate()


    // function handleOnClick() {
    //     setShow(true)
    // }
    // const [show, setShow] = useState(false)
    // <Upload show={show} setShow={setShow} />

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' >
                    {showSearch ? "Hide" : "Search Dates"}
                </button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <button className="create_Airbnb" onClick={() => navigate('/nearby')} >Explore Nearby</button>
                <br />
                <span className='Education_list'>
                    <button className="create_Airbnb" onClick={() =>
                        // handleOnClick()
                        navigate('/Upload')
                    }>
                        <span >create Airbnb</span></button>

                </span>
            </div>
        </div>
    )
}

export default Banner
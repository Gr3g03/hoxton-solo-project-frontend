import { useState } from "react";
import Search from "./Search";
import { useNavigate } from 'react-router-dom';


function Banner({ startDate, endDate, setStartDate, setEndDate }) {
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate()


    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />}

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
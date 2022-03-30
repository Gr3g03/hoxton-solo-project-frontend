import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRangePicker } from "react-date-range"

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const navigate = useNavigate()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of guests <img src={'src/assets/people_groups.svg'} alt="" />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <button onClick={() => navigate('/search')}>Search Airbnb</button>
        </div>
    )
}

export default Search

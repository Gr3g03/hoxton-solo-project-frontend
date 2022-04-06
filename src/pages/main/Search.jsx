import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


function Search({ startDate, endDate, setStartDate, setEndDate }) {


    const navigate = useNavigate()


    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <input min={0} defaultValue={2} type="number" />
            <button onClick={() => navigate('/nearby')}>Search Airbnb</button>
        </div>
    )
}

export default Search

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const League = (props) => {
    const { strSport,strLeague,idLeague}= props.league;
    console.log(props.league);
    const [leagueLogo, setLeagueLogo]=useState([]);
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLeagueLogo(data.leagues[0]))
    },[idLeague])

   
    const history=useHistory();
    const handleClick =(idLeague) =>{
        const url=`LeagueDetails/${idLeague}`;
        history.push(url);
    }
   
    return (
        <div className="cardBody mt-4 mb-4">
        <div className="card " style={{ width: '20rem' }}>
            <img src={leagueLogo.strBadge} className="card-img-top img-size p-5" alt="..." />
            <div class="card-body ">
                <h5 className="card-title">{strLeague}</h5>
                <p>{strSport}</p>
               
                 <button className="button" onClick={() => handleClick(idLeague)}>Explore <FontAwesomeIcon icon={faArrowRight}/> </button>

            </div>
            <div>
            </div>
        </div>
    </div>
        
    );
};

export default League;
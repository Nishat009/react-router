import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import League from '../League/League';

const Home = () => {
    const [league, setLeague]= useState([]);
    const allLeagues=league.slice(0,15);
    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLeague(data.leagues))

    },[])
    console.log(allLeagues);
    return (
        <div className="fluid-container">
            <div>
            <Header></Header>
            </div>
            <div className="row m-0">
                {
                    allLeagues.map(league=> <div className="col-lg-4  col-md-6 col-sm-12"><League league={league}></League></div>)
                }
            </div>
        </div>
        
    );
};

export default Home;
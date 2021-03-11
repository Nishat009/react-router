import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Male from '../../Photo/Rectangle 28.png';
import Female from '../../Photo/female.png';
import './LeagueDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFootballBall, faMapMarkedAlt, faMars } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
const LeagueDetails = (props) => {
    
    const{idLeague}=useParams();
    const [leagueDetail, setLeagueDetail]=useState([]);

    useEffect(()=>{
         fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res=>res.json())
        .then(data=>setLeagueDetail(data.leagues[0]))
    },[idLeague])

    let image;
    if("Male"===leagueDetail.strGender){
       image= <img className="w-100" src={Male} alt=""/>
    }
    else if("Female"===leagueDetail.strGender)
    {
        image= <img className="w-100" src= {Female} alt=""/>
    }
    else if("Mixed"===leagueDetail.strGender)
    {
        image= <img className="w-100" src= {Female} alt=""/>
    }

    const banner={
        backgroundRepeat:"noRepeat",
        backgroundPosition:"center",
        backgroundSize: "cover",
        backgroundImage: `url(${leagueDetail.strBanner})`
    }
    return (
        <div>
            <div>
            <div className="row m-0">
                    <div  className="col-lg-12  col-md-6 col-sm-12 text-center logo " style={banner}>
                        <img src={leagueDetail.strLogo} alt=""/>
                    </div>
            </div>
            

            <div className="container text-white mb-3 card-font  teamDetails">
                <div style={{ width: '100%' }}>
                    <div className="row row-detail">
                        <div className="col-md-8 col-sm-12 card-gap">
                            <div className="card-body team">
                                <h5 className="card-title">{leagueDetail.strLeague}</h5>
                                <p className="card-text"><FontAwesomeIcon icon={faMapMarkedAlt} /> Founded: {leagueDetail.intFormedYear}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faFlag} /> Country: {leagueDetail.strCountry}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faFootballBall} /> Sport Type: {leagueDetail.strSport}</p>
                                <p class="card-text"><FontAwesomeIcon icon={faMars} /> Gender: {leagueDetail.strGender}</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 league-image mt-3 p-2 ">
                            <div className="teamImage">
                            {image}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="container details">
                    <p>{leagueDetail.strDescriptionEN}</p>
                    <p>{leagueDetail.strDescriptionDE}</p>
                </div>
            </div>
            <div className="social-icon">
                <a className="p-4" href={`http://${leagueDetail.strTwitter}`} target="_blank/" ><FontAwesomeIcon className="icons fa-3x text-info bg-white rounded-circle p-2" icon={ faTwitter} /></a>
                <a className="p-4" href={`http://${leagueDetail.strFacebook}`} target="_blank/" ><FontAwesomeIcon className="icons fa-3x text-primary bg-white rounded-circle p-2" icon={ faFacebook} /></a>
                <a className="p-4" href={`http://${leagueDetail.strYoutube}`} target="_blank/" ><FontAwesomeIcon className="icons fa-3x text-danger bg-white rounded-circle p-2" icon={ faYoutube} /></a>
            </div>
        </div>
        </div>
        
    );
};

export default LeagueDetails;
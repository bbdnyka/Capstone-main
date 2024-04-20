import React from 'react';
import Missions from '../components/home/Homemissions';
import History from '../components/home/Homehistory';
import Account from '../components/home/homeaccount';
import Start from '../components/home/Homestart';
import Map from '../components/home/Homemap';



const Home = () => {
    return (
        <>
        <div>
            <h2>Welcome, Back!</h2>
            <Missions />
        </div>
        <div>
            <History />
        </div>
        <div>
            <Start />
        </div>
        <div>
            <Account />
        </div>
        <div>
            <Map />
        </div>
        </>
    );
};

export default Home;
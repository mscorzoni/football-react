import React from 'react';
import Featured from './featured';
import Matches from './matches';
import MeetPlayes from './meetPlayers';

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
      <MeetPlayes />
    </div>
  );
};

export default Home;
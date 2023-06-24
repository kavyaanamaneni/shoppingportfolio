import React, { Fragment } from 'react'
import DirectoryContainer from '../Directory/DirectoryContainer';
import { Outlet } from 'react-router-dom';
const Home = () => {
     return (
          <Fragment>
            <DirectoryContainer />
            <Outlet/>
        </Fragment>
        );
      }


export default Home;

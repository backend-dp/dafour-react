import React, { Component } from 'react';
import { Fragment } from 'react';
import Header from './Header';
import Search from './Search';
import Paper from './Paper';
import Plans from './Plans';
import Contact from './Contact';
import Payment from './Payment';







class Home extends Component {

    render() {

        return (

<Fragment >
        
        <Header />
        <Search />
        <Paper />
        <Plans />
        <Contact />
        <Payment />

</Fragment>
);
}

}

export default Home;

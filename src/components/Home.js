import React from 'react';
import TopContainer from './TopContainer';
import PageI from './Page_I';
import PageII from './Page_II';
import About from './About';
import MiddleContainerIII from './MiddleContainerIII';
import Footer from './Footer';
// import BottomContainer from './Bottom_Container';

function Home() {
    return (
        <section id="home">
            <TopContainer />
            <About />
            <PageII />
            <PageI />
            <Footer />
            {/* <MiddleContainerIII /> */}
            {/* <BottomContainer /> */}
        </section>
    );
}

export default Home;

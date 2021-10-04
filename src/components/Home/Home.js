import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
          <Header></Header>
          <Hero></Hero>
          <Services></Services>
          <Footer></Footer>
        </div>
    );
};

export default Home;
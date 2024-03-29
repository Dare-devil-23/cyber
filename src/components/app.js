import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from '../Main/menu/ScrollToTop';
// import Header from './menu/header';
// import Home from './pages/home';
import Home from '../Main/Home'
import Home1 from './pages/home1';
import Home2 from './pages/home2';
import Explore from './pages/explore';
import Explore2 from './pages/explore2';
import Helpcenter from './pages/helpcenter';
import Rangking from './pages/rangking';
import Colection from './pages/colection';
import ItemDetail from './pages/ItemDetail';
import Author from './pages/Author';
import Wallet from './pages/wallet';
import Login from '../Main/login';
import LoginTwo from './pages/loginTwo';
import Register from './pages/register';
import Price from './pages/price';
import Works from './pages/works';
import News from './pages/news';
import Create from './pages/create';
import Auction from './pages/Auction';
import Activity from './pages/activity';
// import Contact from './pages/contact';
import ElegantIcons from './pages/elegantIcons';
import EtlineIcons from './pages/etlineIcons';
import FontAwesomeIcons from './pages/fontAwesomeIcons';
import Accordion from './pages/accordion';
import Alerts from './pages/alerts';
import Progressbar from './pages/progressbar';
import Tabs from './pages/tabs';
import { createGlobalStyle } from 'styled-components';
import ImageGallery from './components/ImageGallery';
import Product from '../Main/products/Product';
import Carrier from '../Main/Carrier';
import Jobdetails from '../Main/Jobdetails';
import Contact from '../Main/Contact';
import Training from '../Main/trainings/Training';
import ComingSoon from '../Main/components/ComingSoon';
import AboutNew from '../Main/AboutNew';
import Blog from '../Main/blog/Blog';
import { AnimatePresence } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <ParallaxProvider>
        <AnimatePresence exitBeforeEnter>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
        </AnimatePresence>
        </ParallaxProvider>
      </div>
    )}
  </Location>
);

const app= () => (
  <div className="wraper">
    
  <GlobalStyles />
    {/* <Header/> */}
      <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/">
          <Redirect to="/home" />
          <AboutNew path="/#aboutus" />
        </Home>
        <ComingSoon path="/comingsoon"/>
        <Training path="/training" />
        <Product path="/product/:id" />
        
        <Carrier path="/careers" />
        <Jobdetails path = "/jdetail" />
        <Contact path = "/contact"/>
        <ImageGallery path="/img" />
        <Home1 path="/home1" />
        <Home2 path="/home2" />
        <Explore path="/explore" />
        <Explore2 path="/explore2" />
        <Helpcenter path="/helpcenter" />
        <Rangking path="/rangking" />
        <Colection path="/colection" />
        <ItemDetail path="/ItemDetail" />
        <Author path="/Author" />
        <Wallet path="/wallet" />
        <Login path="/login" />
        <LoginTwo path="/loginTwo" />
        <Register path="/register" />
        <Price path="/price" />
        <Works path="/works" />
        <News path="/news" />
        <Blog path="/blog" />
        <Create path="/create" />
        <Auction path="/Auction" />
        <Activity path="/activity" />
        {/* <Contact path="/contact" /> */}
        <ElegantIcons path="/elegantIcons" />
        <EtlineIcons path="/etlineIcons" />
        <FontAwesomeIcons path="/fontAwesomeIcons" />
        <Accordion path="/accordion" />
        <Alerts path="/alerts" />
        <Progressbar path="/progressbar" />
        <Tabs path="/tabs" />
        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />
    
  </div>
);
export default app;
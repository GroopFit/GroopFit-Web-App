import React from 'react';
import './ComingSoonPage.css';
//import SVG from './building_site.svg';
//import SVG from './building_site2.svg';
//import SVG from './building_site3.svg';
//import SVG from './group_hangout.svg';
//import SVG from './under_construction.svg';
//import SVG from './runner.svg';
import SVG from './CS_Image.svg';

class ComingSoonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
 
    }
  }
 
  render() {
    return(
        <body>
            <div className="uc__wrapper">
                <div className="uc__details">
                    <h1 className="title">Coming Soon!</h1>
                    <h3 className="intro">
                        We are working hard to give you healthy lifestyle growth opportunities through group fitness.   
                    </h3>
                    <p className="uc__description">
                        Our Site is almost ready, so are you ready for the most user-friendly group fitness tool? 
                        Be one of the first to experience it by entering your email and name below. As we will notify you as soon as GroopFit goes live.    
                        We are in this together, our community striving to reach our goals one challenge at a time! 
                    </p>
                    <div className="uc__subscribe">
                        <h3>Get Notified When We Go Live</h3>
                        <div className="uc__form">
                            <form action="#">
                                <div className="flex flow-row input-top ">
                                    <input type="text" className="fn-input" placeholder="First Name"/>
                                    <input type="text"  className="ln-input" placeholder="Last Name"/>
                                </div>
                                <input type="email" className="email" placeholder="Email Address"/>
                                <input type="submit" className="submit" value="Get Notified" />
                                <input type="submit" className="submit-small" value="" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="uc__art">
                    <img className="dev" src={SVG} alt="" />
                </div>
            </div>
        </body>
    );
  }
}

export default ComingSoonPage 
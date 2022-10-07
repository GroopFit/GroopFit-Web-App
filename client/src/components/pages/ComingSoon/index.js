import React from 'react';
import './ComingSoonPage.css';
import SVG from './athlete.svg';

class ComingSoonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
 
    }
  }


  requestAddToEmailList = async (payload) => {
    const fetchRoute = `http://localhost:8000/promotion/coming-soon`;
    try {
        const serverResponse = await fetch(fetchRoute, {
            method: 'POST',
            mode: 'cors',
            headers: { 
                 'Content-Type': 'application/json',
             },
            credentials: 'include',
            body: JSON.stringify(payload)
        });

        if( !serverResponse.ok ){
            if( serverResponse.status === 403 ){
                /*--------------------------------------------------------------------/
                /  Task: Put Code here to Handle the Failure of this request!         /
                /--------------------------------------------------------------------*/
            } 
            throw new Error(`${serverResponse.status} ${serverResponse.statusText}`) 
            return {}
        } 
        return await serverResponse.json()
    } catch (err) {
        return {}
    }
}  
  

  handleSubmit = async (e) => {
    console.log("We are Working")
    console.log("Email: ", e.target.email.value)
    console.log("First: ", e.target.given_name.value)
    console.log("Last: ", e.target.family_name.value)
    e.preventDefault();

    let response = await this.requestAddToEmailList({
        email: e.target.email.value,
        firstName: e.target.given_name.value,
        lastName: e.target.family_name.value,
    })
    console.log( response )

  }
 
  render() {
    return(
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
                            <form action="#"  onSubmit={this.handleSubmit}>
                                <div className="flex flow-row input-top ">
                                    <input type="text" className="fn-input" name="given_name" placeholder="First Name" required />
                                    <input type="text"  className="ln-input" name="family_name" placeholder="Last Name" required />
                                </div>
                                <input type="email" className="email" name="email" placeholder="Email Address" required/>
                                <input type="submit" className="submit" value="Get Notified" />
                                <input type="submit" className="submit-small" value=""/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="uc__art">
                    <img className="dev" src={SVG} alt="" />
                </div>
            </div>
    );
  }
}

export default ComingSoonPage 
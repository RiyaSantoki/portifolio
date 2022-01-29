import React, { Component } from 'react'
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png'

class App extends Component {
    state = {displayBio: false}



    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    

    render(){
        return(

            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Riya. I'm software engineer.</p>
                <p>I'm always looking forward to working on meningful Projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in San Feancisco ,and code every day. </p>
                            <p>My favorite language is javaScript, and i think React.js is awesome.</p>
                            <p>Besides coding, I also love Music!</p>
                            <button type="button" className="btn btn-link" onClick={this.toggleDisplayBio}>Less More</button>
                        </div>
                    ) : (
                        <div>
                             <button type="button" className="btn btn-link" onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;
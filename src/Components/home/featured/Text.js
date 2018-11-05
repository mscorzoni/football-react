import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class Text extends Component {

  animatedNumber = () => (
    <Animate
         show={true}
         start={{
           opacity:0,
           rotate: 0
         }}
         enter={{
           opacity:[1],
           rotate:[360],
           timing:{duration: 1000, ease: easePolyOut}
         }}
      >
      {({opacity, rotate}) => {
        return(
          <div className="featured_number"
            style={{
                  opacity,
                  transform: `translate(260px, 170px) rotateY(${rotate}deg)`
                    }}
              >
            3
          </div>
        )
      }}
    </Animate>
  )

  animatedFirst = () => (
    <Animate
         show={true}
         start={{
           opacity:0,
           x: 503,
           y: 450
         }}
         enter={{
           opacity:[1],
           x: [273],
           y: [450],
           timing:{duration: 500, ease: easePolyOut}
         }}
      >
      {({opacity,x,y}) => {
        return(
          <div className="featured_first"
            style={{
                  opacity,
                  transform: `translate(${x}px, ${y}px)`
                    }}
              >
            League
          </div>
        )
      }}
    </Animate>
  )


  animatedSecond = () => (
    <Animate
         show={true}
         start={{
           opacity:0,
           x: 503,
           y: 586
         }}
         enter={{
           opacity:[1],
           x: [273],
           y: [586],
           timing:{delay: 400, duration: 500, ease: easePolyOut}
         }}
      >
      {({opacity,x,y}) => {
        return(
          <div className="featured_second"
            style={{
                  opacity,
                  transform: `translate(${x}px, ${y}px)`
                    }}
              >
            Championships
          </div>
        )
      }}
    </Animate>
  )

  render() {
    return (
      <div className="featured_text">
        {this.animatedNumber()}
        {this.animatedFirst()}
        {this.animatedSecond()}
      </div>
    );
  }
}

export default Text;
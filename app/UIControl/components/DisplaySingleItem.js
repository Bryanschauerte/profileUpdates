import React from 'react';

import { Motion, StaggeredMotion, spring } from 'react-motion';



const DisplaySingleItem = ({handleMouseEnter, handleMouseLeave, fillColor, activeHover, displayItem })=> (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          height:"100%",
          width:'100%',
          border:activeHover?'1px solid black':'',
          borderRadius:activeHover?'2em':''}}>


                  <Motion
                    defaultStyle={{
                      fontSize: window.innerWidth * .05,
                      fontSpace:window.innerWidth * .025,
                      r:0,

                      rgbColor: 50

                      }}
                    style={{
                    rgbColor: spring(activeHover? 230:50, {stiffness:800, damping:500}),
                    fontSize: spring(activeHover? 50: window.innerWidth * .05),
                    fontSpace: spring(activeHover? 0: window.innerWidth * .025),
                    r:spring(activeHover? 100:0)


                  }}>
                          {({ fontSize, fontSpace, r, rgbColor}) =><div style={{
                            // transform: `rotate(${x}turn)`,
                            display:"flex",
                            flexDirection:'row',
                            flex:1,
                            position:'relative',
                            height:"100%",
                            justifyContent:'center'

                          }} >
                          <div style={{position:'absolute', top:0, left:0, height:'100%', width:'100%', borderRadius:activeHover?'2em':'', overflow:'hidden'}}>
                            <svg key ={Math.random()} id="TopSVGCirles" height="100%" width="100%">
                              <circle key ={Math.random()} cx='50%' cy='50%' r={r+'%'} fillOpacity='.3' fill={fillColor} />
                              {/* <text x="0%" y="50%"  stroke="none" fill="#242424"  opacity=".4" fontSize="127px" fontFamily="Garamond"><tspan dy="0%">{this.props.displayItem}</tspan></text> */}
                            </svg>
                          </div>
                          <h1 onMouseEnter={handleMouseEnter} style={{
                            opacity:'.4',
                            color:`rgb(${rgbColor}, ${rgbColor}, ${rgbColor})`,
                            fontSize: `${fontSize}px`,
                            letterSpacing: `${fontSpace}px`,

                            margin:'0',
                            alignSelf:'center'
                          }}>{displayItem}</h1>


                        </div>
                      }
                    </Motion>



              </div>)






export default DisplaySingleItem;

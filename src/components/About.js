import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="/images/profile.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>Sobre mim</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

         <div className="row" style={{display: "flex", justifyContent: "space-between"}}>
         <div className="wrapper-icons-about">
            <img className="wrapper-icons-about"  src="/images/icon_map.svg" alt="" />
            <span>Mogi das Cruzes - SP</span>
         </div>
         <div className="wrapper-icons-about">
            <img className="wrapper-icons-about"  src="/images/calendar.svg" alt="" />
            <span>11/08/1999</span>
         </div>
         </div>
            </div>
         </div>
      </section>
    );
  }
}
import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Meus projetos</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
               
              <div className="columns portfolio-item">
                <div>
                <div class="flip-box">
                    <div class="flip-box-inner">
                <div class={`flip-box-front ${item.classe}`}>
                    </div>
                    <div class="flip-box-back">
                      <span className="title-card">{item.name}</span>
                      <p className="descripton">{item.description}</p>
                    </div>
                  </div>
                </div>
                  </div>
              </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
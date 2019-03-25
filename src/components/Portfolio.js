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
               
              <a href={item.link} className="columns portfolio-item">
                <div>
                <div class="flip-box">
                    <div class="flip-box-inner">
                <div class={`flip-box-front ${item.classe}`}>
                    </div>
                    <div class="flip-box-back">
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
                  </div>
              </a>
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
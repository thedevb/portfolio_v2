import React, { Component } from 'react'

export class Skills extends Component {
  static propTypes = {

  }

  render() {
      let resumeData = this.props.resumeData
    return (
      <ul className="skills eleven">
                        
        <div className="row">
            <li className="columns five">
                <span className={`bar-expand ${resumeData.skills[0].skillname.toLowerCase()}`} />
                <em>{resumeData.skills[0].skillname}</em>
            </li>
            <li className="columns five">
                <span className={`bar-expand ${resumeData.skills[1].skillname.toLowerCase()}`} />
                <em>{resumeData.skills[1].skillname}</em>
            </li>
            
        </div>
        <div className="row">
            <li className="columns five">
                <span className={`bar-expand ${resumeData.skills[2].skillname.toLowerCase()}`} />
                <em>{resumeData.skills[2].skillname}</em>
            </li>
            <li className="columns five">
                <span className={`bar-expand ${resumeData.skills[3].skillname.toLowerCase()}`} />
                <em>{resumeData.skills[3].skillname}</em>
            </li>
        </div>
        <div className="row">
            <li className="columns five">
                <span className={`bar-expand ${resumeData.skills[3].skillname.toLowerCase()}`} />
                <em>{resumeData.skills[3].skillname}</em>
            </li>
            <li className="columns five">
                <span className={`bar-expand ${resumeData.skills[4].skillname.toLowerCase()}`} />
                <em>{resumeData.skills[4].skillname}</em>
            </li>
        </div>
        <div className="row">
            <li className="columns five">
                <span className={`bar-expand ${resumeData.skills[5].skillname.toLowerCase()}`} />
                <em>{resumeData.skills[5].skillname}</em>
            </li>
            <li className="columns five">
                <span className={`bar-expand ${resumeData.skills[6].skillname.toLowerCase()}`} />
                <em>{resumeData.skills[6].skillname}</em>
            </li>
        </div>
      </ul>
    )
  }
}

export default Skills

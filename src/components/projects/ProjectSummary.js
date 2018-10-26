import React, { Component } from 'react';


class ProjectSummary extends Component {
    render() {
    return (
      <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{this.props.project.title}</span>
        <p>Posted by Illya</p>
        <p className="grey-text">December 12</p>
      </div>
      </div>
    );
  }
}

export default ProjectSummary;

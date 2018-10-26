import React, { Component } from 'react';


class ProjectDetails extends Component {
  constructor(props){
    super(props);

  this.id = this.props.match.params.id
  }



  render() {
    return (
    <div className="container section project-details">
     <div className="card z-depth-0">
     <div className="card-content">
     <span className="card-title" > Project Title - {this.id}</span>
     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lacus a bibendum semper. Nulla facilisi. Praesent aliquam ullamcorper odio non aliquam. Nullam semper, risus sit amet viverra euismod, enim dolor interdum lorem, vitae pretium velit ante sit amet metus. Quisque gravida quam ac dui vehicula, sit amet pulvinar elit porttitor. Aenean ultricies erat nec nisl convallis laoreet. Morbi condimentum metus risus, quis molestie est posuere eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus porta congue metus id condimentum. Morbi lacinia dictum metus, ultricies dignissim tellus facilisis a. Vestibulum vulputate pulvinar ligula, nec rhoncus metus malesuada sed. Aliquam erat volutpat. Praesent sit amet efficitur arcu, eget accumsan ipsum. Quisque quis sem ut metus vehicula congue. </p>
     </div>
     <div className="card-action grey lighten-4 grey-text text-darken-1">
<div> Posted by Illya </div>
<div> 23d december </div>
     </div>
     </div>
    </div>
    );
  }
}

export default ProjectDetails;

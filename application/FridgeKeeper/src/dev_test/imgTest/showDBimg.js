import React from 'react';

export default class Show extends React.Component{ 
    componentWillMount(){
        this.state = {imgUrl : ''}
        fetch('http://localhost')
          .then(response => response.blob())
          .then(images => this.setState({imgUrl: URL.createObjectURL(images)}))
          .catch(err=>console.log(err))
        this.render = ()=> <img src={this.state.imgUrl}/>
    } 
}
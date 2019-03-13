import React, { Component } from 'react';
import {connect} from 'react-redux';


class TableCell extends Component{
    
    showVideo = () =>{

        this.props.setVideoContent({videoSource:this.props.trailerURL,rowNumber:this.props.row_number,movieTitle:this.props.title});
    }
    render(){
      return(
        <td>
          <div className="thumb">
            <div className="overlay">
              <a href="#" onClick={this.showVideo.bind(this)}>
                <img className="movie_image thumbnail" src={this.props.imageURL}></img>
              </a>
              <span className="time">{this.props.Language}</span>
              <div href="#" onClick={this.showVideo.bind(this)} className="playWrapper"></div>
            
            </div>
            <div className="thumbCaption">
              {this.props.title}
            </div>
          </div>
        </td>
      )
    }
  }

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        setVideoContent: (payload) => {
            console.log(payload);
            dispatch({
                type:'SET_MODAL_CONTENT',
                payload:payload
            });
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TableCell);
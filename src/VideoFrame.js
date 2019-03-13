
import React, { Component } from 'react';
import {connect} from 'react-redux';


class VideoFrame extends Component{
    constructor(props){
      super(props);
      this.rowId = props.row_number;
      this.videoSource = props.videoSource;
      this.cols_per_row = props.cols_per_row;
      this.shouldShow = this.shouldShow.bind(this);
      this.showEnabled = true;
    }
    // overrideVisibility = (rowId)=>{
    //   if(this.rowId == rowId)
    //   {
    //     this.showEnabled = true;
    //     this.setState({showEnabled:this.showEnabled});
    //   }
    // }
    shouldShow = ()=>{
        return (this.props.rowNumber == this.rowId)
    }
    render(){
      return(
        <td colSpan={this.cols_per_row} style={{borderTop:"0px",background:"black",padding:"0px"}}>
        {this.shouldShow() && this.showEnabled  &&
        <>
            <div className="col-md-10">
                <iframe className="videoEmbed" width="100%" height="100%" src={this.props.videoSource}></iframe>
            </div>
            <div className="col-md-2">
                <h3 className="videoTitle" >{this.props.movieTitle}</h3>
            </div>
          
          </>
        }
        </td>
      )
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
    }
  
  }
  
  const mapStateToProps = (state) =>{
    return {
        videoSource : state.ModalReducer.ModalContents.videoSource.replace("watch?v=","embed/"),
        rowNumber: state.ModalReducer.ModalContents.rowNumber,
        movieTitle: state.ModalReducer.ModalContents.movieTitle,
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(VideoFrame);
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notifications, {notify} from 'react-notify-toast';
import mockData from './mockData';
import VideoFrame from './VideoFrame';
import TableCell from './TableCell';




class App extends Component {
  getRowContents = (mockData,startIndex,lastIndex,row_number) => {
    let result =<></>;
    let keys = Object.keys(mockData).slice(startIndex,lastIndex);
    return keys.map((key,index) =>{
      return <TableCell title={mockData[key]['EventTitle']} row_number={row_number} Language={mockData[key]['EventLanguage']} trailerURL={mockData[key]['TrailerURL']} imageURL={"https://in.bmscdn.com/events/moviecard/"+key+".jpg"}></TableCell>
    });
    
  }
  displayData = () => {
    let cols_per_row = 6;
    let current_col =0;
    let result=<></>;
    let startIndex  = 0;
    return Object.keys(mockData[1]).map((key,index)=>{
      let rowNumber = parseInt(index/cols_per_row);
      if((index != 0 && index%cols_per_row == 0) || index == Object.keys(mockData[1]).length)
      {
        return <tr>{this.getRowContents(mockData[1], (rowNumber-1)*cols_per_row, index,rowNumber-1)}</tr>
      }
      else if(index%cols_per_row ==1){
        return <tr><VideoFrame cols_per_row={cols_per_row} row_number={rowNumber} ></VideoFrame></tr>
      }
    })
    // for(let i=0;i< Object.keys(mockData[1]).length/cols_per_row;i++){
    //   //id ->
    //   result += <tr>getRowContents(mockData[1], i, cols_per_row)</tr>
    // }

    // console.log(result);
    // return result;
  }
  render() {
    return (
      <div className="container" style={{paddingLeft:"30px", background:"linear-gradient(90deg, rgba(11, 10, 10, 0.75), rgba(13, 0, 0, 0.82))",width:"100%",height:"100%"}}>
        <div className="row font-override">
          <h1 style={{fontFamily:"cursive"}}>Movie Trailers</h1>
        </div>
        <div className="row table-responsive">
          <table className="table">
            <tbody>
              {this.displayData()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;

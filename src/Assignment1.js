import React, { Component } from 'react';
import './App.css';
import Notifications, {notify} from 'react-notify-toast';


class Assignement1 extends Component {
  constructor(props){
    super(props);
    this.inputValue = '';
    this.numbers = [];
    this.displayElements.bind(this);
  }

  buttonClick = () =>{
    this.numbers = [];
    let duplicates = new Set();
    for(var  items of  this.inputValue.trim().split(" "))
    {
      if(items.trim().length==0)
        continue;
      let ranges = items.split("-");
      if(ranges.length>1)
      {
        for(let i = Number(ranges[0]);i<=Number(ranges[1]);i++)
        {
          if(this.numbers.indexOf(i)>=0)
            duplicates.add(i);
          else 
            this.numbers.push(i);
        }  
      }
      else{
        if(this.numbers.indexOf(Number(items))>=0)
          duplicates.add(Number(items));
        else 
          this.numbers.push(Number(items));
      }
    }
    this.numbers.sort((a,b)=>a-b);
    this.setState({numbers:this.numbers});
    if(duplicates.size>0)
      notify.show("Numbers : "+[...duplicates].sort().join(",")+" are duplicates and will be skipped.", "custom", 5000,  { background: '#0E1717', text: "#FFFFFF" });
  }
  displayElements= ()=>{
    return this.numbers.map(item =><p>{item}</p>);
    
  }
  onChangeListener=(event)=>{
    let re = /[ 0-9-]+/;
    let parsed = re.exec(event.target.value);
    if(parsed){
      this.inputValue = parsed[0];
    }
    else if(event.target.value.length ==0)
      this.inputValue = "";
    this.setState({inputValue:this.inputValue});
  }
  render() {
    return (
      <div>
        <div className="">
          <Notifications />
        </div>
        <div className="modal-header text-center">
          <h3>Assignemnet 1</h3>
        </div>
        <div className="row mt-3 md-3 pt-3 pd-3">
          <div className="col-md-6 col-md-offset-3 form-group">
            <div className="col-md-10">
              <input type="text" className="form-control " value={this.inputValue} onChange={this.onChangeListener.bind(this)}/>
            </div>
            <div className="col-md-2">
              <button type="submit" className="form-control btn btn-success" onClick={this.buttonClick.bind(this)}>Submit</button>
            </div>
          </div>
        </div>
        <div className="row pt-5 pd-5">
          <div className="col-md-6 col-md-offset-3 form-group"> 
            Elements :
              {this.displayElements()}
          </div>
        </div>

      </div>
    );
  }
}

export default Assignement1;

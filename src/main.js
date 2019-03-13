import React,{Component} from 'react';

class Main extends Component{
    render(){
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>Welcome</h1>
                </div>
                <div className="well well-sm">
                    <h3><a href="/assignment1">Click for assignment1</a></h3>
                    <h3><a href="/assignment2">Click for assignment2</a></h3>
                </div>
            </div>

        )
    }
}
export default Main;
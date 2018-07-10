import React, {Component} from "react"
import './App.css'
import jQuery from "jquery"
import Menu from "./Components/menu/Menu"
import Text from "./Components/TextContent/Text"
import TimerArea from "./Components/timer/Timer"
import "font-awesome/css/font-awesome.min.css";


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            total:0.0,
            btn:<button className="btn btn-success btn-lg" onClick={()=>this.start()}>Start</button>,
            min:"00",
            sec:"00",
            mile:"00",
            pause:true,

        }
    }
    Starting=null;
start(){
			let x=this.state.total;
      this.starting= setInterval(()=>{
       	x++;

           this.setState({
              total:x,
               btn:<div className="col-md-12"><button className="btn btn-lg btn-primary float-left" onClick={()=>this.step()}>Step</button><button className="btn btn-danger btn-lg float-right" onClick={this.stop.bind(this)}>pause</button></div>,
               min:Math.floor(x/(1000*60)),
               sec:Math.ceil(x/1000),
               mile:Math.ceil(x%1000)
           });
       },0);

}
step(){
    var x=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong> Min:${this.state.min} sec:${this.state.sec} mile:${this.state.mile}</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
   return jQuery(".step").append(x);

}

stop(){
	console.log(this.state.pause);
    if(this.state.pause===true){
    	clearInterval(this.starting);

    	this.setState({
    		pause:false,
         btn:<div className="col-md-12"><button className="btn btn-lg btn-danger float-left" onClick={()=>this.reset()}>Reset</button><button className="btn btn-primary btn-lg float-right" onClick={this.stop.bind(this)}>Start</button></div>,
    	})
    }
    else{
        
    	
    	this.setState({
    		pause:true,
         btn:<div className="col-md-12"><button className="btn btn-lg btn-primary float-left" onClick={()=>this.step()}>Step</button><button className="btn btn-danger btn-lg float-right" onClick={this.stop.bind(this)}>pause</button></div>,
    	});
      this.start();
    }
    
}

reset(){
this.setState({
            total:0.0,
            btn:<button className="btn btn-success btn-lg" onClick={()=>this.start()}>Start</button>,
            min:"00",
            sec:"00",
            mile:"00",
            pause:true,
 });
jQuery(".step").children().hide(); 

}

  render() {

  return (
    <div className="App">
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">

                     <Menu />
                  <Text/>
                  <div className="row">
                      <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="row">

                            <TimerArea startinit={this.state.min} borcol="red"/>
                            <TimerArea startinit={this.state.sec} borcol="green"/>
                            <TimerArea startinit={this.state.mile} borcol="blue"/>



                        </div>
                        <div className="row">
                                {this.state.btn}


                        </div>
                        <div className="row">
                            <div className="col-md-12 step">

                    </div>

                              <div className="col-md-2"></div>
                          </div>
                      </div>
                      <div className="col-md-3"></div>
                  </div>
              </div>
              <div className="col-md-1"></div>
          </div>
      </div>
    </div>

    //return React.createElement('h1',{className:App},"hi i am R@sel");
  );
  }
}

export default App;

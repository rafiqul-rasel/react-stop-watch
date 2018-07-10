import React, {Component} from "react";
import "./Text.css";

class Text extends Component{
    constructor(props){
        super(props);
         this.title=React.createRef();
        this.state={
            starting:<h1 className="Dumy" onClick={()=>this.txt()}>This is a dummy Heading </h1>
        }
    }
    txt() {
        this.setState({
            starting:<div className="form-group Dumy"><input ref={this.title} className="form-control" onBlur={()=>this.save()} type="text"/><button className="btn btn-info btn-lg" onClick={()=>this.save()}>Save</button></div>

        });
    }
save(){

        if(this.title.current.value!==""){
            this.setState({
                starting:<h1 className="Dumy" onClick={()=>this.txt()}>{this.title.current.value}</h1>

            });
        }

}
    render(){
        return  <div className="row dummyText">
            <div className="col-md-3"></div>
            
            <div className="col-md-6 ">{ this.state.starting }</div>
            <div className="col-md-1 Dumy dummIcon" onClick={()=>this.txt()}><h1><i className="fa fa-pencil" aria-hidden="true"></i></h1></div>
           
            <div className="col-md-2"></div>
        </div>;
    }


}
export default Text;
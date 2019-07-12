import React,{Component} from 'react';

class Home extends Component{
constructor(props){
super(props);
this.state={
    name:"klkl",
    title:"1212"
}
}
render(){
return(
<div>






<h1>klkl</h1>
<h2>xinmin：{this.state.name}</h2>
<div>{this.state.title}</div>
<div title="1111">woshidiv</div>
<div title={this.state.title}>woshidiv</div>
</div>

);


}

}
export default Home;

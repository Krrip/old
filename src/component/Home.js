import React,{Component} from 'react';
import '../asset/css/index.css';
class Home extends Component{
constructor(props){
super(props);
this.state={
    name:"klkl",
    title:"1212"

}
}


run=()=>{
alert(this.state.name)

}
render(){
return(
<div>






<h1>klkl</h1>
<h2>xinmin：{this.state.name}</h2>
<div>{this.state.title}</div>
<div title="1111">woshidiv</div>

<div title={this.state.title}>woshidiv</div>

<div>woshi daiwi</div>
<div className='red'>woshired</div>
<div className='greed'>kikilk</div>
<button onClick={this.run}>执行方法</button>
<button onClick={this.run}>豆腐干</button>
<button onClick={this.run}>kiji</button>

</div>

);


}

}
export default Home;

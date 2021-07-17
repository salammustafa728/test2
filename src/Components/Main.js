import React, { Component } from 'react';
import axios from 'axios';
import ApiData from './ApiData';


export class Main extends Component {
    constructor(props){
        super(props)
        this.state={
          allData:[],
          err:''
        }
    }

    componentDidMount = async ()=>{
        const url = `${process.env.REACT_APP_SERVER_URL}/allData`;
        console.log('url',url);
      await axios(url).then((response)=>{
          this.setState({
              allData: response.data
          })
      }).catch(err=> this.setState({ err: err.message }));
    }

   addFav= async (i)=>{
    let targetData = this.state.allData[i];
    console.log('targetData',targetData);
    let dataBody = {
        name: targetData.strDrink,
        url: targetData.strDrinkThumb
    };

    let url = `${process.env.REACT_APP_SERVER_URL}/addFav`;
   
   await axios.post(url,dataBody).then(response=>console.log(response.data)).catch(err=>this.setState({err: err.message}));
   }

    render() {
        return (
            <div>
             {this.state.err ? (
                 <p>{this.state.err}</p>
             ) : (
                 <div >
                       <ApiData
                       allData={this.state.allData}
                       addFav={this.addFav}
                       />
 
                 </div>
             )
             
            }
              
            </div>
        )
    }
}

export default Main

                   
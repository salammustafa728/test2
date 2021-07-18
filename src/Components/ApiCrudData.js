import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ApiData.css';
// import './ApiCrudData.css';

export class ApiCrudData extends Component {
    
    render() {
        return (
                <div style={{}}>
                  {
                       this.props.apiCrudData.map((obj, idx)=>{
                        return(
                            <div key={idx}>
                            <Card className='card3' >
                            <Card.Img style={{ width: "100%",height: "auto"}} variant="top" src={obj.thumbnail} />
                            <Card.Body>
                              <Card.Title>{obj.title}</Card.Title>
                              <Card.Text>
                              {obj.artist}
                              </Card.Text>
                              <Card.Text>
                              {obj.description}
                              </Card.Text>
                              <Button style={{ backgroundColor: "#40394A",margin: "50px auto",borderRadius: "50px"}} onClick={e=>this.props.deletItem(obj.slug)}>delete</Button>
                              <Button  onClick={e=>this.props.showUpdateForm(obj.description,obj.slug)}>update</Button>
                            </Card.Body>
                          </Card>
                          </div>
                        )
                    })
                  }
                </div>
                   //style={{ width: '18rem', background:"#7ECA9C",marginBottom:'10px'
                  //  ,marginLeft:'20px', marginTop:'10px' }}
                //style={{ width: '18rem',marginBottom:'10px',marginLeft:'20px' }}
        )
    }
}

export default ApiCrudData

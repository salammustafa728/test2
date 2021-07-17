import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class ApiCrudData extends Component {
    
    render() {
        return (
                    this.props.apiCrudData.map((obj, idx)=>{
                        return(
                            <div key={idx}>
                            <Card style={{ width: '18rem', background:"#C6B4CE",marginBottom:'10px',marginLeft:'20px' }}>
                            <Card.Img variant="top" src={obj.thumbnail} />
                            <Card.Body>
                              <Card.Title>{obj.title}</Card.Title>
                              <Card.Text>
                              {obj.artist}
                              </Card.Text>
                              <Card.Text>
                              {obj.description}
                              </Card.Text>
                              <Button variant="primary"  onClick={e=>this.props.deletItem(obj.slug)}>delete</Button>
                              <Button variant="primary"  onClick={e=>this.props.showUpdateForm(obj.description,obj.slug)}>update</Button>
                            </Card.Body>
                          </Card>
                          </div>
                        )
                    })
                
        )
    }
}

export default ApiCrudData

import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './ApiData.css';

export class ApiData extends Component {


    render() {
        return (   
            <div style={{display:'flex',flexWrap:'wrap',margin:'40px 40px'}}>
                {
                     this.props.allData.map((obj, idx)=>{
                        return(
                            <div key={idx} style={{}}>
                            <Card className='card2' style={{ width: '18rem', background:"#7ECA9C",marginBottom:'10px'
                            ,marginLeft:'20px', marginTop:'10px' }}>
                            <Card.Img variant="top" style={{width: '18rem'}} src={obj.strDrinkThumb} />
                            <Card.Body>
                              <Card.Title>{obj.strDrink}</Card.Title>
                              <Button className='button' style={{}} variant="primary" onClick={() => this.props.addFav(idx)}>Add To Favorite</Button>
                            </Card.Body>
                          </Card>
                          </div>
                        )
                    })
                }
            </div>     
        )
    }
}

export default ApiData

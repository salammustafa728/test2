// import React, { Component } from 'react'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

// export class FavCard extends Component {
//     render() {
//         return (
//             <div>
//                   <div style={{display:'flex',flexWrap:'wrap'}}>
//                              { 
//                                this.props.favData.map((item, i)=>{
//                                      return (
//                                          <div key={i} >
//                                              <Card style={{
//                                                  width: '18rem', background: "#C6B4CE", marginBottom: '10px'
//                                                  , marginLeft: '20px', marginTop: '10px' }}>
//                                                  <Card.Img variant="top" style={{ width: '18rem' }} src={item.url} />
//                                                  <Card.Body>
//                                                      <Card.Title>{item.name}</Card.Title>
//                                                      <Button variant="primary" onClick={() => this.props.deleteFav(i)}>Delete from Favorite</Button>
//                                                  </Card.Body>
//                                              </Card>
//                                          </div>
//                                      )
//                                  })
                               
//                              }
//                          </div>
//             </div>
//         )
//     }
// }

// export default FavCard

import React, { Component } from 'react'
import axios from 'axios';
import FormUpdate from './FormUpdate';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favData: [],
            err: '',
            show: false,
            id: 0          
        }
    }

    async componentDidMount() {
        let url = `${process.env.REACT_APP_SERVER_URL}/getFavData`;
        await axios.get(url)
            .then(response => { this.setState({ favData: response.data }) })
            .catch(err => { this.setState({ err: err.message }) });
    }

    deleteFav = async (id) => {
        let url = `${process.env.REACT_APP_SERVER_URL}/deleteFavData/${id}`;

        await axios.delete(url)
         axios.get(`${process.env.REACT_APP_SERVER_URL}/getFavData`)
            .then(response => { this.setState({ favData: response.data }) })
            .catch(err => { this.setState({ err: err.message }) });
    }

    updateFav = (id) => {
        this.setState({
            show: true,
            id: id
        })
       
    }

    closeModal = () => {
        this.setState({ show: false })
    }


    updateData = async (e) => {
        e.preventDefault();
        let newdata = {
            name: e.target.name.value  
        };
        let url2 = `${process.env.REACT_APP_SERVER_URL}/updateFavData/${this.state.id}`;
       
     await axios.put(url2, newdata)
            axios.get(`${process.env.REACT_APP_SERVER_URL}/getFavData`)
            .then(response => { this.setState({ favData: response.data }) })
            .catch(err => { this.setState({ err: err.message }) });
        this.closeModal();
    
    };


    render() {
        return (
            <div>
                {this.state.err ? (
                    <p>{this.state.err}</p>)
                    :
                    (
                        <div style={{ display: 'flex', flexWrap: 'wrap' ,margin:'40px 40px'}}>

                            {
                                this.state.favData.map((item, i) => {
                                   
                                    return (
                                        <div key={i} >
                                            <Card style={{
                                                width: '18rem', background: "#C6B4CE", marginBottom: '10px'
                                                , marginLeft: '20px', marginTop: '10px'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '18rem' }} src={item.url} />
                                                <Card.Body>
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Button variant="primary" onClick={() => this.deleteFav(item._id)}>Delete from Favorite</Button>
                                                    <Button variant="primary" onClick={() => this.updateFav(item._id)}>Update name</Button>
                                                </Card.Body>
                                            </Card>

                                        </div>
                                    )
                                })

                            }
                        </div>

                    )
                }
                {this.state.show &&
                    <div>
                        <FormUpdate
                            show={this.state.show}
                            closeModal={this.closeModal}
                            modalObj={this.state.modalObj}
                            updateData={this.updateData}
                        />
                    </div>

                }

            </div>
        )
    }
}

export default Favorite


   
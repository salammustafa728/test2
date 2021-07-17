import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer style={{background:"black", color:"white",height:"60px",textAlign:'center',marginTop:"10px"}} className="blockquote-footer">
                    Authoured  <cite title="Source Title">Salam Mustafa</cite>
                </footer>
            </div>
        )
    }
}

export default Footer

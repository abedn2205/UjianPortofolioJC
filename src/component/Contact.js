import React, { Component } from 'react'
import { connect } from 'react-redux'

class Contact extends Component {
    render() {
        return (
            <div>

                <div className="card" style={{width: '30rem'}}>
                    <div className="card-body">
                    <div className="section-vcardbody section-page" id="page-contact">
                        <div className="section-contact">
                                    {/* Section title */}
                                    <h2 className="section-title">Contact</h2>
                                    {/* /Section title */}
                                    <div className="map">
                                    <div className="map-overlay" />
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8352.985568651915!2d-0.12905994797222892!3d51.50665753790812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1spt-BR!2sbr!4v1443128181953" height={250} style={{border: 0}} allowFullScreen />
                                    </div>
                                    {/* Contact infos */}                 
                                    <div className="contact-infos">
                                    <h4 className="contact-subtitle-1"><i className="fa fa-map" />&nbsp;   Address</h4>
                                    <p>{this.props.address}</p>
                                    <h4 className="contact-subtitle-1"><i className="fa fa-phone-square" />&nbsp; Phone</h4>
                                    <p>{this.props.phone}</p>
                                    <h4 className="contact-subtitle-1"><i className="fa fa-envelope" />&nbsp; Mail</h4>
                                    <p>{this.props.mail}</p>
                                    </div>
                                
                            </div>			
                                </div>  
                                {/* /SECTION: CONTACT  */}
                    </div>
                </div>

                

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        address: state.contact.address,
        phone: state.contact.phone,
        mail:state.contact.mail,
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)

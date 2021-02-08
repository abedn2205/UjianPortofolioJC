import React, { Component } from 'react'
import { connect } from 'react-redux'

class Resume extends Component {
    render() {
        return (
            <div>

                    <div className="card" style={{width: '70rem'}}>
                    <div className="card-body">

                        <div className="section-vcardbody section-page" id="page-resume">
                            {/* SECTION: Education */}
                            <div className="section-education">
                                {/* Section title */}
                                <h2 className="section-title">Resume</h2>
                                {/* /Section title */}
                                {/* Buttons */}
                                <div className="resume-buttons header-page-buttons">
                                    {/* Download CV button */}
                                    <a href="#" className="btn btn-default btn-default2"><i className="fa fa-download" />&nbsp;
                                        Download my resume</a>
                                    {/* /Download CV button */}
                                    {/* Get in Touch button */}
                                    <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i
                                            className="fa fa-download" />&nbsp; Get in Touch</a>
                                    {/* /Get in Touch button */}
                                </div>
                                {/* /Buttons */}
                                <h2 className="section-title2"><i className="fa fa-university" />&nbsp; Education</h2>
                                {/* Resume Item */}
                                <div className="resume-item">
                                    {/* Graduation title */}
                                    <h3 className="section-item-title-1">{this.props.universitas}</h3>
                                    {/* /Graduation title */}
                                    {/* Graduation time */}
                                    <h4 className="graduation-time">{this.props.fakultas} ({this.props.jurusan}) - <span
                                            className="graduation-date">{this.props.thn_lulus}</span></h4>
                                    {/* /Graduation time */}
                                    {/* content */}
                                    <div className="graduation-description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                            a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    {/* /Content */}
                                </div>
                                {/* /Resume Item */}

                            </div>
                            {/*/ SECTION: Education */}
                            {/* SECTION: WORK EXPERIENCE */}
                            <div className="section-education">
                                <h2 className="section-title2"><i className="fa fa-flag" />&nbsp; Work Experience</h2>
                                {/* Resume Item */}
                                <div className="resume-item">
                                    {/* Work Place */}
                                    <h3 className="section-item-title-1">{this.props.kerja}</h3>
                                    {/* /Work Place */}
                                    {/* Job Time */}
                                    <h4 className="job">{this.props.thn_kerja} </h4>
                                    {/* /Job Time*/}
                                    {/* content */}
                                    <div className="graduation-description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                            a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    {/* /Content */}
                                </div>
                                {/* /Resume Item */}
                                {/* Resume Item */}
                                <div className="resume-item">
                                    {/* Work Place */}
                                    <h3 className="section-item-title-1">{this.props.kerja}</h3>
                                    {/* /Work Place */}
                                    {/* Job Time */}
                                    <h4 className="job">{this.props.thn_kerja} </h4>
                                    {/* /Job Time*/}
                                    {/* content */}
                                    <div className="graduation-description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                            a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    {/* /Content */}
                                </div>
                                {/* /Resume Item */}
                                {/* Resume Item */}
                                <div className="resume-item">
                                    {/* Work Place */}
                                    <h3 className="section-item-title-1">{this.props.kerja}</h3>
                                    {/* /Work Place */}
                                    {/* Job Time */}
                                    <h4 className="job">{this.props.thn_kerja} </h4>
                                    {/* /Job Time*/}
                                    {/* content */}
                                    <div className="graduation-description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                            a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    {/* /Content */}
                                </div>
                                {/* /Resume Item */}
                                {/* Resume Item */}
                                <div className="resume-item">
                                    {/* Work Place */}
                                    <h3 className="section-item-title-1">{this.props.kerja}</h3>
                                    {/* /Work Place */}
                                    {/* Job Time */}
                                    <h4 className="job">{this.props.thn_kerja} </h4>
                                    {/* /Job Time*/}
                                    {/* content */}
                                    <div className="graduation-description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                            a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        universitas:state.resume.universitas,
        fakultas:state.resume.fakultas,
        jurusan:state.resume.jurusan,
        thn_lulus:state.resume.thn_lulus,
        kerja:state.resume.kerja,
        thn_kerja:state.resume.thn_kerja
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Resume)


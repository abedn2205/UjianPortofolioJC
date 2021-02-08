import React, { Component } from 'react'
import { connect } from 'react-redux'

class Skills extends Component {
    render() {
        return (
            <div>

                <div className="card" style={{width: '30rem'}}>
                <div className="card-body">

                    {/* SECTION: SKILLS*/}
                    <div className="section-vcardbody section-page" id="page-skills">
                    <div className="section-skills">
                        {/* Section title */}
                        <h2 className="section-title">SKILLS</h2>
                        {/* /Section title */}
                        {/* Subtitle */}
                        <h3 className="section-item-title-2"><i className="fa fa-users" />&nbsp;&nbsp; Professional Skills</h3>
                        {/* /Subtitle */}
                        {/* Skils List */}
                        <ul className="skills-list">
                            <span>Komunikasi</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${this.props.komunikasi}`+'%'}} aria-valuenow={this.props.komunikasi} aria-valuemin={0} aria-valuemax={this.props.komunikasi}>{this.props.komunikasi}%</div>
                            </div>

                            <span>Leadership</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${this.props.leadership}`+'%'}} aria-valuenow={this.props.leadership} aria-valuemin={0} aria-valuemax={this.props.leadership}>{this.props.leadership}%</div>
                            </div>

                            <span>Confidence</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${this.props.confidence}`+'%'}} aria-valuenow={this.props.confidence} aria-valuemin={0} aria-valuemax={this.props.confidence}>{this.props.confidence}%</div>
                            </div>
                        </ul>

                        <h3 class="section-item-title-2"><i class="fa fa-laptop"></i>&nbsp;&nbsp; Software Skills</h3>
                        {/* /Skils List */}
                        <ul className="skills-list">
                            <span>photoshop</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${this.props.photoshop}`+'%'}} aria-valuenow={this.props.photoshop} aria-valuemin={0} aria-valuemax={this.props.photoshop}>{this.props.photoshop}%</div>
                            </div>
                        </ul>

                        <h3 class="section-item-title-2"><i class="fa fa-code"></i>&nbsp;&nbsp; Code Skills</h3>

                        <ul className="skills-list">
                            <span>HTML & CSS</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${this.props.html}`+'%'}} aria-valuenow={this.props.html} aria-valuemin={0} aria-valuemax={this.props.html}>{this.props.html}%</div>
                            </div>
                            
                        </ul>

                        <ul className="skills-list">
                            <span>JavaScript</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${this.props.javascript}`+'%'}} aria-valuenow={this.props.javascript} aria-valuemin={0} aria-valuemax={this.props.javascript}>{this.props.javascript}%</div>
                            </div>
                        </ul>

                        <ul className="skills-list">
                            <span>PHP</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${this.props.php}`+'%'}} aria-valuenow={this.props.php} aria-valuemin={0} aria-valuemax={this.props.php}>{this.props.php}%</div>
                            </div>
                        </ul>
                    </div>			
                    </div>
                    {/* /SECTION: SKILLS  */}

                </div>
                </div>

               

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
       komunikasi: state.skills.komunikasi,
       leadership: state.skills.leadership,
       confidence:state.skills.confidence,
       photoshop: state.skills.photoshop,
       html:state.skills.html,
       javascript: state.skills.javascript,
       php: state.skills.php,

        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills)

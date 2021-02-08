import React, { Component } from 'react'
import { connect } from 'react-redux'

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{width: '30rem'}}>
                <div className="card-body">
                <div className="project-item">
                {/* ==> Put your thumbnail as a background */}
                <a href={this.props.gambar} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: 'url({this.props.gambar})' }}>
                    {/* project-description */}
                    <div className="project-description-wrapper">
                    <div className="project-description">
                        {/* project name */}
                        <h2 className="project-title">Project Title</h2>
                        {/* /project name */}
                        <span className="see-more">Project Tags</span>
                    </div>
                    </div>
                    {/* /project-description */}
                </a>
                </div>

                <div className="project-item">
                {/* ==> Put your thumbnail as a background */}
                <a href={this.props.gambar} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: 'url({this.props.gambar})' }}>
                    {/* project-description */}
                    <div className="project-description-wrapper">
                    <div className="project-description">
                        {/* project name */}
                        <h2 className="project-title">Project Title</h2>
                        {/* /project name */}
                        <span className="see-more">Project Tags</span>
                    </div>
                    </div>
                    {/* /project-description */}
                </a>
                </div>

                </div>
                </div>

                

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        gambar: state.portfolio.gambar
    }   
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)

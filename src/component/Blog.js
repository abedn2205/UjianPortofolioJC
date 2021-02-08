import React, { Component } from 'react'

export default class Blog extends Component {
     state ={
         data:[]
     }
    render() {
        return (
            <div>
                <div className="section-vcardbody section-page" id="page-blog">
                <div className="section-blog">
                    <h2 className="section-title">Blog</h2>
                    {/* blog-item */}
                <div className="blog-item">
                <div className="blog-item-wrapper">
                    {/* blog item thumbnail */}
                    <div className="blog-item-thumb">
                    <a href="single.html" className="loadPost"><img src="img/blog1.jpg" alt /></a>
                    </div>
                    {/* /blog item thumbnail */}
                    {/* Blog item - infos */}
                    <div className="blog-item-infos">
                    {/* blog-item-title */}
                    <div className="blog-item-title-wrapper">
                        <h2 className="blog-item-title title-border"><a href="single.html" className="loadPost">How to succeed in meetings</a></h2>
                    </div>
                    {/* /blog-item-title */}
                    {/* blog item - description */}
                    <div className="blog-item-description">
                        <p><a href="single.html" className="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
                    </div>
                    {/* /blog-item-description */}
                    {/* blog item - link */}
                    <div className="blog-item-link">
                        <a href="single.html" className="btn btn-default loadPost">See More</a>
                    </div>
                    {/* /blog item - link */}
                    </div>
                    {/* /blog item - infos */}
                </div>
                </div>
                {/* /blog-item */}

                </div>
                </div>

            </div>
        )
    }
}

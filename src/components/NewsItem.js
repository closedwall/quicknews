import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, desc, imageUrl, newsUrl, author, date, source } = this.props;
        let words = desc.split(" ");
        const limitedText = words.slice(0, 10).join(" ");
        return (
            <div>
                <div className="card  box" style={{ width: "auto" }}>
                    <span style={{marginLeft:"-40px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger z-1">{source}<span className="visually-hidden">unread messages</span></span>
                        <img src={imageUrl} className="card-img-top" style={{height:"12rem",}} alt="cover" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{limitedText}</p>
                            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark glow-on-hover">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

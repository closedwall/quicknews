import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ChooseCountry from './country.component'

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state ={
            searchInput:""
        }
    }
    handleSearchChange(e){
        this.setState({searchInput:e.target.value})
        this.props.setQuery(e.target.value)
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><b>QuickNews</b></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item underline"><Link className="nav-link" to="/about">About</Link></li>
                                <li className="nav-item underline"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item underline"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item underline"><Link className="nav-link" to="/">General</Link></li>
                                <li className="nav-item underline"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item underline"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item underline"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item underline"><Link className="nav-link" to="/technology">Technology</Link></li>
                            </ul>
                            <form className="d-flex mr-4" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={this.state.searchInput} onChange={e=>this.handleSearchChange(e)} />
                            </form>
                            <ChooseCountry handleItemClick={this.props.handleItemClick} country={this.props.country} />
                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}

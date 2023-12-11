import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
        country:"Country",
        abbribation:"in",
        query:''
    }
}

  handleItemClick=(e)=>{
    if(e.target.tagName==='P'){
        const abbr = e.target.getAttribute('name');
        const attr = e.target.textContent;
        this.setState({country:attr})
        this.setState(()=>({abbribation:abbr}),()=>{
            console.log(this.state.abbribation);
        })
    }
  }

  setQuery=(params)=>{
    this.setState({query:params})
  }

  pageSize = 15;
  render() {
    // console.log(this.state.query);
    return (
      <div>
        <Router>
          <Navbar handleItemClick={this.handleItemClick} country={this.state.country} setQuery={this.setQuery} />
          <Routes>
            {/* <Route exact path="/unitedstate" element={<News key="general" pageSize={this.pageSize} category="general" country="us" />}/> */}
            <Route exact path="/about" element={<Contact/>}/>
            <Route exact path="/business" element={<News query={this.state.query} key="business" pageSize={this.pageSize} category="business" country={this.state.abbribation} />}/>
            <Route exact path="/" element={<News query={this.state.query} key="general" pageSize={this.pageSize} category="general" country={this.state.abbribation} />}/>
            <Route exact path="/entertainment"element={<News query={this.state.query} key="entertainment" pageSize={this.pageSize} category="entertainment" country={this.state.abbribation} />}/>
            <Route exact path="/health" element={<News query={this.state.query} key="health" pageSize={this.pageSize} category="health" country={this.state.abbribation} />} />
            <Route exact path="/science" element={<News query={this.state.query} key="science" pageSize={this.pageSize} category="science" country={this.state.abbribation} />} />
            <Route exact path="/sports" element={<News query={this.state.query} key="sports" pageSize={this.pageSize} category="sports" country={this.state.abbribation} />} />
            <Route exact path="/technology" element={<News query={this.state.query} key="technology" pageSize={this.pageSize} category="technology" country={this.state.abbribation} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}


import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default class News extends Component {
    articles = []
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)}- QuickNews`;
    }

    capitalizeFirstLetter = (str) =>{
        return str[0].toUpperCase()+str.substr(1);
    }

    async componentDidMount() {
        this.updateNews();
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=aac6b2707b2845cdb00f990c84930b65&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading:false
        });
    }

    handlePrevClick = async () => {
        this.setState({page: this.state.page-1});
        this.updateNews();
    }
    handleNextClick = async () => {
        this.setState({page: this.state.page+1});
        this.updateNews();
    }

    

    render() {

        return (
            <div className=''>
                <div style={{margin:"0 auto"}} className="row container">
                    <h2 style={{margin:"30px 0"}} className='text-center my-10'>QuickNews - top {this.capitalizeFirstLetter(this.props.category)} headlines</h2>
                    {this.state.loading && <Spinner />}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 ml-10 mb-4" key={element.url}>
                            <NewsItem  title={element.title ? element.title : "none"} desc={element.description ? element.description : "......"} imageUrl={element.urlToImage ? element.urlToImage : "https://img.etimg.com/thumb/msid-98534172,width-1070,height-580,imgsize-73406,overlay-etmarkets/photo.jpg"} newsUrl={element.url} pageSize={2} author = {element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between pt-5">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

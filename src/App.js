import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Search } from './components/Search/Search';
import { Table } from './components/Table/Table';
import './App.css';

const url = 'http://hn.algolia.com/api/v1/search?query=';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: "react"
    }
    this.removeItem = this.removeItem.bind(this);
    this.searchValue = this.searchValue.bind(this);
    this.setNews = this.setNews.bind(this);
    this.fetchNews = this.fetchNews.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setNews(result){
    this.setState({ result:result });
  }

  fetchNews(searchTerm){
    fetch(`${url}${searchTerm}`)
      .then(res => res.json())
      .then(json => {this.setNews(json)})
      .catch(e => e);
  }
 
  componentDidMount(){
    this.fetchNews(this.state.searchTerm);
 
  }
  
  onSubmit(e){
    this.fetchNews(this.state.searchTerm);
    e.preventDefault();
  }
  
  removeItem(id) {
    //const isNotId = item => item.objectID !==id;
    //this.setState({data: this.state.data.filter(isNotId)});
    const updateList = this.state.result.hits.filter(item =>item.objectID !== id);
    //this.setState({ result: Object.assign({}, this.state.result, {hits: updateList}) });
    this.setState({result: {...this.state.result, hits:updateList}} );
    }
 

  searchValue(e) {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    const { result, searchTerm } = this.state;
    //if (!result) {return null;}
    return (
      <div className="App">
        <Grid>
          <Row>
            <div className="jumbotron">
              <Search 
                onChange={this.searchValue} 
                value={ searchTerm } 
                onSubmit = {this.onSubmit}>
                Search
              </Search>
            </div>
          </Row>
        </Grid>
      { result ?
        <Table 
            data = {result.hits}
            searchTerm = {searchTerm}
            removeItem = {this.removeItem}
        /> : null
      }

      </div>
    );
  }
}



import React from 'react';

const API_URL = "https://jsonmock.hackerrank.com/api/articles";

class Articles extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      total_pages:1
    }
  }

  getData = (pageno)=>{
    fetch(`${API_URL}?page=${pageno}`)
    .then((response) => response.json())
    .then((actualData) => {
        let filterData =actualData.data.filter((res)=>res.title)
        this.setState({data:filterData,total_pages:actualData.total_pages})
    });
    
  }
  componentDidMount(){
    this.getData(1);
  }
  
  render() {
    return (
        <React.Fragment>
        <div className="pagination">
          {
            [...Array(this.state.total_pages)]
            .fill()
            .map((value, index)=>{
              return <button data-testid="page-button" key={`page-button-${index+1}`} onClick={()=>this.getData(index+1)}>{index+1}</button>
            }) 
          }
        </div>
        <ul className="results">
          {
            this.state.data.map((obj)=>(
              <li key={`${obj.title}`} data-testid="result-row">{obj.title}</li>
            ))
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default Articles;
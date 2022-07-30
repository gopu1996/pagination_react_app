import React, {useEffect,useState} from 'react'


export default function ArticlesFun() {

    const API_URL = "https://jsonmock.hackerrank.com/api/articles";

    const [total_pages , setTotalPages] = useState(0)
    const [data , setData] = useState([])

    const getData = page =>{
         fetch(`${API_URL}?page=${page}`)
         .then((response) => response.json()).then((obj) => {
            let fetchTitle = obj && obj.data.filter((res) => res.title)
            console.log(fetchTitle)
            setData(fetchTitle)
            setTotalPages(obj.total_pages)
         })
    }

    useEffect(()=>{
        getData(1)
    },[])

  return (

<React.Fragment>
        <div className="pagination">
            {
                Array(total_pages).fill().map((val,index)=>{
                    return (<button data-testid="page-button" key={`page-button-${index+1}`} onClick={()=> getData(index+1)}>{index+1}</button>)
                })
            }       
  
       
        </div>
        <ul className="results">
           {data.map((val,index)=>{
               return    <li  data-testid="result-row" key={index }>{val.title}</li>
   
           })}
             
        </ul>
      </React.Fragment>

  )
}

import { render } from '@testing-library/react';
import axios from 'axios';
import React, {useEffect,useState} from 'react';
import Loader from "./Loader"
import "./Giphy.css"
import "./Categories.css"


const Giphy = () => {
        const [data, setData] = useState([]);
        const [search, setSearch] = useState()
        const [isLoading, setIsLoading] = useState(false)
        const [isError, setIsError] = useState(false)
        
        useEffect(()=>  {
        const fetchData = async () => {
                setIsError(false)
            setIsLoading(true);

            try{
                const results = await axios("https://api.giphy.com/v1/gifs/categories", {
                params: {
                    api_key: 'G7Mvh8eYxDJ9pkUCkoAsT37HWFwiWDEq',
                }
            });

            console.log(results.data.data)
            setData(results.data.data);
            

            } catch (err){
                setIsError(true);
                setTimeout(()=> setIsError(false), 4000);
                console.log(err)
            }
            
            setIsLoading(false )
        }; 

    fetchData()
    }, []);

    const renderOption = () => {
        return data.map(el =>{
          return(
              <div key={el.id}>
                  <div onClick = {() => handleSubmit(el.name)} style={{color:'white'}} className="btn btn-primary">{el.name}
                  </div>
              </div>
          )
      })
    }

    const renderError = () => {
        if(isError){
            return(
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    Unable to Get gifs, Please try again next time
                </div>
            )
        }
    }
    const renderGifs = () => {
      if (search === undefined || isLoading) {
        return (
           <div className="text-white text-center">
             Loading...
            </div>
        )
      }
      else if (search !== undefined){
        return search.map(el =>{
          return(
            <div key={el.id} className="gif">
                <img src={el.images.original.url}/>
            </div>
          )
        })
      }
    } 

  const handleSubmit = async(query) => {
      setIsError(false);
      setIsLoading(true);
  
      try {
        const results = await axios("https://api.giphy.com/v1/gifs/search", {
          params: {
            api_key: "G7Mvh8eYxDJ9pkUCkoAsT37HWFwiWDEq",
            q: query,
          }
        });
        setSearch(results.data.data);
        console.log(search)
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }

      setIsLoading(false);
    };

    return (
        <div className="m-2">
        {renderError()}
          <h1 className="text-center text-white mb-3">Categories</h1>
          <div className="container d-flex justify-content-start gap-3 flex-wrap mb-5">
            {renderOption()}
          </div>
          <h2 className="text-center text-white mb-3">GIF</h2>
          <div className="container d-flex flex-column align-items-center gap-3">{renderGifs()}</div>
        </div>
    ); 
};

export default Giphy;
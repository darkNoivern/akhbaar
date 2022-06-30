import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import TopicCard from './TopicCard'
import { useParams } from 'react-router'
import axios from 'axios'
import NoNews from './NoNews'
import './style.css'

const Topics = () => {

    const {name} = useParams();     
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const apiKey = '0389722a126e465f81dec562b63662f9'

    async function getData(name) {
        setLoading(true);
        let responseJsonData = await axios.get(
            `https://newsapi.org/v2/top-headlines/sources?category=${name}&apiKey=${apiKey}`
        );
        console.log(responseJsonData.data.sources)
        setData(responseJsonData.data.sources);
        setLoading(false);
    }

    useEffect(() => {
        getData(name);
    }, [name]);

    return (
        loading===true ? <Loading /> :
        <>
        
          <div className="background">
                <div className="box">
                <div className="banner flexy mt-4 mb-md-5 mb-4">
                    {`${name} news`}
                </div>
                {
                    data.length===0?
                    <NoNews /> : 
                
                    <div className="row mx-0">
                        {
                            data.map((news, index) => {
                                return (
                                    <div key={index} className="col col-lg-3 col-md-6 mb-5 col-12 flexy">
                                        <TopicCard data={news} category={name} />
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                </div>
            </div>
        </>
    )
}

export default Topics;

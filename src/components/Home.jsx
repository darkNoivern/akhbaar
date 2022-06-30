import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loading from './Loading';
import Card from './Card';
import './style.css'

const Home = () => {
    const apiKey = '0389722a126e465f81dec562b63662f9';
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getData() {
        setLoading(true);
        let responseJsonData = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
        );
        console.log(responseJsonData.data.articles)
        setData(responseJsonData.data.articles);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    //ET https://newsapi.org/v2/top-headlines?country=us&apiKey=0389722a126e465f81dec562b63662f9
    return (
        
        loading===true ? <Loading /> :
        <>
            <div className="background">
                <div className="box">
                <div className="banner flexy mt-4 mb-md-5 mb-4">
                    Top Headlines
                </div>
                    <div className="row mx-0">
                        {
                            data.map((news, index) => {
                                return (
                                    <div key={index} className="col col-lg-3 col-md-6 col-12 mb-5 flexy">
                                        <Card data={news} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

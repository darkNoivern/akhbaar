import React from 'react'
import './style.css'

const TopicCard = (props) => {
    console.log(props.data)
    return (
        <>
         <div className="ui card segment">
                <div className="image home-image">
                    <span className="ui red ribbon label">
                    {props.category}
                    </span>
                    <img src='http://www.simplybiomass.co.uk/wp-content/uploads/2014/01/Marketplace-Lending-News.jpg'alt="news-img" />
                </div>
                <div className="content">
                    <div className="meta">
                        <div className="date">By {props.data.author === null ? `Unknown` : props.data.name}</div>
                    </div>
                    <div className="description">
                        {
                            (props.data.description === null)
                                ?
                                `quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et`
                                :
                                (props.data.description.length > 180)
                                    ? `${props.data.description.slice(0, 180)}.....`
                                    :
                                    props.data.description
                        }
                    </div>
                </div>
                <div className="extra content">
                    <a href={props.data.url}>
                        <button className="btn btn-dark">
                            Read More
                        </button>
                    </a>
                </div>
            </div>   
        </>
    )
}

export default TopicCard

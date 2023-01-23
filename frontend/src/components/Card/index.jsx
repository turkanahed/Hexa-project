import React, { useEffect, useState } from 'react'

const Card = () => {
    const [authors, setAuthors] = useState(null);

    const getData = ()=>{
        return fetch("")
        .then(response=>response.json())
        .then(data=>setAuthors(data));
    }
    useEffect(() => {
       getData()
    }, [])
    return (
        <>
            {
                authors?.map((author) => (
                    <div className='card-wrapper'>
                        <div className='card-top' >
                            <div className='card-img'>
                                <img src={author.image} alt="" />
                            </div>
                            <div className='card-author'>
                                <h5>{author.author}</h5>
                                <h5>CEO,Co-Founder</h5>
                            </div>
                        </div>
                        <div className='card-bottom'>
                            <p>{author.comment}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Card
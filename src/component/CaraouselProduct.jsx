import React, { useEffect, useState } from 'react'

const CaraouselProduct = ({category}) => {
    const [data, setData] = useState([])
    async function fetchData(value) {
        try {
            const response = await fetch(`https://cakeback-rahuls-projects-44dfd132.vercel.app/api/list-product/${category}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(value),
            });
  
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
  
            const data = await response.json();
            setData(data?.categoryProducts)
            return data; // Return the data for further use
        } catch (error) {
            console.error('Error:', error);
            throw error; // Re-throw the error for the caller to handle
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <>
       {data?.length >0 && 
       <>
           <span className='category_title'>{category}</span>
         <div className='logos'>
            <div className='logos-slide'>
                {
                    data?.map((ele, index) => {
                        return (
                            <div className='parent-product' key={index}>
                                <div className="main_card">
                                    <img src={ele?.urlImage} className='img_caraousel' alt="" />
                                <div className='cake_title'>{ele?.title}</div>
                                <div className='cake_flavour'>{ele?.flavor}</div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
       </>
   }
        </>
       
    )
}

export default CaraouselProduct

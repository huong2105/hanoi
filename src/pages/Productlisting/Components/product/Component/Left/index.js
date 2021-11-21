import React, { useState } from 'react';
import "./style.css"
function Left() {

    const [Categories, setCategories] = useState([
        {
            id: 1,
            title: 'All'
        },
        {
            id: 2,
            title: 'Thanh Xuân'
        },
        {
            id: 3,
            title: 'Cầu Giấy'
        },
        {
            id: 4,
            title: 'Tây Hồ'
        },
        {
            id: 5,
            title: 'Hoàn Kiếm'
        },
    ])
    
    const [id, setId] = useState(1)
    return (
        <div className='product-left'>
            <div className='categori'>
                <p>Categories</p>
                <div>
                    {Categories.map((item, index) => (

                        <div className='title'
                            style={{ color: item.id === id ? "#2AA0F5" : "" }}
                            onClick={() => setId(item.id)}>{item.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Left;
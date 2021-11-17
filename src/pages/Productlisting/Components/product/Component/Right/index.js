import React, { useState } from "react";
import "./style.css";
function Right() {
  const [id, setId] = useState(1);
  const [address, setAddress] = useState([
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Thanh Xuân",
    },
    {
      id: 3,
      title: "Cầu Giấy",
    },
    {
      id: 4,
      title: "Hồ Tây",
    },
    {
      id: 5,
      title: "Hoàn Kiếm",
    },
  ]);
  const [infoAddress,setInfoAddress]=useState([{

    id : 1,
    img: "",
    title: '',

  }])
  return (
    <div className="wraper-right">
      <div className="wraper-address">
        {address.map((item, index) => (
          <div
            key={index}
            style={{ borderBottom: item.id === id ? "3px solid #2AA0F5" : "" }}
            onClick={() => setId(item.id)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div>
          <div className = "info-address">
                <div className = "info-left">
                    <div>15</div>
                    <div>Nov</div>
                </div>
              <div className = "img-news"><img src = "/images/pexels-rachel-claire-4825701.jpg"/></div> 
          </div>
      </div>
    </div>
  );
}

export default Right;

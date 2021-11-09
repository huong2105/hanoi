import React from 'react';
import Breadcrumb from "./Components/breadcrumb"
import Left from './Components/product/Component/Left';
import Right from './Components/product/Component/Right';
import "./style.css"
function PageProducListing() {

    
    return (
     <div className ="productlisting">
         <Breadcrumb />
         <div className = "Wapper-product">
            <Left />
            <Right/>
         </div>
     </div>
    );
}

export default PageProducListing;
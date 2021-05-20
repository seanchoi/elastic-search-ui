import { connectHits } from 'react-instantsearch-dom';

const Hits = ({ hits }) => (  
    <div className="ais-Hits">
        <ul className="ais-Hits-list">    
            {hits.map(hit => (
                <li className="ais-Hits-item" key={hit.objectID}>
                    <div className="selected-product-img"> 
                        <img src={hit.image} alt=""/>
                    </div>
                    <div className="selected-product-title">
                        {hit.productName}    
                    </div>
                    <div className="selected-product-info-wrapper">
                        <div className="selected-product-detail">
                            <div className="product-info-productId">
                                #{hit.modelNumber}
                            </div>
                            <div className="product-info-brand">
                                by {hit.brand}    
                            </div>                            
                        </div>
                        <div className="selected-product-detail">
                            <div className="product-info-price">
                                ${hit.price}
                            </div>
                            <div className="product-info-detail selected-product-color-wrapper">
                                <div className="product-info-color"></div>
                                <div className="product-info-color"></div>
                            </div>
                        </div>                        
                    </div>
                    <button>VIEW DETAILS</button>                    
                </li>
            ))}  
        </ul>
    </div>
);

export const CustomHits = connectHits(Hits);
import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../Product/Product.js'
import axios from 'axios'

export default function ProductRecommend(props) {

    const [products, setProducts] = useState([]);
    let productInfo = [];
    if (props.product) {
        productInfo = props.product;
    }

    useEffect(() => {
        axios.get(`http://103.237.145.107:4141/products`)
            .then(res => {
                setProducts(res.data)
            }
        )
    },[])

    const recommendProducts = [];
    console.log(products)
    products.filter((item) => {
        if (item._id !== productInfo._id) {
            if (item.productSex === productInfo.productSex) { 
                if (item.productCate === productInfo.productCate &&
                    item.productGroupCate === productInfo.productGroupCate) {
                    recommendProducts.push(item)
                } else if (item.productGroupCate === productInfo.productGroupCate) {
                    //recommendProducts.push(item)
                } else {
                    //recommendProducts.push(item)
                }
            }
        }
        return null;
    })
    console.log(recommendProducts)

    let recommendProducts2 = recommendProducts.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })
    console.log(recommendProducts2)

    return(
        <div className="ProductRecommend">
            <div className="newsletter-container flex-center">
                <div className="newsletter-title">Related products</div>
                <div className="RecommendProduct">
                    {recommendProducts2.slice(0,5).map(function(item, index) {
                        return (
                            <Product 
                                key={index}
                                product={item}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="product-info-line"></div>
        </div>
    )
}

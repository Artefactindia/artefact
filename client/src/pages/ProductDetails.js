import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from './../components/Layout/Layout';
import { useParams,useNavigate } from 'react-router-dom';
import "../styles/ProductDetailsStyles.css";
// import { Button } from 'antd';
import ReactImageMagnify from 'react-image-magnify';

const ProductDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [product,setProduct] = useState({});
    const [relatedProducts,setRelatedProducts] = useState([]);

    // initial product details
    useEffect(()=>{
       if(params?.slug) getProduct()
    },[params?.slug])

    // get product
    const getProduct = async () => {
        try {
            const {data} = await axios.get(`/api/v1/product/get-product/${params.slug}`)
            setProduct(data?.product)
            getSimilarProduct(data?.product._id,data?.product.category._id);
            
        } catch (error) {
            console.log(error);
        }
    }

    // get similar products
    const getSimilarProduct = async (pid,cid) => {
        try {
            const {data} = await axios.get(`/api/v1/product/related-product/${pid}/${cid}`)
            setRelatedProducts(data?.products);

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Layout>
        {/* <h1>Product Details</h1> */}
      <div className='row container product-details  m-5'>
        <div className='col-md-6'>


        <ReactImageMagnify {...{
    smallImage: {
        alt: `product.name`,
        // isFluidWidth: true,
        src: `/api/v1/product/product-photo/${product._id}`,
        width: 350,
        height: 350
    },
    largeImage: {
        src: `/api/v1/product/product-photo/${product._id}`,
        width: 1200,
        height: 1800
    }
}} className=' card-img-top' style={{borderRadius:"5px"}} />

        {/* <img
                    src={`/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top"
                    alt={product.name}
                    height="500"
                    width={"350px"}

                  /> */}
        </div>
        <div className='col-md-6 product-details-info'>
            <h1 className='text-center'>Product Details</h1>
            <h6>Name : {product.name}</h6>
            <h6>Description : {product.description}</h6>
            <h6>Price : {product.price}</h6>
            <h6>Category : {product?.category?.name}</h6>

            {
              product?.subCategory &&
              <h6>subCategory : {product?.subCategory}</h6>
            }
            
            <button className='btn btn-primary ms-1' >ADD TO CART</button>
        </div>

      
      </div>
      <hr/>
      <div className='row container similar-products'>
        <h4>Similar Products ➡️</h4>
        {relatedProducts.length < 1 && (<p className='text-center'>No Similar Products Found</p>)}
        {/* {JSON.stringify(relatedProducts,null,4)} */}
        <div className="d-flex flex-wrap">
            {relatedProducts?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">Rs.{p.price}</h5>
                </div>
                  <p className="card-text">
                    {p.description.substring(0, 60)}...
                  </p>
               
              </div>
              <div className="card-name-price">
                  <button
                    className="btn btn-dark ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  {/* <button
                  className="btn btn-dark ms-1"
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart, p])
                    );
                    toast.success("Item Added to cart");
                  }}
                >
                  ADD TO CART
                </button> */}
                </div>
            </div>
            ))}
          </div>
      </div>
      
       {/* {JSON.stringify(product,null,4)} */}
    </Layout>
  )
}

export default ProductDetails

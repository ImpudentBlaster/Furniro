import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";

import p1 from "../../Assets/Images/p1.png";
import p2 from "../../Assets/Images/p2.png";
import p3 from "../../Assets/Images/p3.png";
import p4 from "../../Assets/Images/p4.png";
import p5 from "../../Assets/Images/p5.png";
import star from "../../Assets/Images/star.png";
import halfStar from "../../Assets/Images/halfStar.png";
import prodImg1 from '../../Assets/Images/Single-Prod-img-1.png'
import prodImg2 from '../../Assets/Images/Single-prod-2.png'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import img1 from '../../Assets/Images/image 1.png'
import img2 from '../../Assets/Images/image 2 (1).png'
import img3 from '../../Assets/Images/image 3.png'
import img4 from '../../Assets/Images/image 4.png'
import { useLocation, useNavigate } from "react-router-dom";
function Product() {
  const location = useLocation();
  const {state} = location;
  const {product} = state;
const navigate = useNavigate();
  function handleClick(product){

    navigate('/Cart' , {state:{product:product}})
  }

  return (
    <>
      <div className="prod-header ">
        <div style={{ color: "#9F9F9F" }}>Home</div>
        <div>
          <FaChevronRight style={{ fontSize: "0.9rem" }} />
        </div>
        <div style={{ color: "#9F9F9F" }}>Shop</div>
        <div>
          <FaChevronRight style={{ fontSize: "0.9rem" }} />
        </div>
        <div>
          <RxDividerVertical style={{ fontSize: "2rem", color: "#9F9F9F" }} />
        </div>
        <div>Product Name</div>
      </div>

      <div className="product-card container">
        <div className="product-image-show">
          <div className="side-images">
            <img src={p1} />
            <img src={p3} />
            <img src={p4} />
            <img src={p5} />
          </div>
          <div className="image-active">
            <img src={p2} />
          </div>
        </div>
        <div className="product-desc">
          <h2>{product.name}</h2>
          <p style={{ color: '#9F9F9F' }}>{product.price}</p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              color: "#9F9F9F",
            }}
          >
            <div>
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={halfStar} />
            </div>
            <span style={{ fontSize: "1.25rem" }}>|</span>
            <span style={{ fontSize: "0.9rem" }}> 5 Customer Review</span>
          </div>
          <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <p style={{ color: "#9F9F9F" }}>Size</p>
          <span className="size-buttons">
            <button>L</button>
            <button>XL</button>
            <button>XS</button>
          </span>
          <p style={{ color: '#9F9F9F' }}>Color</p>
          <span className="color-buttons">
            <button style={{ backgroundColor: '#816DFA' }}></button>
            <button style={{ backgroundColor: '#000000' }}></button>
            <button style={{ backgroundColor: '#B88E2F' }}></button>
          </span>
          <p className="config-buttons">
            <button>
              <span>-</span>#number<span>+</span>
            </button>
            <button onClick={()=>handleClick(product)}>Add to cart</button>
            <button>+ Compare</button>
          </p>
          <hr />

          <div
            className="prod-des-details"
            style={{ color: "#9F9F9F", maxWidth: "fit-content" }}
          >
            <div>SKU</div>
            <div>: SS001</div>
            <div>Category</div>
            <div>: Sofas</div>
            <div>Tags</div>
            <div>: Sofa,Chair,Home,Shop</div>
            <div>Share</div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
            >
              :{" "}
              <span style={{ color: "black", fontSize: "1.25rem" }}>
                <FaFacebook /> <FaLinkedin /> <AiFillTwitterCircle />
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="product-extra-info container-fluid">
        <div className="prod-info">
          <div className="prod-info-headings">
            <span>Description</span>
            <span>Additional Information</span>
            <span>Reviews[5]</span>
          </div>
          <div className="prod-info-desc">
            <p>Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          </div>
        </div>
        <div className="prod-info-images">
          <div><img className="img-fluid" src={prodImg1} /></div>
          <div><img className="img-fluid" src={prodImg2} /></div>
        </div>
      </div>

      <hr />

      <div className="related-products-container">
        <div className="related-product-heading">
          <span>Related Products</span>
        </div>
        <div className="related-products">
          <div className="r-prod-card">
            <div className="bubble">-30%</div>
            <img className='img-fluid' src={img1} />
            <div className="r-prod-desc">
              <ul>
                <li>Product Name</li>
                <li>Product Desc</li>
                <li>Product Price <span>RedPrice</span></li>
              </ul>
            </div>
          </div>
          <div className="r-prod-card">
            <img className='img-fluid' src={img2} />
            <div className="r-prod-desc">
              <ul>
                <li>Product Name</li>
                <li>Product Desc</li>
                <li>Product Price </li>
              </ul>
            </div>
          </div>
          <div className="r-prod-card">
            <div className="bubble">-50%</div>
            <img className='img-fluid' src={img3} />
            <div className="r-prod-desc">
              <ul>
                <li>Product Name</li>
                <li>Product Desc</li>
                <li>Product Price <span>RedPrice</span></li>
              </ul>
            </div>
          </div>
          <div className="r-prod-card">
            <div className="bubble new">New</div>
            <img className='img-fluid' src={img4} />
            <div className="r-prod-desc">
              <ul>
                <li>Product Name</li>
                <li>Product Desc</li>
                <li>Product Price</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="r-button">
        <button>Show More</button>
      </div>
    </>
  );
}

export default Product;

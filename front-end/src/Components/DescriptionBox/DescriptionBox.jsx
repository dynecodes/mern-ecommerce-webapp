import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An E-commerce website is an online p;atform that facilitate
          buying and selling of products or services over the internet and 
          serves as a virtual marketplace where businesses and individual showcase
          their products.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
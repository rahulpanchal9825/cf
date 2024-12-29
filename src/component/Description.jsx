import React from 'react'
import logoimg from "../assets/logo1.svg"
const Description = () => {
  return (
    <div className='wrap_img_desc pt-3'>
      <div className='ml-4 desc_shop'>
        <img src="https://img.freepik.com/premium-vector/cake-logo-icon-design-illustration_775854-2226.jpg" alt="" width="10%" />
        <div>
          <div>
            Welcome to Shreeji Baker's!
          </div>
          At Shreeji Baker's, we believe that every bite should feel like home. As a passionate home bakery, we handcraft delicious, Bake-with-love treats with love and the finest ingredients. From soft, warm bread to decadent cakes, cookies, and pastries, each item is created with care and a personal touch.

          Whether you're celebrating a special occasion or simply craving a comforting dessert, we offer a wide selection of baked goods to satisfy every taste. We are dedicated to quality and pride ourselves on delivering fresh, flavourful products that bring a little sweetness to your day.

          Each order is baked fresh just for you, and we can even personalize cakes and treats to make your event extra special. No matter the size of your celebration or your craving, Shreeji Baker's is here to provide you with a little slice of joy.
          <div className='mt-4' style={{ background: "##0013" }}>
            Why Choose Us?
          </div>

          <div className="choose_text mt-2">
            - Made with love and top-quality ingredients
          </div>
          <div className="choose_text mt-2">
            - Customised cakes and treats for any occasion
          </div>
          <div className="choose_text mt-2">
            - Local, small-batch baking with a personal touch
          </div>
          <div className="choose_text mt-2">
            - Friendly service and a commitment to quality
          </div>

        </div>
      </div>
    </div>
  )
}

export default Description

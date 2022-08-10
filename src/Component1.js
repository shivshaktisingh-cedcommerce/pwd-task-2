import React from 'react'
import "./Component1.css"

export default function Component1() {
  return (
    <div id="component1">
        <div id="navbar_div_id">
            <div id="products_navbar_div_id">Products</div>
            <div id="resources_navbar_div_id">Resources</div>
            <div id="workstation_navbar_div_id">Workstation</div>
            <div id="pricing_navbar_div_id">Pricing</div>
            <div id="ternio_navbar_div_id">Ternio</div>
            <div id="login_navbar_div_id"><button id="btn1">Login</button></div>
            <div id="signup_navbar_div_id"><button id="btn2">Register</button></div>

        </div>
        <div id="just_bar"></div>
        <div class="popover__wrapper">
        <a href="#"></a>
        <div id="image_div_id"><img src="../1.jpg" alt="" id="image_id" className="popover__title"/>
        <div class="popover__content">
        <p class="popover__message">Please click on button to Recieve Email Updates</p>
        </div>
    
  </div></div>
        <p id="the_future">The Future Now</p>
        <p id="world_fastest">The World's <br/>Fastest Blockchain</p>
        <button id="receive_btn">Recieve Email Updates</button>
        <div id="one_blockchain_to">
            <p id="p1">One BlockChain To meet All Needs</p>
            <div id="benefits_div_id">
                <div id="single_id">
                    <div id="image_div_benefits">
                       <img src="../23.jpg" alt="" id="benefits_image_id"/>
                    </div>
                    <div id="content_div_id">
                        <p id="p2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                    </div>
                </div>
                <div id="single_id">
                    <div id="image_div_benefits">
                       <img src="../23.jpg" alt="" id="benefits_image_id"/>
                    </div>
                    <div id="content_div_id">
                        <p id="p2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                    </div>
                </div>
                <div id="single_id">
                    <div id="image_div_benefits">
                       <img src="../23.jpg" alt="" id="benefits_image_id"/>
                    </div>
                    <div id="content_div_id">
                        <p id="p2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

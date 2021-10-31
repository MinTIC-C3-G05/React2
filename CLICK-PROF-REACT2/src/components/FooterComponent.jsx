import React from "react";
import "../css/FooterComponent.css";

function FooterComponent() {
  return (
    <React.Fragment>
      <div class="container my-5 FooterComponent">
        <footer class="text-center text-lg-start">
          <div class="container d-flex justify-content-center py-5">
            <button
              type="button"
              class="btn btn-primary btn-lg btn-floating mx-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"
                className="img"
                alt=""
              />
            </button>
            <button
              type="button"
              class="btn btn-primary btn-lg btn-floating mx-2"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                className="img"
                alt=""
              />
            </button>
            <button
              type="button"
              class="btn btn-primary btn-lg btn-floating mx-2"
            >
              <img
                src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-Twitter-icon-transparent-PNG.png"
                className="img"
                alt=""
              />
            </button>
           
          </div>

          <div class="text-center text-white p-3 footerAbajo">
            © 2020 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default FooterComponent;

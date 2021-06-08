import React from 'react'

function Footer() {
  return (
    <footer class="page-footer" style={{position:"fixed",bottom:"0",left:"0",width:"100%"}}>
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Welcome to Vitoria's Garden</h5>
            <p class="grey-text text-lighten-4">Built by Kevin Choi @Boca Code</p>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2021 Copyright Kevin Choi
            <a class="grey-text text-lighten-4 right" href="#!">
              {process.env.NODE_ENV} Mode {process.env.REACT_APP_API_ENDPOINT}
            </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
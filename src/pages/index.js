import "bootstrap/dist/css/bootstrap.min.css"

import * as React from "react"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <img src="https://avatars.githubusercontent.com/u/4667864?v=4" width="32" class="me-2" />
            <span class="fs-4">I'm Ashwin Hegde</span>
          </a>
        </header>

        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
            <button class="btn btn-primary btn-lg" type="button">Example button</button>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
              <h2>Change the background</h2>
              <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
              <button class="btn btn-outline-light" type="button">Example button</button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-light border rounded-3">
              <h2>Add borders</h2>
              <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
              <button class="btn btn-outline-secondary" type="button">Example button</button>
            </div>
          </div>
        </div>

        <footer class="pt-3 mt-4 text-muted border-top text-center">
          &copy; 2021 <a href="https://github.com/hegdeashwin" target="_blank">Ashwin Hegde</a> | <a href="//snowyowl.in" target="_blank">www.snowyowl.in</a>
        </footer>
      </div>
    </main>
  )
}

export default IndexPage

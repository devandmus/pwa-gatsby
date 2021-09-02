import * as React from "react"
import InstallButton from "../installButton";
import 'bulma/css/bulma.min.css';

const IndexPage = () => {
  return (
    <main className="container">
      <section className="section">
        <h1 className="title">
          PWA Gastby test
        </h1>
        <p className="subtitle">
          PWA test <strong>only works in Chrome!</strong>!
        </p>
        <InstallButton />
      </section>
    </main>
  )
}

export default IndexPage

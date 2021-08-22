import React from "react";
import "../../cssReset/reset.css";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/Header";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
  </Layout>
);

export default IndexPage;

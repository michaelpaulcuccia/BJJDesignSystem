import React from "react";
import "../../cssReset/reset.css";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";

//import { Link } from "gatsby";
// import Image from "../components/image";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
  </Layout>
);

export default IndexPage;

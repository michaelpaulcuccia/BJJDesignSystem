import React from "react";
import "../cssReset/reset.css";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";
import Hero from '../components/Hero';
import SelectBox from "../components/SelectBox";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <Hero />
    <SelectBox />
  </Layout>
);

export default IndexPage;

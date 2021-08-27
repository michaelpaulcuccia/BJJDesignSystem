import React from "react";
import Header from "../../components/header";
import PageTop from "../../components/PageTop";
import closedguardbottom from '../../images/closed-guard-bottom.png';

const ClosedGaurd = props => {

  const locale = props.location.pathname;
  const removedSlash = locale.substring(1);
  
  return (
    <>
      <Header />
      <PageTop
        icon={closedguardbottom}
      />
      Hello, from {removedSlash}
    </>
  );
};

export default ClosedGaurd;
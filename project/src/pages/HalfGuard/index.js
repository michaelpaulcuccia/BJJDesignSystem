import React from 'react';
import Header from '../../components/header';
import PageTop from "../../components/PageTop";
import halfguard from '../../images/half-guard.png';

const index = props => {

    const locale = props.location.pathname;
    const removedSlash = locale.substring(1);

    return (
        <>
        <Header />
        <PageTop
          icon={halfguard}
        />
        Hello, from {removedSlash}
      </>
    )
}

export default index

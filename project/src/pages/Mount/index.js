import React from 'react';
import Header from '../../components/header';
import PageTop from "../../components/PageTop";
import mount from '../../images/mount-top.png';

const index = props => {

    const locale = props.location.pathname;
    const removedSlash = locale.substring(1);

    return (
        <>
        <Header />
        <PageTop
          icon={mount}
        />
        Hello, from {removedSlash}
      </>
    )
}

export default index
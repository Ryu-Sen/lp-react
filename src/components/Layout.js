import React from "react";
import Helmet from "react-helmet";

export default ({
  children,
  description,
  image = require("../assets/logo.png"),
  title = "LSIR Landing Page"
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:title" content={title} />
      </Helmet>
      {children}
    </>
  );
};

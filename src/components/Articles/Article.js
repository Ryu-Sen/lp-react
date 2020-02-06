import React from "react";
import { useParams } from "react-router-dom";

import "./Articles.css";

const Article = () => {
    const { id } = useParams()
    console.log(id);

    return <h1>Article ID: {id}</h1>;
}

export default Article
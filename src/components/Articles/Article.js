import React from "react";

import "./Articles.css";

export default class Article extends React.PureComponent {
    render() {
        console.log('props', this.props);

        // const { params } = this.props.match
        // console.log(params);

        return <h1>Article ID: </h1>;
    }
}

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { latestNews, otherNews, latestGallery } from "../actions";

import LatestNews from "../components/home/latestNews";
import OtherNews from "../components/home/otherNews";
import Gallery from "../components/home/gallery";

class Home extends Component {
  componentDidMount() {
    this.props.latestNews();
    this.props.otherNews();
    this.props.latestGallery();
  }

  render() {
    return (
      <div>
        <LatestNews latest={this.props.articles.latest} />
        <OtherNews otherNews={this.props.articles.other} />
        <Gallery latestGallery={this.props.gallery.latestGallery} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    gallery: state.gallery
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ latestNews, otherNews, latestGallery }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./HackerNews.css";
import { News } from "./News";

import { LineChart } from "./Linechart";

export class HackerNewsLayout extends React.Component {
  constructor(props) {
    super(props);
    let news;
    if (__isBrowser__) {
      news = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      news = props.staticContext.data;
    }

    this.state = {
      news,
      loading: news ? false : true,
      points: [],
    };

    this.fetchNews = this.fetchNews.bind(this);
  }

  toggle = (id) => {
    const hits = this.state.news.hits.map((item, index) => {
      if (index === id) {
        return { ...item, show: false };
      }
      return { ...item };
    });
    this.setState({ news: Object.assign({}, this.state.news, { hits: hits }) });
  };

  upvote = (id) => {
    const hits = this.state.news.hits.map((item, index) => {
      if (index === id) {
        let upvoteCount = parseInt(item.points, 10) + 1;
        return { ...item, points: upvoteCount };
      }
      return { ...item };
    });
    this.setState({ news: Object.assign({}, this.state.news, { hits: hits }) });
  };

  componentDidMount() {
    if (!this.state.news) {
      this.fetchNews(this.props.match.params.id);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchNews(this.props.match.params.id);
    }
  }
  fetchNews(id) {
    this.setState(() => ({
      loading: true,
    }));

    this.props.fetchInitialData(id).then((news) =>
      this.setState(() => ({
        news,
        loading: false,
      }))
    );
  }

  render() {
    const { news, loading } = this.state;
    let points = [];
    news.hits.map((currenValue) =>
      points.push([currenValue.objectID, currenValue.points])
    );
    const head = () => {
      return (
        <Helmet>
          <title>Hacker News</title>
        </Helmet>
      );
    };
    return (
      <div className={`App wrapper`}>
        {head()}
        <News
          news={news}
          id={this.props.match.params.id ? this.props.match.params.id : 1}
          toggle={this.toggle}
          upvote={this.upvote}
        />

        <LineChart points={points} />
      </div>
    );
  }
}

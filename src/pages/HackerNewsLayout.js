import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./HackerNews.css";
import { News } from "./News";

import { LineChart } from "./Linechart";

const getDatafromLocalStorage = (id) => {
  if (localStorage.getItem(id)) {
    return JSON.parse(window.localStorage.getItem(id));
  }
  return false;
};

export class HackerNewsLayout extends React.Component {
  constructor(props) {
    super(props);
    let news;
    if (__isBrowser__) {
      if (
        getDatafromLocalStorage(
          this.props.match.params.id ? this.props.match.params.id : 1
        )
      ) {
        news = getDatafromLocalStorage(
          this.props.match.params.id ? this.props.match.params.id : 1
        );
      } else {
        news = window.__INITIAL_DATA__;
        delete window.__INITIAL_DATA__;
      }
    } else {
      news = props.staticContext.data;
    }

    this.state = {
      news,
      loading: news ? false : true,
      points: [],
      pageId: 1,
    };

    this.fetchNews = this.fetchNews.bind(this);
  }

  toggle = (id) => {
    const { news, pageId } = this.state;
    const hits = [...news.hits.slice(0, id), ...news.hits.slice(id + 1)];
    if (__isBrowser__) {
      localStorage.setItem(
        pageId,
        JSON.stringify(Object.assign({}, this.state.news, { hits: hits }))
      );
    }
    this.setState({ news: Object.assign({}, this.state.news, { hits: hits }) });
  };

  upvote = (id) => {
    const { pageId } = this.state;
    const hits = this.state.news.hits.map((item, index) => {
      if (index === id) {
        let upvoteCount = parseInt(item.points, 10) + 1;
        return { ...item, points: upvoteCount };
      }
      return { ...item };
    });
    if (__isBrowser__) {
      localStorage.setItem(
        pageId,
        JSON.stringify(Object.assign({}, this.state.news, { hits: hits }))
      );
    }
    this.setState({ news: Object.assign({}, this.state.news, { hits: hits }) });
  };

  componentDidMount() {
    const { pageId } = this.state;
    if (!this.state.news) {
      if (getDatafromLocalStorage(pageId) && __isBrowser__) {
        this.setState({
          news: getDatafromLocalStorage(pageId),
        });
      } else {
        this.fetchNews(pageId);
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({ pageId: this.props.match.params.id }, () => {
        const { pageId } = this.state;
        if (getDatafromLocalStorage(pageId) && __isBrowser__) {
          this.setState({
            news: getDatafromLocalStorage(pageId),
          });
        } else {
          this.fetchNews(pageId);
        }
      });
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
    const { news, loading, pageId } = this.state;
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
          id={pageId}
          toggle={this.toggle}
          upvote={this.upvote}
        />

        <LineChart points={points} />
      </div>
    );
  }
}

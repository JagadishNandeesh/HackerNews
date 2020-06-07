import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./HackerNews.css";
import { Link } from "react-router-dom";
import { Chart } from "react-charts";

function MyChart(props) {
  const data = [
    {
      label: "Series 1",
      data: props.points,
    },
  ];

  const options = {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Y text",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "X text",
          },
        },
      ],
    },
  };

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} options={options} />
    </div>
  );
}

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
    };

    this.fetchNews = this.fetchNews.bind(this);
  }

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
        <div className={"grid-container"}>
          <div className="row header">
            <div className="col-md-1 col-sm-1 col-xs-1">Comments</div>
            <div className="col-md-1 col-sm-1 col-xs-1">Vote count</div>
            <div className="col-md-1 col-sm-1 col-xs-1">UpVote</div>
            <div className="col-md-9 col-sm-9 col-xs-9">New Details</div>
          </div>

          {news &&
            news.hits &&
            news.hits.map((news) => {
              points.push([news.objectID, news.points]);
              return (
                <div className="row row-data">
                  <div className="col-md-1 col-sm-1 col-xs-1">
                    {news.num_comments}
                  </div>
                  <div className="col-md-1 col-sm-1 col-xs-1">
                    {news.points}
                  </div>
                  <div className="col-md-1 col-sm-1 col-xs-1">
                    {" "}
                    <div className={"triangle"}></div>
                  </div>
                  <div className="col-md-9 col-sm-9 col-xs-9">{`${news.title} ${news.title} by ${news.author}`}</div>
                </div>
              );
            })}
          <div class="row">
            <div className="paginator">
              <span>
                <Link to={`/${parseInt(this.props.match.params.id, 10) - 1}`}>
                  Prev
                </Link>
              </span>

              <span>
                <Link to={`/${parseInt(this.props.match.params.id, 10) + 1}`}>
                  Next
                </Link>
              </span>
            </div>
          </div>
        </div>
        <MyChart points={points} />
      </div>
    );
  }
}

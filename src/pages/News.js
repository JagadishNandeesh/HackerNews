import React from "react";
import { extractHostname } from "./../utilites/getHostName";
import { Pagination } from "./Pagination";

export const News = ({ news, id, toggle, upvote }) => {
  return (
    <div className={"gridcontainer"}>
      <div className="row header">
        <div className="col-md-1 col-sm-1 col-xs-1">Comments</div>
        <div className="col-md-1 col-sm-1 col-xs-1">Vote count</div>
        <div className="col-md-1 col-sm-1 col-xs-1">UpVote</div>
        <div className="col-md-9 col-sm-9 col-xs-9">New Details</div>
      </div>

      {news &&
        news.hits &&
        news.hits.map((news, index) => {
          return (
            <React.Fragment>
              {typeof news.show == "undefined" || news.show ? (
                <div className="row row-data">
                  <div className="col-md-1 col-sm-1 col-xs-1">
                    {news.num_comments}
                  </div>
                  <div className="col-md-1 col-sm-1 col-xs-1">
                    {news.points}
                  </div>
                  <div className="col-md-1 col-sm-1 col-xs-1">
                    {" "}
                    <div
                      onClick={() => upvote(index)}
                      className={"triangle"}
                    ></div>
                  </div>
                  <div className="col-md-9 col-sm-9 col-xs-9">
                    {news.title} {news.title}
                    <span className="hostName">
                      {news.url ? extractHostname(news.url) : ""}
                    </span>
                    by {news.author}
                    <span className="hideButton" onClick={() => toggle(index)}>
                      Hide
                    </span>
                  </div>
                </div>
              ) : null}
            </React.Fragment>
          );
        })}
      <div className="row">
        <Pagination id={id} />
      </div>
    </div>
  );
};

import { News } from "../News";
import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "@testing-library/jest-dom";

const toggle = jest.fn();
const upvote = jest.fn();
let news = null;
let id = -1;

test("should render news component without props", () => {
  render(
    <Router>
      <News />{" "}
    </Router>
  );
});

describe("News list", () => {
  beforeAll(() => {
    news = {
      hits: [
        {
          title: "Amazon to Acquire Whole Foods for $13.7B",
          url:
            "https://www.bloomberg.com/news/articles/2017-06-16/amazon-to-buy-whole-foods?cmpid=socialflow-twitter-business&utm_content=business&utm_campaign=socialflow-organic&utm_source=twitter&utm_medium=social",
          author: "whatok",
          num_comments: 824,
          objectID: 144826,
          relevancy_score: 7484,
          points: 865,
        },
        {
          title: "second value",
          url:
            "https://www.bloomberg.com/news/articles/2017-06-16/amazon-to-buy-whole-foods?cmpid=socialflow-twitter-business&utm_content=business&utm_campaign=socialflow-organic&utm_source=twitter&utm_medium=social",
          author: "whatok",
          num_comments: 824,
          objectID: 144826,
          relevancy_score: 7484,
          points: 784,
        },
      ],
    };
    id = 1;
  });
  beforeEach(() => {
    render(
      <Router>
        <News news={news} id={id} upvote={upvote} toggle={toggle} />{" "}
      </Router>
    );
  });

  it("should display title of news on each item", () => {
    const titles = screen.queryAllByTestId("news-item-title");
    expect(titles.map((title) => title.textContent)).toEqual(
      news.hits.map((hit) => hit.title)
    );
  });

  it("should contain hide buttons for all items in news list", () => {
    const hideButtons = screen.queryAllByTestId("news-item-hide-button");
    expect(hideButtons.map((hideButton) => hideButton.textContent)).toEqual(
      news.hits.map((hit) => "[Hide]")
    );
  });

  it("should display all upvote counts correctly", () => {
    const upvoteCounts = screen.queryAllByTestId("news-item-vote-count");
    expect(
      upvoteCounts.map((upvoteCount) => parseInt(upvoteCount.textContent))
    ).toEqual(news.hits.map((hit) => hit.points));

    fireEvent.click(screen.queryAllByTestId("news-item-upvote-button")[0]);
    expect(upvote.mock.calls.length).toBe(1);
    expect(upvote.mock.calls[0][0]).toBe(0);
  });

  it("should call hide function correctly", () => {
    fireEvent.click(screen.queryAllByTestId("news-item-hide-button")[0]);
    expect(toggle.mock.calls.length).toBe(1);
    expect(toggle.mock.calls[0][0]).toBe(0);
  });
});

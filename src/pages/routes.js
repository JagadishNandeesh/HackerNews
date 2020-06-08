import { HackerNewsLayout } from "./HackerNewsLayout";
import { fetchNews } from "./../utilites/fetch";

const routes = [
  {
    path: "/:id?",
    exact: true,
    component: HackerNewsLayout,
    fetchInitialData: (path = "") => {
      let pageNumber = parseInt(path.split("/").pop(), 10);
      pageNumber = pageNumber ? pageNumber : 1;
      return fetchNews(
        `https://hn.algolia.com/api/v1/search?tags=story&page=${pageNumber}`
      );
    },
  },
];

export default routes;

import React, { useEffect, useState } from "react";
import axios from "axios";

export const fetchNews = async (url, options) => {
  const response = await axios.get(url, { params: options });
  return response.data;
};

import "./main.css";
import React, { useState } from "react";
import Chart from "../Chart/chart";
const axios = require("axios");
const Main = () => {
  const instance = axios.create({
    baseURL: "https://twitter-sa-api.herokuapp.com/",
  });
  async function fetch_data(e) {
    console.log("called function ");
    const res = await instance.request({
      url: "/",
      method: "get",
      params: { query: { state } },
    });
    setdata(res.data);
  }
  const [data, setdata] = useState({});
  const [state, setState] = useState("");

  return (
    <div>
      <form action="/action_page.php">
        <input
          className="search__bar"
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => setState(e.target.value)}
          placeholder="Type Anything"
        />
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            fetch_data(e);
          }}
        >
          Search
        </button>
      </form>
      <Chart
        data={data}
        chartStyle={{ height: "300px", width: "300px", margin: "auto" }}
      />
    </div>
  );
};

export default Main;

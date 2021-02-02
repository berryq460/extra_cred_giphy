import React, { useState, useEffect } from "react";
import FatchData from "../service/FatchData";

const Giphy = () => {
  const [data, setDate] = useState([]);

  const getRndom = async () => {
    const giphy = await FatchData();
    setDate(giphy.data.data);
  };

  useEffect(() => {
    getRndom();
  }, []);

  return (
    <div>
      <button onClick={getRndom}> get Random</button>
      <h1>{data.title}</h1>
      <img src={data.fixed_height_small_still_url} alt={data.title} />
    </div>
  );
};

export default Giphy;
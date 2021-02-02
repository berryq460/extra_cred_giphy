import React from "react";
import axios from "axios";

const FatchData = async () => {
  const apikey = "YuxBEc6eL9xMd9MKF4PewKyKr3NxWaRt";
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`;
  const response = await axios.get(url).then((res) => {
    return res;
  });
  return response;
};

export default FatchData;
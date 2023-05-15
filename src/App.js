import React, { useState } from "react";
import Papa from "papaparse";
import {FaGoogle, FaGithub, FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const App = () => {
  const [data, setData] = useState([]);
  const [hide, setHide] = useState();

  const fetchFileData = async () => {
    setHide(true);
    const response = await fetch("https://www.terriblytinytales.com/test.txt");
    const text = await response.text();
    const words = text
      .replace(/[^\w\s]/gi, "")
      .toLowerCase()
      .split(/\s+/);
    const wordCounts = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    const sortedData = Object.entries(wordCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 20)
      .map(([word, Count]) => ({ name: word, Count }));
    setData(sortedData);
  };

  const handleExport = () => {
    const csvData = Papa.unparse(data);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "histogram.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
    {!hide && (
      <div><h2 style={{
        color: "white",
        background: "#c1272d",
        padding: "6px",
        borderRadius: "7px",
        textAlign:"center",
        margin: "5% 24% 0 25%",
      }}>Hello TTT, I'm Sai Dinesh from LPU. Welcome to my assignment!</h2>
          <div
            style={{
              color: "white",
              backgroundColor: "#c1272d",
              padding: "6px",
              borderRadius: "7px",
              fontSize: "150%",
              display: "auto",
              margin: "5% 28% 0 31%",
            }}>Click the button below to get the details about the assignment. </div>
        
      </div>
      )}
      {!hide && (
        <button
          style={{
            color: "white",
            background: "#c1272d",
            padding: "10px",
            cursor: "pointer",
            fontSize: "140%",
            border: "1px solid #c1272d",
            borderRadius: "5px",
            display: "block",
            margin: "5% 0 0 45%",
          }}
          onClick={fetchFileData}>
          Submit
        </button>
      )}

      {data.length > 0 && (
        <>
          <div
            style={{
              color: "white",
              backgroundColor: "#c1272d",
              padding: "10px",
              borderRadius: "7px",
              fontSize: "150%",
              display: "auto",
              margin: "3% 13% 0 18%",
            }}>The below Histogram indicates the occurrence of first 20 words possessing with the maximum frequency.</div>

          <div style={{ display: "block", margin: "3% 0 0 20%" }}>
            <BarChart width={800} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis color="white" dataKey="name" />
              <YAxis color="white" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Count" fill="#c1272d" />
            </BarChart>
          </div>

          <div>
            <br></br>
            <br></br>
          </div>

          <div>
            <button
              className="btn2"
              style={{
                color: "white",
                background: "#c1272d",
                padding: "10px",
                cursor: "pointer",
                fontSize: "140%",
                border: "1px solid #c1272d",
                borderRadius: "5px",
                display: "block",
                marginLeft: "43.5%",
              }}
              onClick={handleExport}>
              Export
            </button> <br></br>
            <h5>Connect with me through social media handles!</h5>
            <br></br>
            <div
              style={{
                fontFamily: "-moz-initial",
                display: "flex",
                margin: "0 0 0 84%",
              }}>
              <a style={{ color: "#c1272d", paddingRight: "6px" }}
                href="https://github.com/Saidinesh777"
                target="_blank">
                <FaGithub size={25} />
              </a>
              <a style={{ color: "#c1272d", paddingRight: "6px" }}
                href="https://www.linkedin.com/in/sai-dinesh-5b89381b7/"
                target="_blank">
                <FaLinkedin size={25} />
              </a>
              <a style={{ color: "#c1272d", paddingRight: "6px" }}
                href="https://twitter.com/_saidinesh_777"
                target="_blank">
                <FaTwitter size={25} />
              </a>

              <a style={{ color: "#c1272d", paddingRight: "6px" }}
                href="https://www.instagram.com/_sai.dinesh_/?next=%2F"
                target="_blank">
                <FaInstagram size={25} />
              </a>
              <a style={{ color: "#c1272d", paddingRight: "6px" }}
                href="https://mail.google.com/mail"
                target="_blank">
                <FaGoogle size={25} />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const analyzeWebsite = async () => {

  if (!url) {
    setError("Please enter a website URL");
    return;
  }

  let websiteUrl = url;

  if (!websiteUrl.startsWith("http")) {
    websiteUrl = "https://" + websiteUrl;
  }

  setLoading(true);
  setError("");
  setResult(null);

  try {

    const response = await fetch("https://website-audit-analyzer-production.up.railway.app/api/audit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    url: url
  }),
});


    const data = await response.json();


    if (!response.ok) {
      throw new Error(
        data.error || "Unable to analyze website"
      );
    }


    setResult(data);


  } catch(err){

    setError(err.message);

  }


  setLoading(false);

};


  return (
    <div className="app">

      <nav className="navbar">
        <h2>🚀 PagePulse</h2>
        <span>Website Audit Tool</span>
      </nav>


      <section className="hero">

        <h1>
          Analyze Websites
          <br />
          <span>Instantly</span>
        </h1>

        <p>
          Get performance, SEO and technical insights in seconds.
        </p>


        <div className="search-box">

          <input
            type="text"
            placeholder="Enter website URL..."
            value={url}
            onChange={(e)=>setUrl(e.target.value)}
          />

          <button onClick={analyzeWebsite}  disabled={loading}>
            {loading ? "Analyzing..." : "Analyze 🚀"}
          </button>

        </div>


        {
          error &&
          <div className="error">
            ❌ {error}
          </div>
        }


      </section>



      {
        loading &&
        <div className="loader">
          <div></div>
          <p>Scanning website...</p>
        </div>
      }



      {
        result &&

        <section className="dashboard">

          <h2>Website Report</h2>


          <div className="cards">


            <div className="card">
              <h3>🟢 Status Code</h3>
              <p>{result.statusCode}</p>
              <span>Website Available</span>
            </div>


            <div className="card">
              <h3>⚡ Response Time</h3>
              <p>{result.responseTime} ms</p>
              <span>Performance</span>
            </div>


            <div className="card">
              <h3>📄 Page Title</h3>
              <p>{result.title || "No Title"}</p>
              <span>Metadata</span>
            </div>


            <div className="card">
              <h3>🔍 H1 Count</h3>
              <p>{result.h1Count}</p>
              <span>SEO Structure</span>
            </div>


            <div className="card">
              <h3>🖼 Missing ALT</h3>
              <p>{result.imagesWithoutAlt}</p>
              <span>Accessibility</span>
            </div>


            <div className="card">
              <h3>📝 Word Count</h3>
              <p>{result.wordCount}</p>
              <span>Content Analysis</span>
            </div>


          </div>


          <button
            className="copy-btn"
            onClick={() =>
              navigator.clipboard.writeText(
                JSON.stringify(result,null,2)
              )
            }
          >
            📋 Copy JSON
          </button>


        </section>

      }



    <footer>
       <p>
    <a 
      href="https://digitalheroesco.com"
      target="_blank"
      rel="noreferrer"
    >
      Built for Digital Heroes Training Task
    </a>
    </p>
    </footer>


    </div>
  );
}

export default App;
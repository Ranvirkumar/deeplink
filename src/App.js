import "./App.css";

function App() {
  const handleEncorderValue = (value, base) => {
    const encodedData = encodeURIComponent(JSON.stringify(value));
    const url = `infinityheadstart://${base}?data=${encodedData}`;
    return url;
  };
  
  function getSearchParamsObject(url) {
    const searchParams = new URLSearchParams(url.search);
    const paramsObject = {};

    for (const [key, value] of searchParams.entries()) {
      paramsObject[key] = value;
    }

    return paramsObject;
  }
  const handleDeepLink = () => {
    const data = {
      state: getSearchParamsObject(window.location),
    };
    const deepLinkUrl = handleEncorderValue(data, window.location.pathname);
    // Attempt to open the deep link
    const testLink = document.createElement("a");
    testLink.href = deepLinkUrl;
    document.body.appendChild(testLink);
    testLink.click();
    document.body.removeChild(testLink);
    setTimeout(() => {
      window.location.href = "https://play.google.com/store/apps";
    }, 1000);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        maxWidth: "300px",
        margin: "10px",
      }}
    >
      <button onClick={() => handleDeepLink()}>open vedio deepLink Url</button>
    </div>
  );
}

export default App;

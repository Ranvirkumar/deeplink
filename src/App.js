import "./App.css";

function App() {
  const handleEncorderValue = (value, base) => {
    const encodedData = encodeURIComponent(JSON.stringify(value));
    const url = `infinityheadstart://${base}?data=${encodedData}`;
    return url;
  };
  // const dataSet = (url) => {
  //   return {
  //     pdf: {
  //       data: {
  //         state: {
  //           documentUrl: url,
  //         },
  //       },
  //       pathName: "DocumentScreen",
  //     },
  //     video: {
  //       data: {
  //         state: {
  //           activeVideo: {
  //             url: url,
  //           },
  //         },
  //       },
  //       pathName: "PLAYLIST",
  //     },
  //     url: {
  //       data: {
  //         state: {
  //           uri: url,
  //         },
  //       },
  //       pathName: "WebStoryScreen",
  //     },
  //   };
  // };
  // const handleClick = (type, url = "") => {
  // const { data, pathName } = dataSet(url)?.[type] || "";
  // const deepLinkUrl = handleEncorderValue(data, pathName);
  // // Attempt to open the deep link
  // const testLink = document.createElement("a");
  // testLink.href = deepLinkUrl;
  // document.body.appendChild(testLink);
  // testLink.click();
  // document.body.removeChild(testLink);
  // setTimeout(() => {
  //   window.location.href = "https://play.google.com/store/apps";
  // }, 1000);
  // };
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
      {/* <button
        onClick={() =>
          handleClick(
            "pdf",
            "https://www.africau.edu/images/default/sample.pdf"
          )
        }
      >
        open Deep link url for pdf
      </button>
      <button
        onClick={() =>
          handleClick(
            "video",
            "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_10mb.mp4"
          )
        }
      >
        open Deep link url for video
      </button>
      <button
        onClick={() =>
          handleClick(
            "url",
            "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg"
          )
        }
      >
        open Deep link url for image
      </button> */}
      <button onClick={() => handleDeepLink()}>open vedio deepLink Url</button>
    </div>
  );
}

export default App;

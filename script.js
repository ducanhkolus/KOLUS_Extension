const iframe = document.querySelector("#mainFrame")

document.addEventListener("keydown", function (event) {
  if (event.key === "b") {
    // console.log("key pressed", dataApi);
    const iframeBody = iframe.contentDocument.body;
    const work1 = iframeBody.querySelector("#work1");
    const work1Body = work1.contentDocument.body;
    const description = work1Body.querySelector(
      "#tree .center #tree_content .u8-textinput-input"
    );
    if (description.firstChild.tagName.toLowerCase() === "a") {
      return;
    }
    // const newDiv = document.createElement("a");
    // newDiv.className = "new-div-class";
    // newDiv.target = "_blank";
    // newDiv.href = `https://app.kolus.io/panel/tickets/${dataApi}`;
    // newDiv.textContent = `https://app.kolus.io/panel/tickets/${dataApi}`;
    // description.insertBefore(newDiv, description.firstChild);
  }
});

iframe.addEventListener("load", function () {
  const iframeBody = iframe.contentDocument;
  if (iframeBody) {
    const work1 = iframeBody.querySelector("#work1");
    work1.addEventListener("load", () => {
      const work1Document = work1.contentDocument;
      work1Document.addEventListener("keyup", (event) => {
        if (event.key === "b") {
          const work1Body = work1Document.body;
          const description = work1Body.querySelector(
            "#tree .center #tree_content .u8-textinput-input"
          );
          if (description.firstChild.tagName.toLowerCase() === "a") {
            return;
          }
          const newDiv = document.createElement("a");
          newDiv.className = "new-div-class";
          newDiv.target = "_blank";
          newDiv.href = `https://app.kolus.io/panel/tickets/${dataApi}`;
          newDiv.textContent = `https://app.kolus.io/panel/tickets/${dataApi}`;
          description.insertBefore(newDiv, description.firstChild);
        }
      });
    });
  }
});
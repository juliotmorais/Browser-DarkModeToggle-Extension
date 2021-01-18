/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
/*jshint esversion: 6 */
function listenForClicks() {
  document.addEventListener("click", (e) => {

    /**
     * Given the name of a beast, get the URL to the corresponding image.
     */
    function darkenOrLighten(question) {
      switch (question) {
        case "Darken":
          return "darken";
        case "Lighten":
          return "lighten";
      }
    }

    function darken(tabs) {
       browser.tabs.sendMessage(tabs[0].id, {
         command: "darken",
       });
     }
    function lighten(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "lighten",
      });
    }

    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.error(`Could not darken: ${error}`);
    }

    /**
     * Get the active tab,
     * then call "darken()" or "lighten()" as appropriate.
     */
    if (e.target.classList.contains("dark")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(darken)
        .catch(reportError);
    }
    else if (e.target.classList.contains("light")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(lighten)
        .catch(reportError);
    }
  });
}
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute beastify content script: ${error.message}`);
}
browser.tabs.executeScript({file: "/content_scripts/darken.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);

let actualCode =
  "function initiatePopup() {" + '    console.log("Button clicked");' + "}";

let script = document.createElement("script");
script.textContent = actualCode;
(document.head || document.documentElement).appendChild(script);
script.remove();

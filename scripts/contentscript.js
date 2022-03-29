const iconStyle =
  "background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxM3B4IiB2aWV3Qm94PSIwIDAgMTIgMTMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU4ICg4NDY2MykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+ZG93bmxvYWQgYnV0dG9uIGNvcHk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgICAgIDxnIGlkPSJ0aGluZy1wYWdlLXdpdGgtb3ZlcmxheSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNzAuMDAwMDAwLCAtODguMDAwMDAwKSIgc3Ryb2tlPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9ImRvd25sb2FkLWJ1dHRvbi1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTcwLjAwMDAwMCwgODkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlN0cm9rZS0xLUNvcHktOSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSIxMiA1IDUuOTcxNzE4MDUgMTEgMCA1LjA1NzU5Mjc1Ij48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTYsMCBMNiwxMCIgaWQ9IkxpbmUtMi1Db3B5LTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMDAwMDAwLCA1LjAwMDAwMCkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTYuMDAwMDAwLCAtNS4wMDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=');background-repeat: no-repeat;background-position: center;";

function onDomLoaded() {
  let menuBar = document.getElementsByClassName(
    "SidebarMenu__download--3Vqb7"
  )[0];

  console.log(menuBar);

  let button = document.createElement("div");
  button.className = "button button-primary";
  button.style = "margin-top: 15px";
  button.onclick = () => {
    console.log("Button clicked");
  };

  let downloadIcon = document.createElement("div");
  downloadIcon.className = "i-button left";
  downloadIcon.style = iconStyle;

  let downloadText = document.createElement("span");
  downloadText.appendChild(document.createTextNode("Download As Zip"));

  downloadIcon.appendChild(downloadText);
  button.appendChild(downloadIcon);
  menuBar.appendChild(button);

  console.log(menuBar);
}

function main() {
  console.log("Hello New");
  setTimeout(onDomLoaded, 1500);
}

main();

/*
1. Get child component
2. Get correct button layout
3. Send message
4. don't use settimeout
*/

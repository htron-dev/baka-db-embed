import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

const params = new URLSearchParams(window.location.search);

const project = params.get("project");
const item = params.get("item");

console.log(project, item);

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

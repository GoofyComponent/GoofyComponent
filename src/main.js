import "./app.css";
import "./ui/Review/Review.css";
// @ts-ignore
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;

const parent = React.createElement("div", { id: "parent " }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "HI h1 tag"),
    React.createElement("h2", {}, "HI h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "HI h1 tag"),
    React.createElement("h2", {}, "HI h2 tag"),
  ]),
]);
console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", abc: "xyz" },
//   "Hello World from React!!!"
// );
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// root.render(heading);

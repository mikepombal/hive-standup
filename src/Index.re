[@bs.module "./firebase.js"] external load: unit => unit = "load";
let root = load();

ReactDOMRe.renderToElementWithId(<Base />, "base");
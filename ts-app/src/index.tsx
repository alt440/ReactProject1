import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Hello2 } from "./components/Hello2";

import { createHello2 } from "./index2";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);

//this is how you add another element.
/*ReactDOM.render(
  <Hello2 name="Alex" date="1998-08-07" />,
  document.getElementById("example2")
);*/

//different way of doing it
createHello2();

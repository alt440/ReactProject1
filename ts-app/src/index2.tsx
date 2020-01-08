import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello2 } from "./components/Hello2";

export function createHello2(){
  ReactDOM.render(
    <Hello2 name="Alex" date="1998-08-07" />,
    document.getElementById("example2")
  );
}

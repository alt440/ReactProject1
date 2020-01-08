import * as React from "react";

export interface Hello2Props {
  name: string;
  date: string;
}

export class Hello2 extends React.Component<Hello2Props, {}> {

  render(){
    return <h1>Hello from {this.props.name} at {this.props.date}!</h1>;
  }
}

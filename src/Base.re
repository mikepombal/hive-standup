let component = ReasonReact.statelessComponent("Base");

let make = _children => {
  ...component,
  render: _self => <div> {ReasonReact.string("Hive Standup!!!")} </div>,
};
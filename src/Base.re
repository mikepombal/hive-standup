type action =
  | LoadData;

type status =
  | Init
  | Loaded;

type state = {status};

let component = ReasonReact.reducerComponent("Counter");

let make = _children => {
  ...component,
  initialState: () => {status: Init},
  reducer: (action, _state) =>
    switch (action) {
    | LoadData => ReasonReact.Update({status: Loaded})
    },
  render: self =>
    <div>
      <div>
        {switch (self.state.status) {
         | Init => ReasonReact.string("Initial status")
         | Loaded => ReasonReact.string("Loaded")
         }}
      </div>
      <button onClick={_ => self.send(LoadData)}>
        {ReasonReact.string("Load Data")}
      </button>
    </div>,
};
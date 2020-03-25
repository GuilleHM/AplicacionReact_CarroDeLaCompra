import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // Destructuring
    const { counters, onDelete, onIncrement, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Resetear
        </button>
        <br />
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
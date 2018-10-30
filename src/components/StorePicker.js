import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form action="" className="store-selector">
          <h2>Please Enter A store</h2>
          <input type="text" required placeholder="Store Name"/>
          <button type="submit"> Visit Store -> </button>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker;
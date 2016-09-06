let React = require('react');
let ReactDOM = require('react-dom');

// App: <App/>
let App = React.createClass({
  render : () => {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
});

// Header: <Header/>
let Header = React.createClass({
  render : () => {
    return (
      <p>Header</p>
    )
  }
});

// Order: <Order/>
let Order = React.createClass({
  render : () => {
    return (
      <p>Order</p>
    )
  }
});

// Inventory: <Inventory/>
let Inventory = React.createClass({
  render : () => {
    return (
      <p>Inventory</p>
    )
  }
});

// StorePicker: <StorePicker/>
let StorePicker = React.createClass({
  render : () => {
    return (
      <form className='store-selector'>
        <h2>Please Enter A Store</h2>
        <input type='text' ref='storeId' required />
        <input type='Submit' />
      </form>
    )
  }
});

ReactDOM.render(<App/>, document.getElementById('main'))

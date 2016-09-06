let React = require('react');
let ReactDOM = require('react-dom');

/*
  StorePicker
  This will let us make <StorePicker/>
*/

let StorePicker = React.createClass({

  render : () => {
    return (
      <p>Hello</p>
    )
  }

});

ReactDOM.render(<StorePicker/>, document.getElementById('main'))

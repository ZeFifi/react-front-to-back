import React, {Component} from 'react';

class Search extends Component {
  state = {
    text: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text"
                 name="text"
                 placeholder="Search users..."
                 value={this.state.text}
                 onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-dark btn-block">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
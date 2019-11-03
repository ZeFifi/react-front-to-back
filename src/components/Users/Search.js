import React, {Component} from 'react';
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text : ''});
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
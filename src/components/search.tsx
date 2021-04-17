import React from 'react';

export class SearchForm extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      action: '',
      item: '',
      distance: '',
      postcode: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  render() {
    return (
      <div>
        <form action="/" method="post" onSubmit={this.handleSubmit}>
          <fieldset>
            <p>I want to</p>
            <label>
              <select placeholder="Please choose an option" name="action" value={this.state.action} onChange={this.handleSelect}>
                <option value="">--Please choose an option--</option>
                <option value="share">share</option>
                <option value="borrow">borrow</option>
              </select>
            </label>
            <p>a</p>
            <label>
              <span className="visually-hidden">item</span>
              <input type="text"
                id="item-searchbox"
                value={this.state.item}
                placeholder="item"
                name="item"
                onChange={this.handleInputChange} />
            </label>
            <label>
              <p>within</p>
              <select placeholder="Please choose your distance" name="distance" value={this.state.distance} onChange={this.handleSelect}>
                <option value="">--Please choose an option--</option>
                <option value="5">5 miles</option>
                <option value="10">10 miles</option>
              </select>
            </label>
            <p>of</p>
            <label>
              <span className="visually-hidden">postcode</span>
              <input type="text"
                id="postcode-searchbox"
                value={this.state.postcode}
                placeholder="postcode"
                name="postcode"
                onChange={this.handleInputChange} />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div >
    )
  }

  handleInputChange(event: { target: { name: any; }; }) {
    const target = event.target;
    const value = target.value;

    this.setState({
      [event.target.name]: value
    });
  };

  handleSelect(event: { target: { name: any; }; }) {
    const target = event.target;
    const value = target.value;

    this.setState({
      [event.target.name]: value
    });
  };

  handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
  };

};


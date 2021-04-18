import React from 'react';
import './search.scss';

export interface SearchFormState {
  action: string,
  item: string,
  distance: number,
  postcode: string
}

export interface SearchFormProp {

}
export class SearchForm extends React.Component<SearchFormProp, SearchFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      action: '',
      item: '',
      distance: 0,
      postcode: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleActionSelect = this.handleActionSelect.bind(this);
    this.handleItemInput = this.handleItemInput.bind(this);
    this.handleDistanceSelect = this.handleDistanceSelect.bind(this);
    this.handlePostcodeInput = this.handlePostcodeInput.bind(this);
  };

  render() {
    return (
      <div id="search">
        <form action="/" id="search-form" className="centered" method="post" onSubmit={this.handleSubmit}>
          <p className="no-margin-top">I want to</p>
          <label>
            <select
              placeholder="Please choose an option"
              name="action"
              value={this.state.action}
              onChange={this.handleActionSelect}>
              <option value="">--Please choose an option--</option>
              <option value="share">share</option>
              <option value="borrow">borrow</option>
            </select>
          </label>
          <div className="input-flex">
            <span>a</span>
            <label>
              <span className="visually-hidden">item</span>
              <input type="text"
                id="item-searchbox"
                value={this.state.item}
                placeholder="item"
                name="item"
                onChange={this.handleItemInput} />
            </label>
          </div>
          <p>within</p>
          <label>
            <select
              placeholder="Please choose your distance"
              name="distance"
              value={this.state.distance}
              onChange={this.handleDistanceSelect}>
              <option value="">--Please choose an option--</option>
              <option value="5">5 miles</option>
              <option value="10">10 miles</option>
            </select>
          </label>
          <div className="input-flex">
            <span>of</span>
            <label>
              <span className="visually-hidden">postcode</span>
              <input type="text"
                id="postcode-searchbox"
                value={this.state.postcode}
                placeholder="postcode"
                name="postcode"
                onChange={this.handlePostcodeInput} />
            </label>
          </div>
          <div>
            <button className="search-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }

  handleActionSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      ['action']: event.target.value
    })
  }

  handleItemInput(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ['item']: event.target.value
    })
  }

  handleDistanceSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      ['distance']: parseInt(event.target.value)
    })
  }

  handlePostcodeInput(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ['postcode']: event.target.value
    });
  };

  handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
  };
};


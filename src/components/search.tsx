import React from 'react';

const handleSubmit = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  alert('You have submitted the form.')
}

const Search = () => (
  <div>
    <form action="/" method="post" onSubmit={handleSubmit}>
      <fieldset>
        <p>I want to</p>
        <label>
          <select placeholder="Please choose an option" name="type">
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
            placeholder="item"
            name="item" />
        </label>
        <label>
          <p>within</p>
          <select name="type">
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
            placeholder="postcode"
            name="postcode" />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div >
);


export default Search;
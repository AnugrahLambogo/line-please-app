import React from 'react';
import './styling/uploadNew.css';
import config from './config';


class uploadNew extends React.Component {
  state = {
    numOfSections: 3,
    title: '',
  };

  createSectionArrays = ({ target }) => {
    let sectionArray = target.value.split("\n");
    this.setState(
      { [target.name]: sectionArray }
    );
  }

  sendText = (e) => {
    const uploadText = this.state

    fetch(`${config.API_ENDPOINT}/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(uploadText)
    })
  }


  renderSections = () => {
    return (
      Array.from({ length: this.state.numOfSections })
        .map((e, index) => (
          <section key={index} className="uploadForm">
            <label className="sectionLabel" htmlFor={'section' + (index + 1)}> Section {index + 1}:</label>
            <textarea
              type="text"
              name={'section' + (index + 1)}
              className="sections"
              onChange={this.createSectionArrays}>
            </textarea>
          </section>
        )))
  }

  increaseSection = (e) => {
    e.preventDefault();
    this.setState({ numOfSections: this.state.numOfSections + 1 });
  }

  decreaseSection = (e) => {
    e.preventDefault();
    this.setState({ numOfSections: this.state.numOfSections - 1 });
  }


  render() {
    return (
      <section>
        <h3>Upload new oration</h3>
        <p>Write or copy/paste the text you want to memorize below. Separate your text by 'sections' as you see fit, and make sure each 'line' is separated by an enter/return.
          </p>

        <form onSubmit={this.sendText}>
          <label id="titleLabel" htmlFor="textTitle">Title:</label>
          <input id="textTitle" type="text" onChange={e => this.setState({ title: e.target.value })}></input>

          {this.renderSections()}

          <button className="uploadButton" onClick={this.increaseSection}>Add another section</button>
          <button className="uploadButton" onClick={this.decreaseSection}>Remove section</button>
          <button className="uploadButton" type="submit" >Create!</button>
        </form>
      </section>
    );
  }
}


export default uploadNew;
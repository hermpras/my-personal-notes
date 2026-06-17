import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      errorMessage: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length > 50) {
      return;
    }
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.body.length < 10) {
      this.setState({ errorMessage: "Isi catatan minimal 10 karakter!" });
      return;
    }
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        errorMessage: "",
      };
    });
  }

  render() {
    const { title } = this.state;
    const remainingChars = 50 - title.length;

    return (
      <div className="note-input" data-testid="note-input">
        <h2>Buat catatan</h2>

        {/* // TODO [Advanced] tampilkan pesan error menggunakan elemen dengan class note-input__feedback--error. */}

        <form
          onSubmit={this.onSubmitEventHandler}
          data-testid="note-input-form"
        >
          <p className="note-input__feedback--error">
            {this.state.errorMessage}
          </p>
          <p
            className="note-input__title__char-limit"
            data-testid="note-input-title-remaining"
          >
            Sisa karakter: {remainingChars}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
            data-testid="note-input-title-field"
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
            data-testid="note-input-body-field"
          />
          <button type="submit" data-testid="note-input-submit-button">
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;

import classNames from "classnames";
import React from "react";
import Button from "../Button";
import styles from "./styles.module.scss";

interface IModalProps {
  modalTitle: string;
  data?: any;
  modalType: "Add" | "Edit" | "Delete" | "";
  onClose: () => void;
}

interface IModalState {
  title: string;
  releaseDate: string;
  url: string;
  gerne: Array<string>;
  overview: string;
  runtime: number | "";
  isSelectorOpen: boolean;
}

const allCategories = ["Documentary", "Comedy", "Horror", "Crime"];

class Modal extends React.Component<IModalProps, IModalState> {
  constructor(props: IModalProps) {
    super(props);
    this.state = {
      title: this.props.data?.title || "",
      releaseDate: this.props.data?.release_date || "",
      url: this.props.data?.poster_path || "",
      //gerne: this.props.data?.genres ? [...this.props.data?.genres] : [],
      gerne: ["Horror", "Crime"],
      overview: this.props.data?.overview || "",
      runtime: this.props.data?.runtime || "",
      isSelectorOpen: false,
    };
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  }

  handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (event.target.checked) {
      this.setState({
        gerne: [...this.state.gerne, event.target.nextSibling.nodeValue],
      });
    } else {
      this.setState({
        gerne: this.state.gerne.filter(
          (el) => el !== event.target.nextSibling.nodeValue
        ),
      });
    }
  }

  resetForm(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState({
      title: "",
      releaseDate: "",
      url: "",
      gerne: [],
      overview: "",
      runtime: "",
    });
  }

  render() {
    return (
      <div className={styles.overlay}>
        <form className={styles.modal} autoComplete="off">
          <Button
            text={""}
            extraClass={styles.closeBtn}
            onClick={this.props.onClose}
          />
          <h2 className={styles.h2}>{this.props.modalTitle}</h2>
          {this.props.modalType === "Edit" && (
            <label className={styles.label}>
              Movie ID
              <input
                className={styles.input}
                type="text"
                name="id"
                value={this.props.data?.id}
                disabled
              />
            </label>
          )}
          {this.props.modalType !== "Delete" && (
            <>
              <label className={styles.label}>
                Title
                <input
                  className={styles.input}
                  type="text"
                  name="title"
                  value={this.state.title}
                  placeholder="Title here"
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label className={styles.label}>
                Release Date
                <input
                  className={styles.input}
                  type="text"
                  name="releaseDate"
                  value={this.state.releaseDate.split("-").reverse().join("/")}
                  placeholder="Select Date"
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label className={styles.label}>
                Movie URL
                <input
                  className={styles.input}
                  type="text"
                  name="url"
                  value={this.state.url}
                  placeholder="Movie URL here"
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label className={classNames(styles.label, styles.selector)}>
                Genre
                <input
                  className={styles.input}
                  type="text"
                  name="gerne"
                  value={this.state.gerne.join(", ")}
                  placeholder="Select Gerne"
                  onChange={(e) => e.preventDefault()}
                  onClick={() =>
                    this.setState({
                      isSelectorOpen: !this.state.isSelectorOpen,
                    })
                  }
                />
                {this.state.isSelectorOpen && (
                  <ul className={styles.optionList}>
                    {allCategories.map((el, idx) => (
                      <li key={idx}>
                        <label>
                          <input
                            type="checkbox"
                            checked={
                              this.state.gerne.findIndex(
                                (elem) => elem === el
                              ) !== -1
                            }
                            onChange={(e) => this.handleCheckboxChange(e)}
                          />
                          {el}
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </label>
              <label className={styles.label}>
                Overview
                <input
                  className={styles.input}
                  type="text"
                  name="overview"
                  value={this.state.overview}
                  placeholder="Select here"
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label className={styles.label}>
                Runtime
                <input
                  className={styles.input}
                  type="number"
                  name="runtime"
                  value={this.state.runtime}
                  placeholder="Runtime here"
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <Button
                text={"Reset"}
                extraClass={styles.resetBtn}
                onClick={(e) => this.resetForm(e)}
              />
              <Button
                text={"Submit"}
                extraClass={styles.submitBtn}
                onClick={this.props.onClose}
              />
            </>
          )}
          {this.props.modalType === "Delete" && (
            <>
              <p className={styles.paragraph}>
                Are you sure you want delete this movie?
              </p>
              <Button
                text={"Confirm"}
                extraClass={styles.submitBtn}
                onClick={this.props.onClose}
              />
            </>
          )}
        </form>
      </div>
    );
  }
}

export default Modal;

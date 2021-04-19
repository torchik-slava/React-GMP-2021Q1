import classNames from "classnames";
import React from "react";
import { connect } from "react-redux";
import { MovieDataType, MovieWithOutIdDataType } from "../../model";
import { createMovie, deleteMovie, updateMovie } from "../../redux/actions";
import Button from "../Button";
import styles from "./Modal.module.scss";

interface IModalProps {
  modalTitle: string;
  data?: MovieDataType;
  modalType: "Add" | "Edit" | "Delete" | "";
  onClose: () => void;
  deleteMovie: (id: number) => void;
  updateMovie: (data: MovieDataType) => void;
  createMovie: (data: MovieWithOutIdDataType) => void;
}

interface IModalState {
  title: string;
  release_date: string;
  poster_path: string;
  genres: Array<string>;
  overview: string;
  runtime: number | "";
  isSelectorOpen: boolean;
}

const allCategories = ["Documentary", "Comedy", "Action", "Horror", "Crime"];

class Modal extends React.Component<IModalProps, IModalState> {
  constructor(props: IModalProps) {
    super(props);
    this.state = {
      title: this.props.data?.title || "",
      release_date: this.props.data?.release_date || "",
      poster_path: this.props.data?.poster_path || "",
      genres: this.props.data?.genres ? [...this.props.data?.genres] : [],
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
        genres: [...this.state.genres, event.target.nextSibling.nodeValue],
      });
    } else {
      this.setState({
        genres: this.state.genres.filter(
          (el) => el !== event.target.nextSibling.nodeValue
        ),
      });
    }
  }

  handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const data = {
      title: this.state.title,
      release_date: this.state.release_date,
      poster_path: this.state.poster_path,
      genres: this.state.genres,
      overview: this.state.overview,
      runtime: Number(this.state.runtime),
      tagline: this.props.data?.tagline || "can't be empty",
      vote_average: this.props.data?.vote_average || 0,
      vote_count: this.props.data?.vote_count || 0,
      budget: this.props.data?.budget || 0,
      revenue: this.props.data?.revenue || 0,
    }
    if (this.props.modalType === "Edit") {
      const dataWithId = { ...data, id: this.props.data.id } 
      this.props.updateMovie(dataWithId);
    } else {
      this.props.createMovie(data);
    }
    this.props.onClose();
  }

  resetForm(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState({
      title: "",
      release_date: "",
      poster_path: "",
      genres: [],
      overview: "",
      runtime: "",
    });
  }

  render() {
    return (
      <div className={styles.overlay} onClick={this.props.onClose}>
        <form
          className={styles.modal}
          autoComplete="off"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Button
            text={""}
            className={styles.closeBtn}
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
                  name="release_date"
                  value={this.state.release_date}
                  placeholder="Select Date"
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label className={styles.label}>
                Movie URL
                <input
                  className={styles.input}
                  type="text"
                  name="poster_path"
                  value={this.state.poster_path}
                  placeholder="Movie URL here"
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label className={classNames(styles.label, styles.selector)}>
                Genre
                <input
                  className={styles.input}
                  type="text"
                  name="genres"
                  value={this.state.genres.join(", ")}
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
                              this.state.genres.findIndex(
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
                className={styles.resetBtn}
                onClick={(e) => this.resetForm(e)}
              />
              <Button
                text={"Submit"}
                className={styles.submitBtn}
                onClick={(e) => this.handleSubmit(e)}
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
                className={styles.submitBtn}
                onClick={(e) => {
                  e.preventDefault();
                  this.props.deleteMovie(this.props.data.id);
                  this.props.onClose();
                }}
              />
            </>
          )}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteMovie: (id: number) => dispatch(deleteMovie(id)),
    updateMovie: (data: MovieDataType) => dispatch(updateMovie(data)),
    createMovie: (data: MovieWithOutIdDataType) => dispatch(createMovie(data)),
  };
};

export default connect(null, mapDispatchToProps)(Modal);

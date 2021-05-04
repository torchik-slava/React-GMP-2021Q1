import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { AppState, MovieDataType, MovieWithOutIdDataType } from "../../model";
import {
  createMovie,
  deleteMovie,
  updateMovie,
  closeModal,
} from "../../redux/actions";
import Button from "../Button";
import styles from "./Modal.module.scss";
import FormInputField from "./components/FormInputField";
import CheckboxSelect from "./components/CheckboxSelect";

interface Values {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  genres: Array<string>;
  tagline: string;
  overview: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  budget: number;
  revenue: number;
}

const ValidationSchema = Yup.object().shape({
  id: Yup.number(),
  title: Yup.string().required("Required field"),
  release_date: Yup.date().required("Required field"),
  poster_path: Yup.string()
    .required("Required field")
    .url("Must be correct url"),
  genres: Yup.array().of(Yup.string()).min(1, "Required minimum of 1 gerne"),
  tagline: Yup.string().required("Required field"),
  overview: Yup.string().required("Required field"),
  runtime: Yup.number().min(0, "Should be positive").required("Required field"),
  vote_average: Yup.number().min(0, "Should be positive"),
  vote_count: Yup.number().min(0, "Should be positive"),
  budget: Yup.number().min(0, "Should be positive"),
  revenue: Yup.number().min(0, "Should be positive"),
});

const Modal = (): React.ReactElement => {
  const { isOpen: isModalOpen, modalType, movieIdx } = useSelector(
    (state: AppState) => state.modal
  );
  const data = useSelector((state: AppState) => state.movies.movies[movieIdx]);
  const allCategories =
    modalType === "Add" || !data
      ? ["Documentary", "Comedy", "Action", "Horror", "Crime"]
      : [...data?.genres];

  const [isSelectorOpen, setSelectorOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  const dispatch = useDispatch();
  const onDeleteMovie = (id: number) => dispatch(deleteMovie(id));
  const onUpdateMovie = (movieData: MovieDataType) =>
    dispatch(updateMovie(movieData));
  const onCreateMovie = (movieData: MovieWithOutIdDataType) =>
    dispatch(createMovie(movieData));
  const onClose = () => dispatch(closeModal());
  return (
    <>
      {isModalOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <Formik
            initialValues={{
              id: data?.id || 0,
              title: data?.title || "",
              release_date: data?.release_date || "",
              poster_path: data?.poster_path || "",
              genres: data?.genres ? [...data?.genres] : [],
              tagline: data?.tagline || "",
              overview: data?.overview || "",
              runtime: data?.runtime || 0,
              vote_average: data?.vote_average || 0,
              vote_count: data?.vote_count || 0,
              budget: data?.budget || 0,
              revenue: data?.revenue || 0,
            }}
            onSubmit={(values) => {
              switch (modalType) {
                case "Add":
                  onCreateMovie(values);
                  onClose();
                  break;
                case "Edit":
                  onUpdateMovie(values);
                  onClose();
                  break;
                case "Delete":
                  onDeleteMovie(values.id);
                  onClose();
                  break;
                // no default
              }
            }}
            validationSchema={ValidationSchema}
          >
            {({ errors, values }: FormikProps<Values>) => (
              <Form
                className={styles.modal}
                aria-label="form"
                autoComplete="off"
                onClick={(e) => e.stopPropagation()}
              >
                <Button text="" className={styles.closeBtn} onClick={onClose} />
                <h2 className={styles.h2}>{`${modalType} Movie`}</h2>
                {modalType === "Edit" && (
                  <FormInputField
                    name="id"
                    label="Movie ID"
                    disabled
                    type="number"
                  />
                )}
                {/* PATTERN: Conditional Rendering */}
                {modalType !== "Delete" && (
                  <>
                    <FormInputField
                      name="title"
                      label="Title"
                      placeholder="Title here"
                    />
                    <FormInputField
                      name="release_date"
                      type="date"
                      label="Release Date"
                      placeholder="Select Date"
                    />
                    <FormInputField
                      name="poster_path"
                      label="Movie URL"
                      placeholder="Movie URL here"
                    />
                    <CheckboxSelect
                      name="genres"
                      label="Genre"
                      placeholder="Select Genre"
                      selectedOptions={values.genres}
                      optionsList={allCategories}
                      isOpen={isSelectorOpen}
                      toggleOptionsList={() => setSelectorOpen(!isSelectorOpen)}
                    />
                    {/* PATTERN: Conditional Rendering */}
                    {errors.genres ? (
                      <div className="error">{errors.genres}</div>
                    ) : null}
                    <FormInputField
                      name="tagline"
                      label="Tagline"
                      placeholder="Tagline here"
                    />
                    <FormInputField
                      name="overview"
                      label="Overview"
                      placeholder="Overview here"
                    />
                    <FormInputField
                      name="runtime"
                      type="number"
                      label="Runtime"
                      placeholder="Runtime here"
                    />
                    <FormInputField
                      name="vote_average"
                      type="number"
                      label="Vote Average"
                      placeholder="Vote Average here"
                    />
                    <FormInputField
                      name="vote_count"
                      type="number"
                      label="Vote Count"
                      placeholder="Vote Count here"
                    />
                    <FormInputField
                      name="budget"
                      type="number"
                      label="Budget"
                      placeholder="Budget here"
                    />
                    <FormInputField
                      name="revenue"
                      type="number"
                      label="Revenue"
                      placeholder="Revenue here"
                    />
                    <Button
                      text="Reset"
                      className={styles.resetBtn}
                      type="reset"
                    />
                    <Button
                      text="Submit"
                      className={styles.submitBtn}
                      type="submit"
                    />
                  </>
                )}
                {modalType === "Delete" && (
                  <>
                    <p className={styles.paragraph}>
                      Are you sure you want delete this movie?
                    </p>
                    <Button
                      text="Confirm"
                      className={styles.submitBtn}
                      type="submit"
                    />
                  </>
                )}
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default Modal;

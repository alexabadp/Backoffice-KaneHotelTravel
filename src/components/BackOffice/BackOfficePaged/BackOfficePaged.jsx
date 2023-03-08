import React from "react";
import styles from "./BackOfficePaged.module.css";

const BackOfficePaged = (props) => {
  let pageLength = [];

  for (
    let i = 1;
    i <= Math.ceil(props.allItems?.length / props.itemsInPage);
    i++
  ) {
    pageLength.push(i);
  }

  return (
    <div className={styles.backOfficePagedContainer}>
      <ul className={styles.backOfficePagedContainerList}>
        <li className={styles.backOfficePagedList}>
          <a
            onClick={(e) => {
              props.currentPage > 1
                ? props.paged(props.currentPage - 1)
                : props.paged(props.currentPage);
            }}
          >
            ←
          </a>
        </li>
        {pageLength.length > 0 ? (
          pageLength.map((p) => (
            <li className={styles.backOfficePagedList} key={p}>
              <a onClick={() => props.paged(p)}>{p}</a>
            </li>
          ))
        ) : (
          <p>...</p>
        )}
        <li className={styles.backOfficePagedList}>
          <a
            onClick={() => {
              props.currentPage < pageLength.length
                ? props.paged(props.currentPage + 1)
                : props.paged(props.currentPage);
            }}
          >
            →
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BackOfficePaged;

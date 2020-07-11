/*
 * @Copyright © 2019-2020 Isaac Marotte - All Rights Reserved
 *
 * This file is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2020.7.10
 */

import React from 'react';
import IconGitHub from '../atoms/icons/iconGitHub';
import IconLinkedIn from '../atoms/icons/iconLinkedIn';
import IconEmail from '../atoms/icons/iconEmail';
import styles from './header.scss';


const strMailTo = 'mailto:imarotte@gmail.com?subject=We%20think%20you\'re%20'
  + 'awesome%20and%20want%20to%20hire%20you&body=Name%20your%20price.%20Whatever%20you\'ve%20made'
  + '%20before%20isn\'t%20enough!';
const header = () => {
  return (
    <header className={styles.headerBar}>
      <div className={styles.header}>
        <div>
          <h1>Isaac To-Do</h1>
          <em>Providing sample code since 2020!</em>
        </div>
        <div>
          <a href="https://github.com/imarotte/sample_todo" target="_blank" rel="noreferrer">
            <IconGitHub className={styles.headerIcon} />
          </a>
          <a href="https://www.linkedin.com/in/imarotte/" target="_blank" rel="noreferrer">
            <IconLinkedIn className={styles.headerIcon} />
          </a>
          <a href={strMailTo} target="_blank" rel="noreferrer">
            <IconEmail className={styles.headerIcon} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default header;

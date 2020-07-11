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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import React from 'react';
import PropTypes from 'prop-types';

const iconGitHub = (props) => (
  <FontAwesomeIcon icon={faGithubSquare} {...props} />
);

iconGitHub.propTypes = {
  className: PropTypes.string
};

iconGitHub.defaultProps = {
  className: ''
};

export default iconGitHub;

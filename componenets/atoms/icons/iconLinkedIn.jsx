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
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import React from 'react';
import PropTypes from 'prop-types';

const iconLinkedIn = (props) => (
  <FontAwesomeIcon icon={faLinkedin} {...props} />
);

iconLinkedIn.propTypes = {
  className: PropTypes.string
};

iconLinkedIn.defaultProps = {
  className: ''
};

export default iconLinkedIn;

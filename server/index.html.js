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

/* eslint-disable max-len */
/**
 *
 * @param hostURL
 * @return {string}
 */
export default (hostURL) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Sample App with JavaScript, HTML5, SCSS, React, Webpack & babel">
    <meta name="author" content="Isaac Marotte (imarotte@gmail.com)">
    <meta name="viewport" content='width=device-width, initial-scale=1, shrink-to-fit=no'>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800" rel="stylesheet">
    <link rel="stylesheet" href="http://${hostURL}/lib/client.styles.css" type="text/css" />
    <title>Sample ToDo App</title>
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
<script src="http://${hostURL}/lib/client.bundle.js"></script>
</body>
</html>
`;
};

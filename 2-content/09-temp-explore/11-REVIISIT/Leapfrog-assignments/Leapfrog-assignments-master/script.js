const createRow = ({ title, sourceCode, liveDemo, type }) => `
  <tr>
    <td>${title}</td>
    <td><a href='${sourceCode}' target='_blank'>Hosted on GitHub</a></td>
    <td><a href='${liveDemo}' target='_blank'>Click Here</a></td>
    <td><i class='fab fa-${type}'></i></td>
  </tr>
`;

let string = '';

data.forEach((row) => {
  string += createRow(row);
});

document.querySelector('tbody').innerHTML = string;

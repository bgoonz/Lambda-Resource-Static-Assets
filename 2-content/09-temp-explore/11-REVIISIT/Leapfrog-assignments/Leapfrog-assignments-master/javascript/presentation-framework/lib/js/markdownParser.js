/**
 * @param {String} text
 * @returns {String}
 * A function that takes in a markdown as arugment
 * and returns the corresponding HTML
 */

function parseMarkdown(text) {
  const trimmedText = text
    .split('\n')
    .map((str) => str.trim())
    .join('\n');

  const html = trimmedText
    .replace(/^###(.*$)/gim, '<h3>$1</h3>')
    .replace(/^##(.*$)/gim, '<h2>$1</h2>')
    .replace(/^#(.*$)/gim, '<h1>$1</h1>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
    .replace(/\*(.*)\*/gim, '<i>$1</i>')
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2' target='_blank'>$1</a>")
    .replace(/\s\n$/gim, '<br />');

  return html;
}

import { modifier } from 'ember-modifier';

export default modifier(function highlightText(
  element,
  params,
  { highlightClass = 'emphasize-status', highlightTag = 'span' }
) {
  params.forEach((substring) => {
    // Find case-insensitive matches for the substring
    let matches = element.innerHTML.match(new RegExp(substring, 'gi'));

    if (matches) {
      matches.uniq().forEach((match) => {
        // Create a new element for each case variant
        let newElement = document.createElement(highlightTag);
        newElement.innerHTML = match;
        newElement.classList.add(highlightClass);

        // Case-sensitive replacement of the original content with the new element's content
        let newContent = element.innerHTML.replace(new RegExp(match, 'g'), newElement.outerHTML);
        element.innerHTML = newContent;
      });
    }
  });
});

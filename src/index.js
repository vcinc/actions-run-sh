const english = 'english';
const korean = 'korean';

function getIETFLangTag(language) {
  switch (language) {
    case english:
      return 'en';
    case korean:
      return 'ko';
    default:
      return 'invalid';
  }
}
module.exports = getIETFLangTag;

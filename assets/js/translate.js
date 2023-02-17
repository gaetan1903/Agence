/**
 * Function to initialize the google translate element
 */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'fr', autoDisplay: false, includedLanguages: 'fr,en,es,it,de,mg' }, 'google_translate_element');
}

/**
 * Function to translate the page
 * @param {String} lang
 * @param {String} code
*/
function translatePage(lang, code) {
    googleTranslateElementInit();
    var $iframe = $("iframe.skiptranslate");
    if ($iframe.length) {
        $iframe.contents().find("span.text:contains('" + lang + "')").click();
    } else {
        window.location = window.location.href + "#googtrans(fr|" + code + ")";
        window.location.reload();
    }
}

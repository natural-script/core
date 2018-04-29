window.notFoundPageInit = function () {
    if ($(`page#page_not_found`).length == 0) {
        $('contents').append('<page id="page_not_found" style="display: none;"></page>');
        $('page#page_not_found').append(`<audio controls autoplay loop hidden="hidden">
        <source src="http://s0.vocaroo.com/media/download_temp/Vocaroo_s0Jz5C4gpgE0.mp3" type="audio/ogg">
    </audio>
    <div>
        <div class="error">
            <p class="p">4</p>
            <span class="dracula">
                <div class="con">
                    <div class="hair"></div>
                    <div class="hair-r"></div>
                    <div class="head"></div>
                    <div class="eye"></div>
                    <div class="eye eye-r"></div>
                    <div class="mouth"></div>
                    <div class="blod"></div>
                    <div class="blod blod2"></div>
                </div>
            </span>
            <p class="p">4</p>
            <div class="page-ms">
                <p class="page-msg"> Oops, the page you're looking for Disappeared </p>
                <button class="go-back" onclick="window.changePage('${wordsTranslationsDB.Words.indexPage[document.langCode][0]}');window.setURLParameter('page', '${wordsTranslationsDB.Words.indexPage[document.langCode][0]}');">Go Back To The Home Page</button>
            </div>
        </div>
    </div>`);
    }
}
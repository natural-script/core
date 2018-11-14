import React from 'react'
import ReactDOM from 'react-dom'
import {changePage} from 'core/pageChange'
import setURLParameter from 'core/URLParamsSet'
import * as declarations from 'core/declarations'
export default function init404Page() {
    const goBack = () => {
        changePage(wordsTranslationsDB.Words.indexPage[declarations.langCode][0])
        setURLParameter('page', wordsTranslationsDB.Words.indexPage[declarations.langCode][0])
    }
    if ($(`page#page_not_found`).length == 0) {
        $('contents').append('<page id="page_not_found" style="display: none;"></page>')
        ReactDOM.render(
            <div>
                <div className="error">
                    <p className="p">4</p>
                    <span className="dracula">
                        <div className="con">
                            <div className="hair"></div>
                            <div className="hair-r"></div>
                            <div className="head"></div>
                            <div className="eye"></div>
                            <div className="eye eye-r"></div>
                            <div className="mouth"></div>
                            <div className="blod"></div>
                            <div className="blod blod2"></div>
                        </div>
                    </span>
                    <p className="p">4</p>
                    <div className="page-ms">
                        <p className="page-msg">
                            Oops, the page you're looking for Disappeared
                        </p>
                        <button className="go-back" onClick={goBack}>Go Back To The Home Page</button>
                    </div>
                </div>
            </div>, document.getElementById('page_not_found'))
    }
}
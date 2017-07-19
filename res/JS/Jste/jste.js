//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Declaring Some Variables------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var lang;
var corsPolicy = 'https://cors-anywhere.herokuapp.com/';
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------Script Initialization------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var code = "jQuery(document).ready(function ($) { var ";
if ($('en-uk').length) {
    $('en-uk').hide();
    lang = 0;
    code += "add = $('body');" + $('en-uk').html();
    $('en-uk').remove();
} else if ($('en-us').length) {
    $('en-us').hide();
    lang = 1;
    code += "add = $('body');" + $('en-us').html();
    $('en-us').remove();
} else if ($('fr-fr').length) {
    $('fr-fr').hide();
    lang = 2;
    code += "ajouter = $('body');" + $('fr-fr').html();
    $('fr-fr').remove();
} else if ($('ar-ar').length) {
    $('ar-ar').hide();
    $('html').attr('dir', 'rtl').attr('lang', 'ar');
    lang = 3;
    code += "اضف = $('body');" + $('ar-ar').html();
    $('ar-ar').remove();
} else if ($('ar-eg').length) {
    $('ar-eg').hide();
    $('html').attr('dir', 'rtl').attr('lang', 'ar');
    lang = 4;
    code += "ضيف = $('body');" + $('ar-eg').html();
    $('ar-eg').remove();
} else if ($('jp-jp').length) {
    $('jp-jp').hide();
    lang = 5;
    code += "追加する = $('body');" + $('ja-ja').html();
    $('ja-ja').remove();
}
code += "});";
$(function () {
    $('<script>').attr('type', 'text/javascript').text(code).appendTo('head');
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------Requesting The Files Sizes------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function getFileSize(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", corsPolicy + url, true); // Notice "HEAD" instead of "GET",
    //  to get only the header
    xhr.onreadystatechange = function () {
        if (this.readyState == this.DONE) {
            size = parseInt(xhr.getResponseHeader("Content-Length"));
            if (size < 1000) {
                callback(size + ' Bytes');
            } else if (size < 1000000) {
                callback(Math.round(size / 1000 * 10) / 10 + ' kb');
            } else if (size < 1000000000) {
                callback(Math.round(size / 1000000 * 10) / 10 + ' mb');
            } else if (size < 1000000000000) {
                callback(Math.round(size / 1000000000 * 10) / 10 + ' gb');
            }
        }
    };
    xhr.send();
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Images Related Functions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function showImageA(name, source) {
    var nudity = $('#' + name + '').attr('nude');
    if (typeof nudity !== typeof undefined && nudity !== false) {
        $('#showImage_' + name + '_containerA').fadeOut();
        $('#showImage_' + name + '_containerB').fadeIn();
    } else {
        $('#' + name + '').attr('src', corsPolicy + source);
        $('#' + name + '').on('load', function () {
            $('#' + name + '').css('-webkit-filter', 'blur(0px)');
            $('#showImage_' + name + '_containerA').fadeOut();
        });
    }
}

function showImageB(name, source) {
    $('#' + name + '').attr('src', corsPolicy + source);
    $('#' + name + '').on('load', function () {
        $('#showImage_' + name + '_containerB').fadeOut();
        $('#showImage_' + name + '_containerC').fadeIn();
    });
}

function showImageC(name, source) {
    $('#' + name + '').attr('src', corsPolicy + source);
    $('#' + name + '').on('load', function () {
        $('#' + name + '').css('-webkit-filter', 'blur(0px)');
        $('#showImage_' + name + '_containerB').fadeOut();
    });
}

function showImageD(name) {
    $('#' + name + '').css('-webkit-filter', 'blur(0px)');
    $('#showImage_' + name + '_containerC').fadeOut();
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Videos Related Functions------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function showVideoA(name, source) {
    $('#' + name + '').attr('src', source);
    var v = document.getElementById(name);
}

function showVideoB(name) {
    $('#' + name + '').css('-webkit-filter', 'blur(0px)');
    $('#showVideo_' + name + '_containerB').fadeOut();
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------Properties Translations------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var yesTranslations = ['yes', 'yup', 'oui', 'نعم', 'ايوة', 'はい'];
var noTranslations = ['no', 'nope', 'non', 'لا', 'لأ', 'いいえ'];
var blackTranslations = ['black', 'black', 'noir', 'اسود', 'اسود', '黒'];
var redTranslations = ['red', 'red', 'rouge', 'احمر', 'احمر', '赤'];
var blueTranslations = ['blue', 'blue', 'bleu', 'ازرق', 'ازرق', '青'];
var cyanTranslations = ['cyan', 'cyan', 'cyan', 'سماوى', 'لبنى', 'シアン'];
var grayTranslations = ['gray', 'gray', 'gris', 'رصاصى', 'فرانى', 'グレー'];
var greenTranslations = ['green', 'green', 'vert', 'اخضر', 'اخضر', '緑'];
var whiteTranslations = ['white', 'white', 'blanc', 'ابيض', 'ابيض', '白'];
var orangeTranslations = ['orange', 'orange', 'orange', 'برتقالى', 'برتقانى', 'オレンジ'];
var yellowTranslations = ['yellow', 'yellow', 'jaune', 'اصفر', 'اصفر', '黄'];
var brownTranslations = ['brown', 'brown', 'marron', 'بنى', 'بنى', '褐色', '棕色', '棕色'];
var tealTranslations = ['teal', 'teal', 'sarcelle', 'تركواز', 'تركواز', 'ティール'];
var pinkTranslations = ['pink', 'pink', 'rose', 'زهرى', 'بمبى', 'ピンク'];
var lightGreenTranslations = ['light green', 'light green', 'Vert clair', 'اخضر فاتح', 'اخضر فاتح', 'ライトグリーン'];
var colorTranslations = ['colour', 'color', 'couleur', 'اللون', 'اللون', 'カラー'];
var pinTranslations = ['pin', 'pin', 'épingle', 'دبوس', 'دبوس', 'ピン'];
var animationTranslations = ['aniamtion', 'aniamtion', 'animation', 'الحركة', 'الحركة', 'アニメーション'];
var commandsTranslations = ['commands', 'commands', 'commandes', 'الأوامر', 'الأوامر', 'コマンド'];
var sliderTranslations = ['slider', 'slider', 'curseur', 'منزلق', 'منزلق', 'スライダー'];
var buttonTranslations = ['button', 'button', 'curseur', 'زر', 'زرار', 'ボタン'];
var FABTranslations = ['FAB', 'FAB', 'épingle', 'دبوس', 'دبوس', 'ピン'];
var colorsPaletteTranslations = ['colours_palette', 'colors_palette', 'palette_de_couleurs', 'لوحة_الوان', 'بلتة_الوان', 'カラーパレット'];
var textFnTranslations = ['text0', 'text0', 'texte', 'نص', 'كلام', 'テキスト'];
var buttonWithAnIconTranslations = ['button_with_an_icon', 'button_with_an_icon', 'bouton_avec_icône', 'زر_بأيقونة', 'زرار_بأيكونة', 'アイコン付きボタン'];
var iconTranslations = ['icon', 'icon', 'icône', 'ايقونة', 'ايكونة', 'アイコン'];
var imageTranslations = ['image', 'image', 'image', 'صورة', 'صورة', 'ピクチャー'];
var videoTranslations = ['video', 'video', 'vidéo', 'فيديو', 'فيديو', 'ビデオ'];
var audioTranslations = ['audio', 'audio', "l'audio", 'صوت', 'صوت', 'オーディオ'];
var textboxTranslations = ['text_box', 'text_box', 'champ_de_texte', 'صندوق_النص', 'مكان_الكتابة', 'テキストボックス'];
var sectionTranslations = ['section', 'section', 'section', 'دبوس', 'دبوس', 'セクション'];
var checkboxTranslations = ['checkbox', 'checkbox', 'case_à_cocher', 'دبوس', 'دبوس', 'チェックボックス'];
var spinnerTranslations = ['spinner', 'spinner', 'fileur', 'دوار', 'دوار', 'スピナー'];
var barTranslations = ['bar', 'bar', 'bar', 'شريط', 'شريط', 'バー'];
var loaderTranslations = ['loader', 'loader', 'chargeur', 'دبوس', 'دبوس', 'ローダ'];
var notificationCountTranslations = ['notification_count', 'notification_count', 'ىombre_de_notifications', 'عدد_الإشعارات', 'عدد_الإشعارات', '通知回数'];
var dialogBoxTranslations = ['dialog_box', 'dialog_box', 'épingle', 'دبوس', 'دبوس', 'ピン'];
var dropdownTranslations = ['dropdown_menu', 'dropdown_menu', 'menu_déroulant', 'دبوس', 'دبوس', 'ピン'];
var backgroundTranslations = ['background', 'background', 'contexte', 'الخلفية', 'الخلفية', 'ピン'];
var tooltipTranslations = ['tooltip', 'tooltip', 'info-bulle', 'الخلفية', 'الخلفية', 'ツールチップ'];
var textTranslations = ['text', 'text', 'texte', 'النص', 'الكلام', 'テキスト'];
var widthTranslations = ['width', 'width', 'largeur', 'العرض', 'العرض', '幅'];
var lengthTranslations = ['length', 'length', 'longueur', 'الطول', 'الطول', '長さ'];
var positionTranslations = ['position', 'position', 'position', 'المكان', 'المكان', 'ポジション'];
var distanceFromLeftTranslations = ['distance_from_the_left', 'distance_from_the_left', 'distance_à_partir_de_la_gauche', 'المسافة_من_الشمال', 'المسافة_من_الشمال', '左からの距離'];
var distanceFromRightTranslations = ['distance_from_the_right', 'distance_from_the_right', 'distance_à_partir_de_la_droit', 'المسافة_من_اليمين', 'المسافة_من_اللمين', '右からの距離'];
var distanceFromTopTranslations = ['distance_from_the_top', 'distance_from_the_top', 'distance_à_partir_de_le_haut', 'المسافة_من_أعلى', 'المسافة_من_فوق', '上からの距離'];
var distanceFromBottomTranslations = ['distance_from_the_bottom', 'distance_from_the_bottom', 'distance_à_partir_de_le_fond', 'المسافة_من_اسفل', 'المسافة_من_تحت', '底からの距離'];
var firebaseCenterTranslations = ['firebase_centre', 'firebase_center', 'emplacement_central', 'مركز_البيانات', 'مركز_البيانات', 'ピン'];
var usernameTranslations = ['username', 'username', "nom_d'utilisateur", 'اسم_المستخدم', 'اسم_المستخدم', 'ピン'];
var passwordTranslations = ['password', 'password', 'mot_de_passe', 'كلمة_المرور', 'كلمة_السر', 'ピン'];
var setupTranslations = ['setup', 'setup', 'installer', 'الإعدادات', 'الإعدادات', 'セットアップ'];
var logoTranslations = ['logo', 'logo', 'logo', 'الشعار', 'اللوجو', 'ロゴ'];
var titleTranslations = ['title', 'title', 'titre', 'العنوان', 'العنوان', 'タイトル'];
var modeTranslations = ['mode', 'mode', 'mode', 'الوضعية', 'المود', 'モード'];
var pageTranslations = ['page', 'page', 'page', 'صفحة', 'صفحة', 'ページ'];
var nameTranslations = ['name', 'name', 'prénom', 'الاسم', 'الاسم', '名'];
var transparencyTranslations = ['transparency', 'transparency', 'transparence', 'الشفافية', 'الشفافية', '透明性'];
var fontSizeTranslations = ['font_size', 'font_size', 'taille_de_la_police', 'حجم_الخط', 'حجم_الخط', 'フォントサイズ'];
var thicknessTranslations = ['thickness', 'thickness', 'épaisseur', 'السمك', 'الطخن', '厚さ'];
var switchedTranslations = ['switched', 'switched', 'commuté', 'مفتوح', 'مفتوح', 'スイッチされる'];
var raisedTranslations = ['raised', 'raised', 'élevé', 'مرفوع', 'مرفوع', '育てられる'];
var disabledTranslations = ['disabled', 'disabled', 'désactivée', 'معطل', 'مقفول', '無効'];
var fontStyleTranslations = ['font_style', 'font_style', 'le_style_de_police', 'شكل_الخط', 'شكل_الخط', 'フォントスタイル'];
var fontColorTranslations = ['font_colour', 'font_color', 'couleur_de_la_police', 'لون_الخط', 'لون_الخط', 'フォントの色'];
var bodyTranslations = ['body', 'body', 'corps', 'جسم', 'جسم', '体'];
var rippleTranslations = ['ripple', 'ripple', 'ondulation', 'تموج', 'تموج', '波紋'];
var minTranslations = ['min', 'min', 'min', 'الحد_الأدنى', 'الحد_الأدنى', '最小'];
var maxTranslations = ['max', 'max', 'max', 'الحد_الأقصى', 'الحد_الأقصى', '最大'];
var requirementTranslations = ['requirement', 'requirement', 'exigence', 'المطلوب', 'المطلوب', '要件'];
var typeTranslations = ['type', 'type', 'type', 'النوع', 'النوع', 'タイプ'];
var dynamicSizeTranslations = ['dynamic_size', 'dynamic_size', 'taille_dynamique', 'مقاس_متغير', 'مقاس_متغير', '動的なサイズ'];
var clearButtonTranslations = ['clear_button', 'clear_button', 'bouton_de_suppression', 'زر_الحذف', 'زرار_المسح', '削除ボタン'];
var suffixTranslations = ['suffix', 'suffix', 'suffixe', 'النهاية', 'النهاية', 'サフィックス'];
var prefixTranslations = ['prefix', 'prefix', 'préfixe', 'البداية', 'البداية', 'プレフィックス'];
var stepTranslations = ['step', 'step', 'étape', 'الخطوة', 'الخطوة', 'ステップ'];
var progressTranslations = ['progress', 'progress', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン'];
var valueBoxTranslations = ['value_box', 'value_box', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン'];
var iconColorTranslations = ['icon_colour', 'icon_color', "couleur_de_l'icône", 'لون_الأيقونة', 'لون_الأيكونة', 'アイコンの色'];
var imageSourceTranslations = ['image_source', 'image_source', "source_de_image", 'مصدر_الصورة', 'مصدر_الصورة', 'イメージソース'];
var FXTranslations = ['FX', 'FX', 'FX', 'FX', 'FX', 'FX'];
var emitterTranslations = ['emitter', 'emitter', 'émetteur', 'باعث', 'باعث', 'エミッタ'];
var directionTranslations = ['direction', 'direction', 'direction', 'الإتجاه', 'الإتجاه', '方向'];
var loadingTranslations = ['loading', 'loading', 'chargement', 'يحمل', 'بيحمل', '読み込み中'];
var imageWidthTranslations = ['image_width', 'image_width', "largeur de l'image", 'عرض_الصورة', 'عرض_الصورة', '画像の幅'];
var imageLengthTranslations = ['image_length', 'image_length', "longueur de l'image", 'طول_الصورة', 'طول_الصورة', '画像の長さ'];
var sourceTranslations = ['source', 'source', "la_source", 'المصدر', 'المصدر', 'ソース'];
var itemsTranslations = ['items', 'items', "articles", 'العناصر', 'العناصر', 'アイテム'];
var descriptionTranslations = ['description', 'description', "la_description", 'الوصف', 'الوصف', '説明'];
var privateTranslations = ['private', 'private', "privé", 'خاص', 'خاص', 'プライベート'];
var loginFormTranslations = ['login_form', 'login_form', "formulaire_de_connexion", 'خاص', 'فورم_الدخول', 'ログインフォーム'];
var targetTranslations = ['target', 'target', "cible", 'الهدف', 'الهدف', 'ターゲット'];
var containerTranslations = ['container', 'container', "récipient", 'حاوية', 'طبق', 'コンテナ'];
var shapeTranslations = ['shape', 'shape', "forme", 'الشكل', 'الشكل', '形状'];
var triangleTranslations = ['triangle', 'triangle', "triangle", 'مثلث', 'مثلث', '三角形'];
var trapezoidTranslations = ['trapezoid', 'trapezoid', "trapézoïdal", 'شبه_منحرف', 'شبه_منحرف', '台形'];
var parallelogramTranslations = ['parallelogram', 'parallelogram', "parallélogramme", 'متوازى_الأضلاع', 'متوازى_الأضلاع', '平行四辺形'];
var rhombusTranslations = ['rhombus', 'rhombus', "rhombe", 'معين', 'معين', '菱形'];
var pentagonTranslations = ['pentagon', 'pentagon', "pentagone", 'خماسى_الأضلاع', 'خماسى_الأضلاع', '五角形'];
var hexagonTranslations = ['hexagon', 'hexagon', "hexagone", 'سداسى_الأضلاع', 'سداسى_الأضلاع', '六角形'];
var heptagonTranslations = ['heptagon', 'heptagon', "heptagone", 'سباعى_الأضلاع', 'سباعى_الأضلاع', 'ヘプタゴン'];
var octagonTranslations = ['octagon', 'octagon', "octagone", 'ثمانى_الأضلاع', 'ثمانى_الأضلاع', '八角形'];
var decagonTranslations = ['decagon', 'decagon', "décagone", 'معشر_الأضلاع', 'معشر_الأضلاع', 'デカゴン'];
var circleranslations = ['circle', 'circle', "cercle", 'دائرة', 'دايرة', 'サークル'];
var ellipseTranslations = ['ellipse', 'ellipse', "ellipse", 'بيضاوى', 'بيضاوى', '楕円'];
var fromTheRightTranslations = ['from_the_right', 'from_the_right', "à_partir_de_la_droite", 'من_اليمين', 'من_اللمين', '右から'];
var fromTheLeftTranslations = ['from_the_left', 'from_the_left', "à_partir_de_la_gauche", 'من_الشمال', 'من_الشمال', '左から'];
var fromTheTopTranslations = ['from_the_top', 'from_the_top', "à_partir_de_le_haut", 'من_فوق', 'من_فوق', '上から'];
var fromTheBottomTranslations = ['from_the_bottom', 'from_the_bottom', "à_partir_de_le_fond", 'من_أسفل', 'من_أسفل', '下から'];
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------Commands Translations------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function commandsFnTranslations(commandCode, commandValue, para1, para2, para3, para4) {
    if (lang == 0) {
        var E1 = 'When it has been clicked, ';
        var E2 = 'When the mouse pointer has been moved over it, ';
        var E3 = 'When the mouse pointer has been moved away from it, ';
        var E4 = 'When the mouse pointer is being moved out of it, ';
        var E5 = 'When the mouse pointer is being moved over it, ';
        var E6 = 'When it is no longer clicked, ';
        var E7 = 'When it has been double clicked, ';
        var E8 = 'When it has been right clicked, ';
        var E9 = 'When a key has been pressed while focusing it, ';
        var E10 = 'When a key is being pressed while focusing it, ';
        var E11 = 'When its contents have been modified, ';
        var E12 = 'When it has been focused, ';
        var E13 = 'When it is being focused, ';
        var E14 = 'When it is no longer focused, ';
        var E15 = 'When the data of this form has been sent, ';
        var E16 = 'When it has been scrolled, ';
    } else if (lang == 1) {
        var E1 = 'When it has been clicked, ';
        var E2 = 'When the mouse pointer has been moved over it, ';
        var E3 = 'When the mouse pointer has been moved away from it, ';
        var E4 = 'When the mouse pointer is being moved out of it, ';
        var E5 = 'When the mouse pointer is being moved over it, ';
        var E6 = 'When it is no longer clicked, ';
        var E7 = 'When it has been double clicked, ';
        var E8 = 'When it has been right clicked, ';
        var E9 = 'When a key has been pressed while focusing it, ';
        var E10 = 'When a key is being pressed while focusing it, ';
        var E11 = 'When its contents have been modified, ';
        var E12 = 'When it has been focused, ';
        var E13 = 'When it is being focused, ';
        var E14 = 'When it is no longer focused, ';
        var E15 = 'When the data of this form has been sent, ';
        var E16 = 'When it has been scrolled, ';
    } else if (lang == 2) {
        var E1 = 'Quand il a été cliqué, ';
        var E2 = "Lorsque le pointeur de souris a été déplacé au dessus, ";
        var E3 = "Lorsque le pointeur de la souris s'a été éloigné de lui, ";
        var E4 = "Lorsque le pointeur de la souris se est en train d'être déplace hors de lui, ";
        var E5 = 'Lorsque le pointeur de la souris se déplace au dessus, ';
        var E6 = "Quand il n'est plus fait cliqué, ";
        var E7 = 'Quand il a été double-cliqué, ';
        var E8 = 'Quand il a été droit-cliqué, ';
        var E9 = "Lorsqu'une touche a été pressée tout en la focalisant, ";
        var E10 = "Lorsqu'une touche est en train d'être pressée tout en la focalisant, ";
        var E11 = 'Lorsque son contenu a été modifié, ';
        var E12 = "Lorsqu'on a été focalisé, ";
        var E13 = "Quand il est en train d'être focalisé, ";
        var E14 = 'Quand il a dormi, ';
        var E15 = 'Lorsque les données de ce formulaire ont été envoyées, ';
        var E16 = "Lorsqu'il s'a été déroulé, ";
    } else if (lang == 3) {
        var E1 = 'إذا نقر عليه, ';
        var E2 = 'إذا مر به مؤشر الفأرة, ';
        var E3 = 'إذا خرج مؤشر الفأرة منه, ';
        var E4 = 'إذا كان مؤشر الفأرة يمر خارجه, ';
        var E5 = 'إذا كان مؤشر الفأرة يمر به, ';
        var E6 = 'إذا تم الإنتهاء من النقر عليه, ';
        var E7 = 'إذا نقر عليه نقرتين مزدوجتين, ';
        var E8 = 'إذا نقر عليه بالزر الأيمن,';
        var E9 = 'إذا ضغط على زر اثناء نشاطه, ';
        var E10 = 'إذا كان هناك زر يتم الضغط عليه اثناء نشاطه, ';
        var E11 = 'إذا تغيرت محتوياته, ';
        var E12 = 'إن أصبح نشطا, ';
        var E13 = 'إذا كان نشطا, ';
        var E14 = 'إن أصبح خاملا, ';
        var E15 = 'إذا ارسلت بيانات هذه الإستمارة, ';
        var E16 = 'إن تم تمريره, ';
    } else if (lang == 4) {
        var E1 = 'لما يضغط عليه, ';
        var E2 = 'لما الماوس يعدى من فوقيه, ';
        var E3 = 'لما الماوس يطلع منه, ';
        var E4 = 'لما الماوس يكون بيمشى براه, ';
        var E5 = 'لما الماوس يكون بيمشى فوقيه, ';
        var E6 = 'لما يخلص الدوس عليه, ';
        var E7 = 'لما يضغط عليه دبل كليك, ';
        var E8 = 'لما يضغط عليك كليك لمين, ';
        var E9 = 'لو زرار اضغط و هوة نشط, ';
        var E10 = 'لما زرار يكون بيضغط و هوة نشط, ';
        var E11 = 'لما محتوياته تتغير, ';
        var E12 = 'لما يبقى نشط, ';
        var E13 = 'لما يكون نشط, ';
        var E14 = 'لما ينام, ';
        var E15 = 'لما الداتا بتاعت الفورم دة تتبعت, ';
        var E16 = 'لما يتمرر, ';
    } else if (lang == 5) {
        var E1 = 'それがクリックされた場合には、 ';
        var E2 = 'マウスポインタがその上に移動されると、 ';
        var E3 = 'マウスポインタがそれを離れると、 ';
        var E4 = 'When the mouse pointer is being moved out of it, ';
        var E5 = 'When the mouse pointer is being moved over it, ';
        var E6 = 'それがもはやクリックされないと、 ';
        var E7 = 'それがダブルクリックされたときに、 ';
        var E8 = 'それが右クリックされたときに、 ';
        var E9 = 'When a key pressed while focusing it, ';
        var E10 = 'When a key is being pressed while focusing it, ';
        var E11 = 'その内容が変更されたとき、';
        var E12 = 'それがフォーカスされたときに、 ';
        var E13 = 'When it is being focused, ';
        var E14 = 'When it is no longer focused, ';
        var E15 = 'この形式のデータが送られたときに、 ';
        var E16 = 'それがスクロールされると、';
    }
    if (commandCode == 'c1A') {
        if (lang == 0) {
            return commandValue.split(E1);
        } else if (lang == 1) {
            return commandValue.split(E1);
        } else if (lang == 2) {
            return commandValue.split(E1);
        } else if (lang == 3) {
            return commandValue.split(E1);
        } else if (lang == 4) {
            return commandValue.split(E1);
        } else if (lang == 5) {
            return commandValue.split(E1);
        }
    } else if (commandCode == 'c1B') {
        if (lang == 0) {
            return commandValue.split(E2);
        } else if (lang == 1) {
            return commandValue.split(E2);
        } else if (lang == 2) {
            return commandValue.split(E2);
        } else if (lang == 3) {
            return commandValue.split(E2);
        } else if (lang == 4) {
            return commandValue.split(E2);
        } else if (lang == 5) {
            return commandValue.split(E2);
        }
    } else if (commandCode == 'c1C') {
        if (lang == 0) {
            return commandValue.split(E3);
        } else if (lang == 1) {
            return commandValue.split(E3);
        } else if (lang == 2) {
            return commandValue.split(E3);
        } else if (lang == 3) {
            return commandValue.split(E3);
        } else if (lang == 4) {
            return commandValue.split(E3);
        } else if (lang == 5) {
            return commandValue.split(E3);
        }
    } else if (commandCode == 'c1D') {
        if (lang == 0) {
            return commandValue.split(E4);
        } else if (lang == 1) {
            return commandValue.split(E4);
        } else if (lang == 2) {
            return commandValue.split(E4);
        } else if (lang == 3) {
            return commandValue.split(E4);
        } else if (lang == 4) {
            return commandValue.split(E4);
        } else if (lang == 5) {
            return commandValue.split(E4);
        }
    } else if (commandCode == 'c1E') {
        if (lang == 0) {
            return commandValue.split(E5);
        } else if (lang == 1) {
            return commandValue.split(E5);
        } else if (lang == 2) {
            return commandValue.split(E5);
        } else if (lang == 3) {
            return commandValue.split(E5);
        } else if (lang == 4) {
            return commandValue.split(E5);
        } else if (lang == 5) {
            return commandValue.split(E5);
        }
    } else if (commandCode == 'c1F') {
        if (lang == 0) {
            return commandValue.split(E6);
        } else if (lang == 1) {
            return commandValue.split(E6);
        } else if (lang == 2) {
            return commandValue.split(E6);
        } else if (lang == 3) {
            return commandValue.split(E6);
        } else if (lang == 4) {
            return commandValue.split(E6);
        } else if (lang == 5) {
            return commandValue.split(E6);
        }
    } else if (commandCode == 'c1G') {
        if (lang == 0) {
            return commandValue.split(E7);
        } else if (lang == 1) {
            return commandValue.split(E7);
        } else if (lang == 2) {
            return commandValue.split(E7);
        } else if (lang == 3) {
            return commandValue.split(E7);
        } else if (lang == 4) {
            return commandValue.split(E7);
        } else if (lang == 5) {
            return commandValue.split(E7);
        }
    } else if (commandCode == 'c1H') {
        if (lang == 0) {
            return commandValue.split(E8);
        } else if (lang == 1) {
            return commandValue.split(E8);
        } else if (lang == 2) {
            return commandValue.split(E8);
        } else if (lang == 3) {
            return commandValue.split(E8);
        } else if (lang == 4) {
            return commandValue.split(E8);
        } else if (lang == 5) {
            return commandValue.split(E8);
        }
    } else if (commandCode == 'c1I') {
        if (lang == 0) {
            return commandValue.split(E9);
        } else if (lang == 1) {
            return commandValue.split(E9);
        } else if (lang == 2) {
            return commandValue.split(E9);
        } else if (lang == 3) {
            return commandValue.split(E9);
        } else if (lang == 4) {
            return commandValue.split(E9);
        } else if (lang == 5) {
            return commandValue.split(E9);
        }
    } else if (commandCode == 'c1J') {
        if (lang == 0) {
            return commandValue.split(E10);
        } else if (lang == 1) {
            return commandValue.split(E10);
        } else if (lang == 2) {
            return commandValue.split(E10);
        } else if (lang == 3) {
            return commandValue.split(E10);
        } else if (lang == 4) {
            return commandValue.split(E10);
        } else if (lang == 5) {
            return commandValue.split(E10);
        }
    } else if (commandCode == 'c1K') {
        if (lang == 0) {
            return commandValue.split(E11);
        } else if (lang == 1) {
            return commandValue.split(E11);
        } else if (lang == 2) {
            return commandValue.split(E11);
        } else if (lang == 3) {
            return commandValue.split(E11);
        } else if (lang == 4) {
            return commandValue.split(E11);
        } else if (lang == 5) {
            return commandValue.split(E11);
        }
    } else if (commandCode == 'c1L') {
        if (lang == 0) {
            return commandValue.split(E12);
        } else if (lang == 1) {
            return commandValue.split(E12);
        } else if (lang == 2) {
            return commandValue.split(E12);
        } else if (lang == 3) {
            return commandValue.split(E12);
        } else if (lang == 4) {
            return commandValue.split(E12);
        } else if (lang == 5) {
            return commandValue.split(E12);
        }
    } else if (commandCode == 'c1M') {
        if (lang == 0) {
            return commandValue.split(E13);
        } else if (lang == 1) {
            return commandValue.split(E13);
        } else if (lang == 2) {
            return commandValue.split(E13);
        } else if (lang == 3) {
            return commandValue.split(E13);
        } else if (lang == 4) {
            return commandValue.split(E13);
        } else if (lang == 5) {
            return commandValue.split(E13);
        }
    } else if (commandCode == 'c1N') {
        if (lang == 0) {
            return commandValue.split(E14);
        } else if (lang == 1) {
            return commandValue.split(E14);
        } else if (lang == 2) {
            return commandValue.split(E14);
        } else if (lang == 3) {
            return commandValue.split(E14);
        } else if (lang == 4) {
            return commandValue.split(E14);
        } else if (lang == 5) {
            return commandValue.split(E14);
        }
    } else if (commandCode == 'c1O') {
        if (lang == 0) {
            return commandValue.split(E15);
        } else if (lang == 1) {
            return commandValue.split(E15);
        } else if (lang == 2) {
            return commandValue.split(E15);
        } else if (lang == 3) {
            return commandValue.split(E15);
        } else if (lang == 4) {
            return commandValue.split(E15);
        } else if (lang == 5) {
            return commandValue.split(E15);
        }
    } else if (commandCode == 'c1P') {
        if (lang == 0) {
            return commandValue.split(E16);
        } else if (lang == 1) {
            return commandValue.split(E16);
        } else if (lang == 2) {
            return commandValue.split(E16);
        } else if (lang == 3) {
            return commandValue.split(E16);
        } else if (lang == 4) {
            return commandValue.split(E16);
        } else if (lang == 5) {
            return commandValue.split(E16);
        }
    } else if (commandCode == 'c2qA') {
        if (lang == 0) {
            return commandValue.split(E1)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E1)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E1)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E1)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E1)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E1)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qB') {
        if (lang == 0) {
            return commandValue.split(E2)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E2)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E2)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E2)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E2)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E2)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qC') {
        if (lang == 0) {
            return commandValue.split(E3)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E3)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E3)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E3)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E3)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E3)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qD') {
        if (lang == 0) {
            return commandValue.split(E4)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E4)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E4)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E4)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E4)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E4)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qE') {
        if (lang == 0) {
            return commandValue.split(E5)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E5)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E5)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E5)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E5)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E5)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qF') {
        if (lang == 0) {
            return commandValue.split(E6)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E6)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E6)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E6)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E6)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E6)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qG') {
        if (lang == 0) {
            return commandValue.split(E7)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E7)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E7)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E7)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E7)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E7)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qH') {
        if (lang == 0) {
            return commandValue.split(E8)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E8)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E8)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E8)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E8)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E8)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qI') {
        if (lang == 0) {
            return commandValue.split(E9)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E9)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E9)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E9)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E9)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E9)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qJ') {
        if (lang == 0) {
            return commandValue.split(E10)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E10)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E10)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E10)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E10)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E10)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qK') {
        if (lang == 0) {
            return commandValue.split(E11)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E11)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E11)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E11)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E11)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E11)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qL') {
        if (lang == 0) {
            return commandValue.split(E12)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E12)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E12)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E12)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E12)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E12)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qM') {
        if (lang == 0) {
            return commandValue.split(E13)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E13)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E13)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E13)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E13)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E13)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qN') {
        if (lang == 0) {
            return commandValue.split(E14)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E14)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E14)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E14)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E14)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E14)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qO') {
        if (lang == 0) {
            return commandValue.split(E15)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E15)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E15)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E15)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E15)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E15)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qP') {
        if (lang == 0) {
            return commandValue.split(E16)[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split(E16)[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split(E16)[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split(E16)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 4) {
            return commandValue.split(E16)[1].split(' ')[0].split('ه')[0];
        } else if (lang == 5) {
            return commandValue.split(E16)[1].split(' ')[0];
        }
    } else if (commandCode == 'c2ruA') {
        if (lang == 0) {
            return 'remove';
        } else if (lang == 1) {
            return 'remove';
        } else if (lang == 2) {
            return 'supprimer';
        } else if (lang == 3) {
            return 'احذف';
        } else if (lang == 4) {
            return 'امسح';
        } else if (lang == 5) {
            return 'を削除';
        }
    } else if (commandCode == 'c2ruB') {
        if (lang == 0) {
            return 'play';
        } else if (lang == 1) {
            return 'play';
        } else if (lang == 2) {
            return 'lecture';
        } else if (lang == 3) {
            return 'شغل';
        } else if (lang == 4) {
            return 'شغل';
        } else if (lang == 5) {
            return 'lecture';
        }
    } else if (commandCode == 'c2ruC') {
        if (lang == 0) {
            return 'pause';
        } else if (lang == 1) {
            return 'pause';
        } else if (lang == 2) {
            return 'pause';
        } else if (lang == 3) {
            return 'أوقف';
        } else if (lang == 4) {
            return 'وقف';
        } else if (lang == 5) {
            return 'pause';
        }
    } else if (commandCode == 'c3q') {
        if (lang == 0) {
            return commandValue.split('remove ')[1];
        } else if (lang == 1) {
            return commandValue.split('remove ')[1];
        } else if (lang == 2) {
            return commandValue.split('supprimer ')[1];
        } else if (lang == 3) {
            return commandValue.split('احذف')[1].split('')[0];
        } else if (lang == 4) {
            return commandValue.split('امسح')[1].split('')[0];
        } else if (lang == 5) {
            return commandValue.split('supprimer ')[1];
        }
    } else if (commandCode == 'c3r') {
        if (lang == 0) {
            return 'it';
        } else if (lang == 1) {
            return 'it';
        } else if (lang == 2) {
            return 'il';
        } else if (lang == 3) {
            return 'ه';
        } else if (lang == 4) {
            return 'ه';
        } else if (lang == 5) {
            return 'それ';
        }
    } else if (commandCode == 'c4') {
        if (lang == 0) {
            return commandValue.split('remove ')[1];
        } else if (lang == 1) {
            return commandValue.split('remove ')[1];
        } else if (lang == 2) {
            return commandValue.split('supprimer ')[1];
        } else if (lang == 3) {
            return commandValue.split('احذف ')[1];
        } else if (lang == 4) {
            return commandValue.split('امسح ')[1];
        } else if (lang == 5) {
            return commandValue.split('を削除')[0].split('、 ')[1];
        }
    } else if (commandCode == 'c5qA') {
        if (lang == 0) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qB') {
        if (lang == 0) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qC') {
        if (lang == 0) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qD') {
        if (lang == 0) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qE') {
        if (lang == 0) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qF') {
        if (lang == 0) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qG') {
        if (lang == 0) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qH') {
        if (lang == 0) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qI') {
        if (lang == 0) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qJ') {
        if (lang == 0) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qK') {
        if (lang == 0) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qL') {
        if (lang == 0) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qM') {
        if (lang == 0) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qN') {
        if (lang == 0) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qO') {
        if (lang == 0) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qP') {
        if (lang == 0) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1];
        }
    } else if (commandCode == 'c5r') {
        if (lang == 0) {
            return 'redirect to';
        } else if (lang == 1) {
            return 'redirect to';
        } else if (lang == 2) {
            return 'rediriger vers';
        } else if (lang == 3) {
            return 'اذهب إلى';
        } else if (lang == 4) {
            return 'روح ل';
        } else if (lang == 5) {
            return 'にリダイレクトする';
        }
    } else if (commandCode == 'c6') {
        if (lang == 0) {
            return commandValue.split('redirect to ')[1];
        } else if (lang == 1) {
            return commandValue.split('redirect to ')[1];
        } else if (lang == 2) {
            return commandValue.split('rediriger vers ')[1];
        } else if (lang == 3) {
            return commandValue.split('اذهب إلى ')[1];
        } else if (lang == 4) {
            return commandValue.split(' روح ل')[1];
        } else if (lang == 5) {
            return commandValue.split('にリダイレクトする')[0].split('、 ')[1];
        }
    } else if (commandCode == 'c7') {
        if (lang == 0) {
            return commandValue.split('play ')[1];
        } else if (lang == 1) {
            return commandValue.split('play ')[1];
        } else if (lang == 2) {
            return commandValue.split('lecture ')[1];
        } else if (lang == 3) {
            return commandValue.split('شغل ')[1];
        } else if (lang == 4) {
            return commandValue.split('شغل ')[1];
        } else if (lang == 5) {
            return commandValue.split('を再生する')[0].split('、 ')[1];
        }
    } else if (commandCode == 'c8') {
        if (lang == 0) {
            return commandValue.split('pause ')[1];
        } else if (lang == 1) {
            return commandValue.split('pause ')[1];
        } else if (lang == 2) {
            return commandValue.split('pause ')[1];
        } else if (lang == 3) {
            return commandValue.split('أوقف ')[1];
        } else if (lang == 4) {
            return commandValue.split('وقف ')[1];
        } else if (lang == 5) {
            return commandValue.split('一時停止')[0].split('、 ')[1];
        }
    } else if (commandCode == 'c9qA') {
        if (lang == 0) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qB') {
        if (lang == 0) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qC') {
        if (lang == 0) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qD') {
        if (lang == 0) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qE') {
        if (lang == 0) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qF') {
        if (lang == 0) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qG') {
        if (lang == 0) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qH') {
        if (lang == 0) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qI') {
        if (lang == 0) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qJ') {
        if (lang == 0) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qK') {
        if (lang == 0) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qL') {
        if (lang == 0) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qM') {
        if (lang == 0) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qN') {
        if (lang == 0) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qO') {
        if (lang == 0) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qP') {
        if (lang == 0) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3];
        } else if (lang == 2) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3];
        } else if (lang == 3) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3];
        }
    } else if (commandCode == 'c9r') {
        if (lang == 0) {
            return 'set its value to';
        } else if (lang == 1) {
            return 'set its value to';
        } else if (lang == 2) {
            return 'définir sa valeur à';
        } else if (lang == 3) {
            return 'غير قيمته إلى';
        } else if (lang == 4) {
            return 'غير قيمته إلى';
        } else if (lang == 5) {
            return 'にその値を設定';
        }
    } else if (commandCode == 'c10q') {
        if (lang == 0) {
            return commandValue.split('set its value to ')[1].split(' ')[0] + ' ' + commandValue.split('set its value to ')[1].split(' ')[1] + ' ' + commandValue.split('set its value to ')[1].split(' ')[2];
        } else if (lang == 1) {
            return commandValue.split('set its value to ')[1].split(' ')[0] + ' ' + commandValue.split('set its value to ')[1].split(' ')[1] + ' ' + commandValue.split('set its value to ')[1].split(' ')[2];
        } else if (lang == 2) {
            return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
        } else if (lang == 3) {
            return commandValue.split('غير قيمته إلى ')[1].split(' ')[0];
        } else if (lang == 4) {
            return commandValue.split('غير قيمته إلى ')[1].split(' ')[0];
        } else if (lang == 5) {
            return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
        }
    } else if (commandCode == 'c10r') {
        if (lang == 0) {
            return 'the value of';
        } else if (lang == 1) {
            return 'the value of';
        } else if (lang == 2) {
            return 'la valeur de';
        } else if (lang == 3) {
            return 'قيمة';
        } else if (lang == 4) {
            return 'قيمة';
        } else if (lang == 5) {
            return 'の価値';
        }
    } else if (commandCode == 'c11') {
        if (lang == 0) {
            return commandValue.split('set its value to the value of ')[1];
        } else if (lang == 1) {
            return commandValue.split('set its value to the value of ')[1];
        } else if (lang == 2) {
            return commandValue.split('définir sa valeur à la valeur de ')[1];
        } else if (lang == 3) {
            return commandValue.split('غير قيمته إلى قيمة ')[1];
        } else if (lang == 4) {
            return commandValue.split('غير قيمته إلى قيمة ')[1];
        } else if (lang == 5) {
            return commandValue.split('définir sa valeur à la valeur de ')[1];
        }
    } else if (commandCode == 'c12') {
        if (lang == 0) {
            return commandValue.split('set its value to ')[1];
        } else if (lang == 1) {
            return commandValue.split('set its value to ')[1];
        } else if (lang == 2) {
            return commandValue.split('définir sa valeur à ')[1];
        } else if (lang == 3) {
            return commandValue.split('غير قيمته إلى ')[1];
        } else if (lang == 4) {
            return commandValue.split('غير قيمته إلى ')[1];
        } else if (lang == 5) {
            return commandValue.split('にその値を設定')[0].split('、 ')[1];
        }
    } else if (commandCode == 'c13qA') {
        if (lang == 0) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qB') {
        if (lang == 0) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qC') {
        if (lang == 0) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qD') {
        if (lang == 0) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qE') {
        if (lang == 0) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qF') {
        if (lang == 0) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qG') {
        if (lang == 0) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qH') {
        if (lang == 0) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qI') {
        if (lang == 0) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qJ') {
        if (lang == 0) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qK') {
        if (lang == 0) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qL') {
        if (lang == 0) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qM') {
        if (lang == 0) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qN') {
        if (lang == 0) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qO') {
        if (lang == 0) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qP') {
        if (lang == 0) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5];
        } else if (lang == 2) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5];
        } else if (lang == 3) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5];
        } else if (lang == 4) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5];
        } else if (lang == 5) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5];
        }
    } else if (commandCode == 'c13r') {
        if (lang == 0) {
            return 'set the value of to';
        } else if (lang == 1) {
            return 'set the value of to';
        } else if (lang == 2) {
            return 'définir la valeur de à';
        } else if (lang == 3) {
            return 'définir la valeur de à';
        } else if (lang == 4) {
            return 'définir la valeur de à';
        } else if (lang == 5) {
            return 'définir la valeur de à';
        }
    } else if (commandCode == 'c14') {
        if (lang == 0) {
            return commandValue.split('set the value of ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('set the value of ')[1].split(' ')[1];
        } else if (lang == 2) {
            return commandValue.split('définir la valeur de ')[1].split(' ')[1];
        } else if (lang == 3) {
            return commandValue.split('غير قيمة ')[1].split(' ')[1];
        } else if (lang == 4) {
            return commandValue.split('غير قيمة ')[1].split(' ')[1];
        } else if (lang == 5) {
            return commandValue.split('définir la valeur de ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c15') {
        if (lang == 0) {
            return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
        } else if (lang == 1) {
            return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
        } else if (lang == 2) {
            return commandValue.split('définir la valeur de ' + para1 + ' à ')[1];
        } else if (lang == 3) {
            return commandValue.split('غير قيمة ' + para1 + ' ألى ')[1];
        } else if (lang == 4) {
            return commandValue.split('غير قيمة ' + para1 + ' ل')[1];
        } else if (lang == 5) {
            return commandValue.split('définir la valeur de ' + para1 + ' à ')[1];
        }
    } else if (commandCode == 'c16q') {
        if (lang == 0) {
            return commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[2];
        } else if (lang == 1) {
            return commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[2];
        } else if (lang == 2) {
            return commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[2];
        } else if (lang == 3) {
            return commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[2];
        }
    } else if (commandCode == 'c16r') {
        if (lang == 0) {
            return 'the value of';
        } else if (lang == 1) {
            return 'the value of';
        } else if (lang == 2) {
            return 'la valeur de';
        } else if (lang == 3) {
            return 'قيمة';
        } else if (lang == 4) {
            return 'قيمة';
        } else if (lang == 5) {
            return 'la valeur de';
        }
    } else if (commandCode == 'c17') {
        if (lang == 0) {
            return commandValue.split('set the value of ' + para1 + ' to ')[1];
        } else if (lang == 1) {
            return commandValue.split('set the value of ' + para1 + ' to ')[1];
        } else if (lang == 2) {
            return commandValue.split('définir la valeur de ' + para1 + ' à ')[1];
        } else if (lang == 3) {
            return commandValue.split('غير قيمة ' + para1 + ' إلى')[1];
        } else if (lang == 4) {
            return commandValue.split('غير قيمة ' + para1 + ' ل')[1];
        } else if (lang == 5) {
            return commandValue.split('définir la valeur de ' + para1 + ' à ')[1];
        }
    } else if (commandCode == 'c18qA') {
        if (lang == 0) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[4] + ' ' + commandValue.split(E1)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[4] + ' ' + commandValue.split(E1)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[4] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[7];
        } else if (lang == 3) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[4] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[7];
        } else if (lang == 4) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[4] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[7];
        } else if (lang == 5) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[4] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[7];
        }
    } else if (commandCode == 'c18qB') {
        if (lang == 0) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[4] + ' ' + commandValue.split(E2)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[4] + ' ' + commandValue.split(E2)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[4] + ' ' + commandValue.split(E2)[1].split(' ')[6];
        } else if (lang == 3) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[4] + ' ' + commandValue.split(E2)[1].split(' ')[6];
        } else if (lang == 4) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[4] + ' ' + commandValue.split(E2)[1].split(' ')[6];
        } else if (lang == 5) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[4] + ' ' + commandValue.split(E2)[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qC') {
        if (lang == 0) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[4] + ' ' + commandValue.split(E3)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[4] + ' ' + commandValue.split(E3)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[4] + ' ' + commandValue.split(E3)[1].split(' ')[6];
        } else if (lang == 3) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[4] + ' ' + commandValue.split(E3)[1].split(' ')[6];
        } else if (lang == 4) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[4] + ' ' + commandValue.split(E3)[1].split(' ')[6];
        } else if (lang == 5) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[4] + ' ' + commandValue.split(E3)[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qD') {
        if (lang == 0) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[4] + ' ' + commandValue.split(E4)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[4] + ' ' + commandValue.split(E4)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[4] + ' ' + commandValue.split(E4)[1].split(' ')[6];
        } else if (lang == 3) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[4] + ' ' + commandValue.split(E4)[1].split(' ')[6];
        } else if (lang == 4) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[4] + ' ' + commandValue.split(E4)[1].split(' ')[6];
        } else if (lang == 5) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[4] + ' ' + commandValue.split(E4)[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qE') {
        if (lang == 0) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[4] + ' ' + commandValue.split(E5)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[4] + ' ' + commandValue.split(E5)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[4] + ' ' + commandValue.split(E5)[1].split(' ')[6];
        } else if (lang == 3) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[4] + ' ' + commandValue.split(E5)[1].split(' ')[6];
        } else if (lang == 4) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[4] + ' ' + commandValue.split(E5)[1].split(' ')[6];
        } else if (lang == 5) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[4] + ' ' + commandValue.split(E5)[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qF') {
        if (lang == 0) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[4] + ' ' + commandValue.split(E6)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[4] + ' ' + commandValue.split(E6)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[4] + ' ' + commandValue.split(E6)[1].split(' ')[6];
        } else if (lang == 3) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[4] + ' ' + commandValue.split(E6)[1].split(' ')[6];
        } else if (lang == 4) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[4] + ' ' + commandValue.split(E6)[1].split(' ')[6];
        } else if (lang == 5) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[4] + ' ' + commandValue.split(E6)[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qG') {
        if (lang == 0) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[4] + ' ' + commandValue.split(E7)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[4] + ' ' + commandValue.split(E7)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[4] + ' ' + commandValue.split(E7)[1].split(' ')[6];
        } else if (lang == 3) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[4] + ' ' + commandValue.split(E7)[1].split(' ')[6];
        } else if (lang == 4) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[4] + ' ' + commandValue.split(E7)[1].split(' ')[6];
        } else if (lang == 5) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[4] + ' ' + commandValue.split(E7)[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qH') {
        if (lang == 0) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[4] + ' ' + commandValue.split(E8)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[4] + ' ' + commandValue.split(E8)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[4] + ' ' + commandValue.split(E8)[1].split(' ')[6];
        } else if (lang == 3) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[4] + ' ' + commandValue.split(E8)[1].split(' ')[6];
        } else if (lang == 4) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[4] + ' ' + commandValue.split(E8)[1].split(' ')[6];
        } else if (lang == 5) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[4] + ' ' + commandValue.split(E8)[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qI') {
        if (lang == 0) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[4] + ' ' + commandValue.split(E9)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[4] + ' ' + commandValue.split(E9)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[4] + ' ' + commandValue.split(E9)[1].split(' ')[6];
        } else if (lang == 3) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[4] + ' ' + commandValue.split(E9)[1].split(' ')[6];
        } else if (lang == 4) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[4] + ' ' + commandValue.split(E9)[1].split(' ')[6];
        } else if (lang == 5) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[4] + ' ' + commandValue.split(E9)[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qJ') {
        if (lang == 0) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[4 + ' ' + commandValue.split(E10)[1].split(' ')[4]];
        } else if (lang == 1) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[4] + ' ' + commandValue.split(E10)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[4] + ' ' + commandValue.split(E10)[1].split(' ')[6];
        } else if (lang == 3) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[4] + ' ' + commandValue.split(E10)[1].split(' ')[6];
        } else if (lang == 4) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[4] + ' ' + commandValue.split(E10)[1].split(' ')[6];
        } else if (lang == 5) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[4] + ' ' + commandValue.split(E10)[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qK') {
        if (lang == 0) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[4] + ' ' + commandValue.split(E11)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[4] + ' ' + commandValue.split(E11)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[4] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[7];
        } else if (lang == 3) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[4] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[7];
        } else if (lang == 4) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[4] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[7];
        } else if (lang == 5) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[4] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[7];
        }
    } else if (commandCode == 'c18qL') {
        if (lang == 0) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[4] + ' ' + commandValue.split(E12)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[4] + ' ' + commandValue.split(E12)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[4] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[7];
        } else if (lang == 3) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[4] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[7];
        } else if (lang == 4) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[4] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[7];
        } else if (lang == 5) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[4] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[7];
        }
    } else if (commandCode == 'c18qM') {
        if (lang == 0) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[4] + ' ' + commandValue.split(E13)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[4] + ' ' + commandValue.split(E13)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[4] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[7];
        } else if (lang == 3) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[4] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[7];
        } else if (lang == 4) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[4] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[7];
        } else if (lang == 5) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[4] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[7];
        }
    } else if (commandCode == 'c18qN') {
        if (lang == 0) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[4] + ' ' + commandValue.split(E14)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[4] + ' ' + commandValue.split(E14)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[4] + ' ' + commandValue.split(E14)[1].split(' ')[6];
        } else if (lang == 3) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[4] + ' ' + commandValue.split(E14)[1].split(' ')[6];
        } else if (lang == 4) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[4] + ' ' + commandValue.split(E14)[1].split(' ')[6];
        } else if (lang == 5) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[4] + ' ' + commandValue.split(E14)[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qO') {
        if (lang == 0) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[4] + ' ' + commandValue.split(E15)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[4] + ' ' + commandValue.split(E15)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[4] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[7];
        } else if (lang == 3) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[4] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[7];
        } else if (lang == 4) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[4] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[7];
        } else if (lang == 5) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[4] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[7];
        }
    } else if (commandCode == 'c18qP') {
        if (lang == 0) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[4] + ' ' + commandValue.split(E16)[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[4] + ' ' + commandValue.split(E16)[1].split(' ')[6];
        } else if (lang == 2) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[4] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[7];
        } else if (lang == 3) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[4] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[7];
        } else if (lang == 4) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[4] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[7];
        } else if (lang == 2) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[4] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[7];
        }
    } else if (commandCode == 'c18r') {
        if (lang == 0) {
            return 'set the time position of to';
        } else if (lang == 1) {
            return 'set the time position of to';
        } else if (lang == 2) {
            return 'définir la position de temps de à';
        } else if (lang == 3) {
            return 'définir la position de temps de à';
        } else if (lang == 4) {
            return 'définir la position de temps de à';
        } else if (lang == 5) {
            return 'définir la position de temps de à';
        }
    } else if (commandCode == 'c19') {
        if (lang == 0) {
            return commandValue.split('set the time position of ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('set the time position of ')[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
        } else if (lang == 4) {
            return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
        } else if (lang == 5) {
            return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c20') {
        if (lang == 0) {
            return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
        } else if (lang == 1) {
            return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
        } else if (lang == 2) {
            return commandValue.split('définir la valeur de ' + para1 + ' à la valeur de ')[1];
        } else if (lang == 3) {
            return commandValue.split('غير قيمة ' + para1 + ' إلى قيمة ')[1];
        } else if (lang == 4) {
            return commandValue.split('définir la valeur de ' + para1 + ' لقيمة ')[1];
        } else if (lang == 5) {
            return commandValue.split('définir la valeur de ' + para1 + ' à la valeur de ')[1];
        }
    } else if (commandCode == 'c21q') {
        if (lang == 0) {
            return commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[2];
        } else if (lang == 1) {
            return commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[2];
        } else if (lang == 2) {
            return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[2];
        } else if (lang == 3) {
            return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[2];
        } else if (lang == 4) {
            return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[2];
        } else if (lang == 5) {
            return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[2];
        }
    } else if (commandCode == 'c21r') {
        if (lang == 0) {
            return 'the value of';
        } else if (lang == 1) {
            return 'the value of';
        } else if (lang == 2) {
            return 'la valeur de';
        } else if (lang == 3) {
            return 'قيمة';
        } else if (lang == 4) {
            return 'قيمة';
        } else if (lang == 5) {
            return 'la valeur de';
        }
    } else if (commandCode == 'c22') {
        if (lang == 0) {
            return commandValue.split('set the time position of ' + targetElement + ' to ')[1];
        } else if (lang == 1) {
            return commandValue.split('set the time position of ' + targetElement + ' to ')[1];
        } else if (lang == 2) {
            return commandValue.split('définir la position de temps de ' + targetElement + ' à ')[1];
        } else if (lang == 3) {
            return commandValue.split('définir la position de temps de ' + targetElement + ' à ')[1];
        } else if (lang == 4) {
            return commandValue.split('définir la position de temps de ' + targetElement + ' à ')[1];
        } else if (lang == 5) {
            return commandValue.split('définir la position de temps de ' + targetElement + ' à ')[1];
        }
    } else if (commandCode == 'c23qA') {
        if (lang == 0) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[6] + ' ' + commandValue.split(E1)[1].split(' ')[8] + ' ' + commandValue.split(E1)[1].split(' ')[9] + ' ' + commandValue.split(E1)[1].split(' ')[10] + ' ' + commandValue.split(E1)[1].split(' ')[11] + ' ' + commandValue.split(E1)[1].split(' ')[12] + ' ' + commandValue.split(E1)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[6] + ' ' + commandValue.split(E1)[1].split(' ')[8] + ' ' + commandValue.split(E1)[1].split(' ')[9] + ' ' + commandValue.split(E1)[1].split(' ')[10] + ' ' + commandValue.split(E1)[1].split(' ')[11] + ' ' + commandValue.split(E1)[1].split(' ')[12] + ' ' + commandValue.split(E1)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[6] + ' ' + commandValue.split(E1)[1].split(' ')[8] + ' ' + commandValue.split(E1)[1].split(' ')[9] + ' ' + commandValue.split(E1)[1].split(' ')[10] + ' ' + commandValue.split(E1)[1].split(' ')[11] + ' ' + commandValue.split(E1)[1].split(' ')[12] + ' ' + commandValue.split(E1)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[6] + ' ' + commandValue.split(E1)[1].split(' ')[8] + ' ' + commandValue.split(E1)[1].split(' ')[9] + ' ' + commandValue.split(E1)[1].split(' ')[10] + ' ' + commandValue.split(E1)[1].split(' ')[11] + ' ' + commandValue.split(E1)[1].split(' ')[12] + ' ' + commandValue.split(E1)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[6] + ' ' + commandValue.split(E1)[1].split(' ')[8] + ' ' + commandValue.split(E1)[1].split(' ')[9] + ' ' + commandValue.split(E1)[1].split(' ')[10] + ' ' + commandValue.split(E1)[1].split(' ')[11] + ' ' + commandValue.split(E1)[1].split(' ')[12] + ' ' + commandValue.split(E1)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[6] + ' ' + commandValue.split(E1)[1].split(' ')[8] + ' ' + commandValue.split(E1)[1].split(' ')[9] + ' ' + commandValue.split(E1)[1].split(' ')[10] + ' ' + commandValue.split(E1)[1].split(' ')[11] + ' ' + commandValue.split(E1)[1].split(' ')[12] + ' ' + commandValue.split(E1)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qB') {
        if (lang == 0) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5] + ' ' + commandValue.split(E2)[1].split(' ')[6] + ' ' + commandValue.split(E2)[1].split(' ')[8] + ' ' + commandValue.split(E2)[1].split(' ')[9] + ' ' + commandValue.split(E2)[1].split(' ')[10] + ' ' + commandValue.split(E2)[1].split(' ')[11] + ' ' + commandValue.split(E2)[1].split(' ')[12] + ' ' + commandValue.split(E2)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5] + ' ' + commandValue.split(E2)[1].split(' ')[6] + ' ' + commandValue.split(E2)[1].split(' ')[8] + ' ' + commandValue.split(E2)[1].split(' ')[9] + ' ' + commandValue.split(E2)[1].split(' ')[10] + ' ' + commandValue.split(E2)[1].split(' ')[11] + ' ' + commandValue.split(E2)[1].split(' ')[12] + ' ' + commandValue.split(E2)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5] + ' ' + commandValue.split(E2)[1].split(' ')[6] + ' ' + commandValue.split(E2)[1].split(' ')[8] + ' ' + commandValue.split(E2)[1].split(' ')[9] + ' ' + commandValue.split(E2)[1].split(' ')[10] + ' ' + commandValue.split(E2)[1].split(' ')[11] + ' ' + commandValue.split(E2)[1].split(' ')[12] + ' ' + commandValue.split(E2)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5] + ' ' + commandValue.split(E2)[1].split(' ')[6] + ' ' + commandValue.split(E2)[1].split(' ')[8] + ' ' + commandValue.split(E2)[1].split(' ')[9] + ' ' + commandValue.split(E2)[1].split(' ')[10] + ' ' + commandValue.split(E2)[1].split(' ')[11] + ' ' + commandValue.split(E2)[1].split(' ')[12] + ' ' + commandValue.split(E2)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5] + ' ' + commandValue.split(E2)[1].split(' ')[6] + ' ' + commandValue.split(E2)[1].split(' ')[8] + ' ' + commandValue.split(E2)[1].split(' ')[9] + ' ' + commandValue.split(E2)[1].split(' ')[10] + ' ' + commandValue.split(E2)[1].split(' ')[11] + ' ' + commandValue.split(E2)[1].split(' ')[12] + ' ' + commandValue.split(E2)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5] + ' ' + commandValue.split(E2)[1].split(' ')[6] + ' ' + commandValue.split(E2)[1].split(' ')[8] + ' ' + commandValue.split(E2)[1].split(' ')[9] + ' ' + commandValue.split(E2)[1].split(' ')[10] + ' ' + commandValue.split(E2)[1].split(' ')[11] + ' ' + commandValue.split(E2)[1].split(' ')[12] + ' ' + commandValue.split(E2)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qC') {
        if (lang == 0) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5] + ' ' + commandValue.split(E3)[1].split(' ')[6] + ' ' + commandValue.split(E3)[1].split(' ')[8] + ' ' + commandValue.split(E3)[1].split(' ')[9] + ' ' + commandValue.split(E3)[1].split(' ')[10] + ' ' + commandValue.split(E3)[1].split(' ')[11] + ' ' + commandValue.split(E3)[1].split(' ')[12] + ' ' + commandValue.split(E3)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5] + ' ' + commandValue.split(E3)[1].split(' ')[6] + ' ' + commandValue.split(E3)[1].split(' ')[8] + ' ' + commandValue.split('When the mouse pointer m8ved away from it, ')[1].split(' ')[9] + ' ' + commandValue.split('When the mouse pointer m9ved away from it, ')[1].split(' ')[10] + ' ' + commandValue.split('When the mouse pointer 10oved away from it, ')[1].split(' ')[11] + ' ' + commandValue.split('When the mouse pointer11moved away from it, ')[1].split(' ')[12] + ' ' + commandValue.split(E3)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5] + ' ' + commandValue.split(E3)[1].split(' ')[6] + ' ' + commandValue.split(E3)[1].split(' ')[8] + ' ' + commandValue.split('When the mouse pointer m8ved away from it, ')[1].split(' ')[9] + ' ' + commandValue.split('When the mouse pointer m9ved away from it, ')[1].split(' ')[10] + ' ' + commandValue.split('When the mouse pointer 10oved away from it, ')[1].split(' ')[11] + ' ' + commandValue.split('When the mouse pointer11moved away from it, ')[1].split(' ')[12] + ' ' + commandValue.split(E3)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5] + ' ' + commandValue.split(E3)[1].split(' ')[6] + ' ' + commandValue.split(E3)[1].split(' ')[8] + ' ' + commandValue.split('When the mouse pointer m8ved away from it, ')[1].split(' ')[9] + ' ' + commandValue.split('When the mouse pointer m9ved away from it, ')[1].split(' ')[10] + ' ' + commandValue.split('When the mouse pointer 10oved away from it, ')[1].split(' ')[11] + ' ' + commandValue.split('When the mouse pointer11moved away from it, ')[1].split(' ')[12] + ' ' + commandValue.split(E3)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5] + ' ' + commandValue.split(E3)[1].split(' ')[6] + ' ' + commandValue.split(E3)[1].split(' ')[8] + ' ' + commandValue.split('When the mouse pointer m8ved away from it, ')[1].split(' ')[9] + ' ' + commandValue.split('When the mouse pointer m9ved away from it, ')[1].split(' ')[10] + ' ' + commandValue.split('When the mouse pointer 10oved away from it, ')[1].split(' ')[11] + ' ' + commandValue.split('When the mouse pointer11moved away from it, ')[1].split(' ')[12] + ' ' + commandValue.split(E3)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5] + ' ' + commandValue.split(E3)[1].split(' ')[6] + ' ' + commandValue.split(E3)[1].split(' ')[8] + ' ' + commandValue.split('When the mouse pointer m8ved away from it, ')[1].split(' ')[9] + ' ' + commandValue.split('When the mouse pointer m9ved away from it, ')[1].split(' ')[10] + ' ' + commandValue.split('When the mouse pointer 10oved away from it, ')[1].split(' ')[11] + ' ' + commandValue.split('When the mouse pointer11moved away from it, ')[1].split(' ')[12] + ' ' + commandValue.split(E3)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qD') {
        if (lang == 0) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5] + ' ' + commandValue.split(E4)[1].split(' ')[6] + ' ' + commandValue.split(E4)[1].split(' ')[8] + ' ' + commandValue.split(E4)[1].split(' ')[9] + ' ' + commandValue.split(E4)[1].split(' ')[10] + ' ' + commandValue.split(E4)[1].split(' ')[11] + ' ' + commandValue.split(E4)[1].split(' ')[12] + ' ' + commandValue.split(E4)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5] + ' ' + commandValue.split(E4)[1].split(' ')[6] + ' ' + commandValue.split(E4)[1].split(' ')[8] + ' ' + commandValue.split(E4)[1].split(' ')[9] + ' ' + commandValue.split(E4)[1].split(' ')[10] + ' ' + commandValue.split(E4)[1].split(' ')[11] + ' ' + commandValue.split(E4)[1].split(' ')[12] + ' ' + commandValue.split(E4)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5] + ' ' + commandValue.split(E4)[1].split(' ')[6] + ' ' + commandValue.split(E4)[1].split(' ')[8] + ' ' + commandValue.split(E4)[1].split(' ')[9] + ' ' + commandValue.split(E4)[1].split(' ')[10] + ' ' + commandValue.split(E4)[1].split(' ')[11] + ' ' + commandValue.split(E4)[1].split(' ')[12] + ' ' + commandValue.split(E4)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5] + ' ' + commandValue.split(E4)[1].split(' ')[6] + ' ' + commandValue.split(E4)[1].split(' ')[8] + ' ' + commandValue.split(E4)[1].split(' ')[9] + ' ' + commandValue.split(E4)[1].split(' ')[10] + ' ' + commandValue.split(E4)[1].split(' ')[11] + ' ' + commandValue.split(E4)[1].split(' ')[12] + ' ' + commandValue.split(E4)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5] + ' ' + commandValue.split(E4)[1].split(' ')[6] + ' ' + commandValue.split(E4)[1].split(' ')[8] + ' ' + commandValue.split(E4)[1].split(' ')[9] + ' ' + commandValue.split(E4)[1].split(' ')[10] + ' ' + commandValue.split(E4)[1].split(' ')[11] + ' ' + commandValue.split(E4)[1].split(' ')[12] + ' ' + commandValue.split(E4)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5] + ' ' + commandValue.split(E4)[1].split(' ')[6] + ' ' + commandValue.split(E4)[1].split(' ')[8] + ' ' + commandValue.split(E4)[1].split(' ')[9] + ' ' + commandValue.split(E4)[1].split(' ')[10] + ' ' + commandValue.split(E4)[1].split(' ')[11] + ' ' + commandValue.split(E4)[1].split(' ')[12] + ' ' + commandValue.split(E4)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qE') {
        if (lang == 0) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5] + ' ' + commandValue.split(E5)[1].split(' ')[6] + ' ' + commandValue.split(E5)[1].split(' ')[8] + ' ' + commandValue.split(E5)[1].split(' ')[9] + ' ' + commandValue.split(E5)[1].split(' ')[10] + ' ' + commandValue.split(E5)[1].split(' ')[11] + ' ' + commandValue.split(E5)[1].split(' ')[12] + ' ' + commandValue.split(E5)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5] + ' ' + commandValue.split(E5)[1].split(' ')[6] + ' ' + commandValue.split(E5)[1].split(' ')[8] + ' ' + commandValue.split(E5)[1].split(' ')[9] + ' ' + commandValue.split(E5)[1].split(' ')[10] + ' ' + commandValue.split(E5)[1].split(' ')[11] + ' ' + commandValue.split(E5)[1].split(' ')[12] + ' ' + commandValue.split(E5)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5] + ' ' + commandValue.split(E5)[1].split(' ')[6] + ' ' + commandValue.split(E5)[1].split(' ')[8] + ' ' + commandValue.split(E5)[1].split(' ')[9] + ' ' + commandValue.split(E5)[1].split(' ')[10] + ' ' + commandValue.split(E5)[1].split(' ')[11] + ' ' + commandValue.split(E5)[1].split(' ')[12] + ' ' + commandValue.split(E5)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5] + ' ' + commandValue.split(E5)[1].split(' ')[6] + ' ' + commandValue.split(E5)[1].split(' ')[8] + ' ' + commandValue.split(E5)[1].split(' ')[9] + ' ' + commandValue.split(E5)[1].split(' ')[10] + ' ' + commandValue.split(E5)[1].split(' ')[11] + ' ' + commandValue.split(E5)[1].split(' ')[12] + ' ' + commandValue.split(E5)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5] + ' ' + commandValue.split(E5)[1].split(' ')[6] + ' ' + commandValue.split(E5)[1].split(' ')[8] + ' ' + commandValue.split(E5)[1].split(' ')[9] + ' ' + commandValue.split(E5)[1].split(' ')[10] + ' ' + commandValue.split(E5)[1].split(' ')[11] + ' ' + commandValue.split(E5)[1].split(' ')[12] + ' ' + commandValue.split(E5)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5] + ' ' + commandValue.split(E5)[1].split(' ')[6] + ' ' + commandValue.split(E5)[1].split(' ')[8] + ' ' + commandValue.split(E5)[1].split(' ')[9] + ' ' + commandValue.split(E5)[1].split(' ')[10] + ' ' + commandValue.split(E5)[1].split(' ')[11] + ' ' + commandValue.split(E5)[1].split(' ')[12] + ' ' + commandValue.split(E5)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qF') {
        if (lang == 0) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5] + ' ' + commandValue.split(E6)[1].split(' ')[6] + ' ' + commandValue.split(E6)[1].split(' ')[8] + ' ' + commandValue.split(E6)[1].split(' ')[9] + ' ' + commandValue.split(E6)[1].split(' ')[10] + ' ' + commandValue.split(E6)[1].split(' ')[11] + ' ' + commandValue.split(E6)[1].split(' ')[12] + ' ' + commandValue.split(E6)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5] + ' ' + commandValue.split(E6)[1].split(' ')[6] + ' ' + commandValue.split(E6)[1].split(' ')[8] + ' ' + commandValue.split(E6)[1].split(' ')[9] + ' ' + commandValue.split(E6)[1].split(' ')[10] + ' ' + commandValue.split(E6)[1].split(' ')[11] + ' ' + commandValue.split(E6)[1].split(' ')[12] + ' ' + commandValue.split(E6)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5] + ' ' + commandValue.split(E6)[1].split(' ')[6] + ' ' + commandValue.split(E6)[1].split(' ')[8] + ' ' + commandValue.split(E6)[1].split(' ')[9] + ' ' + commandValue.split(E6)[1].split(' ')[10] + ' ' + commandValue.split(E6)[1].split(' ')[11] + ' ' + commandValue.split(E6)[1].split(' ')[12] + ' ' + commandValue.split(E6)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5] + ' ' + commandValue.split(E6)[1].split(' ')[6] + ' ' + commandValue.split(E6)[1].split(' ')[8] + ' ' + commandValue.split(E6)[1].split(' ')[9] + ' ' + commandValue.split(E6)[1].split(' ')[10] + ' ' + commandValue.split(E6)[1].split(' ')[11] + ' ' + commandValue.split(E6)[1].split(' ')[12] + ' ' + commandValue.split(E6)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5] + ' ' + commandValue.split(E6)[1].split(' ')[6] + ' ' + commandValue.split(E6)[1].split(' ')[8] + ' ' + commandValue.split(E6)[1].split(' ')[9] + ' ' + commandValue.split(E6)[1].split(' ')[10] + ' ' + commandValue.split(E6)[1].split(' ')[11] + ' ' + commandValue.split(E6)[1].split(' ')[12] + ' ' + commandValue.split(E6)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5] + ' ' + commandValue.split(E6)[1].split(' ')[6] + ' ' + commandValue.split(E6)[1].split(' ')[8] + ' ' + commandValue.split(E6)[1].split(' ')[9] + ' ' + commandValue.split(E6)[1].split(' ')[10] + ' ' + commandValue.split(E6)[1].split(' ')[11] + ' ' + commandValue.split(E6)[1].split(' ')[12] + ' ' + commandValue.split(E6)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qG') {
        if (lang == 0) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5] + ' ' + commandValue.split(E7)[1].split(' ')[6] + ' ' + commandValue.split(E7)[1].split(' ')[8] + ' ' + commandValue.split(E7)[1].split(' ')[9] + ' ' + commandValue.split(E7)[1].split(' ')[10] + ' ' + commandValue.split(E7)[1].split(' ')[11] + ' ' + commandValue.split(E7)[1].split(' ')[12] + ' ' + commandValue.split(E7)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5] + ' ' + commandValue.split(E7)[1].split(' ')[6] + ' ' + commandValue.split(E7)[1].split(' ')[8] + ' ' + commandValue.split(E7)[1].split(' ')[9] + ' ' + commandValue.split(E7)[1].split(' ')[10] + ' ' + commandValue.split(E7)[1].split(' ')[11] + ' ' + commandValue.split(E7)[1].split(' ')[12] + ' ' + commandValue.split(E7)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5] + ' ' + commandValue.split(E7)[1].split(' ')[6] + ' ' + commandValue.split(E7)[1].split(' ')[8] + ' ' + commandValue.split(E7)[1].split(' ')[9] + ' ' + commandValue.split(E7)[1].split(' ')[10] + ' ' + commandValue.split(E7)[1].split(' ')[11] + ' ' + commandValue.split(E7)[1].split(' ')[12] + ' ' + commandValue.split(E7)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5] + ' ' + commandValue.split(E7)[1].split(' ')[6] + ' ' + commandValue.split(E7)[1].split(' ')[8] + ' ' + commandValue.split(E7)[1].split(' ')[9] + ' ' + commandValue.split(E7)[1].split(' ')[10] + ' ' + commandValue.split(E7)[1].split(' ')[11] + ' ' + commandValue.split(E7)[1].split(' ')[12] + ' ' + commandValue.split(E7)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5] + ' ' + commandValue.split(E7)[1].split(' ')[6] + ' ' + commandValue.split(E7)[1].split(' ')[8] + ' ' + commandValue.split(E7)[1].split(' ')[9] + ' ' + commandValue.split(E7)[1].split(' ')[10] + ' ' + commandValue.split(E7)[1].split(' ')[11] + ' ' + commandValue.split(E7)[1].split(' ')[12] + ' ' + commandValue.split(E7)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5] + ' ' + commandValue.split(E7)[1].split(' ')[6] + ' ' + commandValue.split(E7)[1].split(' ')[8] + ' ' + commandValue.split(E7)[1].split(' ')[9] + ' ' + commandValue.split(E7)[1].split(' ')[10] + ' ' + commandValue.split(E7)[1].split(' ')[11] + ' ' + commandValue.split(E7)[1].split(' ')[12] + ' ' + commandValue.split(E7)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qH') {
        if (lang == 0) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5] + ' ' + commandValue.split(E8)[1].split(' ')[6] + ' ' + commandValue.split(E8)[1].split(' ')[8] + ' ' + commandValue.split(E8)[1].split(' ')[9] + ' ' + commandValue.split(E8)[1].split(' ')[10] + ' ' + commandValue.split(E8)[1].split(' ')[11] + ' ' + commandValue.split(E8)[1].split(' ')[12] + ' ' + commandValue.split(E8)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5] + ' ' + commandValue.split(E8)[1].split(' ')[6] + ' ' + commandValue.split(E8)[1].split(' ')[8] + ' ' + commandValue.split(E8)[1].split(' ')[9] + ' ' + commandValue.split(E8)[1].split(' ')[10] + ' ' + commandValue.split(E8)[1].split(' ')[11] + ' ' + commandValue.split(E8)[1].split(' ')[12] + ' ' + commandValue.split(E8)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5] + ' ' + commandValue.split(E8)[1].split(' ')[6] + ' ' + commandValue.split(E8)[1].split(' ')[8] + ' ' + commandValue.split(E8)[1].split(' ')[9] + ' ' + commandValue.split(E8)[1].split(' ')[10] + ' ' + commandValue.split(E8)[1].split(' ')[11] + ' ' + commandValue.split(E8)[1].split(' ')[12] + ' ' + commandValue.split(E8)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5] + ' ' + commandValue.split(E8)[1].split(' ')[6] + ' ' + commandValue.split(E8)[1].split(' ')[8] + ' ' + commandValue.split(E8)[1].split(' ')[9] + ' ' + commandValue.split(E8)[1].split(' ')[10] + ' ' + commandValue.split(E8)[1].split(' ')[11] + ' ' + commandValue.split(E8)[1].split(' ')[12] + ' ' + commandValue.split(E8)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5] + ' ' + commandValue.split(E8)[1].split(' ')[6] + ' ' + commandValue.split(E8)[1].split(' ')[8] + ' ' + commandValue.split(E8)[1].split(' ')[9] + ' ' + commandValue.split(E8)[1].split(' ')[10] + ' ' + commandValue.split(E8)[1].split(' ')[11] + ' ' + commandValue.split(E8)[1].split(' ')[12] + ' ' + commandValue.split(E8)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5] + ' ' + commandValue.split(E8)[1].split(' ')[6] + ' ' + commandValue.split(E8)[1].split(' ')[8] + ' ' + commandValue.split(E8)[1].split(' ')[9] + ' ' + commandValue.split(E8)[1].split(' ')[10] + ' ' + commandValue.split(E8)[1].split(' ')[11] + ' ' + commandValue.split(E8)[1].split(' ')[12] + ' ' + commandValue.split(E8)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qI') {
        if (lang == 0) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5] + ' ' + commandValue.split(E9)[1].split(' ')[6] + ' ' + commandValue.split(E9)[1].split(' ')[8] + ' ' + commandValue.split(E9)[1].split(' ')[9] + ' ' + commandValue.split(E9)[1].split(' ')[10] + ' ' + commandValue.split(E9)[1].split(' ')[11] + ' ' + commandValue.split(E9)[1].split(' ')[12] + ' ' + commandValue.split(E9)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5] + ' ' + commandValue.split(E9)[1].split(' ')[6] + ' ' + commandValue.split(E9)[1].split(' ')[8] + ' ' + commandValue.split(E9)[1].split(' ')[9] + ' ' + commandValue.split(E9)[1].split(' ')[10] + ' ' + commandValue.split(E9)[1].split(' ')[11] + ' ' + commandValue.split(E9)[1].split(' ')[12] + ' ' + commandValue.split(E9)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5] + ' ' + commandValue.split(E9)[1].split(' ')[6] + ' ' + commandValue.split(E9)[1].split(' ')[8] + ' ' + commandValue.split(E9)[1].split(' ')[9] + ' ' + commandValue.split(E9)[1].split(' ')[10] + ' ' + commandValue.split(E9)[1].split(' ')[11] + ' ' + commandValue.split(E9)[1].split(' ')[12] + ' ' + commandValue.split(E9)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5] + ' ' + commandValue.split(E9)[1].split(' ')[6] + ' ' + commandValue.split(E9)[1].split(' ')[8] + ' ' + commandValue.split(E9)[1].split(' ')[9] + ' ' + commandValue.split(E9)[1].split(' ')[10] + ' ' + commandValue.split(E9)[1].split(' ')[11] + ' ' + commandValue.split(E9)[1].split(' ')[12] + ' ' + commandValue.split(E9)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5] + ' ' + commandValue.split(E9)[1].split(' ')[6] + ' ' + commandValue.split(E9)[1].split(' ')[8] + ' ' + commandValue.split(E9)[1].split(' ')[9] + ' ' + commandValue.split(E9)[1].split(' ')[10] + ' ' + commandValue.split(E9)[1].split(' ')[11] + ' ' + commandValue.split(E9)[1].split(' ')[12] + ' ' + commandValue.split(E9)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5] + ' ' + commandValue.split(E9)[1].split(' ')[6] + ' ' + commandValue.split(E9)[1].split(' ')[8] + ' ' + commandValue.split(E9)[1].split(' ')[9] + ' ' + commandValue.split(E9)[1].split(' ')[10] + ' ' + commandValue.split(E9)[1].split(' ')[11] + ' ' + commandValue.split(E9)[1].split(' ')[12] + ' ' + commandValue.split(E9)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qJ') {
        if (lang == 0) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5] + ' ' + commandValue.split(E10)[1].split(' ')[6] + ' ' + commandValue.split(E10)[1].split(' ')[8] + ' ' + commandValue.split(E10)[1].split(' ')[9] + ' ' + commandValue.split(E10)[1].split(' ')[10] + ' ' + commandValue.split(E10)[1].split(' ')[11] + ' ' + commandValue.split(E10)[1].split(' ')[12] + ' ' + commandValue.split(E10)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5] + ' ' + commandValue.split(E10)[1].split(' ')[6] + ' ' + commandValue.split(E10)[1].split(' ')[8] + ' ' + commandValue.split(E10)[1].split(' ')[9] + ' ' + commandValue.split(E10)[1].split(' ')[10] + ' ' + commandValue.split(E10)[1].split(' ')[11] + ' ' + commandValue.split(E10)[1].split(' ')[12] + ' ' + commandValue.split(E10)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5] + ' ' + commandValue.split(E10)[1].split(' ')[6] + ' ' + commandValue.split(E10)[1].split(' ')[8] + ' ' + commandValue.split(E10)[1].split(' ')[9] + ' ' + commandValue.split(E10)[1].split(' ')[10] + ' ' + commandValue.split(E10)[1].split(' ')[11] + ' ' + commandValue.split(E10)[1].split(' ')[12] + ' ' + commandValue.split(E10)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5] + ' ' + commandValue.split(E10)[1].split(' ')[6] + ' ' + commandValue.split(E10)[1].split(' ')[8] + ' ' + commandValue.split(E10)[1].split(' ')[9] + ' ' + commandValue.split(E10)[1].split(' ')[10] + ' ' + commandValue.split(E10)[1].split(' ')[11] + ' ' + commandValue.split(E10)[1].split(' ')[12] + ' ' + commandValue.split(E10)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5] + ' ' + commandValue.split(E10)[1].split(' ')[6] + ' ' + commandValue.split(E10)[1].split(' ')[8] + ' ' + commandValue.split(E10)[1].split(' ')[9] + ' ' + commandValue.split(E10)[1].split(' ')[10] + ' ' + commandValue.split(E10)[1].split(' ')[11] + ' ' + commandValue.split(E10)[1].split(' ')[12] + ' ' + commandValue.split(E10)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5] + ' ' + commandValue.split(E10)[1].split(' ')[6] + ' ' + commandValue.split(E10)[1].split(' ')[8] + ' ' + commandValue.split(E10)[1].split(' ')[9] + ' ' + commandValue.split(E10)[1].split(' ')[10] + ' ' + commandValue.split(E10)[1].split(' ')[11] + ' ' + commandValue.split(E10)[1].split(' ')[12] + ' ' + commandValue.split(E10)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qK') {
        if (lang == 0) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[6] + ' ' + commandValue.split(E11)[1].split(' ')[8] + ' ' + commandValue.split(E11)[1].split(' ')[9] + ' ' + commandValue.split(E11)[1].split(' ')[10] + ' ' + commandValue.split(E11)[1].split(' ')[11] + ' ' + commandValue.split(E11)[1].split(' ')[12] + ' ' + commandValue.split(E11)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[6] + ' ' + commandValue.split(E11)[1].split(' ')[8] + ' ' + commandValue.split(E11)[1].split(' ')[9] + ' ' + commandValue.split(E11)[1].split(' ')[10] + ' ' + commandValue.split(E11)[1].split(' ')[11] + ' ' + commandValue.split(E11)[1].split(' ')[12] + ' ' + commandValue.split(E11)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[6] + ' ' + commandValue.split(E11)[1].split(' ')[8] + ' ' + commandValue.split(E11)[1].split(' ')[9] + ' ' + commandValue.split(E11)[1].split(' ')[10] + ' ' + commandValue.split(E11)[1].split(' ')[11] + ' ' + commandValue.split(E11)[1].split(' ')[12] + ' ' + commandValue.split(E11)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[6] + ' ' + commandValue.split(E11)[1].split(' ')[8] + ' ' + commandValue.split(E11)[1].split(' ')[9] + ' ' + commandValue.split(E11)[1].split(' ')[10] + ' ' + commandValue.split(E11)[1].split(' ')[11] + ' ' + commandValue.split(E11)[1].split(' ')[12] + ' ' + commandValue.split(E11)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[6] + ' ' + commandValue.split(E11)[1].split(' ')[8] + ' ' + commandValue.split(E11)[1].split(' ')[9] + ' ' + commandValue.split(E11)[1].split(' ')[10] + ' ' + commandValue.split(E11)[1].split(' ')[11] + ' ' + commandValue.split(E11)[1].split(' ')[12] + ' ' + commandValue.split(E11)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[6] + ' ' + commandValue.split(E11)[1].split(' ')[8] + ' ' + commandValue.split(E11)[1].split(' ')[9] + ' ' + commandValue.split(E11)[1].split(' ')[10] + ' ' + commandValue.split(E11)[1].split(' ')[11] + ' ' + commandValue.split(E11)[1].split(' ')[12] + ' ' + commandValue.split(E11)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qL') {
        if (lang == 0) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[6] + ' ' + commandValue.split(E12)[1].split(' ')[8] + ' ' + commandValue.split(E12)[1].split(' ')[9] + ' ' + commandValue.split(E12)[1].split(' ')[10] + ' ' + commandValue.split(E12)[1].split(' ')[11] + ' ' + commandValue.split(E12)[1].split(' ')[12] + ' ' + commandValue.split(E12)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[6] + ' ' + commandValue.split(E12)[1].split(' ')[8] + ' ' + commandValue.split(E12)[1].split(' ')[9] + ' ' + commandValue.split(E12)[1].split(' ')[10] + ' ' + commandValue.split(E12)[1].split(' ')[11] + ' ' + commandValue.split(E12)[1].split(' ')[12] + ' ' + commandValue.split(E12)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[6] + ' ' + commandValue.split(E12)[1].split(' ')[8] + ' ' + commandValue.split(E12)[1].split(' ')[9] + ' ' + commandValue.split(E12)[1].split(' ')[10] + ' ' + commandValue.split(E12)[1].split(' ')[11] + ' ' + commandValue.split(E12)[1].split(' ')[12] + ' ' + commandValue.split(E12)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[6] + ' ' + commandValue.split(E12)[1].split(' ')[8] + ' ' + commandValue.split(E12)[1].split(' ')[9] + ' ' + commandValue.split(E12)[1].split(' ')[10] + ' ' + commandValue.split(E12)[1].split(' ')[11] + ' ' + commandValue.split(E12)[1].split(' ')[12] + ' ' + commandValue.split(E12)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[6] + ' ' + commandValue.split(E12)[1].split(' ')[8] + ' ' + commandValue.split(E12)[1].split(' ')[9] + ' ' + commandValue.split(E12)[1].split(' ')[10] + ' ' + commandValue.split(E12)[1].split(' ')[11] + ' ' + commandValue.split(E12)[1].split(' ')[12] + ' ' + commandValue.split(E12)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[6] + ' ' + commandValue.split(E12)[1].split(' ')[8] + ' ' + commandValue.split(E12)[1].split(' ')[9] + ' ' + commandValue.split(E12)[1].split(' ')[10] + ' ' + commandValue.split(E12)[1].split(' ')[11] + ' ' + commandValue.split(E12)[1].split(' ')[12] + ' ' + commandValue.split(E12)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qM') {
        if (lang == 0) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[6] + ' ' + commandValue.split(E13)[1].split(' ')[8] + ' ' + commandValue.split(E13)[1].split(' ')[9] + ' ' + commandValue.split(E13)[1].split(' ')[10] + ' ' + commandValue.split(E13)[1].split(' ')[11] + ' ' + commandValue.split(E13)[1].split(' ')[12] + ' ' + commandValue.split(E13)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[6] + ' ' + commandValue.split(E13)[1].split(' ')[8] + ' ' + commandValue.split(E13)[1].split(' ')[9] + ' ' + commandValue.split(E13)[1].split(' ')[10] + ' ' + commandValue.split(E13)[1].split(' ')[11] + ' ' + commandValue.split(E13)[1].split(' ')[12] + ' ' + commandValue.split(E13)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[6] + ' ' + commandValue.split(E13)[1].split(' ')[8] + ' ' + commandValue.split(E13)[1].split(' ')[9] + ' ' + commandValue.split(E13)[1].split(' ')[10] + ' ' + commandValue.split(E13)[1].split(' ')[11] + ' ' + commandValue.split(E13)[1].split(' ')[12] + ' ' + commandValue.split(E13)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[6] + ' ' + commandValue.split(E13)[1].split(' ')[8] + ' ' + commandValue.split(E13)[1].split(' ')[9] + ' ' + commandValue.split(E13)[1].split(' ')[10] + ' ' + commandValue.split(E13)[1].split(' ')[11] + ' ' + commandValue.split(E13)[1].split(' ')[12] + ' ' + commandValue.split(E13)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[6] + ' ' + commandValue.split(E13)[1].split(' ')[8] + ' ' + commandValue.split(E13)[1].split(' ')[9] + ' ' + commandValue.split(E13)[1].split(' ')[10] + ' ' + commandValue.split(E13)[1].split(' ')[11] + ' ' + commandValue.split(E13)[1].split(' ')[12] + ' ' + commandValue.split(E13)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[6] + ' ' + commandValue.split(E13)[1].split(' ')[8] + ' ' + commandValue.split(E13)[1].split(' ')[9] + ' ' + commandValue.split(E13)[1].split(' ')[10] + ' ' + commandValue.split(E13)[1].split(' ')[11] + ' ' + commandValue.split(E13)[1].split(' ')[12] + ' ' + commandValue.split(E13)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qN') {
        if (lang == 0) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5] + ' ' + commandValue.split(E14)[1].split(' ')[6] + ' ' + commandValue.split(E14)[1].split(' ')[8] + ' ' + commandValue.split(E14)[1].split(' ')[9] + ' ' + commandValue.split(E14)[1].split(' ')[10] + ' ' + commandValue.split(E14)[1].split(' ')[11] + ' ' + commandValue.split(E14)[1].split(' ')[12] + ' ' + commandValue.split(E14)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5] + ' ' + commandValue.split(E14)[1].split(' ')[6] + ' ' + commandValue.split(E14)[1].split(' ')[8] + ' ' + commandValue.split(E14)[1].split(' ')[9] + ' ' + commandValue.split(E14)[1].split(' ')[10] + ' ' + commandValue.split(E14)[1].split(' ')[11] + ' ' + commandValue.split(E14)[1].split(' ')[12] + ' ' + commandValue.split(E14)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5] + ' ' + commandValue.split(E14)[1].split(' ')[6] + ' ' + commandValue.split(E14)[1].split(' ')[8] + ' ' + commandValue.split(E14)[1].split(' ')[9] + ' ' + commandValue.split(E14)[1].split(' ')[10] + ' ' + commandValue.split(E14)[1].split(' ')[11] + ' ' + commandValue.split(E14)[1].split(' ')[12] + ' ' + commandValue.split(E14)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5] + ' ' + commandValue.split(E14)[1].split(' ')[6] + ' ' + commandValue.split(E14)[1].split(' ')[8] + ' ' + commandValue.split(E14)[1].split(' ')[9] + ' ' + commandValue.split(E14)[1].split(' ')[10] + ' ' + commandValue.split(E14)[1].split(' ')[11] + ' ' + commandValue.split(E14)[1].split(' ')[12] + ' ' + commandValue.split(E14)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5] + ' ' + commandValue.split(E14)[1].split(' ')[6] + ' ' + commandValue.split(E14)[1].split(' ')[8] + ' ' + commandValue.split(E14)[1].split(' ')[9] + ' ' + commandValue.split(E14)[1].split(' ')[10] + ' ' + commandValue.split(E14)[1].split(' ')[11] + ' ' + commandValue.split(E14)[1].split(' ')[12] + ' ' + commandValue.split(E14)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5] + ' ' + commandValue.split(E14)[1].split(' ')[6] + ' ' + commandValue.split(E14)[1].split(' ')[8] + ' ' + commandValue.split(E14)[1].split(' ')[9] + ' ' + commandValue.split(E14)[1].split(' ')[10] + ' ' + commandValue.split(E14)[1].split(' ')[11] + ' ' + commandValue.split(E14)[1].split(' ')[12] + ' ' + commandValue.split(E14)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qO') {
        if (lang == 0) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[6] + ' ' + commandValue.split(E15)[1].split(' ')[8] + ' ' + commandValue.split(E15)[1].split(' ')[9] + ' ' + commandValue.split(E15)[1].split(' ')[10] + ' ' + commandValue.split(E15)[1].split(' ')[11] + ' ' + commandValue.split(E15)[1].split(' ')[12] + ' ' + commandValue.split(E15)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[6] + ' ' + commandValue.split(E15)[1].split(' ')[8] + ' ' + commandValue.split(E15)[1].split(' ')[9] + ' ' + commandValue.split(E15)[1].split(' ')[10] + ' ' + commandValue.split(E15)[1].split(' ')[11] + ' ' + commandValue.split(E15)[1].split(' ')[12] + ' ' + commandValue.split(E15)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[6] + ' ' + commandValue.split(E15)[1].split(' ')[8] + ' ' + commandValue.split(E15)[1].split(' ')[9] + ' ' + commandValue.split(E15)[1].split(' ')[10] + ' ' + commandValue.split(E15)[1].split(' ')[11] + ' ' + commandValue.split(E15)[1].split(' ')[12] + ' ' + commandValue.split(E15)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[6] + ' ' + commandValue.split(E15)[1].split(' ')[8] + ' ' + commandValue.split(E15)[1].split(' ')[9] + ' ' + commandValue.split(E15)[1].split(' ')[10] + ' ' + commandValue.split(E15)[1].split(' ')[11] + ' ' + commandValue.split(E15)[1].split(' ')[12] + ' ' + commandValue.split(E15)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[6] + ' ' + commandValue.split(E15)[1].split(' ')[8] + ' ' + commandValue.split(E15)[1].split(' ')[9] + ' ' + commandValue.split(E15)[1].split(' ')[10] + ' ' + commandValue.split(E15)[1].split(' ')[11] + ' ' + commandValue.split(E15)[1].split(' ')[12] + ' ' + commandValue.split(E15)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[6] + ' ' + commandValue.split(E15)[1].split(' ')[8] + ' ' + commandValue.split(E15)[1].split(' ')[9] + ' ' + commandValue.split(E15)[1].split(' ')[10] + ' ' + commandValue.split(E15)[1].split(' ')[11] + ' ' + commandValue.split(E15)[1].split(' ')[12] + ' ' + commandValue.split(E15)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qP') {
        if (lang == 0) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[6] + ' ' + commandValue.split(E16)[1].split(' ')[8] + ' ' + commandValue.split(E16)[1].split(' ')[9] + ' ' + commandValue.split(E16)[1].split(' ')[10] + ' ' + commandValue.split(E16)[1].split(' ')[11] + ' ' + commandValue.split(E16)[1].split(' ')[12] + ' ' + commandValue.split(E16)[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[6] + ' ' + commandValue.split(E16)[1].split(' ')[8] + ' ' + commandValue.split(E16)[1].split(' ')[9] + ' ' + commandValue.split(E16)[1].split(' ')[10] + ' ' + commandValue.split(E16)[1].split(' ')[11] + ' ' + commandValue.split(E16)[1].split(' ')[12] + ' ' + commandValue.split(E16)[1].split(' ')[13];
        } else if (lang == 2) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[6] + ' ' + commandValue.split(E16)[1].split(' ')[8] + ' ' + commandValue.split(E16)[1].split(' ')[9] + ' ' + commandValue.split(E16)[1].split(' ')[10] + ' ' + commandValue.split(E16)[1].split(' ')[11] + ' ' + commandValue.split(E16)[1].split(' ')[12] + ' ' + commandValue.split(E16)[1].split(' ')[13];
        } else if (lang == 3) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[6] + ' ' + commandValue.split(E16)[1].split(' ')[8] + ' ' + commandValue.split(E16)[1].split(' ')[9] + ' ' + commandValue.split(E16)[1].split(' ')[10] + ' ' + commandValue.split(E16)[1].split(' ')[11] + ' ' + commandValue.split(E16)[1].split(' ')[12] + ' ' + commandValue.split(E16)[1].split(' ')[13];
        } else if (lang == 4) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[6] + ' ' + commandValue.split(E16)[1].split(' ')[8] + ' ' + commandValue.split(E16)[1].split(' ')[9] + ' ' + commandValue.split(E16)[1].split(' ')[10] + ' ' + commandValue.split(E16)[1].split(' ')[11] + ' ' + commandValue.split(E16)[1].split(' ')[12] + ' ' + commandValue.split(E16)[1].split(' ')[13];
        } else if (lang == 5) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[6] + ' ' + commandValue.split(E16)[1].split(' ')[8] + ' ' + commandValue.split(E16)[1].split(' ')[9] + ' ' + commandValue.split(E16)[1].split(' ')[10] + ' ' + commandValue.split(E16)[1].split(' ')[11] + ' ' + commandValue.split(E16)[1].split(' ')[12] + ' ' + commandValue.split(E16)[1].split(' ')[13];
        }
    } else if (commandCode == 'c23r') {
        if (lang == 0) {
            return 'go to the database the branch and then insert the following data:';
        } else if (lang == 1) {
            return 'go to the database the branch and then insert the following data:';
        } else if (lang == 2) {
            return 'aller à la base de données la branche et ensuite insérer les données suivantes:';
        } else if (lang == 3) {
            return 'اذهب إلى قاعدة البيانات الفرع ثم قم بإدخال البيانات التالية:';
        } else if (lang == 4) {
            return 'روح لقاعدة البيانات الفرع و بعد كدة دخل البيانات دى:';
        } else if (lang == 5) {
            return 'aller à la base de données la branche et ensuite insérer les données suivantes:';
        }
    } else if (commandCode == 'c24') {
        if (lang == 0) {
            return commandValue.split('go to the database ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ')[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split('aller à la base de données ')[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
        } else if (lang == 4) {
            return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
        } else if (lang == 5) {
            return commandValue.split('aller à la base de données ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c25') {
        if (lang == 0) {
            return commandValue.split('the branch ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('the branch ')[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split('la branche ')[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split('الفرع ')[1].split(' ')[0];
        } else if (lang == 4) {
            return commandValue.split('الفرع ')[1].split(' ')[0];
        } else if (lang == 5) {
            return commandValue.split('la branche ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c26') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then insert the following data: ')[1].split(', ');
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then insert the following data: ')[1].split(', ');
        } else if (lang == 2) {
            return commandValue.split('aller à la base de données ' + para1 + ' la branche ' + para2 + ' et ensuite insérer les données suivantes: ')[1].split(', ');
        } else if (lang == 3) {
            return commandValue.split('اذهب إلى قاعدة البيانات ' + para1 + ' الفرع ' + para2 + ' ثم قم بإدخال البيانات التالية: ')[1].split(', ');
        } else if (lang == 4) {
            return commandValue.split('روج لقاعدة البيانات ' + para1 + ' الفرع ' + para2 + ' و بعد كدة دخل البيانات دى: ')[1].split(', ');
        } else if (lang == 5) {
            return commandValue.split('aller à la base de données ' + para1 + ' la branche ' + para2 + ' et ensuite insérer les données suivantes: ')[1].split(', ');
        }
    } else if (commandCode == 'c27qA') {
        if (lang == 0) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[6] + ' ' + commandValue.split(E1)[1].split(' ')[8] + ' ' + commandValue.split(E1)[1].split(' ')[9] + ' ' + commandValue.split(E1)[1].split(' ')[10] + ' ' + commandValue.split(E1)[1].split(' ')[11] + ' ' + commandValue.split(E1)[1].split(' ')[12] + ' ' + commandValue.split(E1)[1].split(' ')[13] + ' ' + commandValue.split(E1)[1].split(' ')[14] + ' ' + commandValue.split(E1)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[6] + ' ' + commandValue.split(E1)[1].split(' ')[8] + ' ' + commandValue.split(E1)[1].split(' ')[9] + ' ' + commandValue.split(E1)[1].split(' ')[10] + ' ' + commandValue.split(E1)[1].split(' ')[11] + ' ' + commandValue.split(E1)[1].split(' ')[12] + ' ' + commandValue.split(E1)[1].split(' ')[13] + ' ' + commandValue.split(E1)[1].split(' ')[14] + ' ' + commandValue.split(E1)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[6] + ' ' + commandValue.split(E1)[1].split(' ')[8] + ' ' + commandValue.split(E1)[1].split(' ')[9] + ' ' + commandValue.split(E1)[1].split(' ')[10] + ' ' + commandValue.split(E1)[1].split(' ')[11] + ' ' + commandValue.split(E1)[1].split(' ')[12] + ' ' + commandValue.split(E1)[1].split(' ')[13] + ' ' + commandValue.split(E1)[1].split(' ')[14] + ' ' + commandValue.split(E1)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[6] + ' ' + commandValue.split(E1)[1].split(' ')[8] + ' ' + commandValue.split(E1)[1].split(' ')[9] + ' ' + commandValue.split(E1)[1].split(' ')[10] + ' ' + commandValue.split(E1)[1].split(' ')[11] + ' ' + commandValue.split(E1)[1].split(' ')[12] + ' ' + commandValue.split(E1)[1].split(' ')[13] + ' ' + commandValue.split(E1)[1].split(' ')[14] + ' ' + commandValue.split(E1)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[6] + ' ' + commandValue.split(E1)[1].split(' ')[8] + ' ' + commandValue.split(E1)[1].split(' ')[9] + ' ' + commandValue.split(E1)[1].split(' ')[10] + ' ' + commandValue.split(E1)[1].split(' ')[11] + ' ' + commandValue.split(E1)[1].split(' ')[12] + ' ' + commandValue.split(E1)[1].split(' ')[13] + ' ' + commandValue.split(E1)[1].split(' ')[14] + ' ' + commandValue.split(E1)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E1)[1].split(' ')[0] + ' ' + commandValue.split(E1)[1].split(' ')[1] + ' ' + commandValue.split(E1)[1].split(' ')[2] + ' ' + commandValue.split(E1)[1].split(' ')[3] + ' ' + commandValue.split(E1)[1].split(' ')[5] + ' ' + commandValue.split(E1)[1].split(' ')[6] + ' ' + commandValue.split(E1)[1].split(' ')[8] + ' ' + commandValue.split(E1)[1].split(' ')[9] + ' ' + commandValue.split(E1)[1].split(' ')[10] + ' ' + commandValue.split(E1)[1].split(' ')[11] + ' ' + commandValue.split(E1)[1].split(' ')[12] + ' ' + commandValue.split(E1)[1].split(' ')[13] + ' ' + commandValue.split(E1)[1].split(' ')[14] + ' ' + commandValue.split(E1)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qB') {
        if (lang == 0) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5] + ' ' + commandValue.split(E2)[1].split(' ')[6] + ' ' + commandValue.split(E2)[1].split(' ')[8] + ' ' + commandValue.split(E2)[1].split(' ')[9] + ' ' + commandValue.split(E2)[1].split(' ')[10] + ' ' + commandValue.split(E2)[1].split(' ')[11] + ' ' + commandValue.split(E2)[1].split(' ')[12] + ' ' + commandValue.split(E2)[1].split(' ')[13] + ' ' + commandValue.split(E2)[1].split(' ')[14] + ' ' + commandValue.split(E2)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5] + ' ' + commandValue.split(E2)[1].split(' ')[6] + ' ' + commandValue.split(E2)[1].split(' ')[8] + ' ' + commandValue.split(E2)[1].split(' ')[9] + ' ' + commandValue.split(E2)[1].split(' ')[10] + ' ' + commandValue.split(E2)[1].split(' ')[11] + ' ' + commandValue.split(E2)[1].split(' ')[12] + ' ' + commandValue.split(E2)[1].split(' ')[13] + ' ' + commandValue.split(E2)[1].split(' ')[14] + ' ' + commandValue.split(E2)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5] + ' ' + commandValue.split(E2)[1].split(' ')[6] + ' ' + commandValue.split(E2)[1].split(' ')[8] + ' ' + commandValue.split(E2)[1].split(' ')[9] + ' ' + commandValue.split(E2)[1].split(' ')[10] + ' ' + commandValue.split(E2)[1].split(' ')[11] + ' ' + commandValue.split(E2)[1].split(' ')[12] + ' ' + commandValue.split(E2)[1].split(' ')[13] + ' ' + commandValue.split(E2)[1].split(' ')[14] + ' ' + commandValue.split(E2)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5] + ' ' + commandValue.split(E2)[1].split(' ')[6] + ' ' + commandValue.split(E2)[1].split(' ')[8] + ' ' + commandValue.split(E2)[1].split(' ')[9] + ' ' + commandValue.split(E2)[1].split(' ')[10] + ' ' + commandValue.split(E2)[1].split(' ')[11] + ' ' + commandValue.split(E2)[1].split(' ')[12] + ' ' + commandValue.split(E2)[1].split(' ')[13] + ' ' + commandValue.split(E2)[1].split(' ')[14] + ' ' + commandValue.split(E2)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5] + ' ' + commandValue.split(E2)[1].split(' ')[6] + ' ' + commandValue.split(E2)[1].split(' ')[8] + ' ' + commandValue.split(E2)[1].split(' ')[9] + ' ' + commandValue.split(E2)[1].split(' ')[10] + ' ' + commandValue.split(E2)[1].split(' ')[11] + ' ' + commandValue.split(E2)[1].split(' ')[12] + ' ' + commandValue.split(E2)[1].split(' ')[13] + ' ' + commandValue.split(E2)[1].split(' ')[14] + ' ' + commandValue.split(E2)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E2)[1].split(' ')[0] + ' ' + commandValue.split(E2)[1].split(' ')[1] + ' ' + commandValue.split(E2)[1].split(' ')[2] + ' ' + commandValue.split(E2)[1].split(' ')[3] + ' ' + commandValue.split(E2)[1].split(' ')[5] + ' ' + commandValue.split(E2)[1].split(' ')[6] + ' ' + commandValue.split(E2)[1].split(' ')[8] + ' ' + commandValue.split(E2)[1].split(' ')[9] + ' ' + commandValue.split(E2)[1].split(' ')[10] + ' ' + commandValue.split(E2)[1].split(' ')[11] + ' ' + commandValue.split(E2)[1].split(' ')[12] + ' ' + commandValue.split(E2)[1].split(' ')[13] + ' ' + commandValue.split(E2)[1].split(' ')[14] + ' ' + commandValue.split(E2)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qC') {
        if (lang == 0) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5] + ' ' + commandValue.split(E3)[1].split(' ')[6] + ' ' + commandValue.split(E3)[1].split(' ')[8] + ' ' + commandValue.split(E3)[1].split(' ')[9] + ' ' + commandValue.split(E3)[1].split(' ')[10] + ' ' + commandValue.split(E3)[1].split(' ')[11] + ' ' + commandValue.split(E3)[1].split(' ')[12] + ' ' + commandValue.split(E3)[1].split(' ')[13] + ' ' + commandValue.split(E3)[1].split(' ')[14] + ' ' + commandValue.split(E3)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5] + ' ' + commandValue.split(E3)[1].split(' ')[6] + ' ' + commandValue.split(E3)[1].split(' ')[8] + ' ' + commandValue.split(E3)[1].split(' ')[9] + ' ' + commandValue.split(E3)[1].split(' ')[10] + ' ' + commandValue.split(E3)[1].split(' ')[11] + ' ' + commandValue.split(E3)[1].split(' ')[12] + ' ' + commandValue.split(E3)[1].split(' ')[13] + ' ' + commandValue.split(E3)[1].split(' ')[14] + ' ' + commandValue.split(E3)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5] + ' ' + commandValue.split(E3)[1].split(' ')[6] + ' ' + commandValue.split(E3)[1].split(' ')[8] + ' ' + commandValue.split(E3)[1].split(' ')[9] + ' ' + commandValue.split(E3)[1].split(' ')[10] + ' ' + commandValue.split(E3)[1].split(' ')[11] + ' ' + commandValue.split(E3)[1].split(' ')[12] + ' ' + commandValue.split(E3)[1].split(' ')[13] + ' ' + commandValue.split(E3)[1].split(' ')[14] + ' ' + commandValue.split(E3)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5] + ' ' + commandValue.split(E3)[1].split(' ')[6] + ' ' + commandValue.split(E3)[1].split(' ')[8] + ' ' + commandValue.split(E3)[1].split(' ')[9] + ' ' + commandValue.split(E3)[1].split(' ')[10] + ' ' + commandValue.split(E3)[1].split(' ')[11] + ' ' + commandValue.split(E3)[1].split(' ')[12] + ' ' + commandValue.split(E3)[1].split(' ')[13] + ' ' + commandValue.split(E3)[1].split(' ')[14] + ' ' + commandValue.split(E3)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5] + ' ' + commandValue.split(E3)[1].split(' ')[6] + ' ' + commandValue.split(E3)[1].split(' ')[8] + ' ' + commandValue.split(E3)[1].split(' ')[9] + ' ' + commandValue.split(E3)[1].split(' ')[10] + ' ' + commandValue.split(E3)[1].split(' ')[11] + ' ' + commandValue.split(E3)[1].split(' ')[12] + ' ' + commandValue.split(E3)[1].split(' ')[13] + ' ' + commandValue.split(E3)[1].split(' ')[14] + ' ' + commandValue.split(E3)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E3)[1].split(' ')[0] + ' ' + commandValue.split(E3)[1].split(' ')[1] + ' ' + commandValue.split(E3)[1].split(' ')[2] + ' ' + commandValue.split(E3)[1].split(' ')[3] + ' ' + commandValue.split(E3)[1].split(' ')[5] + ' ' + commandValue.split(E3)[1].split(' ')[6] + ' ' + commandValue.split(E3)[1].split(' ')[8] + ' ' + commandValue.split(E3)[1].split(' ')[9] + ' ' + commandValue.split(E3)[1].split(' ')[10] + ' ' + commandValue.split(E3)[1].split(' ')[11] + ' ' + commandValue.split(E3)[1].split(' ')[12] + ' ' + commandValue.split(E3)[1].split(' ')[13] + ' ' + commandValue.split(E3)[1].split(' ')[14] + ' ' + commandValue.split(E3)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qD') {
        if (lang == 0) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5] + ' ' + commandValue.split(E4)[1].split(' ')[6] + ' ' + commandValue.split(E4)[1].split(' ')[8] + ' ' + commandValue.split(E4)[1].split(' ')[9] + ' ' + commandValue.split(E4)[1].split(' ')[10] + ' ' + commandValue.split(E4)[1].split(' ')[11] + ' ' + commandValue.split(E4)[1].split(' ')[12] + ' ' + commandValue.split(E4)[1].split(' ')[13] + ' ' + commandValue.split(E4)[1].split(' ')[14] + ' ' + commandValue.split(E4)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5] + ' ' + commandValue.split(E4)[1].split(' ')[6] + ' ' + commandValue.split(E4)[1].split(' ')[8] + ' ' + commandValue.split(E4)[1].split(' ')[9] + ' ' + commandValue.split(E4)[1].split(' ')[10] + ' ' + commandValue.split(E4)[1].split(' ')[11] + ' ' + commandValue.split(E4)[1].split(' ')[12] + ' ' + commandValue.split(E4)[1].split(' ')[13] + ' ' + commandValue.split(E4)[1].split(' ')[14] + ' ' + commandValue.split(E4)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5] + ' ' + commandValue.split(E4)[1].split(' ')[6] + ' ' + commandValue.split(E4)[1].split(' ')[8] + ' ' + commandValue.split(E4)[1].split(' ')[9] + ' ' + commandValue.split(E4)[1].split(' ')[10] + ' ' + commandValue.split(E4)[1].split(' ')[11] + ' ' + commandValue.split(E4)[1].split(' ')[12] + ' ' + commandValue.split(E4)[1].split(' ')[13] + ' ' + commandValue.split(E4)[1].split(' ')[14] + ' ' + commandValue.split(E4)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5] + ' ' + commandValue.split(E4)[1].split(' ')[6] + ' ' + commandValue.split(E4)[1].split(' ')[8] + ' ' + commandValue.split(E4)[1].split(' ')[9] + ' ' + commandValue.split(E4)[1].split(' ')[10] + ' ' + commandValue.split(E4)[1].split(' ')[11] + ' ' + commandValue.split(E4)[1].split(' ')[12] + ' ' + commandValue.split(E4)[1].split(' ')[13] + ' ' + commandValue.split(E4)[1].split(' ')[14] + ' ' + commandValue.split(E4)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5] + ' ' + commandValue.split(E4)[1].split(' ')[6] + ' ' + commandValue.split(E4)[1].split(' ')[8] + ' ' + commandValue.split(E4)[1].split(' ')[9] + ' ' + commandValue.split(E4)[1].split(' ')[10] + ' ' + commandValue.split(E4)[1].split(' ')[11] + ' ' + commandValue.split(E4)[1].split(' ')[12] + ' ' + commandValue.split(E4)[1].split(' ')[13] + ' ' + commandValue.split(E4)[1].split(' ')[14] + ' ' + commandValue.split(E4)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E4)[1].split(' ')[0] + ' ' + commandValue.split(E4)[1].split(' ')[1] + ' ' + commandValue.split(E4)[1].split(' ')[2] + ' ' + commandValue.split(E4)[1].split(' ')[3] + ' ' + commandValue.split(E4)[1].split(' ')[5] + ' ' + commandValue.split(E4)[1].split(' ')[6] + ' ' + commandValue.split(E4)[1].split(' ')[8] + ' ' + commandValue.split(E4)[1].split(' ')[9] + ' ' + commandValue.split(E4)[1].split(' ')[10] + ' ' + commandValue.split(E4)[1].split(' ')[11] + ' ' + commandValue.split(E4)[1].split(' ')[12] + ' ' + commandValue.split(E4)[1].split(' ')[13] + ' ' + commandValue.split(E4)[1].split(' ')[14] + ' ' + commandValue.split(E4)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qE') {
        if (lang == 0) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5] + ' ' + commandValue.split(E5)[1].split(' ')[6] + ' ' + commandValue.split(E5)[1].split(' ')[8] + ' ' + commandValue.split(E5)[1].split(' ')[9] + ' ' + commandValue.split(E5)[1].split(' ')[10] + ' ' + commandValue.split(E5)[1].split(' ')[11] + ' ' + commandValue.split(E5)[1].split(' ')[12] + ' ' + commandValue.split(E5)[1].split(' ')[13] + ' ' + commandValue.split(E5)[1].split(' ')[14] + ' ' + commandValue.split(E5)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5] + ' ' + commandValue.split(E5)[1].split(' ')[6] + ' ' + commandValue.split(E5)[1].split(' ')[8] + ' ' + commandValue.split(E5)[1].split(' ')[9] + ' ' + commandValue.split(E5)[1].split(' ')[10] + ' ' + commandValue.split(E5)[1].split(' ')[11] + ' ' + commandValue.split(E5)[1].split(' ')[12] + ' ' + commandValue.split(E5)[1].split(' ')[13] + ' ' + commandValue.split(E5)[1].split(' ')[14] + ' ' + commandValue.split(E5)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5] + ' ' + commandValue.split(E5)[1].split(' ')[6] + ' ' + commandValue.split(E5)[1].split(' ')[8] + ' ' + commandValue.split(E5)[1].split(' ')[9] + ' ' + commandValue.split(E5)[1].split(' ')[10] + ' ' + commandValue.split(E5)[1].split(' ')[11] + ' ' + commandValue.split(E5)[1].split(' ')[12] + ' ' + commandValue.split(E5)[1].split(' ')[13] + ' ' + commandValue.split(E5)[1].split(' ')[14] + ' ' + commandValue.split(E5)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5] + ' ' + commandValue.split(E5)[1].split(' ')[6] + ' ' + commandValue.split(E5)[1].split(' ')[8] + ' ' + commandValue.split(E5)[1].split(' ')[9] + ' ' + commandValue.split(E5)[1].split(' ')[10] + ' ' + commandValue.split(E5)[1].split(' ')[11] + ' ' + commandValue.split(E5)[1].split(' ')[12] + ' ' + commandValue.split(E5)[1].split(' ')[13] + ' ' + commandValue.split(E5)[1].split(' ')[14] + ' ' + commandValue.split(E5)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5] + ' ' + commandValue.split(E5)[1].split(' ')[6] + ' ' + commandValue.split(E5)[1].split(' ')[8] + ' ' + commandValue.split(E5)[1].split(' ')[9] + ' ' + commandValue.split(E5)[1].split(' ')[10] + ' ' + commandValue.split(E5)[1].split(' ')[11] + ' ' + commandValue.split(E5)[1].split(' ')[12] + ' ' + commandValue.split(E5)[1].split(' ')[13] + ' ' + commandValue.split(E5)[1].split(' ')[14] + ' ' + commandValue.split(E5)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E5)[1].split(' ')[0] + ' ' + commandValue.split(E5)[1].split(' ')[1] + ' ' + commandValue.split(E5)[1].split(' ')[2] + ' ' + commandValue.split(E5)[1].split(' ')[3] + ' ' + commandValue.split(E5)[1].split(' ')[5] + ' ' + commandValue.split(E5)[1].split(' ')[6] + ' ' + commandValue.split(E5)[1].split(' ')[8] + ' ' + commandValue.split(E5)[1].split(' ')[9] + ' ' + commandValue.split(E5)[1].split(' ')[10] + ' ' + commandValue.split(E5)[1].split(' ')[11] + ' ' + commandValue.split(E5)[1].split(' ')[12] + ' ' + commandValue.split(E5)[1].split(' ')[13] + ' ' + commandValue.split(E5)[1].split(' ')[14] + ' ' + commandValue.split(E5)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qF') {
        if (lang == 0) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5] + ' ' + commandValue.split(E6)[1].split(' ')[6] + ' ' + commandValue.split(E6)[1].split(' ')[8] + ' ' + commandValue.split(E6)[1].split(' ')[9] + ' ' + commandValue.split(E6)[1].split(' ')[10] + ' ' + commandValue.split(E6)[1].split(' ')[11] + ' ' + commandValue.split(E6)[1].split(' ')[12] + ' ' + commandValue.split(E6)[1].split(' ')[13] + ' ' + commandValue.split(E6)[1].split(' ')[14] + ' ' + commandValue.split(E6)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5] + ' ' + commandValue.split(E6)[1].split(' ')[6] + ' ' + commandValue.split(E6)[1].split(' ')[8] + ' ' + commandValue.split(E6)[1].split(' ')[9] + ' ' + commandValue.split(E6)[1].split(' ')[10] + ' ' + commandValue.split(E6)[1].split(' ')[11] + ' ' + commandValue.split(E6)[1].split(' ')[12] + ' ' + commandValue.split(E6)[1].split(' ')[13] + ' ' + commandValue.split(E6)[1].split(' ')[14] + ' ' + commandValue.split(E6)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5] + ' ' + commandValue.split(E6)[1].split(' ')[6] + ' ' + commandValue.split(E6)[1].split(' ')[8] + ' ' + commandValue.split(E6)[1].split(' ')[9] + ' ' + commandValue.split(E6)[1].split(' ')[10] + ' ' + commandValue.split(E6)[1].split(' ')[11] + ' ' + commandValue.split(E6)[1].split(' ')[12] + ' ' + commandValue.split(E6)[1].split(' ')[13] + ' ' + commandValue.split(E6)[1].split(' ')[14] + ' ' + commandValue.split(E6)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5] + ' ' + commandValue.split(E6)[1].split(' ')[6] + ' ' + commandValue.split(E6)[1].split(' ')[8] + ' ' + commandValue.split(E6)[1].split(' ')[9] + ' ' + commandValue.split(E6)[1].split(' ')[10] + ' ' + commandValue.split(E6)[1].split(' ')[11] + ' ' + commandValue.split(E6)[1].split(' ')[12] + ' ' + commandValue.split(E6)[1].split(' ')[13] + ' ' + commandValue.split(E6)[1].split(' ')[14] + ' ' + commandValue.split(E6)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5] + ' ' + commandValue.split(E6)[1].split(' ')[6] + ' ' + commandValue.split(E6)[1].split(' ')[8] + ' ' + commandValue.split(E6)[1].split(' ')[9] + ' ' + commandValue.split(E6)[1].split(' ')[10] + ' ' + commandValue.split(E6)[1].split(' ')[11] + ' ' + commandValue.split(E6)[1].split(' ')[12] + ' ' + commandValue.split(E6)[1].split(' ')[13] + ' ' + commandValue.split(E6)[1].split(' ')[14] + ' ' + commandValue.split(E6)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E6)[1].split(' ')[0] + ' ' + commandValue.split(E6)[1].split(' ')[1] + ' ' + commandValue.split(E6)[1].split(' ')[2] + ' ' + commandValue.split(E6)[1].split(' ')[3] + ' ' + commandValue.split(E6)[1].split(' ')[5] + ' ' + commandValue.split(E6)[1].split(' ')[6] + ' ' + commandValue.split(E6)[1].split(' ')[8] + ' ' + commandValue.split(E6)[1].split(' ')[9] + ' ' + commandValue.split(E6)[1].split(' ')[10] + ' ' + commandValue.split(E6)[1].split(' ')[11] + ' ' + commandValue.split(E6)[1].split(' ')[12] + ' ' + commandValue.split(E6)[1].split(' ')[13] + ' ' + commandValue.split(E6)[1].split(' ')[14] + ' ' + commandValue.split(E6)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qG') {
        if (lang == 0) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5] + ' ' + commandValue.split(E7)[1].split(' ')[6] + ' ' + commandValue.split(E7)[1].split(' ')[8] + ' ' + commandValue.split(E7)[1].split(' ')[9] + ' ' + commandValue.split(E7)[1].split(' ')[10] + ' ' + commandValue.split(E7)[1].split(' ')[11] + ' ' + commandValue.split(E7)[1].split(' ')[12] + ' ' + commandValue.split(E7)[1].split(' ')[13] + ' ' + commandValue.split(E7)[1].split(' ')[14] + ' ' + commandValue.split(E7)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5] + ' ' + commandValue.split(E7)[1].split(' ')[6] + ' ' + commandValue.split(E7)[1].split(' ')[8] + ' ' + commandValue.split(E7)[1].split(' ')[9] + ' ' + commandValue.split(E7)[1].split(' ')[10] + ' ' + commandValue.split(E7)[1].split(' ')[11] + ' ' + commandValue.split(E7)[1].split(' ')[12] + ' ' + commandValue.split(E7)[1].split(' ')[13] + ' ' + commandValue.split(E7)[1].split(' ')[14] + ' ' + commandValue.split(E7)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5] + ' ' + commandValue.split(E7)[1].split(' ')[6] + ' ' + commandValue.split(E7)[1].split(' ')[8] + ' ' + commandValue.split(E7)[1].split(' ')[9] + ' ' + commandValue.split(E7)[1].split(' ')[10] + ' ' + commandValue.split(E7)[1].split(' ')[11] + ' ' + commandValue.split(E7)[1].split(' ')[12] + ' ' + commandValue.split(E7)[1].split(' ')[13] + ' ' + commandValue.split(E7)[1].split(' ')[14] + ' ' + commandValue.split(E7)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5] + ' ' + commandValue.split(E7)[1].split(' ')[6] + ' ' + commandValue.split(E7)[1].split(' ')[8] + ' ' + commandValue.split(E7)[1].split(' ')[9] + ' ' + commandValue.split(E7)[1].split(' ')[10] + ' ' + commandValue.split(E7)[1].split(' ')[11] + ' ' + commandValue.split(E7)[1].split(' ')[12] + ' ' + commandValue.split(E7)[1].split(' ')[13] + ' ' + commandValue.split(E7)[1].split(' ')[14] + ' ' + commandValue.split(E7)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5] + ' ' + commandValue.split(E7)[1].split(' ')[6] + ' ' + commandValue.split(E7)[1].split(' ')[8] + ' ' + commandValue.split(E7)[1].split(' ')[9] + ' ' + commandValue.split(E7)[1].split(' ')[10] + ' ' + commandValue.split(E7)[1].split(' ')[11] + ' ' + commandValue.split(E7)[1].split(' ')[12] + ' ' + commandValue.split(E7)[1].split(' ')[13] + ' ' + commandValue.split(E7)[1].split(' ')[14] + ' ' + commandValue.split(E7)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E7)[1].split(' ')[0] + ' ' + commandValue.split(E7)[1].split(' ')[1] + ' ' + commandValue.split(E7)[1].split(' ')[2] + ' ' + commandValue.split(E7)[1].split(' ')[3] + ' ' + commandValue.split(E7)[1].split(' ')[5] + ' ' + commandValue.split(E7)[1].split(' ')[6] + ' ' + commandValue.split(E7)[1].split(' ')[8] + ' ' + commandValue.split(E7)[1].split(' ')[9] + ' ' + commandValue.split(E7)[1].split(' ')[10] + ' ' + commandValue.split(E7)[1].split(' ')[11] + ' ' + commandValue.split(E7)[1].split(' ')[12] + ' ' + commandValue.split(E7)[1].split(' ')[13] + ' ' + commandValue.split(E7)[1].split(' ')[14] + ' ' + commandValue.split(E7)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qH') {
        if (lang == 0) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5] + ' ' + commandValue.split(E8)[1].split(' ')[6] + ' ' + commandValue.split(E8)[1].split(' ')[8] + ' ' + commandValue.split(E8)[1].split(' ')[9] + ' ' + commandValue.split(E8)[1].split(' ')[10] + ' ' + commandValue.split(E8)[1].split(' ')[11] + ' ' + commandValue.split(E8)[1].split(' ')[12] + ' ' + commandValue.split(E8)[1].split(' ')[13] + ' ' + commandValue.split(E8)[1].split(' ')[14] + ' ' + commandValue.split(E8)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5] + ' ' + commandValue.split(E8)[1].split(' ')[6] + ' ' + commandValue.split(E8)[1].split(' ')[8] + ' ' + commandValue.split(E8)[1].split(' ')[9] + ' ' + commandValue.split(E8)[1].split(' ')[10] + ' ' + commandValue.split(E8)[1].split(' ')[11] + ' ' + commandValue.split(E8)[1].split(' ')[12] + ' ' + commandValue.split(E8)[1].split(' ')[13] + ' ' + commandValue.split(E8)[1].split(' ')[14] + ' ' + commandValue.split(E8)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5] + ' ' + commandValue.split(E8)[1].split(' ')[6] + ' ' + commandValue.split(E8)[1].split(' ')[8] + ' ' + commandValue.split(E8)[1].split(' ')[9] + ' ' + commandValue.split(E8)[1].split(' ')[10] + ' ' + commandValue.split(E8)[1].split(' ')[11] + ' ' + commandValue.split(E8)[1].split(' ')[12] + ' ' + commandValue.split(E8)[1].split(' ')[13] + ' ' + commandValue.split(E8)[1].split(' ')[14] + ' ' + commandValue.split(E8)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5] + ' ' + commandValue.split(E8)[1].split(' ')[6] + ' ' + commandValue.split(E8)[1].split(' ')[8] + ' ' + commandValue.split(E8)[1].split(' ')[9] + ' ' + commandValue.split(E8)[1].split(' ')[10] + ' ' + commandValue.split(E8)[1].split(' ')[11] + ' ' + commandValue.split(E8)[1].split(' ')[12] + ' ' + commandValue.split(E8)[1].split(' ')[13] + ' ' + commandValue.split(E8)[1].split(' ')[14] + ' ' + commandValue.split(E8)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5] + ' ' + commandValue.split(E8)[1].split(' ')[6] + ' ' + commandValue.split(E8)[1].split(' ')[8] + ' ' + commandValue.split(E8)[1].split(' ')[9] + ' ' + commandValue.split(E8)[1].split(' ')[10] + ' ' + commandValue.split(E8)[1].split(' ')[11] + ' ' + commandValue.split(E8)[1].split(' ')[12] + ' ' + commandValue.split(E8)[1].split(' ')[13] + ' ' + commandValue.split(E8)[1].split(' ')[14] + ' ' + commandValue.split(E8)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E8)[1].split(' ')[0] + ' ' + commandValue.split(E8)[1].split(' ')[1] + ' ' + commandValue.split(E8)[1].split(' ')[2] + ' ' + commandValue.split(E8)[1].split(' ')[3] + ' ' + commandValue.split(E8)[1].split(' ')[5] + ' ' + commandValue.split(E8)[1].split(' ')[6] + ' ' + commandValue.split(E8)[1].split(' ')[8] + ' ' + commandValue.split(E8)[1].split(' ')[9] + ' ' + commandValue.split(E8)[1].split(' ')[10] + ' ' + commandValue.split(E8)[1].split(' ')[11] + ' ' + commandValue.split(E8)[1].split(' ')[12] + ' ' + commandValue.split(E8)[1].split(' ')[13] + ' ' + commandValue.split(E8)[1].split(' ')[14] + ' ' + commandValue.split(E8)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qI') {
        if (lang == 0) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5] + ' ' + commandValue.split(E9)[1].split(' ')[6] + ' ' + commandValue.split(E9)[1].split(' ')[8] + ' ' + commandValue.split(E9)[1].split(' ')[9] + ' ' + commandValue.split(E9)[1].split(' ')[10] + ' ' + commandValue.split(E9)[1].split(' ')[11] + ' ' + commandValue.split(E9)[1].split(' ')[12] + ' ' + commandValue.split(E9)[1].split(' ')[13] + ' ' + commandValue.split(E9)[1].split(' ')[14] + ' ' + commandValue.split(E9)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5] + ' ' + commandValue.split(E9)[1].split(' ')[6] + ' ' + commandValue.split(E9)[1].split(' ')[8] + ' ' + commandValue.split(E9)[1].split(' ')[9] + ' ' + commandValue.split(E9)[1].split(' ')[10] + ' ' + commandValue.split(E9)[1].split(' ')[11] + ' ' + commandValue.split(E9)[1].split(' ')[12] + ' ' + commandValue.split(E9)[1].split(' ')[13] + ' ' + commandValue.split(E9)[1].split(' ')[14] + ' ' + commandValue.split(E9)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5] + ' ' + commandValue.split(E9)[1].split(' ')[6] + ' ' + commandValue.split(E9)[1].split(' ')[8] + ' ' + commandValue.split(E9)[1].split(' ')[9] + ' ' + commandValue.split(E9)[1].split(' ')[10] + ' ' + commandValue.split(E9)[1].split(' ')[11] + ' ' + commandValue.split(E9)[1].split(' ')[12] + ' ' + commandValue.split(E9)[1].split(' ')[13] + ' ' + commandValue.split(E9)[1].split(' ')[14] + ' ' + commandValue.split(E9)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5] + ' ' + commandValue.split(E9)[1].split(' ')[6] + ' ' + commandValue.split(E9)[1].split(' ')[8] + ' ' + commandValue.split(E9)[1].split(' ')[9] + ' ' + commandValue.split(E9)[1].split(' ')[10] + ' ' + commandValue.split(E9)[1].split(' ')[11] + ' ' + commandValue.split(E9)[1].split(' ')[12] + ' ' + commandValue.split(E9)[1].split(' ')[13] + ' ' + commandValue.split(E9)[1].split(' ')[14] + ' ' + commandValue.split(E9)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5] + ' ' + commandValue.split(E9)[1].split(' ')[6] + ' ' + commandValue.split(E9)[1].split(' ')[8] + ' ' + commandValue.split(E9)[1].split(' ')[9] + ' ' + commandValue.split(E9)[1].split(' ')[10] + ' ' + commandValue.split(E9)[1].split(' ')[11] + ' ' + commandValue.split(E9)[1].split(' ')[12] + ' ' + commandValue.split(E9)[1].split(' ')[13] + ' ' + commandValue.split(E9)[1].split(' ')[14] + ' ' + commandValue.split(E9)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E9)[1].split(' ')[0] + ' ' + commandValue.split(E9)[1].split(' ')[1] + ' ' + commandValue.split(E9)[1].split(' ')[2] + ' ' + commandValue.split(E9)[1].split(' ')[3] + ' ' + commandValue.split(E9)[1].split(' ')[5] + ' ' + commandValue.split(E9)[1].split(' ')[6] + ' ' + commandValue.split(E9)[1].split(' ')[8] + ' ' + commandValue.split(E9)[1].split(' ')[9] + ' ' + commandValue.split(E9)[1].split(' ')[10] + ' ' + commandValue.split(E9)[1].split(' ')[11] + ' ' + commandValue.split(E9)[1].split(' ')[12] + ' ' + commandValue.split(E9)[1].split(' ')[13] + ' ' + commandValue.split(E9)[1].split(' ')[14] + ' ' + commandValue.split(E9)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qJ') {
        if (lang == 0) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5] + ' ' + commandValue.split(E10)[1].split(' ')[6] + ' ' + commandValue.split(E10)[1].split(' ')[8] + ' ' + commandValue.split(E10)[1].split(' ')[9] + ' ' + commandValue.split(E10)[1].split(' ')[10] + ' ' + commandValue.split(E10)[1].split(' ')[11] + ' ' + commandValue.split(E10)[1].split(' ')[12] + ' ' + commandValue.split(E10)[1].split(' ')[13] + ' ' + commandValue.split(E10)[1].split(' ')[14] + ' ' + commandValue.split(E10)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5] + ' ' + commandValue.split(E10)[1].split(' ')[6] + ' ' + commandValue.split(E10)[1].split(' ')[8] + ' ' + commandValue.split(E10)[1].split(' ')[9] + ' ' + commandValue.split(E10)[1].split(' ')[10] + ' ' + commandValue.split(E10)[1].split(' ')[11] + ' ' + commandValue.split(E10)[1].split(' ')[12] + ' ' + commandValue.split(E10)[1].split(' ')[13] + ' ' + commandValue.split(E10)[1].split(' ')[14] + ' ' + commandValue.split(E10)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5] + ' ' + commandValue.split(E10)[1].split(' ')[6] + ' ' + commandValue.split(E10)[1].split(' ')[8] + ' ' + commandValue.split(E10)[1].split(' ')[9] + ' ' + commandValue.split(E10)[1].split(' ')[10] + ' ' + commandValue.split(E10)[1].split(' ')[11] + ' ' + commandValue.split(E10)[1].split(' ')[12] + ' ' + commandValue.split(E10)[1].split(' ')[13] + ' ' + commandValue.split(E10)[1].split(' ')[14] + ' ' + commandValue.split(E10)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5] + ' ' + commandValue.split(E10)[1].split(' ')[6] + ' ' + commandValue.split(E10)[1].split(' ')[8] + ' ' + commandValue.split(E10)[1].split(' ')[9] + ' ' + commandValue.split(E10)[1].split(' ')[10] + ' ' + commandValue.split(E10)[1].split(' ')[11] + ' ' + commandValue.split(E10)[1].split(' ')[12] + ' ' + commandValue.split(E10)[1].split(' ')[13] + ' ' + commandValue.split(E10)[1].split(' ')[14] + ' ' + commandValue.split(E10)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5] + ' ' + commandValue.split(E10)[1].split(' ')[6] + ' ' + commandValue.split(E10)[1].split(' ')[8] + ' ' + commandValue.split(E10)[1].split(' ')[9] + ' ' + commandValue.split(E10)[1].split(' ')[10] + ' ' + commandValue.split(E10)[1].split(' ')[11] + ' ' + commandValue.split(E10)[1].split(' ')[12] + ' ' + commandValue.split(E10)[1].split(' ')[13] + ' ' + commandValue.split(E10)[1].split(' ')[14] + ' ' + commandValue.split(E10)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E10)[1].split(' ')[0] + ' ' + commandValue.split(E10)[1].split(' ')[1] + ' ' + commandValue.split(E10)[1].split(' ')[2] + ' ' + commandValue.split(E10)[1].split(' ')[3] + ' ' + commandValue.split(E10)[1].split(' ')[5] + ' ' + commandValue.split(E10)[1].split(' ')[6] + ' ' + commandValue.split(E10)[1].split(' ')[8] + ' ' + commandValue.split(E10)[1].split(' ')[9] + ' ' + commandValue.split(E10)[1].split(' ')[10] + ' ' + commandValue.split(E10)[1].split(' ')[11] + ' ' + commandValue.split(E10)[1].split(' ')[12] + ' ' + commandValue.split(E10)[1].split(' ')[13] + ' ' + commandValue.split(E10)[1].split(' ')[14] + ' ' + commandValue.split(E10)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qK') {
        if (lang == 0) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[6] + ' ' + commandValue.split(E11)[1].split(' ')[8] + ' ' + commandValue.split(E11)[1].split(' ')[9] + ' ' + commandValue.split(E11)[1].split(' ')[10] + ' ' + commandValue.split(E11)[1].split(' ')[11] + ' ' + commandValue.split(E11)[1].split(' ')[12] + ' ' + commandValue.split(E11)[1].split(' ')[13] + ' ' + commandValue.split(E11)[1].split(' ')[14] + ' ' + commandValue.split(E11)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[6] + ' ' + commandValue.split(E11)[1].split(' ')[8] + ' ' + commandValue.split(E11)[1].split(' ')[9] + ' ' + commandValue.split(E11)[1].split(' ')[10] + ' ' + commandValue.split(E11)[1].split(' ')[11] + ' ' + commandValue.split(E11)[1].split(' ')[12] + ' ' + commandValue.split(E11)[1].split(' ')[13] + ' ' + commandValue.split(E11)[1].split(' ')[14] + ' ' + commandValue.split(E11)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[6] + ' ' + commandValue.split(E11)[1].split(' ')[8] + ' ' + commandValue.split(E11)[1].split(' ')[9] + ' ' + commandValue.split(E11)[1].split(' ')[10] + ' ' + commandValue.split(E11)[1].split(' ')[11] + ' ' + commandValue.split(E11)[1].split(' ')[12] + ' ' + commandValue.split(E11)[1].split(' ')[13] + ' ' + commandValue.split(E11)[1].split(' ')[14] + ' ' + commandValue.split(E11)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[6] + ' ' + commandValue.split(E11)[1].split(' ')[8] + ' ' + commandValue.split(E11)[1].split(' ')[9] + ' ' + commandValue.split(E11)[1].split(' ')[10] + ' ' + commandValue.split(E11)[1].split(' ')[11] + ' ' + commandValue.split(E11)[1].split(' ')[12] + ' ' + commandValue.split(E11)[1].split(' ')[13] + ' ' + commandValue.split(E11)[1].split(' ')[14] + ' ' + commandValue.split(E11)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[6] + ' ' + commandValue.split(E11)[1].split(' ')[8] + ' ' + commandValue.split(E11)[1].split(' ')[9] + ' ' + commandValue.split(E11)[1].split(' ')[10] + ' ' + commandValue.split(E11)[1].split(' ')[11] + ' ' + commandValue.split(E11)[1].split(' ')[12] + ' ' + commandValue.split(E11)[1].split(' ')[13] + ' ' + commandValue.split(E11)[1].split(' ')[14] + ' ' + commandValue.split(E11)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E11)[1].split(' ')[0] + ' ' + commandValue.split(E11)[1].split(' ')[1] + ' ' + commandValue.split(E11)[1].split(' ')[2] + ' ' + commandValue.split(E11)[1].split(' ')[3] + ' ' + commandValue.split(E11)[1].split(' ')[5] + ' ' + commandValue.split(E11)[1].split(' ')[6] + ' ' + commandValue.split(E11)[1].split(' ')[8] + ' ' + commandValue.split(E11)[1].split(' ')[9] + ' ' + commandValue.split(E11)[1].split(' ')[10] + ' ' + commandValue.split(E11)[1].split(' ')[11] + ' ' + commandValue.split(E11)[1].split(' ')[12] + ' ' + commandValue.split(E11)[1].split(' ')[13] + ' ' + commandValue.split(E11)[1].split(' ')[14] + ' ' + commandValue.split(E11)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qL') {
        if (lang == 0) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[6] + ' ' + commandValue.split(E12)[1].split(' ')[8] + ' ' + commandValue.split(E12)[1].split(' ')[9] + ' ' + commandValue.split(E12)[1].split(' ')[10] + ' ' + commandValue.split(E12)[1].split(' ')[11] + ' ' + commandValue.split(E12)[1].split(' ')[12] + ' ' + commandValue.split(E12)[1].split(' ')[13] + ' ' + commandValue.split(E12)[1].split(' ')[14] + ' ' + commandValue.split(E12)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[6] + ' ' + commandValue.split(E12)[1].split(' ')[8] + ' ' + commandValue.split(E12)[1].split(' ')[9] + ' ' + commandValue.split(E12)[1].split(' ')[10] + ' ' + commandValue.split(E12)[1].split(' ')[11] + ' ' + commandValue.split(E12)[1].split(' ')[12] + ' ' + commandValue.split(E12)[1].split(' ')[13] + ' ' + commandValue.split(E12)[1].split(' ')[14] + ' ' + commandValue.split(E12)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[6] + ' ' + commandValue.split(E12)[1].split(' ')[8] + ' ' + commandValue.split(E12)[1].split(' ')[9] + ' ' + commandValue.split(E12)[1].split(' ')[10] + ' ' + commandValue.split(E12)[1].split(' ')[11] + ' ' + commandValue.split(E12)[1].split(' ')[12] + ' ' + commandValue.split(E12)[1].split(' ')[13] + ' ' + commandValue.split(E12)[1].split(' ')[14] + ' ' + commandValue.split(E12)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[6] + ' ' + commandValue.split(E12)[1].split(' ')[8] + ' ' + commandValue.split(E12)[1].split(' ')[9] + ' ' + commandValue.split(E12)[1].split(' ')[10] + ' ' + commandValue.split(E12)[1].split(' ')[11] + ' ' + commandValue.split(E12)[1].split(' ')[12] + ' ' + commandValue.split(E12)[1].split(' ')[13] + ' ' + commandValue.split(E12)[1].split(' ')[14] + ' ' + commandValue.split(E12)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[6] + ' ' + commandValue.split(E12)[1].split(' ')[8] + ' ' + commandValue.split(E12)[1].split(' ')[9] + ' ' + commandValue.split(E12)[1].split(' ')[10] + ' ' + commandValue.split(E12)[1].split(' ')[11] + ' ' + commandValue.split(E12)[1].split(' ')[12] + ' ' + commandValue.split(E12)[1].split(' ')[13] + ' ' + commandValue.split(E12)[1].split(' ')[14] + ' ' + commandValue.split(E12)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E12)[1].split(' ')[0] + ' ' + commandValue.split(E12)[1].split(' ')[1] + ' ' + commandValue.split(E12)[1].split(' ')[2] + ' ' + commandValue.split(E12)[1].split(' ')[3] + ' ' + commandValue.split(E12)[1].split(' ')[5] + ' ' + commandValue.split(E12)[1].split(' ')[6] + ' ' + commandValue.split(E12)[1].split(' ')[8] + ' ' + commandValue.split(E12)[1].split(' ')[9] + ' ' + commandValue.split(E12)[1].split(' ')[10] + ' ' + commandValue.split(E12)[1].split(' ')[11] + ' ' + commandValue.split(E12)[1].split(' ')[12] + ' ' + commandValue.split(E12)[1].split(' ')[13] + ' ' + commandValue.split(E12)[1].split(' ')[14] + ' ' + commandValue.split(E12)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qM') {
        if (lang == 0) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[6] + ' ' + commandValue.split(E13)[1].split(' ')[8] + ' ' + commandValue.split(E13)[1].split(' ')[9] + ' ' + commandValue.split(E13)[1].split(' ')[10] + ' ' + commandValue.split(E13)[1].split(' ')[11] + ' ' + commandValue.split(E13)[1].split(' ')[12] + ' ' + commandValue.split(E13)[1].split(' ')[13] + ' ' + commandValue.split(E13)[1].split(' ')[14] + ' ' + commandValue.split(E13)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[6] + ' ' + commandValue.split(E13)[1].split(' ')[8] + ' ' + commandValue.split(E13)[1].split(' ')[9] + ' ' + commandValue.split(E13)[1].split(' ')[10] + ' ' + commandValue.split(E13)[1].split(' ')[11] + ' ' + commandValue.split(E13)[1].split(' ')[12] + ' ' + commandValue.split(E13)[1].split(' ')[13] + ' ' + commandValue.split(E13)[1].split(' ')[14] + ' ' + commandValue.split(E13)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[6] + ' ' + commandValue.split(E13)[1].split(' ')[8] + ' ' + commandValue.split(E13)[1].split(' ')[9] + ' ' + commandValue.split(E13)[1].split(' ')[10] + ' ' + commandValue.split(E13)[1].split(' ')[11] + ' ' + commandValue.split(E13)[1].split(' ')[12] + ' ' + commandValue.split(E13)[1].split(' ')[13] + ' ' + commandValue.split(E13)[1].split(' ')[14] + ' ' + commandValue.split(E13)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[6] + ' ' + commandValue.split(E13)[1].split(' ')[8] + ' ' + commandValue.split(E13)[1].split(' ')[9] + ' ' + commandValue.split(E13)[1].split(' ')[10] + ' ' + commandValue.split(E13)[1].split(' ')[11] + ' ' + commandValue.split(E13)[1].split(' ')[12] + ' ' + commandValue.split(E13)[1].split(' ')[13] + ' ' + commandValue.split(E13)[1].split(' ')[14] + ' ' + commandValue.split(E13)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[6] + ' ' + commandValue.split(E13)[1].split(' ')[8] + ' ' + commandValue.split(E13)[1].split(' ')[9] + ' ' + commandValue.split(E13)[1].split(' ')[10] + ' ' + commandValue.split(E13)[1].split(' ')[11] + ' ' + commandValue.split(E13)[1].split(' ')[12] + ' ' + commandValue.split(E13)[1].split(' ')[13] + ' ' + commandValue.split(E13)[1].split(' ')[14] + ' ' + commandValue.split(E13)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E13)[1].split(' ')[0] + ' ' + commandValue.split(E13)[1].split(' ')[1] + ' ' + commandValue.split(E13)[1].split(' ')[2] + ' ' + commandValue.split(E13)[1].split(' ')[3] + ' ' + commandValue.split(E13)[1].split(' ')[5] + ' ' + commandValue.split(E13)[1].split(' ')[6] + ' ' + commandValue.split(E13)[1].split(' ')[8] + ' ' + commandValue.split(E13)[1].split(' ')[9] + ' ' + commandValue.split(E13)[1].split(' ')[10] + ' ' + commandValue.split(E13)[1].split(' ')[11] + ' ' + commandValue.split(E13)[1].split(' ')[12] + ' ' + commandValue.split(E13)[1].split(' ')[13] + ' ' + commandValue.split(E13)[1].split(' ')[14] + ' ' + commandValue.split(E13)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qN') {
        if (lang == 0) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5] + ' ' + commandValue.split(E14)[1].split(' ')[6] + ' ' + commandValue.split(E14)[1].split(' ')[8] + ' ' + commandValue.split(E14)[1].split(' ')[9] + ' ' + commandValue.split(E14)[1].split(' ')[10] + ' ' + commandValue.split(E14)[1].split(' ')[11] + ' ' + commandValue.split(E14)[1].split(' ')[12] + ' ' + commandValue.split(E14)[1].split(' ')[13] + ' ' + commandValue.split(E14)[1].split(' ')[14] + ' ' + commandValue.split(E14)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5] + ' ' + commandValue.split(E14)[1].split(' ')[6] + ' ' + commandValue.split(E14)[1].split(' ')[8] + ' ' + commandValue.split(E14)[1].split(' ')[9] + ' ' + commandValue.split(E14)[1].split(' ')[10] + ' ' + commandValue.split(E14)[1].split(' ')[11] + ' ' + commandValue.split(E14)[1].split(' ')[12] + ' ' + commandValue.split(E14)[1].split(' ')[13] + ' ' + commandValue.split(E14)[1].split(' ')[14] + ' ' + commandValue.split(E14)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5] + ' ' + commandValue.split(E14)[1].split(' ')[6] + ' ' + commandValue.split(E14)[1].split(' ')[8] + ' ' + commandValue.split(E14)[1].split(' ')[9] + ' ' + commandValue.split(E14)[1].split(' ')[10] + ' ' + commandValue.split(E14)[1].split(' ')[11] + ' ' + commandValue.split(E14)[1].split(' ')[12] + ' ' + commandValue.split(E14)[1].split(' ')[13] + ' ' + commandValue.split(E14)[1].split(' ')[14] + ' ' + commandValue.split(E14)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5] + ' ' + commandValue.split(E14)[1].split(' ')[6] + ' ' + commandValue.split(E14)[1].split(' ')[8] + ' ' + commandValue.split(E14)[1].split(' ')[9] + ' ' + commandValue.split(E14)[1].split(' ')[10] + ' ' + commandValue.split(E14)[1].split(' ')[11] + ' ' + commandValue.split(E14)[1].split(' ')[12] + ' ' + commandValue.split(E14)[1].split(' ')[13] + ' ' + commandValue.split(E14)[1].split(' ')[14] + ' ' + commandValue.split(E14)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5] + ' ' + commandValue.split(E14)[1].split(' ')[6] + ' ' + commandValue.split(E14)[1].split(' ')[8] + ' ' + commandValue.split(E14)[1].split(' ')[9] + ' ' + commandValue.split(E14)[1].split(' ')[10] + ' ' + commandValue.split(E14)[1].split(' ')[11] + ' ' + commandValue.split(E14)[1].split(' ')[12] + ' ' + commandValue.split(E14)[1].split(' ')[13] + ' ' + commandValue.split(E14)[1].split(' ')[14] + ' ' + commandValue.split(E14)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E14)[1].split(' ')[0] + ' ' + commandValue.split(E14)[1].split(' ')[1] + ' ' + commandValue.split(E14)[1].split(' ')[2] + ' ' + commandValue.split(E14)[1].split(' ')[3] + ' ' + commandValue.split(E14)[1].split(' ')[5] + ' ' + commandValue.split(E14)[1].split(' ')[6] + ' ' + commandValue.split(E14)[1].split(' ')[8] + ' ' + commandValue.split(E14)[1].split(' ')[9] + ' ' + commandValue.split(E14)[1].split(' ')[10] + ' ' + commandValue.split(E14)[1].split(' ')[11] + ' ' + commandValue.split(E14)[1].split(' ')[12] + ' ' + commandValue.split(E14)[1].split(' ')[13] + ' ' + commandValue.split(E14)[1].split(' ')[14] + ' ' + commandValue.split(E14)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qO') {
        if (lang == 0) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[6] + ' ' + commandValue.split(E15)[1].split(' ')[8] + ' ' + commandValue.split(E15)[1].split(' ')[9] + ' ' + commandValue.split(E15)[1].split(' ')[10] + ' ' + commandValue.split(E15)[1].split(' ')[11] + ' ' + commandValue.split(E15)[1].split(' ')[12] + ' ' + commandValue.split(E15)[1].split(' ')[13] + ' ' + commandValue.split(E15)[1].split(' ')[14] + ' ' + commandValue.split(E15)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[6] + ' ' + commandValue.split(E15)[1].split(' ')[8] + ' ' + commandValue.split(E15)[1].split(' ')[9] + ' ' + commandValue.split(E15)[1].split(' ')[10] + ' ' + commandValue.split(E15)[1].split(' ')[11] + ' ' + commandValue.split(E15)[1].split(' ')[12] + ' ' + commandValue.split(E15)[1].split(' ')[13] + ' ' + commandValue.split(E15)[1].split(' ')[14] + ' ' + commandValue.split(E15)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[6] + ' ' + commandValue.split(E15)[1].split(' ')[8] + ' ' + commandValue.split(E15)[1].split(' ')[9] + ' ' + commandValue.split(E15)[1].split(' ')[10] + ' ' + commandValue.split(E15)[1].split(' ')[11] + ' ' + commandValue.split(E15)[1].split(' ')[12] + ' ' + commandValue.split(E15)[1].split(' ')[13] + ' ' + commandValue.split(E15)[1].split(' ')[14] + ' ' + commandValue.split(E15)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[6] + ' ' + commandValue.split(E15)[1].split(' ')[8] + ' ' + commandValue.split(E15)[1].split(' ')[9] + ' ' + commandValue.split(E15)[1].split(' ')[10] + ' ' + commandValue.split(E15)[1].split(' ')[11] + ' ' + commandValue.split(E15)[1].split(' ')[12] + ' ' + commandValue.split(E15)[1].split(' ')[13] + ' ' + commandValue.split(E15)[1].split(' ')[14] + ' ' + commandValue.split(E15)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[6] + ' ' + commandValue.split(E15)[1].split(' ')[8] + ' ' + commandValue.split(E15)[1].split(' ')[9] + ' ' + commandValue.split(E15)[1].split(' ')[10] + ' ' + commandValue.split(E15)[1].split(' ')[11] + ' ' + commandValue.split(E15)[1].split(' ')[12] + ' ' + commandValue.split(E15)[1].split(' ')[13] + ' ' + commandValue.split(E15)[1].split(' ')[14] + ' ' + commandValue.split(E15)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E15)[1].split(' ')[0] + ' ' + commandValue.split(E15)[1].split(' ')[1] + ' ' + commandValue.split(E15)[1].split(' ')[2] + ' ' + commandValue.split(E15)[1].split(' ')[3] + ' ' + commandValue.split(E15)[1].split(' ')[5] + ' ' + commandValue.split(E15)[1].split(' ')[6] + ' ' + commandValue.split(E15)[1].split(' ')[8] + ' ' + commandValue.split(E15)[1].split(' ')[9] + ' ' + commandValue.split(E15)[1].split(' ')[10] + ' ' + commandValue.split(E15)[1].split(' ')[11] + ' ' + commandValue.split(E15)[1].split(' ')[12] + ' ' + commandValue.split(E15)[1].split(' ')[13] + ' ' + commandValue.split(E15)[1].split(' ')[14] + ' ' + commandValue.split(E15)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27qP') {
        if (lang == 0) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[6] + ' ' + commandValue.split(E16)[1].split(' ')[8] + ' ' + commandValue.split(E16)[1].split(' ')[9] + ' ' + commandValue.split(E16)[1].split(' ')[10] + ' ' + commandValue.split(E16)[1].split(' ')[11] + ' ' + commandValue.split(E16)[1].split(' ')[12] + ' ' + commandValue.split(E16)[1].split(' ')[13] + ' ' + commandValue.split(E16)[1].split(' ')[14] + ' ' + commandValue.split(E16)[1].split(' ')[15];
        } else if (lang == 1) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[6] + ' ' + commandValue.split(E16)[1].split(' ')[8] + ' ' + commandValue.split(E16)[1].split(' ')[9] + ' ' + commandValue.split(E16)[1].split(' ')[10] + ' ' + commandValue.split(E16)[1].split(' ')[11] + ' ' + commandValue.split(E16)[1].split(' ')[12] + ' ' + commandValue.split(E16)[1].split(' ')[13] + ' ' + commandValue.split(E16)[1].split(' ')[14] + ' ' + commandValue.split(E16)[1].split(' ')[15];
        } else if (lang == 2) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[6] + ' ' + commandValue.split(E16)[1].split(' ')[8] + ' ' + commandValue.split(E16)[1].split(' ')[9] + ' ' + commandValue.split(E16)[1].split(' ')[10] + ' ' + commandValue.split(E16)[1].split(' ')[11] + ' ' + commandValue.split(E16)[1].split(' ')[12] + ' ' + commandValue.split(E16)[1].split(' ')[13] + ' ' + commandValue.split(E16)[1].split(' ')[14] + ' ' + commandValue.split(E16)[1].split(' ')[15];
        } else if (lang == 3) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[6] + ' ' + commandValue.split(E16)[1].split(' ')[8] + ' ' + commandValue.split(E16)[1].split(' ')[9] + ' ' + commandValue.split(E16)[1].split(' ')[10] + ' ' + commandValue.split(E16)[1].split(' ')[11] + ' ' + commandValue.split(E16)[1].split(' ')[12] + ' ' + commandValue.split(E16)[1].split(' ')[13] + ' ' + commandValue.split(E16)[1].split(' ')[14] + ' ' + commandValue.split(E16)[1].split(' ')[15];
        } else if (lang == 4) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[6] + ' ' + commandValue.split(E16)[1].split(' ')[8] + ' ' + commandValue.split(E16)[1].split(' ')[9] + ' ' + commandValue.split(E16)[1].split(' ')[10] + ' ' + commandValue.split(E16)[1].split(' ')[11] + ' ' + commandValue.split(E16)[1].split(' ')[12] + ' ' + commandValue.split(E16)[1].split(' ')[13] + ' ' + commandValue.split(E16)[1].split(' ')[14] + ' ' + commandValue.split(E16)[1].split(' ')[15];
        } else if (lang == 5) {
            return commandValue.split(E16)[1].split(' ')[0] + ' ' + commandValue.split(E16)[1].split(' ')[1] + ' ' + commandValue.split(E16)[1].split(' ')[2] + ' ' + commandValue.split(E16)[1].split(' ')[3] + ' ' + commandValue.split(E16)[1].split(' ')[5] + ' ' + commandValue.split(E16)[1].split(' ')[6] + ' ' + commandValue.split(E16)[1].split(' ')[8] + ' ' + commandValue.split(E16)[1].split(' ')[9] + ' ' + commandValue.split(E16)[1].split(' ')[10] + ' ' + commandValue.split(E16)[1].split(' ')[11] + ' ' + commandValue.split(E16)[1].split(' ')[12] + ' ' + commandValue.split(E16)[1].split(' ')[13] + ' ' + commandValue.split(E16)[1].split(' ')[14] + ' ' + commandValue.split(E16)[1].split(' ')[15];
        }
    } else if (commandCode == 'c27r') {
        if (lang == 0) {
            return 'go to the database the branch and then get the value of the slot';
        } else if (lang == 1) {
            return 'go to the database the branch and then get the value of the slot';
        } else if (lang == 2) {
            return 'aller à la base de données la branche et ensuite obtenir la valeur de la fente';
        } else if (lang == 3) {
            return 'aller à la base de données la branche et ensuite obtenir la valeur de la fente';
        } else if (lang == 4) {
            return 'aller à la base de données la branche et ensuite obtenir la valeur de la fente';
        } else if (lang == 5) {
            return 'aller à la base de données la branche et ensuite obtenir la valeur de la fente';
        }
    } else if (commandCode == 'c28') {
        if (lang == 0) {
            return commandValue.split('go to the database ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ')[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split('aller à la base de données ')[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
        } else if (lang == 4) {
            return commandValue.split('روح لفاعدة البيانات ')[1].split(' ')[0];
        } else if (lang == 5) {
            return commandValue.split('aller à la base de données ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c29') {
        if (lang == 0) {
            return commandValue.split('the branch ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('the branch ')[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split('la branche ')[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split('الفرع ')[1].split(' ')[0];
        } else if (lang == 4) {
            return commandValue.split('الفرع ')[1].split(' ')[0];
        } else if (lang == 5) {
            return commandValue.split('la branche ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c30') {
        if (lang == 0) {
            return commandValue.split('get the value of the slot ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('get the value of the slot ')[1].split(' ')[0];
        } else if (lang == 2) {
            return commandValue.split('obtenir la valeur de la fente ')[1].split(' ')[0];
        } else if (lang == 3) {
            return commandValue.split('obtenir la valeur de la fente ')[1].split(' ')[0];
        } else if (lang == 4) {
            return commandValue.split('obtenir la valeur de la fente ')[1].split(' ')[0];
        } else if (lang == 5) {
            return commandValue.split('obtenir la valeur de la fente ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c41') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the value ')[1].split(' in the slot ' + para4 + '')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the value ')[1].split(' in the slot ' + para4 + '')[0];
        } else if (lang == 2) {
            return commandValue.split('aller à la base de données ' + para1 + ' la branche ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the value ')[1].split(' in the slot ' + para4 + '')[0];
        } else if (lang == 3) {
            return commandValue.split('aller à la base de données ' + para1 + ' la branche ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the value ')[1].split(' in the slot ' + para4 + '')[0];
        } else if (lang == 4) {
            return commandValue.split('aller à la base de données ' + para1 + ' la branche ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the value ')[1].split(' in the slot ' + para4 + '')[0];
        } else if (lang == 5) {
            return commandValue.split('aller à la base de données ' + para1 + ' la branche ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the value ')[1].split(' in the slot ' + para4 + '')[0];
        }
    } else if (commandCode == 'c42') {
        if (lang == 0) {
            return commandValue.split('and set it as the value of ')[1];
        } else if (lang == 1) {
            return commandValue.split('and set it as the value of ')[1];
        } else if (lang == 2) {
            return commandValue.split('définissez-le comme valeur de ')[1];
        } else if (lang == 3) {
            return commandValue.split('définissez-le comme valeur de ')[1];
        } else if (lang == 4) {
            return commandValue.split('définissez-le comme valeur de ')[1];
        } else if (lang == 5) {
            return commandValue.split('définissez-le comme valeur de ')[1];
        }
    } else if (commandCode == 'c43') {
        if (lang == 0) {
            return para1.split('the value of ')[1].split(' ')[0];
        } else if (lang == 1) {
            return para1.split('the value of ')[1].split(' ')[0];
        } else if (lang == 2) {
            return para1.split('la valeur de ')[1].split(' ')[0];
        } else if (lang == 3) {
            return para1.split('قيمة ')[1].split(' ')[0];
        } else if (lang == 4) {
            return para1.split('قيمة ')[1].split(' ')[0];
        } else if (lang == 5) {
            return para1.split('la valeur de ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c44') {
        if (lang == 0) {
            return para1.split('in the slot ')[1];
        } else if (lang == 1) {
            return para1.split('in the slot ')[1];
        } else if (lang == 2) {
            return para1.split('in the slot ')[1];
        } else if (lang == 3) {
            return para1.split('فى الشريحة ')[1];
        } else if (lang == 4) {
            return para1.split('فى الشريحة ')[1];
        } else if (lang == 5) {
            return para1.split('in the slot ')[1];
        }
    }
}
(function ($) {
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    //--------------------------------------------------------Maths Translations------------------------------------------------------------------------------------------------------------------------------------------//
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    function mathOperation(expression) {
        return math.eval(expression);
    }
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    //-------------------------------------------------------Colors Translations------------------------------------------------------------------------------------------------------------------------------------------//
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    function setFontColour(elementName, colour) {
        if (colour == blackTranslations[lang]) {
            $('#' + elementName + '').css('color', '#000000');
        } else if (colour == redTranslations[lang]) {
            $('#' + elementName + '').css('color', '#F44336');
        } else if (colour == blueTranslations[lang]) {
            $('#' + elementName + '').css('color', '#2196F3');
        } else if (colour == cyanTranslations[lang]) {
            $('#' + elementName + '').css('color', '#00BCD4');
        } else if (colour == grayTranslations[lang]) {
            $('#' + elementName + '').css('color', '#9E9E9E');
        } else if (colour == greenTranslations[lang]) {
            $('#' + elementName + '').css('color', '#4CAF50');
        } else if (colour == whiteTranslations[lang]) {
            $('#' + elementName + '').css('color', '#FFFFFF');
        } else if (colour == orangeTranslations[lang]) {
            $('#' + elementName + '').css('color', '#FF9800');
        } else if (colour == yellowTranslations[lang]) {
            $('#' + elementName + '').css('color', '#FFEB3B');
        } else if (colour == brownTranslations[lang]) {
            $('#' + elementName + '').css('color', '#795548');
        } else if (colour == tealTranslations[lang]) {
            $('#' + elementName + '').css('color', '#009688');
        } else if (colour == pinkTranslations[lang]) {
            $('#' + elementName + '').css('color', '#E91E63');
        } else if (colour == lightGreenTranslations[lang]) {
            $('#' + elementName + '').css('color', '#8BC34A');
        } else {
            $('#' + elementName + '').css('color', colour);
        }
    }

    function setBG(elementName, background) {
        if (background == blackTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#000000');
        } else if (background == redTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#F44336');
        } else if (background == blueTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#2196F3');
        } else if (background == cyanTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#00BCD4');
        } else if (background == grayTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#9E9E9E');
        } else if (background == greenTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#4CAF50');
        } else if (background == whiteTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#FFFFFF');
        } else if (background == orangeTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#FF9800');
        } else if (background == yellowTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#FFEB3B');
        } else if (background == brownTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#795548');
        } else if (background == tealTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#009688');
        } else if (background == pinkTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#E91E63');
        } else if (background == lightGreenTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#8BC34A');
        } else if (background.charAt(0) == '#') {
            $('#' + elementName + '').css('background-color', background);
        } else {
            $('#' + elementName + '').css('background-image', 'url(' + background + ')');
        }
    }
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    //---------------------------------------------------Animations Translations------------------------------------------------------------------------------------------------------------------------------------------//
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    function setAnimation(elementName, animation) {
        if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('flash');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('pulse');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rubberBand');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('shake');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('headShake');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('swing');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('tada');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('wobble');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('jello');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceIn');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceInDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceInLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceInRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceInUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceOut');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceOutDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceOutLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceOutRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceOutUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeIn');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInDownBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInLeftBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInRightBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInUpBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOut');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutDownBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutLeftBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutRightBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutUpBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('flipInX');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('flipInY');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('flipOutX');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('flipOutY');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('lightSpeedIn');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('lightSpeedOut');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateIn');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateInDownLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateInDownRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateInUpLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateInUpRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateOut');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateOutDownLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateOutDownRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateOutUpLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateOutUpRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('hinge');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('jackInTheBox');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rollIn');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rollOut');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomIn');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomInDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomInLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomInRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomInUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomOut');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomOutDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomOutLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomOutRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomOutUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideInDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideInLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideInRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideInUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideOutDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideOutLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideOutRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideOutUp');
        } else {
            $('#' + elementName + '').animateCss(animation);
        }
    }
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    //-----------------------------------------------------Commands Functions------------------------------------------------------------------------------------------------------------------------------------------//
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    function execute(elementName, command) {
        var commands = command.split(' &&& ');
        var commandID;
        for (commandID = 0; commandID < commands.length; commandID++) {
            if (commandsFnTranslations('c1A', commands[commandID]).length > 1) {
                console.log('hello');
                if (commandsFnTranslations('c2qA', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').click(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').click(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qA', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').click(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qA', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').click(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qA', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').click(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qA', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var targetElement = commandsFnTranslations('c11', commands[commandID]);
                        $('#' + elementName + '').click(function () {
                            $('#' + elementName + '').val($('#' + targetElement + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').click(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qA', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').click(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').click(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qA', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').click(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').click(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qA', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qA', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1B', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qB', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qB', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').mouseenter(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qB', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').mouseenter(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qB', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').mouseenter(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qB', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qB', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qB', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qB', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qB', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1C', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qC', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qC', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').mouseleave(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qC', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').mouseleave(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qC', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').mouseleave(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qC', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qC', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qC', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qC', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qC', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1D', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qD', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qD', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').mouseout(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qD', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').mouseout(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qD', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').mouseout(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qD', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qD', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qD', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qD', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qD', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1E', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qE', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qE', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').mousemove(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qE', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').mousemove(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qE', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').mousemove(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qE', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qE', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qE', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qE', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qE', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1F', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qF', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qF', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').mouseup(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qF', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').mouseup(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qF', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').mouseup(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qF', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qF', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qF', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qF', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qF', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1G', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qG', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qG', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').dblclick(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qG', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').dblclick(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qG', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').dblclick(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qG', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qG', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qG', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qG', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qG', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1H', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qH', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qH', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').contextmenu(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qH', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').contextmenu(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qH', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').contextmenu(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qH', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qH', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qH', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qH', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qH', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1I', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qI', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').keypress(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qI', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').keypress(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qI', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').keypress(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qI', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').keypress(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qI', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').keypress(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qI', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qI', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qI', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qI', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1J', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qJ', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').keydown(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qJ', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').keydown(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qJ', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').keydown(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qJ', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').keydown(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qJ', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').keydown(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qJ', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qJ', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qJ', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qJ', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1K', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qK', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').change(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').change(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qK', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').change(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qK', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').change(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qK', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').change(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qK', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').change(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').change(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qK', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').change(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').change(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qK', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').change(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').change(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qK', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qK', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1L', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qL', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').focus(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').focus(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qL', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').focus(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qL', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').focus(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qL', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').focus(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qL', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').focus(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').focus(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qL', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').focus(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').focus(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qL', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').focus(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').focus(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qL', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qL', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1M', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qM', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').focusin(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qM', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').focusin(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qM', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').focusin(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qM', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').focusin(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qM', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').focusin(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qM', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qM', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qM', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qM', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1N', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qN', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').focusout(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qN', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').focusout(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qN', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').focusout(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qN', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').focusout(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qN', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').focusout(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qN', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qN', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qN', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qN', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1O', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qO', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').submit(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qO', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').submit(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qO', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').submit(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qO', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').submit(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qO', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').submit(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qO', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qO', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qO', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qO', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            } else if (commandsFnTranslations('c1P', commands[commandID]).length > 1) {
                if (commandsFnTranslations('c2qP', commands[commandID]) == commandsFnTranslations('c2ruA')) {
                    if (commandsFnTranslations('c3q', commands[commandID]) == commandsFnTranslations('c3r')) {
                        $('#' + elementName + '').scroll(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commandsFnTranslations('c4', commands[commandID]);
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commandsFnTranslations('c5qP', commands[commandID]) == commandsFnTranslations('c5r')) {
                    targetURL = commandsFnTranslations('c6', commands[commandID]);
                    $('#' + elementName + '').scroll(function () {
                        window.location = targetURL;
                    });
                } else if (commandsFnTranslations('c2qP', commands[commandID]) == commandsFnTranslations('c2ruB')) {
                    var targetElement = commandsFnTranslations('c7', commands[commandID]);
                    $('#' + elementName + '').scroll(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commandsFnTranslations('c2qP', commands[commandID]) == commandsFnTranslations('c2ruC')) {
                    var targetElement = commandsFnTranslations('c8', commands[commandID]);
                    $('#' + elementName + '').scroll(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commandsFnTranslations('c9qP', commands[commandID]) == commandsFnTranslations('c9r')) {
                    if (commandsFnTranslations('c10q', commands[commandID]) == commandsFnTranslations('c10r')) {
                        var newVal = $('#' + commandsFnTranslations('c11', commands[commandID]) + '').val();
                        $('#' + elementName + '').scroll(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commandsFnTranslations('c12', commands[commandID]);
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c13qP', commands[commandID]) == commandsFnTranslations('c13r')) {
                    var targetElement = commandsFnTranslations('c14', commands[commandID]);
                    var resource = commandsFnTranslations('c15', commands[commandID], targetElement);
                    if (commandsFnTranslations('c16q', commands[commandID], targetElement) == commandsFnTranslations('c16r')) {
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commandsFnTranslations('c17', commands[commandID], targetElement);
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commandsFnTranslations('c18qP', commands[commandID]) == commandsFnTranslations('c18r')) {
                    var targetElement = commandsFnTranslations('c19', commands[commandID]);
                    var resource = commandsFnTranslations('c20', commands[commandID], targetElement);
                    if (commandsFnTranslations('c21q', commands[commandID], targetElement) == commandsFnTranslations('c21r')) {
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commandsFnTranslations('c22', commands[commandID]);
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commandsFnTranslations('c23qP', commands[commandID]) == commandsFnTranslations('c23r')) {
                    var dbname = commandsFnTranslations('c24', commands[commandID]);
                    var tablename = commandsFnTranslations('c25', commands[commandID]);
                    var dataRaw = commandsFnTranslations('c26', commands[commandID], dbname, tablename);
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = commandsFnTranslations('c43', '', dataRaw[i]);
                            var slot = commandsFnTranslations('c44', '', dataRaw[i]);
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        data = JSON.parse(data);
                        firebase.database().ref(dbname + '/' + tablename).set(data);
                    });
                } else if (commandsFnTranslations('c27qP', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            var dbRef = firebase.database().ref(dbname + '/' + tablename);
                            dbRef.on('value', function (snapshot) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(snapshot.val()[calledSlot]);
                            });
                        });
                    })(commandID);
                }
            }
        }
    }
    $(function () {
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
        //---------------------------------------------------------------------Setup------------------------------------------------------------------------------------------------------------------------------------------//
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
        $.fn[setupTranslations[lang]] = function (options) {
            // Establish our default settings
            var settings = $.extend({
                [logoTranslations[lang]]: null,
                [titleTranslations[lang]]: null,
                [modeTranslations[lang]]: null
            }, options);
            return this.each(function () {
                if (settings[modeTranslations[lang]] == 'site') {
                    $('body').append('<contents></contents>');
                } else if (settings[modeTranslations[lang]] == 'app') {
                    $('body').append('<paper-header-panel><paper-toolbar><span class="[titleTranslations[lang]]">' + settings[titleTranslations[lang]] + '</span></paper-toolbar><div><contents></contents></div></paper-header-panel>');
                }
                if (settings[logoTranslations[lang]]) {
                    $('head').append('<link rel="icon" type="image/png" href="' + settings[logoTranslations[lang]] + '">');
                }
                if (settings[titleTranslations[lang]]) {
                    $('head').append('<title>' + settings[titleTranslations[lang]] + '</title>');
                }
                $.fn[pageTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [nameTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        $('contents').append('<page id="' + settings[nameTranslations[lang]] + '" style="display: none;"></page>');
                        $(window).on('hashchange', function (e) {
                            $('page').fadeOut(500);
                            $('' + location.hash + '').fadeIn(500);
                        })
                        $('page').fadeOut(500);
                        $('' + location.hash + '').fadeIn(500);
                    })
                }
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //----------------------------------------------------------------------Text------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[textFnTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [textTranslations[lang]]: 'It seems that you have typed nothing',
                        [fontColorTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<p id="' + name + '"></p>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        $('#' + name + '').text(settings[textTranslations[lang]]);
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //-----------------------------------------------------------Firebase Center------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[firebaseCenterTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [usernameTranslations[lang]]: null,
                        [passwordTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        sessionStorage.firebaseID = settings[usernameTranslations[lang]];
                        sessionStorage.firebaseKey = settings[passwordTranslations[lang]];
                        var config = {
                            apiKey: sessionStorage.firebaseKey,
                            authDomain: sessionStorage.firebaseID + ".firebaseapp.com",
                            databaseURL: "https://" + sessionStorage.firebaseID + ".firebaseio.com",
                            storageBucket: sessionStorage.firebaseID + ".appspot.com",
                        };
                        firebase.initializeApp(config);
                        var database = firebase.database();
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //----------------------------------------------------------------Login Form------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[loginFormTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({}, options);
                    return this.each(function () {
                        $('body').append('<div id="firebaseui-container"></div>');

                        function getRecaptchaMode() {
                            // Quick way of checking query params in the fragment. If we add more config
                            // we might want to actually parse the fragment as a query string.
                            return location.hash.indexOf('recaptcha=invisible') !== -1 ? 'invisible' : 'normal';
                        }

                        function getUiConfig() {
                            return {
                                'callbacks': {
                                    // Called when the user has been successfully signed in.
                                    'signInSuccess': function (user, credential, redirectUrl) {
                                        handleSignedInUser(user);
                                        // Do not redirect.
                                        return false;
                                    }
                                },
                                // Opens IDP Providers sign-in flow in a popup.
                                'signInFlow': 'popup',
                                'signInOptions': [
                                    // TODO(developer): Remove the providers you don't need for your app.
                                    {
                                        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                                        scopes: ['https://www.googleapis.com/auth/plus.login']
                                    }, {
                                        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                                        scopes: ['public_profile', 'email', 'user_likes', 'user_friends']
                                    },
                                    firebase.auth.TwitterAuthProvider.PROVIDER_ID, {
                                        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                                        recaptchaParameters: {
                                            size: getRecaptchaMode()
                                        }
                                    }
                                ],
                                // Terms of service url.
                                'tosUrl': 'https://www.google.com'
                            };
                        }
                        // Initialize the FirebaseUI Widget using Firebase.
                        var ui = new firebaseui.auth.AuthUI(firebase.auth());
                        /**
                         * @return {string} The URL of the FirebaseUI standalone widget.
                         */
                        function getWidgetUrl() {
                            return '/widget#recaptcha=' + getRecaptchaMode();
                        }
                        /**
                         * Redirects to the FirebaseUI widget.
                         */
                        var signInWithRedirect = function () {
                            window.location.assign(getWidgetUrl());
                        };
                        /**
                         * Open a popup with the FirebaseUI widget.
                         */
                        var signInWithPopup = function () {
                            window.open(getWidgetUrl(), 'Sign In', 'width=985,height=735');
                        };
                        /**
                         * Displays the UI for a signed in user.
                         * @param {!firebase.User} user
                         */
                        var handleSignedInUser = function (user) {
                            console.log(user.uid);
                            sessionStorage.displayName = user.displayName;
                            sessionStorage.email = user.email;
                            sessionStorage.phoneNumber = user.phoneNumber;
                            if (user.photoURL) {
                                sessionStorage.profilePhoto = user.photoURL;
                            }
                        };
                        /**
                         * Displays the UI for a signed out user.
                         */
                        var handleSignedOutUser = function () {
                            ui.start('#firebaseui-container', getUiConfig());
                            $('contents').hide();
                        };
                        // Listen to change in auth state so it displays the correct UI for when
                        // the user is signed in or not.
                        firebase.auth().onAuthStateChanged(function (user) {
                            user ? handleSignedInUser(user) : handleSignedOutUser();
                        });
                        /**
                         * Deletes the user's account.
                         */
                        var deleteAccount = function () {
                            firebase.auth().currentUser.delete().catch(function (error) {
                                if (error.code == 'auth/requires-recent-login') {
                                    // The user's credential is too old. She needs to sign in again.
                                    firebase.auth().signOut().then(function () {
                                        // The timeout allows the message to be displayed after the UI has
                                        // changed to the signed out state.
                                        setTimeout(function () {
                                            alert('Please sign in again to delete your account.');
                                        }, 1);
                                    });
                                }
                            });
                        };
                        /**
                         * Handles when the user changes the reCAPTCHA config.
                         */
                        function handleRecaptchaConfigChange() {
                            var newRecaptchaValue = document.querySelector('input[name="recaptcha"]:checked').value;
                            location.replace(location.pathname + '#recaptcha=' + newRecaptchaValue);
                            // Reset the inline widget so the config changes are reflected.
                            ui.reset();
                            ui.start('#firebaseui-container', getUiConfig());
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------Button------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[buttonTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [textTranslations[lang]]: 'It seems that you have typed nothing',
                        [fontColorTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [disabledTranslations[lang]]: null,
                        [raisedTranslations[lang]]: null,
                        [switchedTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-button id="' + name + '"></paper-button>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        $('#' + name + '').text(settings[textTranslations[lang]]);
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[disabledTranslations[lang]] == yesTranslations[lang]) {
                            $('#' + name + '').attr('disabled', '');
                        }
                        if (settings[raisedTranslations[lang]] == yesTranslations[lang]) {
                            $('#' + name + '').attr('raised', '');
                        }
                        if (settings[switchedTranslations[lang]] == yesTranslations[lang]) {
                            $('#' + name + '').attr('toggled', '');
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //----------------------------------------------------------------------Icon------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[iconTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [fontColorTranslations[lang]]: null,
                        [iconTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var icon = settings[iconTranslations[lang]];
                        var out = '<iron-icon id="' + name + '" icon="' + icon + '"></iron-icon>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //-------------------------------------------------------Button With An Icon------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[buttonWithAnIconTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [fontColorTranslations[lang]]: null,
                        [iconTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var icon = settings[iconTranslations[lang]];
                        var out = '<paper-icon-button id="' + name + '" icon="' + icon + '"></paper-icon-button>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //----------------------------------------------------------------------Card------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[sectionTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [textTranslations[lang]]: 'It seems that you have typed nothing',
                        [fontColorTranslations[lang]]: null,
                        [FXTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-card id="' + name + '"><div id="الحاجات_اللى_جوة_السيكشن" class="card-content"></div></paper-card>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[imageSourceTranslations[lang]]) {
                            $('#' + name + '').attr('image', settings[imageSourceTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[FXTranslations[lang]] == rain) {
                            var engine = new RainyDay({
                                image: settings[nameTranslations[lang]],
                                crop: [0, 0, 50, 60],
                                blur: 10,
                                opacity: 1
                            });
                            engine.rain(
                                [
                                    [1, 0, 20],
                                    [3, 3, 1]
                                ], 100);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //-------------------------------------------------------------------ToolTip------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[tooltipTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [textTranslations[lang]]: 'It seems that you have typed nothing',
                        [fontColorTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [emitterTranslations[lang]]: null,
                        [directionTranslations[lang]]: fromTheBottom[lang],
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-tooltip id="' + name + '" for="' + settings[emitterTranslations[lang]] + '">' + settings[textTranslations[lang]] + '</paper-tooltip>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[directionTranslations[lang]] == fromTheRightTranslations[lang]) {
                            $('#' + name + '').attr('position', 'right');
                        } else if (settings[directionTranslations[lang]] == fromTheLeftTranslations[lang]) {
                            $('#' + name + '').attr('position', 'left');
                        } else if (settings[directionTranslations[lang]] == fromTheTopTranslations[lang]) {
                            $('#' + name + '').attr('position', 'top');
                        } else if (settings[directionTranslations[lang]] == fromTheBottomTranslations[lang]) {
                            $('#' + name + '').attr('position', 'bottom');
                        } else {}
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //------------------------------------------------------------Colors Palette------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[colorsPaletteTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-swatch-picker id="' + name + '" color="{{selectedColor}}"></paper-swatch-picker>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------Loader------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[loaderTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [loadingTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [typeTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        if (settings[typeTranslations[lang]] == settings[barTranslations[lang]]) {
                            var out = '<paper-progress id="' + name + '"></paper-progress>';
                        } else if (settings[typeTranslations[lang]] == settings[spinnerTranslations[lang]]) {
                            var out = '<paper-spinner id="' + name + '"></paper-spinner>';
                        }
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[loadingTranslations[lang]] == yesTranslations[lang]) {
                            $('#' + name + '').attr('active', '');
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //---------------------------------------------------------------------Image------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[imageTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [titleTranslations[lang]]: null,
                        [sourceTranslations[lang]]: null,
                        [imageWidthTranslations[lang]]: null,
                        [imageLengthTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var source = settings[sourceTranslations[lang]];
                        window.analyseImage(name, source);
                        var out = '<div style="position: relative; overflow: hidden; width: ' + settings[imageWidthTranslations[lang]] + '; height: ' + settings[imageLengthTranslations[lang]] + ';"><img id="' + name + '" width="' + settings[imageWidthTranslations[lang]] + '" height="' + settings[imageLengthTranslations[lang]] + '" src="https://reviaco.os/res/Media/img/blurred.jpg" crossorigin="anonymous" style="-webkit-filter: blur(10px);" /><div id="showImage_' + name + '_containerA"><p id="' + name + '_imageData" class="imageData"></p><button id="image_' + name + '_mainButton" class="imageMainButton" onclick="showImageA(\'' + name + '\', \'' + source + '\');"></button></div><div id="showImage_' + name + '_containerB" style="display: none;"><p class="nudesFoundWarningText">Nudes found</p><button class="yesShowTheNudes" onclick="showImageC(\'' + name + '\', \'' + source + '\');">Continue</button><button class="showBlurredNudes" onclick="showImageB(\'' + name + '\', \'' + source + '\');">Show Blurred</button></div><div id="showImage_' + name + '_containerC" style="display: none;"><p class="showTheFullContentWarning">Show the full content ?</p><button class="yesRemoveTheBlur" onclick="showImageD(\'' + name + '\');">Continue</button></div></div>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        getFileSize(source, function (size) {
                            $('#image_' + name + '_mainButton').html('<i class="material-icons">file_download</i> ' + size);
                        })
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[imageWidthTranslations[lang]]) {
                            $('#' + name + '').attr('width', settings[imageWidthTranslations[lang]]);
                        }
                        if (settings[imageLengthTranslations[lang]]) {
                            $('#' + name + '').attr('length', settings[imageLengthTranslations[lang]]);
                        }
                        if (settings[titleTranslations[lang]]) {
                            $('#' + name + '').attr('alt', settings[titleTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //---------------------------------------------------------------------Video------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[videoTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [titleTranslations[lang]]: null,
                        [sourceTranslations[lang]]: null,
                        [imageWidthTranslations[lang]]: null,
                        [imageLengthTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var source = settings[sourceTranslations[lang]];
                        var out = '<div style="position: relative; overflow: hidden; width: ' + settings[imageWidthTranslations[lang]] + '; height: ' + settings[imageLengthTranslations[lang]] + ';"><paper-video-controls id="video_' + name + '_controls"><video id="' + name + '" width="' + settings[imageWidthTranslations[lang]] + '" height="' + settings[imageLengthTranslations[lang]] + '" src="https://reviaco.os/res/Media/img/blurred.jpg" crossorigin="anonymous" style="-webkit-filter: blur(10px);" autoplay /></paper-video-controls><div id="showVideo_' + name + '_containerA"><button id="video_' + name + '_mainButton" class="videoMainButton" onclick="showVideoA(\'' + name + '\', \'' + source + '\');"></button></div><div id="showVideo_' + name + '_containerB" style="display: none;"><p style="position: absolute; color: #FFFFFF; top: 20%; left: 50%; transform: translate(-50%, -50%);">Nudes found</p><button style="position: absolute; top: 65%; left: 50%; background-color: silver; opacity: 0.5; border-radius: 100px; border: 5px solid; color: #FFFFFF; max-width: 200px; max-height: 60px; width: 50%; height: 30%; transform: translate(-50%, -50%);" onclick="showVideoB(\'' + name + '\');">Continue</button></div></div>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        getFileSize(source, function (size) {
                            $('#video_' + name + '_mainButton').html('<i class="material-icons">file_download</i> ' + size);
                        })
                        window.onload = function () {
                            $('#video_' + name + '_controls > #container > #videoControls').hide();
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[imageWidthTranslations[lang]]) {
                            $('#' + name + '').attr('width', settings[imageWidthTranslations[lang]]);
                        }
                        if (settings[imageLengthTranslations[lang]]) {
                            $('#' + name + '').attr('length', settings[imageLengthTranslations[lang]]);
                        }
                        if (settings[titleTranslations[lang]]) {
                            $('#' + name + '').attr('alt', settings[titleTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------Notification Count------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[notificationCountTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [textTranslations[lang]]: 'It seems that you have typed nothing',
                        [iconTranslations[lang]]: null,
                        [targetTranslations[lang]]: null,
                        [fontColorTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-badge id="' + name + '" for="' + targetTranslations[lang] + '"></paper-badge>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[textTranslations[lang]]) {
                            $('#' + name + '').attr('label', settings[textTranslations[lang]]);
                        }
                        if (settings[iconTranslations[lang]]) {
                            $('#' + name + '').attr('icon', settings[iconTranslations[lang]]);
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //------------------------------------------------------------------Checkbox------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[checkboxTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [textTranslations[lang]]: null,
                        [descriptionTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [disabledTranslations[lang]]: null,
                        checked: null,
                        [rippleTranslations[lang]]: null,
                        [fontColorTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-checkbox id="' + name + '">' + text + '</paper-checkbox>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[disabledTranslations[lang]] == yesTranslations[lang]) {
                            $('#' + name + '').attr('disabled', '');
                        }
                        if (settings.checked == yesTranslations[lang]) {
                            $('#' + name + '').attr('checked', '');
                        }
                        if (settings[rippleTranslations[lang]]) {
                            $('#' + name + '').attr('noink', '');
                        }
                        if (settings[descriptionTranslations[lang]]) {
                            $('#' + name + '').append('<span class="subtitle">' + settings[descriptionTranslations[lang]] + '</span>');
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //----------------------------------------------------------------Dialog Box------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[dialogBoxTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [titleTranslations[lang]]: null,
                        [bodyTranslations[lang]]: null,
                        acceptButton: null,
                        cancelButton: null,
                        [emitterTranslations[lang]]: null,
                        scrollable: null,
                        [fontColorTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var body = settings[bodyTranslations[lang]].split('&&&');
                        var out = '<paper-dialog id="' + name + '">';
                        if (settings[titleTranslations[lang]]) {
                            out += '<h2>' + settings[titleTranslations[lang]] + '</h2>';
                        }
                        if (settings[bodyTranslations[lang]]) {
                            for (i = 0; i < body.length; i++) {
                                if (settings.scrollable == yesTranslations[lang]) {
                                    out += '<paper-dialog-scrollable><p>' + body[i] + '</p></paper-dialog-scrollable>';
                                } else {
                                    out += '<p>' + body[i] + '</p>';
                                }
                            }
                        }
                        if (settings.cancelButton || settings.acceptButton) {
                            out += '<div class="buttons">'
                            if (settings.cancelButton) {
                                out += '<paper-button dialog-dismiss>' + settings.cancelButton + '</paper-button>';
                            }
                            if (settings.acceptButton) {
                                out += '<paper-button dialog-confirm autofocus>' + settings.acceptButton + '</paper-button>';
                            }
                            out += '</div>';
                        }
                        out += '</paper-dialog>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[emitterTranslations[lang]]) {
                            $('#' + settings[emitterTranslations[lang]] + '').attr('onclick', settings[nameTranslations[lang]] + '.open()');
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //------------------------------------------------------------------Dropdown------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[dropdownTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [titleTranslations[lang]]: null,
                        [itemsTranslations[lang]]: null,
                        [rippleTranslations[lang]]: null,
                        preselected: null,
                        [disabledTranslations[lang]]: null,
                        [fontColorTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-dropdown-menu id="' + name + '" label="' + settings[titleTranslations[lang]] + '">';
                        if (settings[itemsTranslations[lang]]) {
                            var items = settings[itemsTranslations[lang]].split(' &&& ');
                            out += '<paper-listbox id="' + name + '-contents" class="dropdown-content" '
                            if (settings.preselected) {
                                out += 'selected="' + settings.preselected + '">'
                            } else {
                                out += '>'
                            }
                            for (i = 0; i < items.length; i++) {
                                out += '<paper-item>' + items[i] + '</paper-item>';
                            }
                            out += '</paper-listbox>';
                        }
                        out += '</paper-dropdown-menu>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[disabledTranslations[lang]] == yesTranslations[lang]) {
                            $('#' + name + '').attr('disabled', '');
                        }
                        if (settings[rippleTranslations[lang]] == noTranslations[lang]) {
                            $('#' + name + '').attr('noink', '');
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //-----------------------------------------------------------------------FAB------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[FABTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [descriptionTranslations[lang]]: null,
                        [iconTranslations[lang]]: null,
                        [textTranslations[lang]]: null,
                        [rippleTranslations[lang]]: null,
                        mini: null,
                        [disabledTranslations[lang]]: null,
                        [rippleTranslations[lang]]: null,
                        [fontColorTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-fab ';
                        if (settings.mini == yesTranslations[lang]) {
                            out += 'mini ';
                        }
                        if (settings[disabledTranslations[lang]] == yesTranslations[lang]) {
                            out += 'disabled ';
                        }
                        if (settings[rippleTranslations[lang]] == noTranslations[lang]) {
                            out += 'noink ';
                        }
                        if (settings[textTranslations[lang]]) {
                            out += 'label="' + settings[textTranslations[lang]] + '" ';
                        }
                        if (settings[iconTranslations[lang]]) {
                            out += 'icon="' + settings[iconTranslations[lang]] + '" ';
                        }
                        if (settings[descriptionTranslations[lang]]) {
                            out += 'title="' + settings[descriptionTranslations[lang]] + '" ';
                        }
                        out += 'id="' + name + '"></paper-fab>';
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[disabledTranslations[lang]] == yesTranslations[lang]) {
                            $('#' + name + '').attr('disabled', '');
                        }
                        if (settings[rippleTranslations[lang]] == noTranslations[lang]) {
                            $('#' + name + '').attr('noink', '');
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //-------------------------------------------------------------------TextBox------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[textboxTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [typeTranslations[lang]]: null,
                        [maxTranslations[lang]]: null,
                        [minTranslations[lang]]: null,
                        [requirementTranslations[lang]]: null,
                        errorMessage: null,
                        [prefixTranslations[lang]]: null,
                        [suffixTranslations[lang]]: null,
                        [clearButtonTranslations[lang]]: null,
                        required: null,
                        counter: null,
                        [dynamicSizeTranslations[lang]]: null,
                        [disabledTranslations[lang]]: null,
                        [rippleTranslations[lang]]: null,
                        [fontColorTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        if (settings[dynamicSizeTranslations[lang]] == yesTranslations[lang]) {
                            var out = '<paper-textarea ';
                        } else {
                            var out = '<paper-input '
                        }
                        if (settings[titleTranslations[lang]]) {
                            out += 'label="' + settings[titleTranslations[lang]] + '" ';
                        }
                        if (settings[typeTranslations[lang]] == 'password') {
                            out += 'type="password" ';
                        } else if (settings[typeTranslations[lang]] == 'number') {
                            out += 'type="number" ';
                        } else if (settings[typeTranslations[lang]]) {
                            out += 'type="' + settings[typeTranslations[lang]] + '" ';
                        }
                        if (settings[requirementTranslations[lang]] == 'someText') {
                            out += 'auto-validate ';
                        } else if (settings[requirementTranslations[lang]] == 'lettersOnly') {
                            out += 'auto-validate allowed-pattern="[a-zA-Z]"';
                        } else if (settings[requirementTranslations[lang]]) {
                            out += 'auto-validate allowed-pattern="' + settings[requirementTranslations[lang]] + '"';
                        }
                        if (settings[maxTranslations[lang]]) {
                            out += 'maxlength="' + settings[maxTranslations[lang]] + '" ';
                        }
                        if (settings[minTranslations[lang]]) {
                            out += 'minlength="' + settings[minTranslations[lang]] + '" ';
                        }
                        if (settings[disabledTranslations[lang]] == yesTranslations[lang]) {
                            out += 'disabled ';
                        }
                        if (settings[counterTranslations[lang]] == yesTranslations[lang]) {
                            out += 'char-counter ';
                        }
                        if (settings[rippleTranslations[lang]] == noTranslations[lang]) {
                            out += 'noink ';
                        }
                        if (settings[textTranslations[lang]]) {
                            out += 'label="' + settings[textTranslations[lang]] + '" ';
                        }
                        if (settings[iconTranslations[lang]]) {
                            out += 'icon="' + settings[iconTranslations[lang]] + '" ';
                        }
                        if (settings[descriptionTranslations[lang]]) {
                            out += 'title="' + settings[descriptionTranslations[lang]] + '" ';
                        }
                        out += 'id="' + name + '">';
                        if (settings[prefixTranslations[lang]]) {
                            var prefix = settings[prefixTranslations[lang]].split(' &&& ');
                            for (i = 0; i < prefix.length; i++) {
                                if (prefix[i].split("An icon of ")[1]) {
                                    out += '<iron-icon icon="' + prefix[i].split("An icon of ")[1] + '" prefix></iron-icon>';
                                } else {
                                    out += '<div prefix>' + prefix[i] + '</div>';
                                }
                            }
                        }
                        if (settings[suffixTranslations[lang]]) {
                            var suffix = settings[suffixTranslations[lang]].split(' &&& ');
                            for (i = 0; i < suffix.length; i++) {
                                if (suffix[i].split("An icon of ")[1]) {
                                    out += '<iron-icon icon="' + suffix[i].split("An icon of ")[1] + '" suffix></iron-icon>';
                                } else {
                                    out += '<div suffix>' + suffix[i] + '</div>';
                                }
                            }
                        }
                        if (settings[clearButtonTranslations[lang]] == yesTranslations[lang]) {
                            out += '<paper-icon-button suffix onclick="clearInput()" icon="clear" alt="clear" title="clear"></paper-icon-button>';
                        }
                        if (settings[dynamicSizeTranslations[lang]] == yesTranslations[lang]) {
                            out += '</paper-textarea>';
                        } else {
                            out += '</paper-input>'
                        }
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);
                        } else {
                            $('contents').append(out);
                        }
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[disabledTranslations[lang]] == yesTranslations[lang]) {
                            $('#' + name + '').attr('disabled', '');
                        }
                        if (settings[rippleTranslations[lang]] == noTranslations[lang]) {
                            $('#' + name + '').attr('noink', '');
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------Slider------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[sliderTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [fontColorTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        $('<div>').attr('id', name).appendTo('contents');
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[shapeTranslations[lang]]) {
                            if (settings[shapeTranslations[lang]] == triangleTranslations[lang]) {
                                $('#' + name + '').addClass('triangle');
                            } else if (settings[shapeTranslations[lang]] == trapezoidTranslations[lang]) {
                                $('#' + name + '').addClass('trapezoid');
                            } else if (settings[shapeTranslations[lang]] == parallelogramTranslations[lang]) {
                                $('#' + name + '').addClass('parallelogram');
                            } else if (settings[shapeTranslations[lang]] == rhombusTranslations[lang]) {
                                $('#' + name + '').addClass('rhombus');
                            } else if (settings[shapeTranslations[lang]] == pentagonTranslations[lang]) {
                                $('#' + name + '').addClass('pentagon');
                            } else if (settings[shapeTranslations[lang]] == hexagonTranslations[lang]) {
                                $('#' + name + '').addClass('hexagon');
                            } else if (settings[shapeTranslations[lang]] == heptagonTranslations[lang]) {
                                $('#' + name + '').addClass('heptagon');
                            } else if (settings[shapeTranslations[lang]] == octagonTranslations[lang]) {
                                $('#' + name + '').addClass('octagon');
                            } else if (settings[shapeTranslations[lang]] == decagonTranslations[lang]) {
                                $('#' + name + '').addClass('decagon');
                            } else if (settings[shapeTranslations[lang]] == circleTranslations[lang]) {
                                $('#' + name + '').addClass('circle');
                            } else if (settings[shapeTranslations[lang]] == ellipseTranslations[lang]) {
                                $('#' + name + '').addClass('ellipse');
                            }
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                //-----------------------------------------------------------------Container------------------------------------------------------------------------------------------------------------------------------------------//
                //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
                $.fn[containerTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [titleTranslations[lang]]: null,
                        [maxTranslations[lang]]: null,
                        [minTranslations[lang]]: null,
                        [stepTranslations[lang]]: null,
                        [progressTranslations[lang]]: null,
                        prevalue: null,
                        [valueBoxTranslations[lang]]: null,
                        [pinTranslations[lang]]: null,
                        [disabledTranslations[lang]]: null,
                        [fontColorTranslations[lang]]: null,
                        [fontSizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [distanceFromBottomTranslations[lang]]: null,
                        [distanceFromTopTranslations[lang]]: null,
                        [distanceFromLeftTranslations[lang]]: null,
                        [distanceFromRightTranslations[lang]]: null,
                        [positionTranslations[lang]]: null,
                        [containerTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        if (settings[titleTranslations[lang]]) {
                            var out = '<div>' + settings[titleTranslations[lang]] + '</div><br><paper-slider ';
                        } else {
                            var out = '<paper-slider '
                        }
                        if (settings[maxTranslations[lang]]) {
                            out += 'max="' + settings[maxTranslations[lang]] + '" ';
                        }
                        if (settings[minTranslations[lang]]) {
                            out += 'min="' + settings[minTranslations[lang]] + '" ';
                        }
                        if (settings[progressTranslations[lang]]) {
                            out += 'secondary-progress="' + settings[progressTranslations[lang]] + '" ';
                        }
                        if (settings[stepTranslations[lang]]) {
                            out += 'step="' + settings[stepTranslations[lang]] + '" ';
                        }
                        if (settings[disabledTranslations[lang]] == yesTranslations[lang]) {
                            out += 'disabled ';
                        }
                        if (settings[pinTranslations[lang]] == yesTranslations[lang]) {
                            out += 'pin ';
                        }
                        if (settings[valueBoxTranslations[lang]] == yesTranslations[lang]) {
                            out += 'editable ';
                        }
                        out += 'id="' + name + '">';
                        out += '</paper-slider>'
                        if (settings[containerTranslations[lang]]) {
                            $('contents').append(containerTranslations[lang]);

                        } else {
                            $('contents').append(out);
                        }
                        if (settings[fontColorTranslations[lang]]) {
                            setFontColour(name, settings[fontColorTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[disabledTranslations[lang]] == yesTranslations[lang]) {
                            $('#' + name + '').attr('disabled', '');
                        }
                        if (settings[rippleTranslations[lang]] == noTranslations[lang]) {
                            $('#' + name + '').attr('noink', '');
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == thickTranslations[lang]) {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[fontSizeTranslations[lang]]) {
                            $('#' + name + '').css('font-size', settings[fontSizeTranslations[lang]]);
                        }
                        if (settings[positionTranslations[lang]]) {
                            $('#' + name + '').css('position', settings[positionTranslations[lang]]);
                        } else {
                            $('#' + name + '').css('position', 'relative');
                        }
                        if (settings[distanceFromBottomTranslations[lang]]) {
                            $('#' + name + '').css('bottom', settings[distanceFromBottomTranslations[lang]]);
                        }
                        if (settings[distanceFromTopTranslations[lang]]) {
                            $('#' + name + '').css('top', settings[distanceFromTopTranslations[lang]]);
                        }
                        if (settings[distanceFromLeftTranslations[lang]]) {
                            $('#' + name + '').css('left', settings[distanceFromLeftTranslations[lang]]);
                        }
                        if (settings[distanceFromRightTranslations[lang]]) {
                            $('#' + name + '').css('right', settings[distanceFromRightTranslations[lang]]);
                        }
                        if (settings[commandsTranslations[lang]]) {
                            execute(name, settings[commandsTranslations[lang]]);
                        }
                        if (settings[widthTranslations[lang]]) {
                            $('#' + name + '').css('width', settings[widthTranslations[lang]]);
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[lengthTranslations[lang]]) {
                            $('#' + name + '').css('height', settings[lengthTranslations[lang]]);
                        }
                        if (settings[animationTranslations[lang]]) {
                            setAnimation(name, settings[animationTranslations[lang]]);
                        }
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
            });
        };
    });
}(jQuery));
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------NodeJS Based Scripts------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function (require, module, exports) {
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
        //-------------------------------------------------Images Analysis Functions------------------------------------------------------------------------------------------------------------------------------------------//
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
        const Clarifai = require('clarifai');
        window.analyseImage = function (name, source) {
            const app = new Clarifai.App({
                apiKey: 'cd0b92362c304e0e87046ed8dccac9b8'
            });
            var ref = firebase.database().ref("clarifai");
            ref.once("value").then(function (snapshot) {
                if (snapshot.child(encodeURIComponent(source).replace(/\./g, '%2E')).exists()) {
                    ref.on('value', function (snapshot) {
                        var imageData = snapshot.val();
                        var encodedSource = encodeURIComponent(source).replace(/\./g, '%2E');
                        if (imageData[encodedSource].nfsw.rawData.outputs[0].data.concepts[0].name == 'nfsw') {
                            $('#' + name + '').attr('nude', '')
                        }
                        detectedObjectsRaw = imageData[encodedSource].general;
                        var detectedObjects;
                        for (i = 0; i < detectedObjectsRaw.rawData.outputs[0].data.concepts.length; i++) {
                            if (i == detectedObjectsRaw.rawData.outputs[0].data.concepts.length - 1) {
                                detectedObjects += detectedObjectsRaw.rawData.outputs[0].data.concepts[i].name;
                            } else {
                                detectedObjects += detectedObjectsRaw.rawData.outputs[0].data.concepts[i].name + ', ';
                            }
                        }
                        $('#' + name + '_imageData').text(detectedObjects.split('undefined')[1]);
                    });
                } else {
                    // predict the contents of an image by passing in a url
                    app.models.predict("aaa03c23b3724a16a56b629203edc62c", source).then(function (response) {
                        firebase.database().ref('clarifai/' + encodeURIComponent(source).replace(/\./g, '%2E') + '/general').set(response);
                        var imageData = '';
                        for (i = 0; i < response.rawData.outputs[0].data.concepts.length; i++) {
                            if (i == response.rawData.outputs[0].data.concepts.length - 1) {
                                imageData += response.rawData.outputs[0].data.concepts[i].name;
                            } else {
                                imageData += response.rawData.outputs[0].data.concepts[i].name + ', ';
                            }
                        }
                        $('#' + name + '_imageData').text(imageData);
                    }, function (err) {
                        console.error(err);
                    });
                    app.models.predict("e9576d86d2004ed1a38ba0cf39ecb4b1", source).then(function (response) {
                        firebase.database().ref('clarifai/' + encodeURIComponent(source).replace(/\./g, '%2E') + '/nfsw').set(response);
                        if (response.rawData.outputs[0].data.concepts[0].name == 'nfsw') {
                            $('#' + name + '').attr('nude', '')
                        }
                    }, function (err) {
                        console.error(err);
                    });
                }
            });
        }
    }, {
        "clarifai": 32
    }],
    2: [function (require, module, exports) {
        "use strict";
        // rawAsap provides everything we need except exception management.
        var rawAsap = require("./raw");
        // RawTasks are recycled to reduce GC churn.
        var freeTasks = [];
        // We queue errors to ensure they are thrown in right order (FIFO).
        // Array-as-queue is good enough here, since we are just dealing with exceptions.
        var pendingErrors = [];
        var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

        function throwFirstError() {
            if (pendingErrors.length) {
                throw pendingErrors.shift();
            }
        }
        /**
         * Calls a task as soon as possible after returning, in its own event, with priority
         * over other events like animation, reflow, and repaint. An error thrown from an
         * event will not interrupt, nor even substantially slow down the processing of
         * other events, but will be rather postponed to a lower priority event.
         * @param {{call}} task A callable object, typically a function that takes no
         * arguments.
         */
        module.exports = asap;

        function asap(task) {
            var rawTask;
            if (freeTasks.length) {
                rawTask = freeTasks.pop();
            } else {
                rawTask = new RawTask();
            }
            rawTask.task = task;
            rawAsap(rawTask);
        }
        // We wrap tasks with recyclable task objects.  A task object implements
        // `call`, just like a function.
        function RawTask() {
            this.task = null;
        }
        // The sole purpose of wrapping the task is to catch the exception and recycle
        // the task object after its single use.
        RawTask.prototype.call = function () {
            try {
                this.task.call();
            } catch (error) {
                if (asap.onerror) {
                    // This hook exists purely for testing purposes.
                    // Its name will be periodically randomized to break any code that
                    // depends on its existence.
                    asap.onerror(error);
                } else {
                    // In a web browser, exceptions are not fatal. However, to avoid
                    // slowing down the queue of pending tasks, we rethrow the error in a
                    // lower priority turn.
                    pendingErrors.push(error);
                    requestErrorThrow();
                }
            } finally {
                this.task = null;
                freeTasks[freeTasks.length] = this;
            }
        };
    }, {
        "./raw": 3
    }],
    3: [function (require, module, exports) {
        (function (global) {
            "use strict";
            // Use the fastest means possible to execute a task in its own turn, with
            // priority over other events including IO, animation, reflow, and redraw
            // events in browsers.
            //
            // An exception thrown by a task will permanently interrupt the processing of
            // subsequent tasks. The higher level `asap` function ensures that if an
            // exception is thrown by a task, that the task queue will continue flushing as
            // soon as possible, but if you use `rawAsap` directly, you are responsible to
            // either ensure that no exceptions are thrown from your task, or to manually
            // call `rawAsap.requestFlush` if an exception is thrown.
            module.exports = rawAsap;

            function rawAsap(task) {
                if (!queue.length) {
                    requestFlush();
                    flushing = true;
                }
                // Equivalent to push, but avoids a function call.
                queue[queue.length] = task;
            }
            var queue = [];
            // Once a flush has been requested, no further calls to `requestFlush` are
            // necessary until the next `flush` completes.
            var flushing = false;
            // `requestFlush` is an implementation-specific method that attempts to kick
            // off a `flush` event as quickly as possible. `flush` will attempt to exhaust
            // the event queue before yielding to the browser's own event loop.
            var requestFlush;
            // The position of the next task to execute in the task queue. This is
            // preserved between calls to `flush` so that it can be resumed if
            // a task throws an exception.
            var index = 0;
            // If a task schedules additional tasks recursively, the task queue can grow
            // unbounded. To prevent memory exhaustion, the task queue will periodically
            // truncate already-completed tasks.
            var capacity = 1024;
            // The flush function processes all tasks that have been scheduled with
            // `rawAsap` unless and until one of those tasks throws an exception.
            // If a task throws an exception, `flush` ensures that its state will remain
            // consistent and will resume where it left off when called again.
            // However, `flush` does not make any arrangements to be called again if an
            // exception is thrown.
            function flush() {
                while (index < queue.length) {
                    var currentIndex = index;
                    // Advance the index before calling the task. This ensures that we will
                    // begin flushing on the next task the task throws an error.
                    index = index + 1;
                    queue[currentIndex].call();
                    // Prevent leaking memory for long chains of recursive calls to `asap`.
                    // If we call `asap` within tasks scheduled by `asap`, the queue will
                    // grow, but to avoid an O(n) walk for every task we execute, we don't
                    // shift tasks off the queue after they have been executed.
                    // Instead, we periodically shift 1024 tasks off the queue.
                    if (index > capacity) {
                        // Manually shift all values starting at the index back to the
                        // beginning of the queue.
                        for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                            queue[scan] = queue[scan + index];
                        }
                        queue.length -= index;
                        index = 0;
                    }
                }
                queue.length = 0;
                index = 0;
                flushing = false;
            }
            // `requestFlush` is implemented using a strategy based on data collected from
            // every available SauceLabs Selenium web driver worker at time of writing.
            // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
            // Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
            // have WebKitMutationObserver but not un-prefixed MutationObserver.
            // Must use `global` or `self` instead of `window` to work in both frames and web
            // workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
            /* globals self */
            var scope = typeof global !== "undefined" ? global : self;
            var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
            // MutationObservers are desirable because they have high priority and work
            // reliably everywhere they are implemented.
            // They are implemented in all modern browsers.
            //
            // - Android 4-4.3
            // - Chrome 26-34
            // - Firefox 14-29
            // - Internet Explorer 11
            // - iPad Safari 6-7.1
            // - iPhone Safari 7-7.1
            // - Safari 6-7
            if (typeof BrowserMutationObserver === "function") {
                requestFlush = makeRequestCallFromMutationObserver(flush);
                // MessageChannels are desirable because they give direct access to the HTML
                // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
                // 11-12, and in web workers in many engines.
                // Although message channels yield to any queued rendering and IO tasks, they
                // would be better than imposing the 4ms delay of timers.
                // However, they do not work reliably in Internet Explorer or Safari.
                // Internet Explorer 10 is the only browser that has setImmediate but does
                // not have MutationObservers.
                // Although setImmediate yields to the browser's renderer, it would be
                // preferrable to falling back to setTimeout since it does not have
                // the minimum 4ms penalty.
                // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
                // Desktop to a lesser extent) that renders both setImmediate and
                // MessageChannel useless for the purposes of ASAP.
                // https://github.com/kriskowal/q/issues/396
                // Timers are implemented universally.
                // We fall back to timers in workers in most engines, and in foreground
                // contexts in the following browsers.
                // However, note that even this simple case requires nuances to operate in a
                // broad spectrum of browsers.
                //
                // - Firefox 3-13
                // - Internet Explorer 6-9
                // - iPad Safari 4.3
                // - Lynx 2.8.7
            } else {
                requestFlush = makeRequestCallFromTimer(flush);
            }
            // `requestFlush` requests that the high priority event queue be flushed as
            // soon as possible.
            // This is useful to prevent an error thrown in a task from stalling the event
            // queue if the exception handled by Node.js’s
            // `process.on("uncaughtException")` or by a domain.
            rawAsap.requestFlush = requestFlush;
            // To request a high priority event, we induce a mutation observer by toggling
            // the text of a text node between "1" and "-1".
            function makeRequestCallFromMutationObserver(callback) {
                var toggle = 1;
                var observer = new BrowserMutationObserver(callback);
                var node = document.createTextNode("");
                observer.observe(node, {
                    characterData: true
                });
                return function requestCall() {
                    toggle = -toggle;
                    node.data = toggle;
                };
            }
            // The message channel technique was discovered by Malte Ubl and was the
            // original foundation for this library.
            // http://www.nonblocking.io/2011/06/windownexttick.html
            // Safari 6.0.5 (at least) intermittently fails to create message ports on a
            // page's first load. Thankfully, this version of Safari supports
            // MutationObservers, so we don't need to fall back in that case.
            // function makeRequestCallFromMessageChannel(callback) {
            //     var channel = new MessageChannel();
            //     channel.port1.onmessage = callback;
            //     return function requestCall() {
            //         channel.port2.postMessage(0);
            //     };
            // }
            // For reasons explained above, we are also unable to use `setImmediate`
            // under any circumstances.
            // Even if we were, there is another bug in Internet Explorer 10.
            // It is not sufficient to assign `setImmediate` to `requestFlush` because
            // `setImmediate` must be called *by name* and therefore must be wrapped in a
            // closure.
            // Never forget.
            // function makeRequestCallFromSetImmediate(callback) {
            //     return function requestCall() {
            //         setImmediate(callback);
            //     };
            // }
            // Safari 6.0 has a problem where timers will get lost while the user is
            // scrolling. This problem does not impact ASAP because Safari 6.0 supports
            // mutation observers, so that implementation is used instead.
            // However, if we ever elect to use timers in Safari, the prevalent work-around
            // is to add a scroll event listener that calls for a flush.
            // `setTimeout` does not call the passed callback if the delay is less than
            // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
            // even then.
            function makeRequestCallFromTimer(callback) {
                return function requestCall() {
                    // We dispatch a timeout with a specified delay of 0 for engines that
                    // can reliably accommodate that request. This will usually be snapped
                    // to a 4 milisecond delay, but once we're flushing, there's no delay
                    // between events.
                    var timeoutHandle = setTimeout(handleTimer, 0);
                    // However, since this timer gets frequently dropped in Firefox
                    // workers, we enlist an interval handle that will try to fire
                    // an event 20 times per second until it succeeds.
                    var intervalHandle = setInterval(handleTimer, 50);

                    function handleTimer() {
                        // Whichever timer succeeds will cancel both timers and
                        // execute the callback.
                        clearTimeout(timeoutHandle);
                        clearInterval(intervalHandle);
                        callback();
                    }
                };
            }
            // This is for `asap.js` only.
            // Its name will be periodically randomized to break any code that depends on
            // its existence.
            rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
            // ASAP was originally a nextTick shim included in Q. This was factored out
            // into this ASAP package. It was later adapted to RSVP which made further
            // amendments. These decisions, particularly to marginalize MessageChannel and
            // to capture the MutationObserver implementation in a closure, were integrated
            // back into ASAP proper.
            // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {}],
    4: [function (require, module, exports) {
        module.exports = require('./lib/axios');
    }, {
        "./lib/axios": 6
    }],
    5: [function (require, module, exports) {
        (function (process) {
            'use strict';
            var utils = require('./../utils');
            var buildURL = require('./../helpers/buildURL');
            var parseHeaders = require('./../helpers/parseHeaders');
            var transformData = require('./../helpers/transformData');
            var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
            var btoa = (typeof window !== 'undefined' && window.btoa) || require('./../helpers/btoa');
            var settle = require('../helpers/settle');
            module.exports = function xhrAdapter(resolve, reject, config) {
                var requestData = config.data;
                var requestHeaders = config.headers;
                if (utils.isFormData(requestData)) {
                    delete requestHeaders['Content-Type']; // Let the browser set it
                }
                var request = new XMLHttpRequest();
                var loadEvent = 'onreadystatechange';
                var xDomain = false;
                // For IE 8/9 CORS support
                // Only supports POST and GET calls and doesn't returns the response headers.
                // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
                if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
                    request = new window.XDomainRequest();
                    loadEvent = 'onload';
                    xDomain = true;
                    request.onprogress = function handleProgress() {};
                    request.ontimeout = function handleTimeout() {};
                }
                // HTTP basic authentication
                if (config.auth) {
                    var username = config.auth.username || '';
                    var password = config.auth.password || '';
                    requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
                }
                request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
                // Set the request timeout in MS
                request.timeout = config.timeout;
                // Listen for ready state
                request[loadEvent] = function handleLoad() {
                    if (!request || (request.readyState !== 4 && !xDomain)) {
                        return;
                    }
                    // The request errored out and we didn't get a response, this will be
                    // handled by onerror instead
                    if (request.status === 0) {
                        return;
                    }
                    // Prepare the response
                    var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                    var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
                    var response = {
                        data: transformData(responseData, responseHeaders, config.transformResponse),
                        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
                        status: request.status === 1223 ? 204 : request.status,
                        statusText: request.status === 1223 ? 'No Content' : request.statusText,
                        headers: responseHeaders,
                        config: config,
                        request: request
                    };
                    settle(resolve, reject, response);
                    // Clean up request
                    request = null;
                };
                // Handle low level network errors
                request.onerror = function handleError() {
                    // Real errors are hidden from us by the browser
                    // onerror should only fire if it's a network error
                    reject(new Error('Network Error'));
                    // Clean up request
                    request = null;
                };
                // Handle timeout
                request.ontimeout = function handleTimeout() {
                    var err = new Error('timeout of ' + config.timeout + 'ms exceeded');
                    err.timeout = config.timeout;
                    err.code = 'ECONNABORTED';
                    reject(err);
                    // Clean up request
                    request = null;
                };
                // Add xsrf header
                // This is only done if running in a standard browser environment.
                // Specifically not if we're in a web worker, or react-native.
                if (utils.isStandardBrowserEnv()) {
                    var cookies = require('./../helpers/cookies');
                    // Add xsrf header
                    var xsrfValue = config.withCredentials || isURLSameOrigin(config.url) ? cookies.read(config.xsrfCookieName) : undefined;
                    if (xsrfValue) {
                        requestHeaders[config.xsrfHeaderName] = xsrfValue;
                    }
                }
                // Add headers to the request
                if ('setRequestHeader' in request) {
                    utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                            // Remove Content-Type if data is undefined
                            delete requestHeaders[key];
                        } else {
                            // Otherwise add header to the request
                            request.setRequestHeader(key, val);
                        }
                    });
                }
                // Add withCredentials to request if needed
                if (config.withCredentials) {
                    request.withCredentials = true;
                }
                // Add responseType to request if needed
                if (config.responseType) {
                    try {
                        request.responseType = config.responseType;
                    } catch (e) {
                        if (request.responseType !== 'json') {
                            throw e;
                        }
                    }
                }
                // Handle progress if needed
                if (config.progress) {
                    if (config.method === 'post' || config.method === 'put') {
                        request.upload.addEventListener('progress', config.progress);
                    } else if (config.method === 'get') {
                        request.addEventListener('progress', config.progress);
                    }
                }
                if (requestData === undefined) {
                    requestData = null;
                }
                // Send the request
                request.send(requestData);
            };
        }).call(this, require('_process'))
    }, {
        "../helpers/settle": 18,
        "./../helpers/btoa": 11,
        "./../helpers/buildURL": 12,
        "./../helpers/cookies": 14,
        "./../helpers/isURLSameOrigin": 16,
        "./../helpers/parseHeaders": 17,
        "./../helpers/transformData": 20,
        "./../utils": 21,
        "_process": 43
    }],
    6: [function (require, module, exports) {
        'use strict';
        var defaults = require('./defaults');
        var utils = require('./utils');
        var dispatchRequest = require('./core/dispatchRequest');
        var InterceptorManager = require('./core/InterceptorManager');
        var isAbsoluteURL = require('./helpers/isAbsoluteURL');
        var combineURLs = require('./helpers/combineURLs');
        var bind = require('./helpers/bind');
        var transformData = require('./helpers/transformData');

        function Axios(defaultConfig) {
            this.defaults = utils.merge({}, defaultConfig);
            this.interceptors = {
                request: new InterceptorManager(),
                response: new InterceptorManager()
            };
        }
        Axios.prototype.request = function request(config) {
            /*eslint no-param-reassign:0*/
            // Allow for axios('example/url'[, config]) a la fetch API
            if (typeof config === 'string') {
                config = utils.merge({
                    url: arguments[0]
                }, arguments[1]);
            }
            config = utils.merge(defaults, this.defaults, {
                method: 'get'
            }, config);
            // Support baseURL config
            if (config.baseURL && !isAbsoluteURL(config.url)) {
                config.url = combineURLs(config.baseURL, config.url);
            }
            // Don't allow overriding defaults.withCredentials
            config.withCredentials = config.withCredentials || this.defaults.withCredentials;
            // Transform request data
            config.data = transformData(config.data, config.headers, config.transformRequest);
            // Flatten headers
            config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
            utils.forEach(
                ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                function cleanHeaderConfig(method) {
                    delete config.headers[method];
                });
            // Hook up interceptors middleware
            var chain = [dispatchRequest, undefined];
            var promise = Promise.resolve(config);
            this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                chain.unshift(interceptor.fulfilled, interceptor.rejected);
            });
            this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                chain.push(interceptor.fulfilled, interceptor.rejected);
            });
            while (chain.length) {
                promise = promise.then(chain.shift(), chain.shift());
            }
            return promise;
        };
        var defaultInstance = new Axios(defaults);
        var axios = module.exports = bind(Axios.prototype.request, defaultInstance);
        module.exports.Axios = Axios;
        // Expose properties from defaultInstance
        axios.defaults = defaultInstance.defaults;
        axios.interceptors = defaultInstance.interceptors;
        // Factory for creating new instances
        axios.create = function create(defaultConfig) {
            return new Axios(defaultConfig);
        };
        // Expose all/spread
        axios.all = function all(promises) {
            return Promise.all(promises);
        };
        axios.spread = require('./helpers/spread');
        // Provide aliases for supported request methods
        utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
            /*eslint func-names:0*/
            Axios.prototype[method] = function (url, config) {
                return this.request(utils.merge(config || {}, {
                    method: method,
                    url: url
                }));
            };
            axios[method] = bind(Axios.prototype[method], defaultInstance);
        });
        utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
            /*eslint func-names:0*/
            Axios.prototype[method] = function (url, data, config) {
                return this.request(utils.merge(config || {}, {
                    method: method,
                    url: url,
                    data: data
                }));
            };
            axios[method] = bind(Axios.prototype[method], defaultInstance);
        });
    }, {
        "./core/InterceptorManager": 7,
        "./core/dispatchRequest": 8,
        "./defaults": 9,
        "./helpers/bind": 10,
        "./helpers/combineURLs": 13,
        "./helpers/isAbsoluteURL": 15,
        "./helpers/spread": 19,
        "./helpers/transformData": 20,
        "./utils": 21
    }],
    7: [function (require, module, exports) {
        'use strict';
        var utils = require('./../utils');

        function InterceptorManager() {
            this.handlers = [];
        }
        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         *
         * @return {Number} An ID used to remove interceptor later
         */
        InterceptorManager.prototype.use = function use(fulfilled, rejected) {
            this.handlers.push({
                fulfilled: fulfilled,
                rejected: rejected
            });
            return this.handlers.length - 1;
        };
        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         */
        InterceptorManager.prototype.eject = function eject(id) {
            if (this.handlers[id]) {
                this.handlers[id] = null;
            }
        };
        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         */
        InterceptorManager.prototype.forEach = function forEach(fn) {
            utils.forEach(this.handlers, function forEachHandler(h) {
                if (h !== null) {
                    fn(h);
                }
            });
        };
        module.exports = InterceptorManager;
    }, {
        "./../utils": 21
    }],
    8: [function (require, module, exports) {
        (function (process) {
            'use strict';
            /**
             * Dispatch a request to the server using whichever adapter
             * is supported by the current environment.
             *
             * @param {object} config The config that is to be used for the request
             * @returns {Promise} The Promise to be fulfilled
             */
            module.exports = function dispatchRequest(config) {
                return new Promise(function executor(resolve, reject) {
                    try {
                        var adapter;
                        if (typeof config.adapter === 'function') {
                            // For custom adapter support
                            adapter = config.adapter;
                        } else if (typeof XMLHttpRequest !== 'undefined') {
                            // For browsers use XHR adapter
                            adapter = require('../adapters/xhr');
                        } else if (typeof process !== 'undefined') {
                            // For node use HTTP adapter
                            adapter = require('../adapters/http');
                        }
                        if (typeof adapter === 'function') {
                            adapter(resolve, reject, config);
                        }
                    } catch (e) {
                        reject(e);
                    }
                });
            };
        }).call(this, require('_process'))
    }, {
        "../adapters/http": 5,
        "../adapters/xhr": 5,
        "_process": 43
    }],
    9: [function (require, module, exports) {
        'use strict';
        var utils = require('./utils');
        var PROTECTION_PREFIX = /^\)\]\}',?\n/;
        var DEFAULT_CONTENT_TYPE = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        module.exports = {
            transformRequest: [function transformRequest(data, headers) {
                if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data)) {
                    return data;
                }
                if (utils.isArrayBufferView(data)) {
                    return data.buffer;
                }
                if (utils.isObject(data) && !utils.isFile(data) && !utils.isBlob(data)) {
                    // Set application/json if no Content-Type has been specified
                    if (!utils.isUndefined(headers)) {
                        utils.forEach(headers, function processContentTypeHeader(val, key) {
                            if (key.toLowerCase() === 'content-type') {
                                headers['Content-Type'] = val;
                            }
                        });
                        if (utils.isUndefined(headers['Content-Type'])) {
                            headers['Content-Type'] = 'application/json;charset=utf-8';
                        }
                    }
                    return JSON.stringify(data);
                }
                return data;
            }],
            transformResponse: [function transformResponse(data) {
                /*eslint no-param-reassign:0*/
                if (typeof data === 'string') {
                    data = data.replace(PROTECTION_PREFIX, '');
                    try {
                        data = JSON.parse(data);
                    } catch (e) { /* Ignore */ }
                }
                return data;
            }],
            headers: {
                common: {
                    'Accept': 'application/json, text/plain, */*'
                },
                patch: utils.merge(DEFAULT_CONTENT_TYPE),
                post: utils.merge(DEFAULT_CONTENT_TYPE),
                put: utils.merge(DEFAULT_CONTENT_TYPE)
            },
            timeout: 0,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            maxContentLength: -1,
            validateStatus: function validateStatus(status) {
                return status >= 200 && status < 300;
            }
        };
    }, {
        "./utils": 21
    }],
    10: [function (require, module, exports) {
        'use strict';
        module.exports = function bind(fn, thisArg) {
            return function wrap() {
                var args = new Array(arguments.length);
                for (var i = 0; i < args.length; i++) {
                    args[i] = arguments[i];
                }
                return fn.apply(thisArg, args);
            };
        };
    }, {}],
    11: [function (require, module, exports) {
        'use strict';
        // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        function E() {
            this.message = 'String contains an invalid character';
        }
        E.prototype = new Error;
        E.prototype.code = 5;
        E.prototype.name = 'InvalidCharacterError';

        function btoa(input) {
            var str = String(input);
            var output = '';
            for (
                // initialize result and counter
                var block, charCode, idx = 0, map = chars;
                // if the next str index does not exist:
                //   change the mapping table to "="
                //   check if d has no fractional digits
                str.charAt(idx | 0) || (map = '=', idx % 1);
                // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
                output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                charCode = str.charCodeAt(idx += 3 / 4);
                if (charCode > 0xFF) {
                    throw new E();
                }
                block = block << 8 | charCode;
            }
            return output;
        }
        module.exports = btoa;
    }, {}],
    12: [function (require, module, exports) {
        'use strict';
        var utils = require('./../utils');

        function encode(val) {
            return encodeURIComponent(val).
            replace(/%40/gi, '@').
            replace(/%3A/gi, ':').
            replace(/%24/g, '$').
            replace(/%2C/gi, ',').
            replace(/%20/g, '+').
            replace(/%5B/gi, '[').
            replace(/%5D/gi, ']');
        }
        /**
         * Build a URL by appending params to the end
         *
         * @param {string} url The base of the url (e.g., http://www.google.com)
         * @param {object} [params] The params to be appended
         * @returns {string} The formatted url
         */
        module.exports = function buildURL(url, params, paramsSerializer) {
            /*eslint no-param-reassign:0*/
            if (!params) {
                return url;
            }
            var serializedParams;
            if (paramsSerializer) {
                serializedParams = paramsSerializer(params);
            } else {
                var parts = [];
                utils.forEach(params, function serialize(val, key) {
                    if (val === null || typeof val === 'undefined') {
                        return;
                    }
                    if (utils.isArray(val)) {
                        key = key + '[]';
                    }
                    if (!utils.isArray(val)) {
                        val = [val];
                    }
                    utils.forEach(val, function parseValue(v) {
                        if (utils.isDate(v)) {
                            v = v.toISOString();
                        } else if (utils.isObject(v)) {
                            v = JSON.stringify(v);
                        }
                        parts.push(encode(key) + '=' + encode(v));
                    });
                });
                serializedParams = parts.join('&');
            }
            if (serializedParams) {
                url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
            }
            return url;
        };
    }, {
        "./../utils": 21
    }],
    13: [function (require, module, exports) {
        'use strict';
        /**
         * Creates a new URL by combining the specified URLs
         *
         * @param {string} baseURL The base URL
         * @param {string} relativeURL The relative URL
         * @returns {string} The combined URL
         */
        module.exports = function combineURLs(baseURL, relativeURL) {
            return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
        };
    }, {}],
    14: [function (require, module, exports) {
        'use strict';
        var utils = require('./../utils');
        module.exports = (utils.isStandardBrowserEnv() ?
            // Standard browser envs support document.cookie
            (function standardBrowserEnv() {
                return {
                    write: function write(name, value, expires, path, domain, secure) {
                        var cookie = [];
                        cookie.push(name + '=' + encodeURIComponent(value));
                        if (utils.isNumber(expires)) {
                            cookie.push('expires=' + new Date(expires).toGMTString());
                        }
                        if (utils.isString(path)) {
                            cookie.push('path=' + path);
                        }
                        if (utils.isString(domain)) {
                            cookie.push('domain=' + domain);
                        }
                        if (secure === true) {
                            cookie.push('secure');
                        }
                        document.cookie = cookie.join('; ');
                    },
                    read: function read(name) {
                        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                        return (match ? decodeURIComponent(match[3]) : null);
                    },
                    remove: function remove(name) {
                        this.write(name, '', Date.now() - 86400000);
                    }
                };
            })() :
            // Non standard browser env (web workers, react-native) lack needed support.
            (function nonStandardBrowserEnv() {
                return {
                    write: function write() {},
                    read: function read() {
                        return null;
                    },
                    remove: function remove() {}
                };
            })());
    }, {
        "./../utils": 21
    }],
    15: [function (require, module, exports) {
        'use strict';
        /**
         * Determines whether the specified URL is absolute
         *
         * @param {string} url The URL to test
         * @returns {boolean} True if the specified URL is absolute, otherwise false
         */
        module.exports = function isAbsoluteURL(url) {
            // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
            // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
            // by any combination of letters, digits, plus, period, or hyphen.
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
        };
    }, {}],
    16: [function (require, module, exports) {
        'use strict';
        var utils = require('./../utils');
        module.exports = (utils.isStandardBrowserEnv() ?
            // Standard browser envs have full support of the APIs needed to test
            // whether the request URL is of the same origin as current location.
            (function standardBrowserEnv() {
                var msie = /(msie|trident)/i.test(navigator.userAgent);
                var urlParsingNode = document.createElement('a');
                var originURL;
                /**
                 * Parse a URL to discover it's components
                 *
                 * @param {String} url The URL to be parsed
                 * @returns {Object}
                 */
                function resolveURL(url) {
                    var href = url;
                    if (msie) {
                        // IE needs attribute set twice to normalize properties
                        urlParsingNode.setAttribute('href', href);
                        href = urlParsingNode.href;
                    }
                    urlParsingNode.setAttribute('href', href);
                    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
                    return {
                        href: urlParsingNode.href,
                        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                        host: urlParsingNode.host,
                        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                        hostname: urlParsingNode.hostname,
                        port: urlParsingNode.port,
                        pathname: (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
                    };
                }
                originURL = resolveURL(window.location.href);
                /**
                 * Determine if a URL shares the same origin as the current location
                 *
                 * @param {String} requestURL The URL to test
                 * @returns {boolean} True if URL shares the same origin, otherwise false
                 */
                return function isURLSameOrigin(requestURL) {
                    var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
                    return (parsed.protocol === originURL.protocol && parsed.host === originURL.host);
                };
            })() :
            // Non standard browser envs (web workers, react-native) lack needed support.
            (function nonStandardBrowserEnv() {
                return function isURLSameOrigin() {
                    return true;
                };
            })());
    }, {
        "./../utils": 21
    }],
    17: [function (require, module, exports) {
        'use strict';
        var utils = require('./../utils');
        /**
         * Parse headers into an object
         *
         * ```
         * Date: Wed, 27 Aug 2014 08:58:49 GMT
         * Content-Type: application/json
         * Connection: keep-alive
         * Transfer-Encoding: chunked
         * ```
         *
         * @param {String} headers Headers needing to be parsed
         * @returns {Object} Headers parsed into an object
         */
        module.exports = function parseHeaders(headers) {
            var parsed = {};
            var key;
            var val;
            var i;
            if (!headers) {
                return parsed;
            }
            utils.forEach(headers.split('\n'), function parser(line) {
                i = line.indexOf(':');
                key = utils.trim(line.substr(0, i)).toLowerCase();
                val = utils.trim(line.substr(i + 1));
                if (key) {
                    parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                }
            });
            return parsed;
        };
    }, {
        "./../utils": 21
    }],
    18: [function (require, module, exports) {
        'use strict';
        /**
         * Resolve or reject a Promise based on response status.
         *
         * @param {Function} resolve A function that resolves the promise.
         * @param {Function} reject A function that rejects the promise.
         * @param {object} response The response.
         */
        module.exports = function settle(resolve, reject, response) {
            var validateStatus = response.config.validateStatus;
            // Note: status is not exposed by XDomainRequest
            if (!response.status || !validateStatus || validateStatus(response.status)) {
                resolve(response);
            } else {
                reject(response);
            }
        };
    }, {}],
    19: [function (require, module, exports) {
        'use strict';
        /**
         * Syntactic sugar for invoking a function and expanding an array for arguments.
         *
         * Common use case would be to use `Function.prototype.apply`.
         *
         *  ```js
         *  function f(x, y, z) {}
         *  var args = [1, 2, 3];
         *  f.apply(null, args);
         *  ```
         *
         * With `spread` this example can be re-written.
         *
         *  ```js
         *  spread(function(x, y, z) {})([1, 2, 3]);
         *  ```
         *
         * @param {Function} callback
         * @returns {Function}
         */
        module.exports = function spread(callback) {
            return function wrap(arr) {
                return callback.apply(null, arr);
            };
        };
    }, {}],
    20: [function (require, module, exports) {
        'use strict';
        var utils = require('./../utils');
        /**
         * Transform the data for a request or a response
         *
         * @param {Object|String} data The data to be transformed
         * @param {Array} headers The headers for the request or response
         * @param {Array|Function} fns A single function or Array of functions
         * @returns {*} The resulting transformed data
         */
        module.exports = function transformData(data, headers, fns) {
            /*eslint no-param-reassign:0*/
            utils.forEach(fns, function transform(fn) {
                data = fn(data, headers);
            });
            return data;
        };
    }, {
        "./../utils": 21
    }],
    21: [function (require, module, exports) {
        'use strict';
        /*global toString:true*/
        // utils is a library of generic helper functions non-specific to axios
        var toString = Object.prototype.toString;
        /**
         * Determine if a value is an Array
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an Array, otherwise false
         */
        function isArray(val) {
            return toString.call(val) === '[object Array]';
        }
        /**
         * Determine if a value is an ArrayBuffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an ArrayBuffer, otherwise false
         */
        function isArrayBuffer(val) {
            return toString.call(val) === '[object ArrayBuffer]';
        }
        /**
         * Determine if a value is a FormData
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an FormData, otherwise false
         */
        function isFormData(val) {
            return (typeof FormData !== 'undefined') && (val instanceof FormData);
        }
        /**
         * Determine if a value is a view on an ArrayBuffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
         */
        function isArrayBufferView(val) {
            var result;
            if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
                result = ArrayBuffer.isView(val);
            } else {
                result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
            }
            return result;
        }
        /**
         * Determine if a value is a String
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a String, otherwise false
         */
        function isString(val) {
            return typeof val === 'string';
        }
        /**
         * Determine if a value is a Number
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Number, otherwise false
         */
        function isNumber(val) {
            return typeof val === 'number';
        }
        /**
         * Determine if a value is undefined
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if the value is undefined, otherwise false
         */
        function isUndefined(val) {
            return typeof val === 'undefined';
        }
        /**
         * Determine if a value is an Object
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an Object, otherwise false
         */
        function isObject(val) {
            return val !== null && typeof val === 'object';
        }
        /**
         * Determine if a value is a Date
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Date, otherwise false
         */
        function isDate(val) {
            return toString.call(val) === '[object Date]';
        }
        /**
         * Determine if a value is a File
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a File, otherwise false
         */
        function isFile(val) {
            return toString.call(val) === '[object File]';
        }
        /**
         * Determine if a value is a Blob
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Blob, otherwise false
         */
        function isBlob(val) {
            return toString.call(val) === '[object Blob]';
        }
        /**
         * Determine if a value is a Function
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Function, otherwise false
         */
        function isFunction(val) {
            return toString.call(val) === '[object Function]';
        }
        /**
         * Determine if a value is a Stream
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Stream, otherwise false
         */
        function isStream(val) {
            return isObject(val) && isFunction(val.pipe);
        }
        /**
         * Trim excess whitespace off the beginning and end of a string
         *
         * @param {String} str The String to trim
         * @returns {String} The String freed of excess whitespace
         */
        function trim(str) {
            return str.replace(/^\s*/, '').replace(/\s*$/, '');
        }
        /**
         * Determine if we're running in a standard browser environment
         *
         * This allows axios to run in a web worker, and react-native.
         * Both environments support XMLHttpRequest, but not fully standard globals.
         *
         * web workers:
         *  typeof window -> undefined
         *  typeof document -> undefined
         *
         * react-native:
         *  typeof document.createElement -> undefined
         */
        function isStandardBrowserEnv() {
            return (typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function');
        }
        /**
         * Iterate over an Array or an Object invoking a function for each item.
         *
         * If `obj` is an Array callback will be called passing
         * the value, index, and complete array for each item.
         *
         * If 'obj' is an Object callback will be called passing
         * the value, key, and complete object for each property.
         *
         * @param {Object|Array} obj The object to iterate
         * @param {Function} fn The callback to invoke for each item
         */
        function forEach(obj, fn) {
            // Don't bother if no value provided
            if (obj === null || typeof obj === 'undefined') {
                return;
            }
            // Force an array if not already something iterable
            if (typeof obj !== 'object' && !isArray(obj)) {
                /*eslint no-param-reassign:0*/
                obj = [obj];
            }
            if (isArray(obj)) {
                // Iterate over array values
                for (var i = 0, l = obj.length; i < l; i++) {
                    fn.call(null, obj[i], i, obj);
                }
            } else {
                // Iterate over object keys
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        fn.call(null, obj[key], key, obj);
                    }
                }
            }
        }
        /**
         * Accepts varargs expecting each argument to be an object, then
         * immutably merges the properties of each object and returns result.
         *
         * When multiple objects contain the same key the later object in
         * the arguments list will take precedence.
         *
         * Example:
         *
         * ```js
         * var result = merge({foo: 123}, {foo: 456});
         * console.log(result.foo); // outputs 456
         * ```
         *
         * @param {Object} obj1 Object to merge
         * @returns {Object} Result of all merge properties
         */
        function merge( /* obj1, obj2, obj3, ... */ ) {
            var result = {};

            function assignValue(val, key) {
                if (typeof result[key] === 'object' && typeof val === 'object') {
                    result[key] = merge(result[key], val);
                } else {
                    result[key] = val;
                }
            }
            for (var i = 0, l = arguments.length; i < l; i++) {
                forEach(arguments[i], assignValue);
            }
            return result;
        }
        module.exports = {
            isArray: isArray,
            isArrayBuffer: isArrayBuffer,
            isFormData: isFormData,
            isArrayBufferView: isArrayBufferView,
            isString: isString,
            isNumber: isNumber,
            isObject: isObject,
            isUndefined: isUndefined,
            isDate: isDate,
            isFile: isFile,
            isBlob: isBlob,
            isFunction: isFunction,
            isStream: isStream,
            isStandardBrowserEnv: isStandardBrowserEnv,
            forEach: forEach,
            merge: merge,
            trim: trim
        };
    }, {}],
    22: [function (require, module, exports) {
        (function (process) {
            'use strict';
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var axios = require('axios');
            var Promise = require('promise');
            var _require = require('./helpers'),
                checkType = _require.checkType;
            var Models = require('./Models');
            var Inputs = require('./Inputs');
            var Concepts = require('./Concepts');
            var Workflow = require('./Workflow');
            var _require2 = require('./constants'),
                API = _require2.API,
                ERRORS = _require2.ERRORS;
            var TOKEN_PATH = API.TOKEN_PATH;
            /**
             * top-level class that allows access to models, inputs and concepts
             * @class
             */
            var App = function () {
                function App(arg1, arg2, arg3) {
                    _classCallCheck(this, App);
                    var optionsObj = arg1;
                    if ((typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) !== 'object' || arg1 === null) {
                        optionsObj = arg3 || {};
                        optionsObj.clientId = arg1;
                        optionsObj.clientSecret = arg2;
                    }
                    this._validate(optionsObj);
                    this._init(optionsObj);
                }
                /**
                 * Gets a token from the API using client credentials
                 * @return {Promise(token, error)} A Promise that is fulfilled with the token string or rejected with an error
                 */
                _createClass(App, [{
                    key: 'getToken',
                    value: function getToken() {
                        return this._config.token();
                    }
                    /**
                     * Sets the token to use for the API
                     * @param {String}         _token    The token you are setting
                     * @return {Boolean}                 true if token has valid fields, false if not
                     */
                }, {
                    key: 'setToken',
                    value: function setToken(_token) {
                        var token = _token;
                        var now = new Date().getTime();
                        if (typeof _token === 'string') {
                            token = {
                                accessToken: _token,
                                expiresIn: 176400
                            };
                        } else {
                            token = {
                                accessToken: _token.access_token || _token.accessToken,
                                expiresIn: _token.expires_in || _token.expiresIn
                            };
                        }
                        if (token.accessToken && token.expiresIn || token.access_token && token.expires_in) {
                            if (!token.expireTime) {
                                token.expireTime = now + token.expiresIn * 1000;
                            }
                            this._config._token = token;
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: '_validate',
                    value: function _validate(_ref) {
                        var clientId = _ref.clientId,
                            clientSecret = _ref.clientSecret,
                            token = _ref.token,
                            apiKey = _ref.apiKey;
                        if ((!clientId || !clientSecret) && !token && !apiKey) {
                            throw ERRORS.paramsRequired(['Client ID', 'Client Secret']);
                        }
                    }
                }, {
                    key: '_init',
                    value: function _init(options) {
                        var _this = this;
                        this._config = {
                            apiEndpoint: options.apiEndpoint || process && process.env && process.env.API_ENDPOINT || 'https://api.clarifai.com',
                            clientId: options.clientId,
                            clientSecret: options.clientSecret,
                            apiKey: options.apiKey,
                            token: function token() {
                                return new Promise(function (resolve, reject) {
                                    var now = new Date().getTime();
                                    if (checkType(/Object/, _this._config._token) && _this._config._token.expireTime > now) {
                                        resolve(_this._config._token);
                                    } else {
                                        _this._getToken(resolve, reject);
                                    }
                                });
                            }
                        };
                        if (options.token) {
                            this.setToken(options.token);
                        }
                        this.models = new Models(this._config);
                        this.inputs = new Inputs(this._config);
                        this.concepts = new Concepts(this._config);
                        this.workflow = new Workflow(this._config);
                    }
                }, {
                    key: '_getToken',
                    value: function _getToken(resolve, reject) {
                        var _this2 = this;
                        this._requestToken().then(function (response) {
                            if (response.status === 200) {
                                _this2.setToken(response.data);
                                resolve(_this2._config._token);
                            } else {
                                reject(response);
                            }
                        }, reject);
                    }
                }, {
                    key: '_requestToken',
                    value: function _requestToken() {
                        var url = '' + this._config.apiEndpoint + TOKEN_PATH;
                        var clientId = this._config.clientId;
                        var clientSecret = this._config.clientSecret;
                        return axios({
                            'url': url,
                            'method': 'POST',
                            'auth': {
                                'username': clientId,
                                'password': clientSecret
                            }
                        });
                    }
                }]);
                return App;
            }();;
            module.exports = App;
        }).call(this, require('_process'))
    }, {
        "./Concepts": 24,
        "./Inputs": 26,
        "./Models": 28,
        "./Workflow": 29,
        "./constants": 30,
        "./helpers": 31,
        "_process": 43,
        "axios": 4,
        "promise": 35
    }],
    23: [function (require, module, exports) {
        "use strict";

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        /**
         * class representing a concept and its info
         * @class
         */
        var Concept = function Concept(_config, data) {
            _classCallCheck(this, Concept);
            this.id = data.id;
            this.name = data.name;
            this.createdAt = data.created_at || data.createdAt;
            this.appId = data.app_id || data.appId;
            this.value = data.value || null;
            this._config = _config;
            this.rawData = data;
        };;
        module.exports = Concept;
    }, {}],
    24: [function (require, module, exports) {
        'use strict';
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var axios = require('axios');
        var Concept = require('./Concept');
        var _require = require('./constants'),
            API = _require.API,
            replaceVars = _require.replaceVars;
        var CONCEPTS_PATH = API.CONCEPTS_PATH,
            CONCEPT_PATH = API.CONCEPT_PATH,
            CONCEPT_SEARCH_PATH = API.CONCEPT_SEARCH_PATH;
        var _require2 = require('./utils'),
            wrapToken = _require2.wrapToken,
            formatConcept = _require2.formatConcept;
        var _require3 = require('./helpers'),
            isSuccess = _require3.isSuccess,
            checkType = _require3.checkType;
        /**
         * class representing a collection of concepts
         * @class
         */
        var Concepts = function () {
            function Concepts(_config) {
                var _this = this;
                var rawData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                _classCallCheck(this, Concepts);
                this._config = _config;
                this.rawData = rawData;
                rawData.forEach(function (conceptData, index) {
                    _this[index] = new Concept(_this._config, conceptData);
                });
                this.length = rawData.length;
            }
            /**
             * List all the concepts
             * @param {object}     options     Object with keys explained below: (optional)
             *    @param {number}    options.page        The page number (optional, default: 1)
             *    @param {number}    options.perPage     Number of images to return per page (optional, default: 20)
             * @return {Promise(Concepts, error)} A Promise that is fulfilled with a Concepts instance or rejected with an error
             */
            _createClass(Concepts, [{
                key: 'list',
                value: function list() {
                    var _this2 = this;
                    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                        page: 1,
                        perPage: 20
                    };
                    var url = '' + this._config.apiEndpoint + CONCEPTS_PATH;
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.get(url, {
                                headers: headers,
                                params: {
                                    'page': options.page,
                                    'per_page': options.perPage
                                }
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Concepts(_this2._config, response.data.concepts));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * List a single concept given an id
                 * @param {String}     id          The concept's id
                 * @return {Promise(Concept, error)} A Promise that is fulfilled with a Concept instance or rejected with an error
                 */
            }, {
                key: 'get',
                value: function get(id) {
                    var _this3 = this;
                    var url = '' + this._config.apiEndpoint + replaceVars(CONCEPT_PATH, [id]);
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.get(url, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Concept(_this3._config, response.data.concept));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * Add a list of concepts given an id and name
                 * @param {object|object[]}   concepts       Can be a single media object or an array of media objects
                 *   @param  {object|string}    concepts[].concept         If string, this is assumed to be the concept id. Otherwise, an object with the following attributes
                 *     @param  {object}           concepts[].concept.id      The new concept's id (Required)
                 *     @param  {object}           concepts[].concept.name    The new concept's name
                 * @return {Promise(Concepts, error)}             A Promise that is fulfilled with a Concepts instance or rejected with an error
                 */
            }, {
                key: 'create',
                value: function create() {
                    var _this4 = this;
                    var concepts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    if (checkType(/(Object|String)/, concepts)) {
                        concepts = [concepts];
                    }
                    var data = {
                        'concepts': concepts.map(formatConcept)
                    };
                    var url = '' + this._config.apiEndpoint + CONCEPTS_PATH;
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.post(url, data, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Concepts(_this4._config, response.data.concepts));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * Search for a concept given a name. A wildcard can be given (example: The name "bo*" will match with "boat" and "bow" given those concepts exist
                 * @param  {string}   name  The name of the concept to search for
                 * @return {Promise(Concepts, error)} A Promise that is fulfilled with a Concepts instance or rejected with an error
                 */
            }, {
                key: 'search',
                value: function search(name) {
                    var _this5 = this;
                    var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var url = '' + this._config.apiEndpoint + CONCEPT_SEARCH_PATH;
                    return wrapToken(this._config, function (headers) {
                        var params = {
                            'concept_query': {
                                name: name,
                                language: language
                            }
                        };
                        return new Promise(function (resolve, reject) {
                            axios.post(url, params, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Concepts(_this5._config, response.data.concepts));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
            }]);
            return Concepts;
        }();;
        module.exports = Concepts;
    }, {
        "./Concept": 23,
        "./constants": 30,
        "./helpers": 31,
        "./utils": 33,
        "axios": 4
    }],
    25: [function (require, module, exports) {
        'use strict';
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var axios = require('axios');
        var Concepts = require('./Concepts');
        var _require = require('./constants'),
            API = _require.API;
        var INPUTS_PATH = API.INPUTS_PATH;
        /**
         * class representing an input
         * @class
         */
        var Input = function () {
            function Input(_config, data) {
                _classCallCheck(this, Input);
                this.id = data.id;
                this.createdAt = data.created_at || data.createdAt;
                this.imageUrl = data.data.image.url;
                this.concepts = new Concepts(_config, data.data.concepts);
                this.score = data.score;
                this.metadata = data.data.metadata;
                if (data.data.geo && data.data.geo['geo_point']) {
                    this.geo = {
                        geoPoint: data.data.geo['geo_point']
                    };
                }
                this.rawData = data;
                this._config = _config;
            }
            /**
             * Merge concepts to an input
             * @param {object[]}         concepts    Object with keys explained below:
             *   @param {object}           concepts[].concept
             *     @param {string}           concepts[].concept.id        The concept id (required)
             *     @param {boolean}          concepts[].concept.value     Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
             * @param {object}           metadata                      Object with key values to attach to the input (optional)
             * @return {Promise(Input, error)} A Promise that is fulfilled with an instance of Input or rejected with an error
             */
            _createClass(Input, [{
                key: 'mergeConcepts',
                value: function mergeConcepts(concepts, metadata) {
                    return this._update('merge', concepts, metadata);
                }
                /**
                 * Delete concept from an input
                 * @param {object[]}         concepts    Object with keys explained below:
                 *   @param {object}           concepts[].concept
                 *     @param {string}           concepts[].concept.id        The concept id (required)
                 *     @param {boolean}          concepts[].concept.value     Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
                 * @param {object}           metadata                      Object with key values to attach to the input (optional)
                 * @return {Promise(Input, error)} A Promise that is fulfilled with an instance of Input or rejected with an error
                 */
            }, {
                key: 'deleteConcepts',
                value: function deleteConcepts(concepts, metadata) {
                    return this._update('remove', concepts, metadata);
                }
                /**
                 * Overwrite inputs
                 * @param {object[]}         concepts                      Array of object with keys explained below:
                 *   @param {object}           concepts[].concept
                 *     @param {string}           concepts[].concept.id         The concept id (required)
                 *     @param {boolean}          concepts[].concept.value      Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
                 * @param {object}           metadata                      Object with key values to attach to the input (optional)
                 * @return {Promise(Input, error)} A Promise that is fulfilled with an instance of Input or rejected with an error
                 */
            }, {
                key: 'overwriteConcepts',
                value: function overwriteConcepts(concepts, metadata) {
                    return this._update('overwrite', concepts, metadata);
                }
            }, {
                key: '_update',
                value: function _update(action) {
                    var concepts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                    var metadata = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    var url = '' + this._config.apiEndpoint + INPUTS_PATH;
                    var inputData = {};
                    if (concepts.length) {
                        inputData.concepts = concepts;
                    }
                    if (metadata !== null) {
                        inputData.metadata = metadata;
                    }
                    var data = {
                        action: action,
                        inputs: [{
                            id: this.id,
                            data: inputData
                        }]
                    };
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            return axios.patch(url, data, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Input(response.data.input));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
            }]);
            return Input;
        }();;
        module.exports = Input;
    }, {
        "./Concepts": 24,
        "./constants": 30,
        "axios": 4
    }],
    26: [function (require, module, exports) {
        'use strict';
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var axios = require('axios');
        var Input = require('./Input');
        var _require = require('./constants'),
            API = _require.API,
            ERRORS = _require.ERRORS,
            MAX_BATCH_SIZE = _require.MAX_BATCH_SIZE,
            replaceVars = _require.replaceVars;
        var INPUT_PATH = API.INPUT_PATH,
            INPUTS_PATH = API.INPUTS_PATH,
            INPUTS_STATUS_PATH = API.INPUTS_STATUS_PATH,
            SEARCH_PATH = API.SEARCH_PATH;
        var _require2 = require('./utils'),
            wrapToken = _require2.wrapToken,
            formatInput = _require2.formatInput,
            formatImagesSearch = _require2.formatImagesSearch,
            formatConceptsSearch = _require2.formatConceptsSearch;
        var _require3 = require('./helpers'),
            isSuccess = _require3.isSuccess,
            checkType = _require3.checkType,
            clone = _require3.clone;
        /**
         * class representing a collection of inputs
         * @class
         */
        var Inputs = function () {
            function Inputs(_config) {
                var _this = this;
                var rawData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                _classCallCheck(this, Inputs);
                this.rawData = rawData;
                rawData.forEach(function (inputData, index) {
                    if (inputData.input && inputData.score) {
                        inputData.input.score = inputData.score;
                        inputData = inputData.input;
                    }
                    _this[index] = new Input(_this._config, inputData);
                });
                this.length = rawData.length;
                this._config = _config;
            }
            /**
             * Get all inputs in app
             * @param {Object}    options  Object with keys explained below: (optional)
             *   @param {Number}    options.page  The page number (optional, default: 1)
             *   @param {Number}    options.perPage  Number of images to return per page (optional, default: 20)
             * @return {Promise(Inputs, error)} A Promise that is fulfilled with an instance of Inputs or rejected with an error
             */
            _createClass(Inputs, [{
                key: 'list',
                value: function list() {
                    var _this2 = this;
                    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                        page: 1,
                        perPage: 20
                    };
                    var url = '' + this._config.apiEndpoint + INPUTS_PATH;
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.get(url, {
                                headers: headers,
                                params: {
                                    page: options.page,
                                    per_page: options.perPage
                                }
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Inputs(_this2._config, response.data.inputs));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * Adds an input or multiple inputs
                 * @param {object|object[]}        inputs                                Can be a single media object or an array of media objects (max of 128 inputs/call; passing > 128 will throw an exception)
                 *   @param {object|string}          inputs[].input                        If string, is given, this is assumed to be an image url
                 *     @param {string}                 inputs[].input.(url|base64)           Can be a publicly accessibly url or base64 string representing image bytes (required)
                 *     @param {string}                 inputs[].input.id                     ID of input (optional)
                 *     @param {number[]}               inputs[].input.crop                   An array containing the percent to be cropped from top, left, bottom and right (optional)
                 *     @param {object[]}               inputs[].input.metadata               Object with key and values pair (value can be string, array or other objects) to attach to the input (optional)
                 *     @param {object}                 inputs[].input.geo                    Object with latitude and longitude coordinates to associate with an input. Can be used in search query as the proximity of an input to a reference point (optional)
                 *       @param {number}                 inputs[].input.geo.latitude           +/- latitude val of geodata
                 *       @param {number}                 inputs[].input.geo.longitude          +/- longitude val of geodata
                 *     @param {object[]}               inputs[].input.concepts               An array of concepts to attach to media object (optional)
                 *       @param {object|string}          inputs[].input.concepts[].concept     If string, is given, this is assumed to be concept id with value equals true
                 *         @param {string}                 inputs[].input.concepts[].concept.id          The concept id (required)
                 *         @param {boolean}                inputs[].input.concepts[].concept.value       Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
                 * @return {Promise(Inputs, error)} A Promise that is fulfilled with an instance of Inputs or rejected with an error
                 */
            }, {
                key: 'create',
                value: function create(inputs) {
                    var _this3 = this;
                    if (checkType(/(String|Object)/, inputs)) {
                        inputs = [inputs];
                    }
                    var url = '' + this._config.apiEndpoint + INPUTS_PATH;
                    if (inputs.length > MAX_BATCH_SIZE) {
                        throw ERRORS.MAX_INPUTS;
                    }
                    return wrapToken(this._config, function (headers) {
                        var data = {
                            inputs: inputs.map(formatInput)
                        };
                        return new Promise(function (resolve, reject) {
                            axios.post(url, data, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Inputs(_this3._config, response.data.inputs));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * Get input by id
                 * @param {String}    id  The input id
                 * @return {Promise(Input, error)} A Promise that is fulfilled with an instance of Input or rejected with an error
                 */
            }, {
                key: 'get',
                value: function get(id) {
                    var _this4 = this;
                    var url = '' + this._config.apiEndpoint + replaceVars(INPUT_PATH, [id]);
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.get(url, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Input(_this4._config, response.data.input));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * Delete an input or a list of inputs by id or all inputs if no id is passed
                 * @param {string|string[]}    id           The id of input to delete (optional)
                 * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
                 */
            }, {
                key: 'delete',
                value: function _delete() {
                    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var val = void 0;
                    // delete an input
                    if (checkType(/String/, id)) {
                        var url = '' + this._config.apiEndpoint + replaceVars(INPUT_PATH, [id]);
                        val = wrapToken(this._config, function (headers) {
                            return axios.delete(url, {
                                headers: headers
                            });
                        });
                    } else {
                        val = this._deleteInputs(id);
                    }
                    return val;
                }
            }, {
                key: '_deleteInputs',
                value: function _deleteInputs() {
                    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var url = '' + this._config.apiEndpoint + INPUTS_PATH;
                    return wrapToken(this._config, function (headers) {
                        var data = id === null ? {
                            delete_all: true
                        } : {
                            ids: id
                        };
                        return axios({
                            url: url,
                            method: 'delete',
                            headers: headers,
                            data: data
                        });
                    });
                }
                /**
                 * Merge concepts to inputs in bulk
                 * @param {object[]}         inputs    List of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception)
                 *   @param {object}           inputs[].input
                 *     @param {string}           inputs[].input.id        The id of the input to update
                 *     @param {string}           inputs[].input.concepts  Object with keys explained below:
                 *       @param {object}           inputs[].input.concepts[].concept
                 *         @param {string}           inputs[].input.concepts[].concept.id        The concept id (required)
                 *         @param {boolean}          inputs[].input.concepts[].concept.value     Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
                 * @return {Promise(Inputs, error)} A Promise that is fulfilled with an instance of Inputs or rejected with an error
                 */
            }, {
                key: 'mergeConcepts',
                value: function mergeConcepts(inputs) {
                    inputs.action = 'merge';
                    return this.update(inputs);
                }
                /**
                 * Delete concepts to inputs in bulk
                 * @param {object[]}         inputs    List of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception)
                 *   @param {object}           inputs[].input
                 *     @param {string}           inputs[].input.id                           The id of the input to update
                 *     @param {string}           inputs[].input.concepts                     Object with keys explained below:
                 *       @param {object}           inputs[].input.concepts[].concept
                 *         @param {string}           inputs[].input.concepts[].concept.id        The concept id (required)
                 *         @param {boolean}          inputs[].input.concepts[].concept.value     Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
                 * @return {Promise(Inputs, error)} A Promise that is fulfilled with an instance of Inputs or rejected with an error
                 */
            }, {
                key: 'deleteConcepts',
                value: function deleteConcepts(inputs) {
                    inputs.action = 'remove';
                    return this.update(inputs);
                }
                /**
                 * Overwrite inputs in bulk
                 * @param {object[]}         inputs    List of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception)
                 *   @param {object}           inputs[].input
                 *     @param {string}           inputs[].input.id                           The id of the input to update
                 *     @param {string}           inputs[].input.concepts                     Object with keys explained below:
                 *       @param {object}           inputs[].input.concepts[].concept
                 *         @param {string}           inputs[].input.concepts[].concept.id        The concept id (required)
                 *         @param {boolean}          inputs[].input.concepts[].concept.value     Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
                 * @return {Promise(Inputs, error)} A Promise that is fulfilled with an instance of Inputs or rejected with an error
                 */
            }, {
                key: 'overwriteConcepts',
                value: function overwriteConcepts(inputs) {
                    inputs.action = 'overwrite';
                    return this.update(inputs);
                }
                /**
                 * @param {object[]}         inputs    List of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception)
                 *   @param {object}           inputs[].input
                 *     @param {string}           inputs[].input.id                           The id of the input to update
                 *     @param {object}           inputs[].input.metadata                     Object with key values to attach to the input (optional)
                 *     @param {object}           inputs[].input.geo                          Object with latitude and longitude coordinates to associate with an input. Can be used in search query as the proximity of an input to a reference point (optional)
                 *       @param {number}           inputs[].input.geo.latitude                 +/- latitude val of geodata
                 *       @param {number}           inputs[].input.geo.longitude                +/- longitude val of geodata
                 *     @param {string}           inputs[].input.concepts                     Object with keys explained below (optional):
                 *       @param {object}           inputs[].input.concepts[].concept
                 *         @param {string}           inputs[].input.concepts[].concept.id        The concept id (required)
                 *         @param {boolean}          inputs[].input.concepts[].concept.value     Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
                 * @return {Promise(Inputs, error)} A Promise that is fulfilled with an instance of Inputs or rejected with an error
                 */
            }, {
                key: 'update',
                value: function update(inputs) {
                    var _this5 = this;
                    var url = '' + this._config.apiEndpoint + INPUTS_PATH;
                    var inputsList = Array.isArray(inputs) ? inputs : [inputs];
                    if (inputsList.length > MAX_BATCH_SIZE) {
                        throw ERRORS.MAX_INPUTS;
                    }
                    var data = {
                        action: inputs.action,
                        inputs: inputsList.map(function (input) {
                            return formatInput(input, false);
                        })
                    };
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.patch(url, data, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Inputs(_this5._config, response.data.inputs));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * Search for inputs or outputs based on concepts or images
                 *   @param {object[]}               queries          List of all predictions to match with
                 *     @param {object}                 queries[].concept            An object with the following keys:
                 *       @param {string}                 queries[].concept.id          The concept id
                 *       @param {string}                 queries[].concept.type        Search over 'input' to get input matches to criteria or 'output' to get inputs that are visually similar to the criteria (default: 'output')
                 *       @param {string}                 queries[].concept.name        The concept name
                 *       @param {boolean}                queries[].concept.value       Indicates whether or not the term should match with the prediction returned (default: true)
                 *     @param {object}                 queries[].input              An image object that contains the following keys:
                 *       @param {string}                 queries[].input.id            The input id
                 *       @param {string}                 queries[].input.type          Search over 'input' to get input matches to criteria or 'output' to get inputs that are visually similar to the criteria (default: 'output')
                 *       @param {string}                 queries[].input.(base64|url)  Can be a publicly accessibly url or base64 string representing image bytes (required)
                 *       @param {number[]}               queries[].input.crop          An array containing the percent to be cropped from top, left, bottom and right (optional)
                 *       @param {object}                 queries[].input.metadata      An object with key and value specified by user to refine search with (optional)
                 * @param {Object}                   options       Object with keys explained below: (optional)
                 *    @param {Number}                  options.page          The page number (optional, default: 1)
                 *    @param {Number}                  options.perPage       Number of images to return per page (optional, default: 20)
                 * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
                 */
            }, {
                key: 'search',
                value: function search() {
                    var queries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                        page: 1,
                        perPage: 20
                    };
                    var formattedAnds = [];
                    var url = '' + this._config.apiEndpoint + SEARCH_PATH;
                    var data = {
                        query: {
                            ands: []
                        },
                        pagination: {
                            page: options.page,
                            per_page: options.perPage
                        }
                    };
                    if (!Array.isArray(queries)) {
                        queries = [queries];
                    }
                    if (queries.length > 0) {
                        queries.forEach(function (query) {
                            if (query.input) {
                                formattedAnds = formattedAnds.concat(formatImagesSearch(query.input));
                            } else if (query.concept) {
                                formattedAnds = formattedAnds.concat(formatConceptsSearch(query.concept));
                            }
                        });
                        data.query.ands = formattedAnds;
                    }
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.post(url, data, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    var _data = clone(response.data);
                                    _data.rawData = clone(response.data);
                                    resolve(_data);
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * Get inputs status (number of uploaded, in process or failed inputs)
                 * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
                 */
            }, {
                key: 'getStatus',
                value: function getStatus() {
                    var url = '' + this._config.apiEndpoint + INPUTS_STATUS_PATH;
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.get(url, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    var data = clone(response.data);
                                    data.rawData = clone(response.data);
                                    resolve(data);
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
            }]);
            return Inputs;
        }();;
        module.exports = Inputs;
    }, {
        "./Input": 25,
        "./constants": 30,
        "./helpers": 31,
        "./utils": 33,
        "axios": 4
    }],
    27: [function (require, module, exports) {
        'use strict';
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var axios = require('axios');
        var _require = require('./helpers'),
            isSuccess = _require.isSuccess,
            checkType = _require.checkType,
            clone = _require.clone;
        var _require2 = require('./constants'),
            API = _require2.API,
            SYNC_TIMEOUT = _require2.SYNC_TIMEOUT,
            replaceVars = _require2.replaceVars,
            STATUS = _require2.STATUS,
            POLLTIME = _require2.POLLTIME;
        var MODEL_QUEUED_FOR_TRAINING = STATUS.MODEL_QUEUED_FOR_TRAINING,
            MODEL_TRAINING = STATUS.MODEL_TRAINING;
        var _require3 = require('./utils'),
            wrapToken = _require3.wrapToken,
            formatMediaPredict = _require3.formatMediaPredict,
            formatModel = _require3.formatModel,
            formatObjectForSnakeCase = _require3.formatObjectForSnakeCase;
        var MODEL_VERSIONS_PATH = API.MODEL_VERSIONS_PATH,
            MODEL_VERSION_PATH = API.MODEL_VERSION_PATH,
            MODELS_PATH = API.MODELS_PATH,
            MODEL_FEEDBACK_PATH = API.MODEL_FEEDBACK_PATH,
            MODEL_VERSION_FEEDBACK_PATH = API.MODEL_VERSION_FEEDBACK_PATH,
            PREDICT_PATH = API.PREDICT_PATH,
            VERSION_PREDICT_PATH = API.VERSION_PREDICT_PATH,
            MODEL_INPUTS_PATH = API.MODEL_INPUTS_PATH,
            MODEL_OUTPUT_PATH = API.MODEL_OUTPUT_PATH,
            MODEL_VERSION_INPUTS_PATH = API.MODEL_VERSION_INPUTS_PATH;
        /**
         * class representing a model
         * @class
         */
        var Model = function () {
            function Model(_config, data) {
                _classCallCheck(this, Model);
                this._config = _config;
                this.name = data.name;
                this.id = data.id;
                this.createdAt = data.created_at || data.createdAt;
                this.appId = data.app_id || data.appId;
                this.outputInfo = data.output_info || data.outputInfo;
                if (checkType(/(String)/, data.version)) {
                    this.modelVersion = {};
                    this.versionId = data.version;
                } else {
                    this.modelVersion = data.model_version || data.modelVersion || data.version;
                    this.versionId = (this.modelVersion || {}).id;
                }
                this.rawData = data;
            }
            /**
             * Merge concepts to a model
             * @param {object[]}      concepts    List of concept objects with id
             * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
             */
            _createClass(Model, [{
                key: 'mergeConcepts',
                value: function mergeConcepts() {
                    var concepts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    var conceptsArr = Array.isArray(concepts) ? concepts : [concepts];
                    return this.update({
                        action: 'merge',
                        concepts: conceptsArr
                    });
                }
                /**
                 * Remove concepts from a model
                 * @param {object[]}      concepts    List of concept objects with id
                 * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
                 */
            }, {
                key: 'deleteConcepts',
                value: function deleteConcepts() {
                    var concepts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    var conceptsArr = Array.isArray(concepts) ? concepts : [concepts];
                    return this.update({
                        action: 'remove',
                        concepts: conceptsArr
                    });
                }
                /**
                 * Overwrite concepts in a model
                 * @param {object[]}      concepts    List of concept objects with id
                 * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
                 */
            }, {
                key: 'overwriteConcepts',
                value: function overwriteConcepts() {
                    var concepts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    var conceptsArr = Array.isArray(concepts) ? concepts : [concepts];
                    return this.update({
                        action: 'overwrite',
                        concepts: conceptsArr
                    });
                }
                /**
                 * Update a model's output config or concepts
                 * @param {object}               model                                 An object with any of the following attrs:
                 *   @param {string}               name                                  The new name of the model to update with
                 *   @param {boolean}              conceptsMutuallyExclusive             Do you expect to see more than one of the concepts in this model in the SAME image? Set to false (default) if so. Otherwise, set to true.
                 *   @param {boolean}              closedEnvironment                     Do you expect to run the trained model on images that do not contain ANY of the concepts in the model? Set to false (default) if so. Otherwise, set to true.
                 *   @param {object[]}             concepts                              An array of concept objects or string
                 *     @param {object|string}        concepts[].concept                    If string is given, this is interpreted as concept id. Otherwise, if object is given, client expects the following attributes
                 *       @param {string}             concepts[].concept.id                   The id of the concept to attach to the model
                 *   @param {object[]}             action                                The action to perform on the given concepts. Possible values are 'merge', 'remove', or 'overwrite'. Default: 'merge'
                 * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
                 */
            }, {
                key: 'update',
                value: function update(obj) {
                    var _this = this;
                    var url = '' + this._config.apiEndpoint + MODELS_PATH;
                    var modelData = [obj];
                    var data = {
                        models: modelData.map(function (m) {
                            return formatModel(Object.assign(m, {
                                id: _this.id
                            }));
                        })
                    };
                    if (Array.isArray(obj.concepts)) {
                        data['action'] = obj.action || 'merge';
                    }
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.patch(url, data, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Model(_this._config, response.data.models[0]));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * Create a new model version
                 * @param {boolean}       sync     If true, this returns after model has completely trained. If false, this immediately returns default api response.
                 * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
                 */
            }, {
                key: 'train',
                value: function train(sync) {
                    var _this2 = this;
                    var url = '' + this._config.apiEndpoint + replaceVars(MODEL_VERSIONS_PATH, [this.id]);
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.post(url, null, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    if (sync) {
                                        var timeStart = Date.now();
                                        _this2._pollTrain.bind(_this2)(timeStart, resolve, reject);
                                    } else {
                                        resolve(new Model(_this2._config, response.data.model));
                                    }
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
            }, {
                key: '_pollTrain',
                value: function _pollTrain(timeStart, resolve, reject) {
                    var _this3 = this;
                    clearTimeout(this.pollTimeout);
                    if (Date.now() - timeStart >= SYNC_TIMEOUT) {
                        return reject({
                            status: 'Error',
                            message: 'Sync call timed out'
                        });
                    }
                    this.getOutputInfo().then(function (model) {
                        var modelStatusCode = model.modelVersion.status.code.toString();
                        if (modelStatusCode === MODEL_QUEUED_FOR_TRAINING || modelStatusCode === MODEL_TRAINING) {
                            _this3.pollTimeout = setTimeout(function () {
                                return _this3._pollTrain(timeStart, resolve, reject);
                            }, POLLTIME);
                        } else {
                            resolve(model);
                        }
                    }, reject).catch(reject);
                }
                /**
                 * Returns model ouputs according to inputs
                 * @param {object[]|object|string}       inputs    An array of objects/object/string pointing to an image resource. A string can either be a url or base64 image bytes. Object keys explained below:
                 *    @param {object}                      inputs[].image     Object with keys explained below:
                 *       @param {string}                     inputs[].image.(url|base64)   Can be a publicly accessibly url or base64 string representing image bytes (required)
                 *       @param {number[]}                   inputs[].image.crop           An array containing the percent to be cropped from top, left, bottom and right (optional)
                 * @param {object|string} config An object with keys explained below. If a string is passed instead, it will be treated as the language (backwards compatibility)
                 *   @param {string} config.language A string code representing the language to return results in (example: 'zh' for simplified Chinese, 'ru' for Russian, 'ja' for Japanese)
                 *   @param {boolean} config.video indicates if the input should be processed as a video
                 *   @param {object[]} config.selectConcepts An array of concepts to return. Each object in the array will have a form of {name: <CONCEPT_NAME>} or {id: CONCEPT_ID}
                 *   @param {float} config.minValue The minimum confidence threshold that a result must meet. From 0.0 to 1.0
                 *   @param {number} config.maxConcepts The maximum number of concepts to return
                 * @param {boolean} isVideo  Deprecated: indicates if the input should be processed as a video (default false). Deprecated in favor of using config object
                 * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
                 */
            }, {
                key: 'predict',
                value: function predict(inputs) {
                    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    var isVideo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    if (checkType(/String/, config)) {
                        console.warn('passing the language as a string is deprecated, consider using the configuration object instead');
                        config = {
                            language: config
                        };
                    }
                    if (isVideo) {
                        console.warn('"isVideo" argument is deprecated, consider using the configuration object instead');
                        config.video = isVideo;
                    }
                    var video = config.video || false;
                    delete config.video;
                    if (checkType(/(Object|String)/, inputs)) {
                        inputs = [inputs];
                    }
                    var url = '' + this._config.apiEndpoint + (this.versionId ? replaceVars(VERSION_PREDICT_PATH, [this.id, this.versionId]) : replaceVars(PREDICT_PATH, [this.id]));
                    return wrapToken(this._config, function (headers) {
                        var params = {
                            inputs: inputs.map(function (input) {
                                return formatMediaPredict(input, video ? 'video' : 'image');
                            })
                        };
                        if (config && Object.getOwnPropertyNames(config).length > 0) {
                            params['model'] = {
                                output_info: {
                                    output_config: formatObjectForSnakeCase(config)
                                }
                            };
                        }
                        return new Promise(function (resolve, reject) {
                            axios.post(url, params, {
                                headers: headers
                            }).then(function (response) {
                                var data = clone(response.data);
                                data.rawData = clone(response.data);
                                resolve(data);
                            }, reject);
                        });
                    });
                }
                /**
                 * Returns a version of the model specified by its id
                 * @param {string}     versionId   The model's id
                 * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
                 */
            }, {
                key: 'getVersion',
                value: function getVersion(versionId) {
                    var url = '' + this._config.apiEndpoint + replaceVars(MODEL_VERSION_PATH, [this.id, versionId]);
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.get(url, {
                                headers: headers
                            }).then(function (response) {
                                var data = clone(response.data);
                                data.rawData = clone(response.data);
                                resolve(data);
                            }, reject);
                        });
                    });
                }
                /**
                 * Returns a list of versions of the model
                 * @param {object}     options     Object with keys explained below: (optional)
                 *   @param {number}     options.page        The page number (optional, default: 1)
                 *   @param {number}     options.perPage     Number of images to return per page (optional, default: 20)
                 * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
                 */
            }, {
                key: 'getVersions',
                value: function getVersions() {
                    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                        page: 1,
                        perPage: 20
                    };
                    var url = '' + this._config.apiEndpoint + replaceVars(MODEL_VERSIONS_PATH, [this.id]);
                    return wrapToken(this._config, function (headers) {
                        var data = {
                            headers: headers,
                            params: {
                                'per_page': options.perPage,
                                'page': options.page
                            }
                        };
                        return new Promise(function (resolve, reject) {
                            axios.get(url, data).then(function (response) {
                                var data = clone(response.data);
                                data.rawData = clone(response.data);
                                resolve(data);
                            }, reject);
                        });
                    });
                }
                /**
                 * Returns all the model's output info
                 * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
                 */
            }, {
                key: 'getOutputInfo',
                value: function getOutputInfo() {
                    var _this4 = this;
                    var url = '' + this._config.apiEndpoint + replaceVars(MODEL_OUTPUT_PATH, [this.id]);
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.get(url, {
                                headers: headers
                            }).then(function (response) {
                                resolve(new Model(_this4._config, response.data.model));
                            }, reject);
                        });
                    });
                }
                /**
                 * Returns all the model's inputs
                 * @param {object}     options     Object with keys explained below: (optional)
                 *   @param {number}     options.page        The page number (optional, default: 1)
                 *   @param {number}     options.perPage     Number of images to return per page (optional, default: 20)
                 * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
                 */
            }, {
                key: 'getInputs',
                value: function getInputs() {
                    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                        page: 1,
                        perPage: 20
                    };
                    var url = '' + this._config.apiEndpoint + (this.versionId ? replaceVars(MODEL_VERSION_INPUTS_PATH, [this.id, this.versionId]) : replaceVars(MODEL_INPUTS_PATH, [this.id]));
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.get(url, {
                                params: {
                                    'per_page': options.perPage,
                                    'page': options.page
                                },
                                headers: headers
                            }).then(function (response) {
                                var data = clone(response.data);
                                data.rawData = clone(response.data);
                                resolve(data);
                            }, reject);
                        });
                    });
                }
                /**
                 *
                 * @param {string} input A string pointing to an image resource. A string must be a url
                 * @param {object} config A configuration object consisting of the following required keys
                 *   @param {string} config.id The id of the feedback request
                 *   @param {object} config.data The feedback data to be sent
                 *   @param {object} config.info Meta data related to the feedback request
                 * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
                 */
            }, {
                key: 'feedback',
                value: function feedback(input, _ref) {
                    var id = _ref.id,
                        data = _ref.data,
                        info = _ref.info;
                    var url = '' + this._config.apiEndpoint + (this.versionId ? replaceVars(MODEL_VERSION_FEEDBACK_PATH, [this.id, this.versionId]) : replaceVars(MODEL_FEEDBACK_PATH, [this.id]));
                    var media = formatMediaPredict(input).data;
                    info.eventType = 'annotation';
                    var body = {
                        input: {
                            id: id,
                            data: Object.assign(media, data),
                            'feedback_info': formatObjectForSnakeCase(info)
                        }
                    };
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.post(url, body, {
                                headers: headers
                            }).then(function (_ref2) {
                                var data = _ref2.data;
                                var d = clone(data);
                                d.rawData = clone(data);
                                resolve(d);
                            }, reject);
                        });
                    });
                }
            }]);
            return Model;
        }();
        module.exports = Model;
    }, {
        "./constants": 30,
        "./helpers": 31,
        "./utils": 33,
        "axios": 4
    }],
    28: [function (require, module, exports) {
        'use strict';
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var axios = require('axios');
        var Promise = require('promise');
        var Model = require('./Model');
        var Concepts = require('./Concepts');
        var _require = require('./constants'),
            API = _require.API,
            ERRORS = _require.ERRORS,
            replaceVars = _require.replaceVars;
        var _require2 = require('./helpers'),
            isSuccess = _require2.isSuccess,
            checkType = _require2.checkType,
            clone = _require2.clone;
        var _require3 = require('./utils'),
            wrapToken = _require3.wrapToken,
            formatModel = _require3.formatModel;
        var MODELS_PATH = API.MODELS_PATH,
            MODEL_PATH = API.MODEL_PATH,
            MODEL_SEARCH_PATH = API.MODEL_SEARCH_PATH,
            MODEL_VERSION_PATH = API.MODEL_VERSION_PATH;
        /**
         * class representing a collection of models
         * @class
         */
        var Models = function () {
            function Models(_config) {
                var _this = this;
                var rawData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                _classCallCheck(this, Models);
                this._config = _config;
                this.rawData = rawData;
                rawData.forEach(function (modelData, index) {
                    _this[index] = new Model(_this._config, modelData);
                });
                this.length = rawData.length;
            }
            /**
             * Returns a Model instance given model id or name. It will call search if name is given.
             * @param {string|object}    model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
             *   @param {string}           model.id          Model id
             *   @param {string}           model.name        Model name
             *   @param {string}           model.version     Model version
             *   @param {string}           model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
             * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
             */
            _createClass(Models, [{
                key: 'initModel',
                value: function initModel(model) {
                    var _this2 = this;
                    var data = {};
                    var fn = void 0;
                    if (checkType(/String/, model)) {
                        data.id = model;
                    } else {
                        data = model;
                    }
                    if (data.id) {
                        fn = function fn(resolve, reject) {
                            resolve(new Model(_this2._config, data));
                        };
                    } else {
                        fn = function fn(resolve, reject) {
                            _this2.search(data.name, data.type).then(function (models) {
                                if (data.version) {
                                    resolve(models.rawData.filter(function (model) {
                                        return model.modelVersion.id === data.version;
                                    }));
                                } else {
                                    resolve(models[0]);
                                }
                            }, reject).catch(reject);
                        };
                    }
                    return new Promise(fn);
                }
                /**
                 * Calls predict given model info and inputs to predict on
                 * @param {string|object}            model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
                 *   @param {string}                   model.id          Model id
                 *   @param {string}                   model.name        Model name
                 *   @param {string}                   model.version     Model version
                 *   @param {string}                   model.language    Model language (only for Clarifai's public models)
                 *   @param {string}                   model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
                 * @param {object[]|object|string}   inputs    An array of objects/object/string pointing to an image resource. A string can either be a url or base64 image bytes. Object keys explained below:
                 *    @param {object}                  inputs[].image     Object with keys explained below:
                 *       @param {string}                 inputs[].image.(url|base64)  Can be a publicly accessibly url or base64 string representing image bytes (required)
                 * @param {boolean} isVideo  indicates if the input should be processed as a video (default false)
                 * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
                 */
            }, {
                key: 'predict',
                value: function predict(model, inputs) {
                    var _this3 = this;
                    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    if (checkType(/Boolean/, config)) {
                        console.warn('"isVideo" argument is deprecated, consider using the configuration object instead');
                        config = {
                            video: config
                        };
                    }
                    if (model.language) {
                        config.language = model.language;
                    }
                    return new Promise(function (resolve, reject) {
                        _this3.initModel(model).then(function (modelObj) {
                            modelObj.predict(inputs, config).then(resolve, reject).catch(reject);
                        }, reject);
                    });
                }
                /**
                 * Calls train on a model and creates a new model version given model info
                 * @param {string|object}            model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
                 *   @param {string}                   model.id          Model id
                 *   @param {string}                   model.name        Model name
                 *   @param {string}                   model.version     Model version
                 *   @param {string}                   model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
                 * @param {boolean}                  sync        If true, this returns after model has completely trained. If false, this immediately returns default api response.
                 * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
                 */
            }, {
                key: 'train',
                value: function train(model) {
                    var _this4 = this;
                    var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    return new Promise(function (resolve, reject) {
                        _this4.initModel(model).then(function (model) {
                            model.train(sync).then(resolve, reject).catch(reject);
                        }, reject);
                    });
                }
                /**
                 *
                 * @param {string|object}            model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
                 *   @param {string}                   model.id          Model id
                 *   @param {string}                   model.name        Model name
                 *   @param {string}                   model.version     Model version
                 *   @param {string}                   model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
                 * @param {string} input A string pointing to an image resource. A string must be a url
                 * @param {object} config A configuration object consisting of the following required keys
                 *   @param {string} config.id The id of the feedback request
                 *   @param {object} config.data The feedback data to be sent
                 *   @param {object} config.info Meta data related to the feedback request
                 */
            }, {
                key: 'feedback',
                value: function feedback(model, input, config) {
                    var _this5 = this;
                    return new Promise(function (resolve, reject) {
                        _this5.initModel(model).then(function (model) {
                            return model.feedback(input, config);
                        }).then(function (d) {
                            return resolve(d);
                        }).catch(function (e) {
                            return reject(e);
                        });
                    });
                }
                /**
                 * Returns a version of the model specified by its id
                 * @param {string|object}            model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
                 *   @param {string}                   model.id          Model id
                 *   @param {string}                   model.name        Model name
                 *   @param {string}                   model.version     Model version
                 *   @param {string}                   model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
                 * @param {string}     versionId   The model's id
                 * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
                 */
            }, {
                key: 'getVersion',
                value: function getVersion(model, versionId) {
                    var _this6 = this;
                    return new Promise(function (resolve, reject) {
                        _this6.initModel(model).then(function (model) {
                            model.getVersion(versionId).then(resolve, reject).catch(reject);
                        }, reject);
                    });
                }
                /**
                 * Returns a list of versions of the model
                 * @param {string|object}            model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
                 *   @param {string}                   model.id          Model id
                 *   @param {string}                   model.name        Model name
                 *   @param {string}                   model.version     Model version
                 *   @param {string}                   model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
                 * @param {object}                   options     Object with keys explained below: (optional)
                 *   @param {number}                   options.page        The page number (optional, default: 1)
                 *   @param {number}                   options.perPage     Number of images to return per page (optional, default: 20)
                 * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
                 */
            }, {
                key: 'getVersions',
                value: function getVersions(model) {
                    var _this7 = this;
                    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                        page: 1,
                        perPage: 20
                    };
                    return new Promise(function (resolve, reject) {
                        _this7.initModel(model).then(function (model) {
                            model.getVersions().then(resolve, reject).catch(reject);
                        }, reject);
                    });
                }
                /**
                 * Returns all the model's output info
                 * @param {string|object}            model       If string, it is assumed to be model id. Otherwise, if object is given, it can have any of the following keys:
                 *   @param {string}                   model.id          Model id
                 *   @param {string}                   model.name        Model name
                 *   @param {string}                   model.version     Model version
                 *   @param {string}                   model.type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
                 * @return {Promise(Model, error)} A Promise that is fulfilled with a Model instance or rejected with an error
                 */
            }, {
                key: 'getOutputInfo',
                value: function getOutputInfo(model) {
                    var _this8 = this;
                    return new Promise(function (resolve, reject) {
                        _this8.initModel(model).then(function (model) {
                            model.getOutputInfo().then(resolve, reject).catch(reject);
                        }, reject);
                    });
                }
                /**
                 * Returns all the models
                 * @param {Object}     options     Object with keys explained below: (optional)
                 *   @param {Number}     options.page        The page number (optional, default: 1)
                 *   @param {Number}     options.perPage     Number of images to return per page (optional, default: 20)
                 * @return {Promise(Models, error)} A Promise that is fulfilled with an instance of Models or rejected with an error
                 */
            }, {
                key: 'list',
                value: function list() {
                    var _this9 = this;
                    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                        page: 1,
                        perPage: 20
                    };
                    var url = '' + this._config.apiEndpoint + MODELS_PATH;
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.get(url, {
                                params: {
                                    'per_page': options.perPage,
                                    'page': options.page
                                },
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Models(_this9._config, response.data.models));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * Create a model
                 * @param {string|object}                  model                                  If string, it is assumed to be the model id. Otherwise, if object is given, it can have any of the following keys:
                 *   @param {string}                         model.id                               Model id
                 *   @param {string}                         model.name                             Model name
                 * @param {object[]|string[]|Concepts[]}   conceptsData                           List of objects with ids, concept id strings or an instance of Concepts object
                 * @param {Object}                         options                                Object with keys explained below:
                 *   @param {boolean}                        options.conceptsMutuallyExclusive      Do you expect to see more than one of the concepts in this model in the SAME image? Set to false (default) if so. Otherwise, set to true.
                 *   @param {boolean}                        options.closedEnvironment              Do you expect to run the trained model on images that do not contain ANY of the concepts in the model? Set to false (default) if so. Otherwise, set to true.
                 * @return {Promise(Model, error)} A Promise that is fulfilled with an instance of Model or rejected with an error
                 */
            }, {
                key: 'create',
                value: function create(model) {
                    var _this10 = this;
                    var conceptsData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    var concepts = conceptsData instanceof Concepts ? conceptsData.toObject('id') : conceptsData.map(function (concept) {
                        var val = concept;
                        if (checkType(/String/, concept)) {
                            val = {
                                'id': concept
                            };
                        }
                        return val;
                    });
                    var modelObj = model;
                    if (checkType(/String/, model)) {
                        modelObj = {
                            id: model,
                            name: model
                        };
                    }
                    if (modelObj.id === undefined) {
                        throw ERRORS.paramsRequired('Model ID');
                    }
                    var url = '' + this._config.apiEndpoint + MODELS_PATH;
                    var data = {
                        model: modelObj
                    };
                    data['model']['output_info'] = {
                        'data': {
                            concepts: concepts
                        },
                        'output_config': {
                            'concepts_mutually_exclusive': !!options.conceptsMutuallyExclusive,
                            'closed_environment': !!options.closedEnvironment
                        }
                    };
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.post(url, data, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Model(_this10._config, response.data.model));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * Returns a model specified by ID
                 * @param {String}     id          The model's id
                 * @return {Promise(Model, error)} A Promise that is fulfilled with an instance of Model or rejected with an error
                 */
            }, {
                key: 'get',
                value: function get(id) {
                    var _this11 = this;
                    var url = '' + this._config.apiEndpoint + replaceVars(MODEL_PATH, [id]);
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.get(url, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Model(_this11._config, response.data.model));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * Update a model's or a list of models' output config or concepts
                 * @param {object|object[]}      models                                 Can be a single model object or list of model objects with the following attrs:
                 *   @param {string}               models.id                                    The id of the model to apply changes to (Required)
                 *   @param {string}               models.name                                  The new name of the model to update with
                 *   @param {boolean}              models.conceptsMutuallyExclusive             Do you expect to see more than one of the concepts in this model in the SAME image? Set to false (default) if so. Otherwise, set to true.
                 *   @param {boolean}              models.closedEnvironment                     Do you expect to run the trained model on images that do not contain ANY of the concepts in the model? Set to false (default) if so. Otherwise, set to true.
                 *   @param {object[]}             models.concepts                              An array of concept objects or string
                 *     @param {object|string}        models.concepts[].concept                    If string is given, this is interpreted as concept id. Otherwise, if object is given, client expects the following attributes
                 *       @param {string}             models.concepts[].concept.id                   The id of the concept to attach to the model
                 *   @param {object[]}             models.action                                The action to perform on the given concepts. Possible values are 'merge', 'remove', or 'overwrite'. Default: 'merge'
                 * @return {Promise(Models, error)} A Promise that is fulfilled with an instance of Models or rejected with an error
                 */
            }, {
                key: 'update',
                value: function update(models) {
                    var _this12 = this;
                    var url = '' + this._config.apiEndpoint + MODELS_PATH;
                    var modelsList = Array.isArray(models) ? models : [models];
                    var data = {
                        models: modelsList.map(formatModel)
                    };
                    data['action'] = models.action || 'merge';
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.patch(url, data, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Models(_this12._config, response.data.models));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
                /**
                 * Update model by merging concepts
                 * @param {object|object[]}      model                                 Can be a single model object or list of model objects with the following attrs:
                 *   @param {string}               model.id                                    The id of the model to apply changes to (Required)
                 *   @param {object[]}             model.concepts                              An array of concept objects or string
                 *     @param {object|string}        model.concepts[].concept                    If string is given, this is interpreted as concept id. Otherwise, if object is given, client expects the following attributes
                 *       @param {string}             model.concepts[].concept.id                   The id of the concept to attach to the model
                 */
            }, {
                key: 'mergeConcepts',
                value: function mergeConcepts() {
                    var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    model.action = 'merge';
                    return this.update(model);
                }
                /**
                 * Update model by removing concepts
                 * @param {object|object[]}      model                                 Can be a single model object or list of model objects with the following attrs:
                 *   @param {string}               model.id                                    The id of the model to apply changes to (Required)
                 *   @param {object[]}             model.concepts                              An array of concept objects or string
                 *     @param {object|string}        model.concepts[].concept                    If string is given, this is interpreted as concept id. Otherwise, if object is given, client expects the following attributes
                 *       @param {string}             model.concepts[].concept.id                   The id of the concept to attach to the model
                 */
            }, {
                key: 'deleteConcepts',
                value: function deleteConcepts() {
                    var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    model.action = 'remove';
                    return this.update(model);
                }
                /**
                 * Update model by overwriting concepts
                 * @param {object|object[]}      model                                 Can be a single model object or list of model objects with the following attrs:
                 *   @param {string}               model.id                                    The id of the model to apply changes to (Required)
                 *   @param {object[]}             model.concepts                              An array of concept objects or string
                 *     @param {object|string}        model.concepts[].concept                    If string is given, this is interpreted as concept id. Otherwise, if object is given, client expects the following attributes
                 *       @param {string}             model.concepts[].concept.id                   The id of the concept to attach to the model
                 */
            }, {
                key: 'overwriteConcepts',
                value: function overwriteConcepts() {
                    var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    model.action = 'overwrite';
                    return this.update(model);
                }
                /**
                 * Deletes all models (if no ids and versionId given) or a model (if given id) or a model version (if given id and verion id)
                 * @param {String|String[]}      ids         Can be a single string or an array of strings representing the model ids
                 * @param {String}               versionId   The model's version id
                 * @return {Promise(response, error)} A Promise that is fulfilled with the API response or rejected with an error
                 */
            }, {
                key: 'delete',
                value: function _delete(ids) {
                    var versionId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var request = void 0,
                        url = void 0,
                        data = void 0;
                    var id = ids;
                    if (checkType(/String/, ids) || checkType(/Array/, ids) && ids.length === 1) {
                        if (versionId) {
                            url = '' + this._config.apiEndpoint + replaceVars(MODEL_VERSION_PATH, [id, versionId]);
                        } else {
                            url = '' + this._config.apiEndpoint + replaceVars(MODEL_PATH, [id]);
                        }
                        request = wrapToken(this._config, function (headers) {
                            return new Promise(function (resolve, reject) {
                                axios.delete(url, {
                                    headers: headers
                                }).then(function (response) {
                                    var data = clone(response.data);
                                    data.rawData = clone(response.data);
                                    resolve(data);
                                }, reject);
                            });
                        });
                    } else {
                        if (!ids && !versionId) {
                            url = '' + this._config.apiEndpoint + MODELS_PATH;
                            data = {
                                'delete_all': true
                            };
                        } else if (!versionId && ids.length > 1) {
                            url = '' + this._config.apiEndpoint + MODELS_PATH;
                            data = {
                                ids: ids
                            };
                        } else {
                            throw ERRORS.INVALID_DELETE_ARGS;
                        }
                        request = wrapToken(this._config, function (headers) {
                            return new Promise(function (resolve, reject) {
                                axios({
                                    method: 'delete',
                                    url: url,
                                    data: data,
                                    headers: headers
                                }).then(function (response) {
                                    var data = clone(response.data);
                                    data.rawData = clone(response.data);
                                    resolve(data);
                                }, reject);
                            });
                        });
                    }
                    return request;
                }
                /**
                 * Search for models by name or type
                 * @param {String}     name        The model name
                 * @param {String}     type        This can be "concept", "color", "embed", "facedetect", "cluster" or "blur"
                 * @return {Promise(models, error)} A Promise that is fulfilled with an instance of Models or rejected with an error
                 */
            }, {
                key: 'search',
                value: function search(name) {
                    var _this13 = this;
                    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var url = '' + this._config.apiEndpoint + MODEL_SEARCH_PATH;
                    return wrapToken(this._config, function (headers) {
                        var params = {
                            'model_query': {
                                name: name,
                                type: type
                            }
                        };
                        return new Promise(function (resolve, reject) {
                            axios.post(url, params, {
                                headers: headers
                            }).then(function (response) {
                                if (isSuccess(response)) {
                                    resolve(new Models(_this13._config, response.data.models));
                                } else {
                                    reject(response);
                                }
                            }, reject);
                        });
                    });
                }
            }]);
            return Models;
        }();
        module.exports = Models;
    }, {
        "./Concepts": 24,
        "./Model": 27,
        "./constants": 30,
        "./helpers": 31,
        "./utils": 33,
        "axios": 4,
        "promise": 35
    }],
    29: [function (require, module, exports) {
        'use strict';
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var axios = require('axios');
        var _require = require('./constants'),
            API = _require.API,
            replaceVars = _require.replaceVars;
        var WORKFLOW_PATH = API.WORKFLOW_PATH,
            CREATE_WORKFLOW_PATH = API.CREATE_WORKFLOW_PATH;
        var _require2 = require('./utils'),
            wrapToken = _require2.wrapToken,
            formatInput = _require2.formatInput;
        var _require3 = require('./helpers'),
            checkType = _require3.checkType;
        /**
         * class representing a workflow
         * @class
         */
        var Workflow = function () {
            function Workflow(_config) {
                var rawData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                _classCallCheck(this, Workflow);
                this._config = _config;
                this.rawData = rawData;
            }
            _createClass(Workflow, [{
                key: 'create',
                value: function create(name, config) {
                    var url = '' + this._config.apiEndpoint + CREATE_WORKFLOW_PATH;
                    var modelId = config.modelId;
                    var modelVersionId = config.modelVersionId;
                    var body = {
                        workflows: [{
                            id: name,
                            nodes: [{
                                id: 'concepts',
                                model: {
                                    id: modelId,
                                    model_version: {
                                        id: modelVersionId
                                    }
                                }
                            }]
                        }]
                    };
                    return wrapToken(this._config, function (headers) {
                        return new Promise(function (resolve, reject) {
                            axios.post(url, body, {
                                headers: headers
                            }).then(function (response) {
                                var workflowId = response.data.workflows[0].id;
                                resolve(workflowId);
                            }, reject);
                        });
                    });
                }
                /**
                 * Returns workflow output according to inputs
                 * @param {string}                   workflowId    Workflow id
                 * @param {object[]|object|string}   inputs    An array of objects/object/string pointing to an image resource. A string can either be a url or base64 image bytes. Object keys explained below:
                 *    @param {object}                  inputs[].image     Object with keys explained below:
                 *       @param {string}                 inputs[].image.(url|base64)  Can be a publicly accessibly url or base64 string representing image bytes (required)
                 */
            }, {
                key: 'predict',
                value: function predict(workflowId, inputs) {
                    var url = '' + this._config.apiEndpoint + replaceVars(WORKFLOW_PATH, [workflowId]);
                    if (checkType(/(Object|String)/, inputs)) {
                        inputs = [inputs];
                    }
                    return wrapToken(this._config, function (headers) {
                        var params = {
                            inputs: inputs.map(formatInput)
                        };
                        return new Promise(function (resolve, reject) {
                            axios.post(url, params, {
                                headers: headers
                            }).then(function (response) {
                                var data = response.data;
                                resolve(data);
                            }, reject);
                        });
                    });
                }
            }]);
            return Workflow;
        }();
        module.exports = Workflow;
    }, {
        "./constants": 30,
        "./helpers": 31,
        "./utils": 33,
        "axios": 4
    }],
    30: [function (require, module, exports) {
        'use strict';
        var MAX_BATCH_SIZE = 128;
        var GEO_LIMIT_TYPES = ['withinMiles', 'withinKilometers', 'withinRadians', 'withinDegrees'];
        var URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
        var SYNC_TIMEOUT = 60000;
        var MODEL_QUEUED_FOR_TRAINING = '21103';
        var MODEL_TRAINING = '21101';
        var POLLTIME = 2000;
        module.exports = {
            API: {
                TOKEN_PATH: '/v2/token',
                MODELS_PATH: '/v2/models',
                MODEL_PATH: '/v2/models/$0',
                MODEL_VERSIONS_PATH: '/v2/models/$0/versions',
                MODEL_VERSION_PATH: '/v2/models/$0/versions/$1',
                MODEL_PATCH_PATH: '/v2/models/$0/output_info/data/concepts',
                MODEL_OUTPUT_PATH: '/v2/models/$0/output_info',
                MODEL_SEARCH_PATH: '/v2/models/searches',
                MODEL_FEEDBACK_PATH: '/v2/models/$0/feedback',
                MODEL_VERSION_FEEDBACK_PATH: '/v2/models/$0/versions/$1/feedback',
                PREDICT_PATH: '/v2/models/$0/outputs',
                VERSION_PREDICT_PATH: '/v2/models/$0/versions/$1/outputs',
                CONCEPTS_PATH: '/v2/concepts',
                CONCEPT_PATH: '/v2/concepts/$0',
                CONCEPT_SEARCH_PATH: '/v2/concepts/searches',
                MODEL_INPUTS_PATH: '/v2/models/$0/inputs',
                MODEL_VERSION_INPUTS_PATH: '/v2/models/$0/versions/$1/inputs',
                INPUTS_PATH: '/v2/inputs',
                INPUT_PATH: '/v2/inputs/$0',
                INPUTS_STATUS_PATH: '/v2/inputs/status',
                SEARCH_PATH: '/v2/searches',
                WORKFLOW_PATH: '/v2/workflows/$0/results',
                CREATE_WORKFLOW_PATH: '/v2/workflows'
            },
            ERRORS: {
                paramsRequired: function paramsRequired(param) {
                    var paramList = Array.isArray(param) ? param : [param];
                    return new Error('The following ' + (paramList.length > 1 ? 'params are' : 'param is') + ' required: ' + paramList.join(', '));
                },
                MAX_INPUTS: new Error('Number of inputs passed exceeded max of ' + MAX_BATCH_SIZE),
                INVALID_GEOLIMIT_TYPE: new Error('Incorrect geo_limit type. Value must be any of the following: ' + GEO_LIMIT_TYPES.join(', ')),
                INVALID_DELETE_ARGS: new Error('Wrong arguments passed. You can only delete all models (provide no arguments), delete select models (provide list of ids),\n    delete a single model (providing a single id) or delete a model version (provide a single id and version id)')
            },
            STATUS: {
                MODEL_QUEUED_FOR_TRAINING: MODEL_QUEUED_FOR_TRAINING,
                MODEL_TRAINING: MODEL_TRAINING
            },
            // var replacement must be given in order
            replaceVars: function replaceVars(path) {
                var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                var newPath = path;
                vars.forEach(function (val, index) {
                    if (index === 0) {
                        val = encodeURIComponent(val);
                    }
                    newPath = newPath.replace(new RegExp('\\$' + index, 'g'), val);
                });
                return newPath;
            },
            GEO_LIMIT_TYPES: GEO_LIMIT_TYPES,
            MAX_BATCH_SIZE: MAX_BATCH_SIZE,
            URL_REGEX: URL_REGEX,
            SYNC_TIMEOUT: SYNC_TIMEOUT,
            POLLTIME: POLLTIME
        };
    }, {}],
    31: [function (require, module, exports) {
        'use strict';
        var SUCCESS_CODES = [200, 201];
        module.exports = {
            isSuccess: function isSuccess(response) {
                return SUCCESS_CODES.indexOf(response.status) > -1;
            },
            deleteEmpty: function deleteEmpty(obj) {
                var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                Object.keys(obj).forEach(function (key) {
                    if (obj[key] === null || obj[key] === undefined || strict === true && (obj[key] === '' || obj[key].length === 0 || Object.keys(obj[key]).length === 0)) {
                        delete obj[key];
                    }
                });
            },
            clone: function clone(obj) {
                var keys = Object.keys(obj);
                var copy = {};
                keys.forEach(function (k) {
                    copy[k] = obj[k];
                });
                return copy;
            },
            checkType: function checkType(regex, val) {
                if (regex instanceof RegExp === false) {
                    regex = new RegExp(regex);
                }
                return regex.test(Object.prototype.toString.call(val));
            }
        };
    }, {}],
    32: [function (require, module, exports) {
        (function (global) {
            'use strict';
            var App = require('./App');
            var _require = require('./../package.json'),
                version = _require.version;
            module.exports = global.Clarifai = {
                version: version,
                App: App,
                GENERAL_MODEL: 'aaa03c23b3724a16a56b629203edc62c',
                FOOD_MODEL: 'bd367be194cf45149e75f01d59f77ba7',
                TRAVEL_MODEL: 'eee28c313d69466f836ab83287a54ed9',
                NSFW_MODEL: 'e9576d86d2004ed1a38ba0cf39ecb4b1',
                WEDDINGS_MODEL: 'c386b7a870114f4a87477c0824499348',
                WEDDING_MODEL: 'c386b7a870114f4a87477c0824499348',
                COLOR_MODEL: 'eeed0b6733a644cea07cf4c60f87ebb7',
                CLUSTER_MODEL: 'cccbe437d6e54e2bb911c6aa292fb072',
                FACE_DETECT_MODEL: 'a403429f2ddf4b49b307e318f00e528b',
                FOCUS_MODEL: 'c2cf7cecd8a6427da375b9f35fcd2381',
                LOGO_MODEL: 'c443119bf2ed4da98487520d01a0b1e3',
                DEMOGRAPHICS_MODEL: 'c0c0ac362b03416da06ab3fa36fb58e3',
                GENERAL_EMBED_MODEL: 'bbb5f41425b8468d9b7a554ff10f8581',
                FACE_EMBED_MODEL: 'd02b4508df58432fbb84e800597b8959',
                APPAREL_MODEL: 'e0be3b9d6a454f0493ac3a30784001ff'
            };
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {
        "./../package.json": 34,
        "./App": 22
    }],
    33: [function (require, module, exports) {
        'use strict';

        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        var Promise = require('promise');
        var _require = require('./constants'),
            URL_REGEX = _require.URL_REGEX,
            GEO_LIMIT_TYPES = _require.GEO_LIMIT_TYPES,
            ERRORS = _require.ERRORS;
        var _require2 = require('./helpers'),
            checkType = _require2.checkType,
            clone = _require2.clone;
        var _require3 = require('./../package.json'),
            VERSION = _require3.version;
        module.exports = {
            wrapToken: function wrapToken(_config, requestFn) {
                return new Promise(function (resolve, reject) {
                    if (_config.apiKey) {
                        var headers = {
                            Authorization: 'Key ' + _config.apiKey,
                            'X-Clarifai-Client': 'js:' + VERSION
                        };
                        return requestFn(headers).then(resolve, reject);
                    }
                    _config.token().then(function (token) {
                        var headers = {
                            Authorization: 'Bearer ' + token.accessToken,
                            'X-Clarifai-Client': 'js:' + VERSION
                        };
                        requestFn(headers).then(resolve, reject);
                    }, reject);
                });
            },
            formatModel: function formatModel() {
                var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var formatted = {};
                if (data.id === null || data.id === undefined) {
                    throw ERRORS.paramsRequired('Model ID');
                }
                formatted.id = data.id;
                if (data.name) {
                    formatted.name = data.name;
                }
                formatted.output_info = {};
                if (data.conceptsMutuallyExclusive !== undefined) {
                    formatted.output_info.output_config = formatted.output_info.output_config || {};
                    formatted.output_info.output_config.concepts_mutually_exclusive = !!data.conceptsMutuallyExclusive;
                }
                if (data.closedEnvironment !== undefined) {
                    formatted.output_info.output_config = formatted.output_info.output_config || {};
                    formatted.output_info.output_config.closed_environment = !!data.closedEnvironment;
                }
                if (data.concepts) {
                    formatted.output_info.data = {
                        concepts: data.concepts.map(module.exports.formatConcept)
                    };
                }
                return formatted;
            },
            formatInput: function formatInput(data, includeImage) {
                var input = checkType(/String/, data) ? {
                    url: data
                } : data;
                var formatted = {
                    id: input.id || null,
                    data: {}
                };
                if (input.concepts) {
                    formatted.data.concepts = input.concepts;
                }
                if (input.metadata) {
                    formatted.data.metadata = input.metadata;
                }
                if (input.geo) {
                    formatted.data.geo = {
                        geo_point: input.geo
                    };
                }
                if (includeImage !== false) {
                    formatted.data.image = {
                        url: input.url,
                        base64: input.base64,
                        crop: input.crop
                    };
                    if (data.allowDuplicateUrl) {
                        formatted.data.image.allow_duplicate_url = true;
                    }
                }
                return formatted;
            },
            formatMediaPredict: function formatMediaPredict(data) {
                var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image';
                var media = data;
                if (checkType(/String/, data)) {
                    if (URL_REGEX.test(media) === true) {
                        media = {
                            url: data
                        };
                    } else {
                        media = {
                            base64: data
                        };
                    }
                }
                return {
                    data: _defineProperty({}, type, media)
                };
            },
            formatImagesSearch: function formatImagesSearch(image) {
                var imageQuery = void 0;
                var input = {
                    input: {
                        data: {}
                    }
                };
                var formatted = [];
                if (checkType(/String/, image)) {
                    imageQuery = {
                        url: image
                    };
                } else {
                    imageQuery = image.url || image.base64 ? {
                        image: {
                            url: image.url,
                            base64: image.base64,
                            crop: image.crop
                        }
                    } : {};
                }
                input.input.data = imageQuery;
                if (image.id) {
                    input.input.id = image.id;
                    input.input.data = {
                        image: {}
                    };
                }
                if (image.metadata !== undefined) {
                    input.input.data.metadata = image.metadata;
                }
                if (image.geo !== undefined) {
                    if (checkType(/Array/, image.geo)) {
                        input.input.data.geo = {
                            geo_box: image.geo.map(function (p) {
                                return {
                                    geo_point: p
                                };
                            })
                        };
                    } else if (checkType(/Object/, image.geo)) {
                        if (GEO_LIMIT_TYPES.indexOf(image.geo.type) === -1) {
                            throw ERRORS.INVALID_GEOLIMIT_TYPE;
                        }
                        input.input.data.geo = {
                            geo_point: {
                                latitude: image.geo.latitude,
                                longitude: image.geo.longitude
                            },
                            geo_limit: {
                                type: image.geo.type,
                                value: image.geo.value
                            }
                        };
                    }
                }
                if (image.type !== 'input' && input.input.data.image) {
                    if (input.input.data.metadata || input.input.data.geo) {
                        var dataCopy = {
                            input: {
                                data: clone(input.input.data)
                            }
                        };
                        var imageCopy = {
                            input: {
                                data: clone(input.input.data)
                            }
                        };
                        delete dataCopy.input.data.image;
                        delete imageCopy.input.data.metadata;
                        delete imageCopy.input.data.geo;
                        input = [{
                            output: imageCopy
                        }, dataCopy];
                    } else {
                        input = [{
                            output: input
                        }];
                    }
                }
                formatted = formatted.concat(input);
                return formatted;
            },
            formatConcept: function formatConcept(concept) {
                var formatted = concept;
                if (checkType(/String/, concept)) {
                    formatted = {
                        id: concept
                    };
                }
                return formatted;
            },
            formatConceptsSearch: function formatConceptsSearch(query) {
                if (checkType(/String/, query)) {
                    query = {
                        id: query
                    };
                }
                var v = {};
                var type = query.type === 'input' ? 'input' : 'output';
                delete query.type;
                v[type] = {
                    data: {
                        concepts: [query]
                    }
                };
                return v;
            },
            formatObjectForSnakeCase: function formatObjectForSnakeCase(obj) {
                return Object.keys(obj).reduce(function (o, k) {
                    o[k.replace(/([A-Z])/g, function (r) {
                        return '_' + r.toLowerCase();
                    })] = obj[k];
                    return o;
                }, {});
            }
        };
    }, {
        "./../package.json": 34,
        "./constants": 30,
        "./helpers": 31,
        "promise": 35
    }],
    34: [function (require, module, exports) {
        module.exports = {
            "_args": [
                [{
                    "raw": "clarifai",
                    "scope": null,
                    "escapedName": "clarifai",
                    "name": "clarifai",
                    "rawSpec": "",
                    "spec": "latest",
                    "type": "tag"
                }, "/home/geeekyboy/Caddy"]
            ],
            "_from": "clarifai@latest",
            "_id": "clarifai@2.2.0",
            "_inCache": true,
            "_location": "/clarifai",
            "_nodeVersion": "6.11.0",
            "_npmOperationalInternal": {
                "host": "s3://npm-registry-packages",
                "tmp": "tmp/clarifai-2.2.0.tgz_1498165122459_0.7238537282682955"
            },
            "_npmUser": {
                "name": "dankantor-clarifai",
                "email": "dankantor@clarifai.com"
            },
            "_npmVersion": "3.10.10",
            "_phantomChildren": {},
            "_requested": {
                "raw": "clarifai",
                "scope": null,
                "escapedName": "clarifai",
                "name": "clarifai",
                "rawSpec": "",
                "spec": "latest",
                "type": "tag"
            },
            "_requiredBy": ["#USER"],
            "_resolved": "https://registry.npmjs.org/clarifai/-/clarifai-2.2.0.tgz",
            "_shasum": "d0161e3a075b07ebf786008ba36044e6df0d28a5",
            "_shrinkwrap": null,
            "_spec": "clarifai",
            "_where": "/home/geeekyboy/Caddy",
            "author": {
                "name": "Clarifai Inc."
            },
            "bugs": {
                "url": "https://github.com/Clarifai/clarifai-javascript/issues"
            },
            "dependencies": {
                "axios": "0.11.1",
                "form-data": "0.2.0",
                "promise": "7.1.1"
            },
            "description": "Official Clarifai Javascript SDK",
            "devDependencies": {
                "babel-eslint": "^6.1.2",
                "babel-preset-es2015": "^6.14.0",
                "babel-register": "^6.14.0",
                "babelify": "^7.3.0",
                "del": "2.0.2",
                "envify": "3.4.0",
                "git-branch": "0.3.0",
                "gulp": "3.9.0",
                "gulp-awspublish": "3.0.1",
                "gulp-babel": "^6.1.2",
                "gulp-browserify": "0.5.1",
                "gulp-concat": "2.6.0",
                "gulp-eslint": "2.0.0",
                "gulp-if": "2.0.0",
                "gulp-insert": "0.5.0",
                "gulp-jasmine": "^2.2.1",
                "gulp-notify": "2.2.0",
                "gulp-rename": "1.2.2",
                "gulp-replace-task": "0.11.0",
                "gulp-uglify": "1.4.1",
                "gulp-util": "3.0.6",
                "jsdoc": "^3.4.1",
                "minami": "^1.1.1",
                "release-it": "^2.7.3",
                "require-dir": "0.3.0",
                "serve-static": "1.10.0"
            },
            "directories": {},
            "dist": {
                "shasum": "d0161e3a075b07ebf786008ba36044e6df0d28a5",
                "tarball": "https://registry.npmjs.org/clarifai/-/clarifai-2.2.0.tgz"
            },
            "gitHead": "3aabe3ecae9c17ac088488c03a0983057d51c58b",
            "homepage": "https://github.com/Clarifai/clarifai-javascript#readme",
            "license": "Apache-2.0",
            "main": "dist/index.js",
            "maintainers": [{
                "name": "clarifai-jade",
                "email": "jade@clarifai.com"
            }, {
                "name": "dankantor-clarifai",
                "email": "dankantor@clarifai.com"
            }],
            "name": "clarifai",
            "optionalDependencies": {},
            "readme": "ERROR: No README data found!",
            "repository": {
                "type": "git",
                "url": "git+https://github.com/Clarifai/clarifai-javascript.git"
            },
            "scripts": {
                "build": "npm run clean && gulp build && npm run jsdoc",
                "clean": "gulp cleanbuild",
                "jsdoc": "jsdoc src/* -t node_modules/minami -d docs/$npm_package_version && jsdoc src/* -t node_modules/minami -d docs/latest",
                "release": "release-it",
                "test": "gulp test",
                "watch": "gulp watch"
            },
            "version": "2.2.0"
        }
    }, {}],
    35: [function (require, module, exports) {
        'use strict';
        module.exports = require('./lib')
    }, {
        "./lib": 40
    }],
    36: [function (require, module, exports) {
        'use strict';
        var asap = require('asap/raw');

        function noop() {}
        // States:
        //
        // 0 - pending
        // 1 - fulfilled with _value
        // 2 - rejected with _value
        // 3 - adopted the state of another promise, _value
        //
        // once the state is no longer pending (0) it is immutable
        // All `_` prefixed properties will be reduced to `_{random number}`
        // at build time to obfuscate them and discourage their use.
        // We don't use symbols or Object.defineProperty to fully hide them
        // because the performance isn't good enough.
        // to avoid using try/catch inside critical functions, we
        // extract them to here.
        var LAST_ERROR = null;
        var IS_ERROR = {};

        function getThen(obj) {
            try {
                return obj.then;
            } catch (ex) {
                LAST_ERROR = ex;
                return IS_ERROR;
            }
        }

        function tryCallOne(fn, a) {
            try {
                return fn(a);
            } catch (ex) {
                LAST_ERROR = ex;
                return IS_ERROR;
            }
        }

        function tryCallTwo(fn, a, b) {
            try {
                fn(a, b);
            } catch (ex) {
                LAST_ERROR = ex;
                return IS_ERROR;
            }
        }
        module.exports = Promise;

        function Promise(fn) {
            if (typeof this !== 'object') {
                throw new TypeError('Promises must be constructed via new');
            }
            if (typeof fn !== 'function') {
                throw new TypeError('not a function');
            }
            this._45 = 0;
            this._81 = 0;
            this._65 = null;
            this._54 = null;
            if (fn === noop) return;
            doResolve(fn, this);
        }
        Promise._10 = null;
        Promise._97 = null;
        Promise._61 = noop;
        Promise.prototype.then = function (onFulfilled, onRejected) {
            if (this.constructor !== Promise) {
                return safeThen(this, onFulfilled, onRejected);
            }
            var res = new Promise(noop);
            handle(this, new Handler(onFulfilled, onRejected, res));
            return res;
        };

        function safeThen(self, onFulfilled, onRejected) {
            return new self.constructor(function (resolve, reject) {
                var res = new Promise(noop);
                res.then(resolve, reject);
                handle(self, new Handler(onFulfilled, onRejected, res));
            });
        };

        function handle(self, deferred) {
            while (self._81 === 3) {
                self = self._65;
            }
            if (Promise._10) {
                Promise._10(self);
            }
            if (self._81 === 0) {
                if (self._45 === 0) {
                    self._45 = 1;
                    self._54 = deferred;
                    return;
                }
                if (self._45 === 1) {
                    self._45 = 2;
                    self._54 = [self._54, deferred];
                    return;
                }
                self._54.push(deferred);
                return;
            }
            handleResolved(self, deferred);
        }

        function handleResolved(self, deferred) {
            asap(function () {
                var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
                if (cb === null) {
                    if (self._81 === 1) {
                        resolve(deferred.promise, self._65);
                    } else {
                        reject(deferred.promise, self._65);
                    }
                    return;
                }
                var ret = tryCallOne(cb, self._65);
                if (ret === IS_ERROR) {
                    reject(deferred.promise, LAST_ERROR);
                } else {
                    resolve(deferred.promise, ret);
                }
            });
        }

        function resolve(self, newValue) {
            // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
            if (newValue === self) {
                return reject(self, new TypeError('A promise cannot be resolved with itself.'));
            }
            if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
                var then = getThen(newValue);
                if (then === IS_ERROR) {
                    return reject(self, LAST_ERROR);
                }
                if (then === self.then && newValue instanceof Promise) {
                    self._81 = 3;
                    self._65 = newValue;
                    finale(self);
                    return;
                } else if (typeof then === 'function') {
                    doResolve(then.bind(newValue), self);
                    return;
                }
            }
            self._81 = 1;
            self._65 = newValue;
            finale(self);
        }

        function reject(self, newValue) {
            self._81 = 2;
            self._65 = newValue;
            if (Promise._97) {
                Promise._97(self, newValue);
            }
            finale(self);
        }

        function finale(self) {
            if (self._45 === 1) {
                handle(self, self._54);
                self._54 = null;
            }
            if (self._45 === 2) {
                for (var i = 0; i < self._54.length; i++) {
                    handle(self, self._54[i]);
                }
                self._54 = null;
            }
        }

        function Handler(onFulfilled, onRejected, promise) {
            this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
            this.onRejected = typeof onRejected === 'function' ? onRejected : null;
            this.promise = promise;
        }
        /**
         * Take a potentially misbehaving resolver function and make sure
         * onFulfilled and onRejected are only called once.
         *
         * Makes no guarantees about asynchrony.
         */
        function doResolve(fn, promise) {
            var done = false;
            var res = tryCallTwo(fn, function (value) {
                if (done) return;
                done = true;
                resolve(promise, value);
            }, function (reason) {
                if (done) return;
                done = true;
                reject(promise, reason);
            })
            if (!done && res === IS_ERROR) {
                done = true;
                reject(promise, LAST_ERROR);
            }
        }
    }, {
        "asap/raw": 3
    }],
    37: [function (require, module, exports) {
        'use strict';
        var Promise = require('./core.js');
        module.exports = Promise;
        Promise.prototype.done = function (onFulfilled, onRejected) {
            var self = arguments.length ? this.then.apply(this, arguments) : this;
            self.then(null, function (err) {
                setTimeout(function () {
                    throw err;
                }, 0);
            });
        };
    }, {
        "./core.js": 36
    }],
    38: [function (require, module, exports) {
        'use strict';
        //This file contains the ES6 extensions to the core Promises/A+ API
        var Promise = require('./core.js');
        module.exports = Promise;
        /* Static Functions */
        var TRUE = valuePromise(true);
        var FALSE = valuePromise(false);
        var NULL = valuePromise(null);
        var UNDEFINED = valuePromise(undefined);
        var ZERO = valuePromise(0);
        var EMPTYSTRING = valuePromise('');

        function valuePromise(value) {
            var p = new Promise(Promise._61);
            p._81 = 1;
            p._65 = value;
            return p;
        }
        Promise.resolve = function (value) {
            if (value instanceof Promise) return value;
            if (value === null) return NULL;
            if (value === undefined) return UNDEFINED;
            if (value === true) return TRUE;
            if (value === false) return FALSE;
            if (value === 0) return ZERO;
            if (value === '') return EMPTYSTRING;
            if (typeof value === 'object' || typeof value === 'function') {
                try {
                    var then = value.then;
                    if (typeof then === 'function') {
                        return new Promise(then.bind(value));
                    }
                } catch (ex) {
                    return new Promise(function (resolve, reject) {
                        reject(ex);
                    });
                }
            }
            return valuePromise(value);
        };
        Promise.all = function (arr) {
            var args = Array.prototype.slice.call(arr);
            return new Promise(function (resolve, reject) {
                if (args.length === 0) return resolve([]);
                var remaining = args.length;

                function res(i, val) {
                    if (val && (typeof val === 'object' || typeof val === 'function')) {
                        if (val instanceof Promise && val.then === Promise.prototype.then) {
                            while (val._81 === 3) {
                                val = val._65;
                            }
                            if (val._81 === 1) return res(i, val._65);
                            if (val._81 === 2) reject(val._65);
                            val.then(function (val) {
                                res(i, val);
                            }, reject);
                            return;
                        } else {
                            var then = val.then;
                            if (typeof then === 'function') {
                                var p = new Promise(then.bind(val));
                                p.then(function (val) {
                                    res(i, val);
                                }, reject);
                                return;
                            }
                        }
                    }
                    args[i] = val;
                    if (--remaining === 0) {
                        resolve(args);
                    }
                }
                for (var i = 0; i < args.length; i++) {
                    res(i, args[i]);
                }
            });
        };
        Promise.reject = function (value) {
            return new Promise(function (resolve, reject) {
                reject(value);
            });
        };
        Promise.race = function (values) {
            return new Promise(function (resolve, reject) {
                values.forEach(function (value) {
                    Promise.resolve(value).then(resolve, reject);
                });
            });
        };
        /* Prototype Methods */
        Promise.prototype['catch'] = function (onRejected) {
            return this.then(null, onRejected);
        };
    }, {
        "./core.js": 36
    }],
    39: [function (require, module, exports) {
        'use strict';
        var Promise = require('./core.js');
        module.exports = Promise;
        Promise.prototype['finally'] = function (f) {
            return this.then(function (value) {
                return Promise.resolve(f()).then(function () {
                    return value;
                });
            }, function (err) {
                return Promise.resolve(f()).then(function () {
                    throw err;
                });
            });
        };
    }, {
        "./core.js": 36
    }],
    40: [function (require, module, exports) {
        'use strict';
        module.exports = require('./core.js');
        require('./done.js');
        require('./finally.js');
        require('./es6-extensions.js');
        require('./node-extensions.js');
        require('./synchronous.js');
    }, {
        "./core.js": 36,
        "./done.js": 37,
        "./es6-extensions.js": 38,
        "./finally.js": 39,
        "./node-extensions.js": 41,
        "./synchronous.js": 42
    }],
    41: [function (require, module, exports) {
        'use strict';
        // This file contains then/promise specific extensions that are only useful
        // for node.js interop
        var Promise = require('./core.js');
        var asap = require('asap');
        module.exports = Promise;
        /* Static Functions */
        Promise.denodeify = function (fn, argumentCount) {
            if (typeof argumentCount === 'number' && argumentCount !== Infinity) {
                return denodeifyWithCount(fn, argumentCount);
            } else {
                return denodeifyWithoutCount(fn);
            }
        }
        var callbackFn = ('function (err, res) {' + 'if (err) { rj(err); } else { rs(res); }' + '}');

        function denodeifyWithCount(fn, argumentCount) {
            var args = [];
            for (var i = 0; i < argumentCount; i++) {
                args.push('a' + i);
            }
            var body = ['return function (' + args.join(',') + ') {', 'var self = this;', 'return new Promise(function (rs, rj) {', 'var res = fn.call(', ['self'].concat(args).concat([callbackFn]).join(','), ');', 'if (res &&', '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ') {rs(res);}', '});', '};'].join('');
            return Function(['Promise', 'fn'], body)(Promise, fn);
        }

        function denodeifyWithoutCount(fn) {
            var fnLength = Math.max(fn.length - 1, 3);
            var args = [];
            for (var i = 0; i < fnLength; i++) {
                args.push('a' + i);
            }
            var body = ['return function (' + args.join(',') + ') {', 'var self = this;', 'var args;', 'var argLength = arguments.length;', 'if (arguments.length > ' + fnLength + ') {', 'args = new Array(arguments.length + 1);', 'for (var i = 0; i < arguments.length; i++) {', 'args[i] = arguments[i];', '}', '}', 'return new Promise(function (rs, rj) {', 'var cb = ' + callbackFn + ';', 'var res;', 'switch (argLength) {',
                args.concat(['extra']).map(function (_, index) {
                    return ('case ' + (index) + ':' + 'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' + 'break;');
                }).join(''), 'default:', 'args[argLength] = cb;', 'res = fn.apply(self, args);', '}', 'if (res &&', '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ') {rs(res);}', '});', '};'
            ].join('');
            return Function(
                ['Promise', 'fn'], body)(Promise, fn);
        }
        Promise.nodeify = function (fn) {
            return function () {
                var args = Array.prototype.slice.call(arguments);
                var callback = typeof args[args.length - 1] === 'function' ? args.pop() : null;
                var ctx = this;
                try {
                    return fn.apply(this, arguments).nodeify(callback, ctx);
                } catch (ex) {
                    if (callback === null || typeof callback == 'undefined') {
                        return new Promise(function (resolve, reject) {
                            reject(ex);
                        });
                    } else {
                        asap(function () {
                            callback.call(ctx, ex);
                        })
                    }
                }
            }
        }
        Promise.prototype.nodeify = function (callback, ctx) {
            if (typeof callback != 'function') return this;
            this.then(function (value) {
                asap(function () {
                    callback.call(ctx, null, value);
                });
            }, function (err) {
                asap(function () {
                    callback.call(ctx, err);
                });
            });
        }
    }, {
        "./core.js": 36,
        "asap": 2
    }],
    42: [function (require, module, exports) {
        'use strict';
        var Promise = require('./core.js');
        module.exports = Promise;
        Promise.enableSynchronous = function () {
            Promise.prototype.isPending = function () {
                return this.getState() == 0;
            };
            Promise.prototype.isFulfilled = function () {
                return this.getState() == 1;
            };
            Promise.prototype.isRejected = function () {
                return this.getState() == 2;
            };
            Promise.prototype.getValue = function () {
                if (this._81 === 3) {
                    return this._65.getValue();
                }
                if (!this.isFulfilled()) {
                    throw new Error('Cannot get a value of an unfulfilled promise.');
                }
                return this._65;
            };
            Promise.prototype.getReason = function () {
                if (this._81 === 3) {
                    return this._65.getReason();
                }
                if (!this.isRejected()) {
                    throw new Error('Cannot get a rejection reason of a non-rejected promise.');
                }
                return this._65;
            };
            Promise.prototype.getState = function () {
                if (this._81 === 3) {
                    return this._65.getState();
                }
                if (this._81 === -1 || this._81 === -2) {
                    return 0;
                }
                return this._81;
            };
        };
        Promise.disableSynchronous = function () {
            Promise.prototype.isPending = undefined;
            Promise.prototype.isFulfilled = undefined;
            Promise.prototype.isRejected = undefined;
            Promise.prototype.getValue = undefined;
            Promise.prototype.getReason = undefined;
            Promise.prototype.getState = undefined;
        };
    }, {
        "./core.js": 36
    }],
    43: [function (require, module, exports) {
        // shim for using process in browser
        var process = module.exports = {};
        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.
        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
            throw new Error('setTimeout has not been defined');
        }

        function defaultClearTimeout() {
            throw new Error('clearTimeout has not been defined');
        }
        (function () {
            try {
                if (typeof setTimeout === 'function') {
                    cachedSetTimeout = setTimeout;
                } else {
                    cachedSetTimeout = defaultSetTimout;
                }
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                if (typeof clearTimeout === 'function') {
                    cachedClearTimeout = clearTimeout;
                } else {
                    cachedClearTimeout = defaultClearTimeout;
                }
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }())

        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
                //normal enviroments in sane situations
                return setTimeout(fun, 0);
            }
            // if setTimeout wasn't available but was latter defined
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }

        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
                //normal enviroments in sane situations
                return clearTimeout(marker);
            }
            // if clearTimeout wasn't available but was latter defined
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                    return cachedClearTimeout.call(this, marker);
                }
            }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return;
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue);
            } else {
                queueIndex = -1;
            }
            if (queue.length) {
                drainQueue();
            }
        }

        function drainQueue() {
            if (draining) {
                return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;
            var len = queue.length;
            while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run();
                    }
                }
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
        }
        process.nextTick = function (fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
                runTimeout(drainQueue);
            }
        };
        // v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }
        Item.prototype.run = function () {
            this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {}
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;
        process.listeners = function (name) {
            return []
        }
        process.binding = function (name) {
            throw new Error('process.binding is not supported');
        };
        process.cwd = function () {
            return '/'
        };
        process.chdir = function (dir) {
            throw new Error('process.chdir is not supported');
        };
        process.umask = function () {
            return 0;
        };
    }, {}]
}, {}, [1]);
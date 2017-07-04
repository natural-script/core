var put = $('body');
var lang = 0;
var yesTranslations = ['yes', 'yup', 'oui', 'نعم', 'ايوه', 'はい', '是', '是'];
var noTranslations = ['no', 'nope', 'non', 'لا', 'لأ', 'いいえ', '沒有', '没有'];
var blackTranslations = ['black', 'black', 'noir', 'اسود', 'اسود', '黒', '黑色', '黑色'];
var redTranslations = ['red', 'red', 'rouge', 'احمر', 'احمر', '赤', '紅', '红'];
var blueTranslations = ['blue', 'blue', 'bleu', 'ازرق', 'ازرق', '青', '藍色', '蓝色'];
var cyanTranslations = ['cyan', 'cyan', 'cyan', 'سماوى', 'لبنى', 'シアン', '青色', '青色'];
var grayTranslations = ['gray', 'gray', 'gris', 'رصاصى', 'فرانى', 'グレー', '灰色', '灰色'];
var greenTranslations = ['green', 'green', 'vert', 'اخضر', 'اخضر', '緑', '綠色', '绿色'];
var whiteTranslations = ['white', 'white', 'blanc', 'ابيض', 'ابيض', '白', '白色', '白色'];
var orangeTranslations = ['orange', 'orange', 'orange', 'برتقالى', 'برتقانى', 'オレンジ', '橙子', '橙子'];
var yellowTranslations = ['yellow', 'yellow', 'jaune', 'اصفر', 'اصفر', '黄', '黃色', '黄色'];
var brownTranslations = ['brown', 'brown', 'marron', 'بنى', 'بنى', '褐色', '棕色', '棕色'];
var tealTranslations = ['teal', 'teal', 'sarcelle', 'تركواز', 'تركواز', 'ティール', '水鴨', '水鸭'];
var pinkTranslations = ['pink', 'pink', 'rose', 'زهرى', 'بمبى', 'ピンク', '粉', '粉'];
var lightGreenTranslations = ['light green', 'light green', 'Vert clair', 'اخضر فاتح', 'اخضر فاتح', 'ライトグリーン', '淺綠色', '浅绿色'];
var colorTranslations = ['colour', 'color', 'couleur', 'اللون', 'اللون', 'カラー', '顏色', '颜色'];
var pinTranslations = ['pin', 'pin', 'épingle', 'الدبوس', 'الدبوس', 'ピン', '銷', '销'];
var animationTranslations = ['aniamtion', 'aniamtion', 'animation', 'الحركة', 'الحركة', 'アニメーション', '動畫', '动画'];
var commandsTranslations = ['commands', 'commands', 'commandes', 'الأوامر', 'الأوامر', 'コマンド', '命令', '命令'];
var sliderTranslations = ['slider', 'slider', 'curseur', 'دبوس', 'دبوس', 'スライダー', '滑塊', '滑块'];
var buttonTranslations = ['button', 'button', 'curseur', 'زر', 'زرار', 'スライダー', '滑塊', '滑块'];
var databaseCenterTranslations = ['database_center', 'database_center', 'épingle', 'مركز_قاعدة_البيانات', 'مركز_الداتا_بيز', 'ピン', '銷', '销'];
var FABTranslations = ['FAB', 'FAB', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var colorsPaletteTranslations = ['colours_palette', 'colors_palette', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var textFnTranslations = ['text0', 'text0', 'épingle', 'نص', 'كلام', 'ピン', '銷', '销'];
var buttonWithAnIconTranslations = ['button_with_an_icon', 'button_with_an_icon', 'épingle', 'زر_بأيقونة', 'زرار_بأيكونة', 'ピン', '銷', '销'];
var iconTranslations = ['icon', 'icon', 'épingle', 'ايقونة', 'ايكونة', 'ピン', '銷', '销'];
var imageTranslations = ['image', 'image', 'épingle', 'صورة', 'صورة', 'ピン', '銷', '销'];
var videoTranslations = ['video', 'video', 'épingle', 'فيديو', 'فيديو', 'ピン', '銷', '销'];
var audioTranslations = ['audio', 'audio', 'épingle', 'صوت', 'صوت', 'ピン', '銷', '销'];
var textboxTranslations = ['text box', 'text box', 'épingle', 'صندوق_النص', 'مكان_الكتابة', 'ピン', '銷', '销'];
var sectionTranslations = ['section', 'section', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var checkboxTranslations = ['checkbox', 'checkbox', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var loadingSpinnerTranslations = ['loading_spinner', 'loading_spinner', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var loadingBarTranslations = ['loading_bar', 'loading_bar', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var notificationCountTranslations = ['notification_count', 'notification_count', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var dialogBoxTranslations = ['dialog_box', 'dialog_box', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var dropdownTranslations = ['dropdown_menu', 'dropdown_menu', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var backgroundTranslations = ['background', 'background', 'épingle', 'الخلفية', 'الخلفية', 'ピン', '銷', '销'];
var tooltipTranslations = ['tooltip', 'tooltip', 'épingle', 'الخلفية', 'الخلفية', 'ピン', '銷', '销'];
var textTranslations = ['text', 'text', 'épingle', 'النص', 'الكلام', 'ピン', '銷', '销'];
var widthTranslations = ['width', 'width', 'épingle', 'العرض', 'العرض', 'ピン', '銷', '销'];
var lengthTranslations = ['length', 'length', 'épingle', 'الطول', 'الطول', 'ピン', '銷', '销'];
var locationTranslations = ['location', 'location', 'épingle', 'المكان', 'المكان', 'ピン', '銷', '销'];
var locationFromLeftTranslations = ['location from the left', 'location from the left', 'épingle', 'المكان_من_اليمين', 'المكان_من_اللمين', 'ピン', '銷', '销'];
var locationFromRightTranslations = ['location from the right', 'location from the right', 'épingle', 'المكان_من_الشمال', 'المكان_من_الشمال', 'ピン', '銷', '销'];
var locationFromTopTranslations = ['location from the top', 'location from the top', 'épingle', 'المكان_من_فوق', 'المكان_من_فوق', 'ピン', '銷', '销'];
var locationFromBottomTranslations = ['location from the bottom', 'location from the bottom', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var hostTranslations = ['host', 'host', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var usernameTranslations = ['username', 'username', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var passwordTranslations = ['password', 'password', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var setupTranslations = ['setup', 'setup', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var logoTranslations = ['logo', 'logo', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var titleTranslations = ['title', 'title', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var modeTranslations = ['mode', 'mode', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var pageTranslations = ['page', 'page', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var nameTranslations = ['name', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var transparencyTranslations = ['transparency', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var sizeTranslations = ['size', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var thicknessTranslations = ['thickness', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var switchedOnTranslations = ['switchedOn', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var raisedTranslations = ['raised', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var disabledTranslations = ['disabled', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var fontStyleTranslations = ['fontStyle', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var fontColourTranslations = ['fontColour', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var bodyTranslations = ['body', 'body', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var rippleTranslations = ['ripple', 'ripple', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var minTranslations = ['min', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var maxTranslations = ['max', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var requirementTranslations = ['requirement', 'requirement', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var typeTranslations = ['type', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var dynamicSizeTranslations = ['dynamicSize', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var clearButtonTranslations = ['clearButton', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var suffixTranslations = ['suffix', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var prefixTranslations = ['prefix', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var stepTranslations = ['step', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var progressTranslations = ['progress', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var valueBoxTranslations = ['valueBox', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var iconColorTranslations = ['iconColour', 'iconColor', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var imageSourceTranslations = ['imageSource', 'iconColor', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var FXTranslations = ['FX', 'FX', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var emitterTranslations = ['emitter', 'emitter', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var directionTranslations = ['emitter', 'emitter', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var loadingTranslations = ['loading', 'loading', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];


function commandsFnTranslations(commandCode, commandValue, para1, para2, para3, para4) {
    if (commandCode == 'c1A') {
        if (lang == 0) {
            return commandValue.split('when clicked, ');
        } else if (lang == 1) {
            return commandValue.split('when clicked, ');
        }
    } else if (commandCode == 'c1B') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved on it, ');
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved on it, ');
        }
    } else if (commandCode == 'c1C') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved away from it, ');
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved away from it, ');
        }
    } else if (commandCode == 'c1D') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved out of it, ');
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved out of it, ');
        }
    } else if (commandCode == 'c1E') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved on it, ');
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved on it, ');
        }
    } else if (commandCode == 'c1F') {
        if (lang == 0) {
            return commandValue.split('when it is no longer clicked, ');
        } else if (lang == 1) {
            return commandValue.split('when it is no longer clicked, ');
        }
    } else if (commandCode == 'c1G') {
        if (lang == 0) {
            return commandValue.split('when double clicked, ');
        } else if (lang == 1) {
            return commandValue.split('when double clicked, ');
        }
    } else if (commandCode == 'c1H') {
        if (lang == 0) {
            return commandValue.split('when right clicked, ');
        } else if (lang == 1) {
            return commandValue.split('when right clicked, ');
        }
    } else if (commandCode == 'c1I') {
        if (lang == 0) {
            return commandValue.split('when a key pressed while focusing it, ');
        } else if (lang == 1) {
            return commandValue.split('when a key pressed while focusing it, ');
        }
    } else if (commandCode == 'c1J') {
        if (lang == 0) {
            return commandValue.split('when a key is being pressed while focusing it, ');
        } else if (lang == 1) {
            return commandValue.split('when a key is being pressed while focusing it, ');
        }
    } else if (commandCode == 'c1K') {
        if (lang == 0) {
            return commandValue.split('when its contents have been changed, ');
        } else if (lang == 1) {
            return commandValue.split('when its contents have been changed, ');
        }
    } else if (commandCode == 'c1L') {
        if (lang == 0) {
            return commandValue.split('when focused, ');
        } else if (lang == 1) {
            return commandValue.split('when focused, ');
        }
    } else if (commandCode == 'c1M') {
        if (lang == 0) {
            return commandValue.split('when it is being focused, ');
        } else if (lang == 1) {
            return commandValue.split('when it is being focused, ');
        }
    } else if (commandCode == 'c1N') {
        if (lang == 0) {
            return commandValue.split('when slept, ');
        } else if (lang == 1) {
            return commandValue.split('when slept, ');
        }
    } else if (commandCode == 'c1O') {
        if (lang == 0) {
            return commandValue.split('when the data of this form has been sent, ');
        } else if (lang == 1) {
            return commandValue.split('when the data of this form has been sent, ');
        }
    } else if (commandCode == 'c1P') {
        if (lang == 0) {
            return commandValue.split('when scrolled, ');
        } else if (lang == 1) {
            return commandValue.split('when scrolled, ');
        }
    } else if (commandCode == 'c2qA') {
        if (lang == 0) {
            return commandValue.split('when clicked, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when clicked, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qB') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qC') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qD') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qE') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qF') {
        if (lang == 0) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qG') {
        if (lang == 0) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qH') {
        if (lang == 0) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qI') {
        if (lang == 0) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qJ') {
        if (lang == 0) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qK') {
        if (lang == 0) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qL') {
        if (lang == 0) {
            return commandValue.split('when focused, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when focused, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qM') {
        if (lang == 0) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qN') {
        if (lang == 0) {
            return commandValue.split('when slept, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when slept, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qO') {
        if (lang == 0) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2qP') {
        if (lang == 0) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c2ruA') {
        if (lang == 0) {
            return 'remove';
        } else if (lang == 1) {
            return 'remove';
        }
    } else if (commandCode == 'c2ruB') {
        if (lang == 0) {
            return 'play';
        } else if (lang == 1) {
            return 'play';
        }
    } else if (commandCode == 'c2ruC') {
        if (lang == 0) {
            return 'pause';
        } else if (lang == 1) {
            return 'pause';
        }
    } else if (commandCode == 'c3q') {
        if (lang == 0) {
            return commandValue.split('remove ')[1];
        } else if (lang == 1) {
            return commandValue.split('remove ')[1];
        }
    } else if (commandCode == 'c3r') {
        if (lang == 0) {
            return 'it';
        } else if (lang == 1) {
            return 'it';
        }
    } else if (commandCode == 'c4') {
        if (lang == 0) {
            return commandValue.split('remove ')[1];
        } else if (lang == 1) {
            return commandValue.split('remove ')[1];
        }
    } else if (commandCode == 'c5qA') {
        if (lang == 0) {
            return commandValue.split('when clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qB') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qC') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qD') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qE') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qF') {
        if (lang == 0) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qG') {
        if (lang == 0) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qH') {
        if (lang == 0) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qI') {
        if (lang == 0) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qJ') {
        if (lang == 0) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qK') {
        if (lang == 0) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qL') {
        if (lang == 0) {
            return commandValue.split('when focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when focused, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when focused, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qM') {
        if (lang == 0) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qN') {
        if (lang == 0) {
            return commandValue.split('when slept, ')[1].split(' ')[0] + ' ' + commandValue.split('when slept, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when slept, ')[1].split(' ')[0] + ' ' + commandValue.split('when slept, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qO') {
        if (lang == 0) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5qP') {
        if (lang == 0) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c5r') {
        if (lang == 0) {
            return 'redirect to';
        } else if (lang == 1) {
            return 'redirect to';
        }
    } else if (commandCode == 'c6') {
        if (lang == 0) {
            return commandValue.split('redirect to ')[1];
        } else if (lang == 1) {
            return commandValue.split('redirect to ')[1];
        }
    } else if (commandCode == 'c7') {
        if (lang == 0) {
            return commandValue.split('play ')[1];
        } else if (lang == 1) {
            return commandValue.split('play ')[1];
        }
    } else if (commandCode == 'c8') {
        if (lang == 0) {
            return commandValue.split('pause ')[1];
        } else if (lang == 1) {
            return commandValue.split('pause ')[1];
        }
    } else if (commandCode == 'c9qA') {
        if (lang == 0) {
            return commandValue.split('when clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qB') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qC') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qD') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qE') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qF') {
        if (lang == 0) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qG') {
        if (lang == 0) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qH') {
        if (lang == 0) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qI') {
        if (lang == 0) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qJ') {
        if (lang == 0) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qK') {
        if (lang == 0) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[1] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[2] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[1] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[2] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qL') {
        if (lang == 0) {
            return commandValue.split('when focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when focused, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when focused, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qM') {
        if (lang == 0) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qN') {
        if (lang == 0) {
            return commandValue.split('when slept, ')[1].split(' ')[0] + ' ' + commandValue.split('when slept, ')[1].split(' ')[1] + ' ' + commandValue.split('when slept, ')[1].split(' ')[2] + ' ' + commandValue.split('when slept, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when slept, ')[1].split(' ')[0] + ' ' + commandValue.split('when slept, ')[1].split(' ')[1] + ' ' + commandValue.split('when slept, ')[1].split(' ')[2] + ' ' + commandValue.split('when slept, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qO') {
        if (lang == 0) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9qP') {
        if (lang == 0) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[1] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[2] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[3];
        } else if (lang == 1) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[1] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[2] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[3];
        }
    } else if (commandCode == 'c9r') {
        if (lang == 0) {
            return 'set its value to';
        } else if (lang == 1) {
            return 'set its value to';
        }
    } else if (commandCode == 'c10q') {
        if (lang == 0) {
            return commandValue.split('set its value to ')[1].split(' ')[0] + ' ' + commandValue.split('set its value to ')[1].split(' ')[1] + ' ' + commandValue.split('set its value to ')[1].split(' ')[2];
        } else if (lang == 1) {
            return commandValue.split('set its value to ')[1].split(' ')[0] + ' ' + commandValue.split('set its value to ')[1].split(' ')[1] + ' ' + commandValue.split('set its value to ')[1].split(' ')[2];
        }
    } else if (commandCode == 'c10r') {
        if (lang == 0) {
            return 'the value of';
        } else if (lang == 1) {
            return 'the value of';
        }
    } else if (commandCode == 'c11') {
        if (lang == 0) {
            return commandValue.split('set its value to the value of ')[1];
        } else if (lang == 1) {
            return commandValue.split('set its value to the value of ')[1];
        }
    } else if (commandCode == 'c12') {
        if (lang == 0) {
            return commandValue.split('set its value to ')[1];
        } else if (lang == 1) {
            return commandValue.split('set its value to ')[1];
        }
    } else if (commandCode == 'c13qA') {
        if (lang == 0) {
            return commandValue.split('when clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qB') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qC') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qD') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qE') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qF') {
        if (lang == 0) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qG') {
        if (lang == 0) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qH') {
        if (lang == 0) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qI') {
        if (lang == 0) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qJ') {
        if (lang == 0) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qK') {
        if (lang == 0) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[1] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[2] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[3] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[1] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[2] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[3] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qL') {
        if (lang == 0) {
            return commandValue.split('when focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when focused, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when focused, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qM') {
        if (lang == 0) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qN') {
        if (lang == 0) {
            return commandValue.split('when slept, ')[1].split(' ')[0] + ' ' + commandValue.split('when slept, ')[1].split(' ')[1] + ' ' + commandValue.split('when slept, ')[1].split(' ')[2] + ' ' + commandValue.split('when slept, ')[1].split(' ')[3] + ' ' + commandValue.split('when slept, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when slept, ')[1].split(' ')[0] + ' ' + commandValue.split('when slept, ')[1].split(' ')[1] + ' ' + commandValue.split('when slept, ')[1].split(' ')[2] + ' ' + commandValue.split('when slept, ')[1].split(' ')[3] + ' ' + commandValue.split('when slept, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qO') {
        if (lang == 0) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[3] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[3] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13qP') {
        if (lang == 0) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[1] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[2] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[3] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[5];
        } else if (lang == 1) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[1] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[2] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[3] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[5];
        }
    } else if (commandCode == 'c13r') {
        if (lang == 0) {
            return 'set the value of to';
        } else if (lang == 1) {
            return 'set the value of to';
        }
    } else if (commandCode == 'c14') {
        if (lang == 0) {
            return commandValue.split('set the value of ')[1].split(' ')[1];
        } else if (lang == 1) {
            return commandValue.split('set the value of ')[1].split(' ')[1];
        }
    } else if (commandCode == 'c15') {
        if (lang == 0) {
            return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
        } else if (lang == 1) {
            return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
        }
    } else if (commandCode == 'c16q') {
        if (lang == 0) {
            return commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[2];
        } else if (lang == 1) {
            return commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[2];
        }
    } else if (commandCode == 'c16r') {
        if (lang == 0) {
            return 'the value of';
        } else if (lang == 1) {
            return 'the value of';
        }
    } else if (commandCode == 'c17') {
        if (lang == 0) {
            return commandValue.split('set the value of ' + para1 + ' to ')[1];
        } else if (lang == 1) {
            return commandValue.split('set the value of ' + para1 + ' to ')[1];
        }
    } else if (commandCode == 'c18qA') {
        if (lang == 0) {
            return commandValue.split('when clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[4] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[4] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qB') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[4] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[4] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qC') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[4] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[4] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qD') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[4] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[4] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qE') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[4] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[4] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qF') {
        if (lang == 0) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[4] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[4] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qG') {
        if (lang == 0) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[4] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[4] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qH') {
        if (lang == 0) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[4] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[4] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qI') {
        if (lang == 0) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[4] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[4] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qJ') {
        if (lang == 0) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[4 + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[4]];
        } else if (lang == 1) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[4] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qK') {
        if (lang == 0) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[1] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[2] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[3] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[4] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[1] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[2] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[3] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[4] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qL') {
        if (lang == 0) {
            return commandValue.split('when focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when focused, ')[1].split(' ')[4] + ' ' + commandValue.split('when focused, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when focused, ')[1].split(' ')[4] + ' ' + commandValue.split('when focused, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qM') {
        if (lang == 0) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[4] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[4] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qN') {
        if (lang == 0) {
            return commandValue.split('when slept, ')[1].split(' ')[0] + ' ' + commandValue.split('when slept, ')[1].split(' ')[1] + ' ' + commandValue.split('when slept, ')[1].split(' ')[2] + ' ' + commandValue.split('when slept, ')[1].split(' ')[3] + ' ' + commandValue.split('when slept, ')[1].split(' ')[4] + ' ' + commandValue.split('when slept, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when slept, ')[1].split(' ')[0] + ' ' + commandValue.split('when slept, ')[1].split(' ')[1] + ' ' + commandValue.split('when slept, ')[1].split(' ')[2] + ' ' + commandValue.split('when slept, ')[1].split(' ')[3] + ' ' + commandValue.split('when slept, ')[1].split(' ')[4] + ' ' + commandValue.split('when slept, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qO') {
        if (lang == 0) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[3] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[4] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[3] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[4] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18qP') {
        if (lang == 0) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[1] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[2] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[3] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[4] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[6];
        } else if (lang == 1) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[1] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[2] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[3] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[4] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[6];
        }
    } else if (commandCode == 'c18r') {
        if (lang == 0) {
            return 'set the time position of to';
        } else if (lang == 1) {
            return 'set the time position of to';
        }
    } else if (commandCode == 'c19') {
        if (lang == 0) {
            return commandValue.split('set the time position of ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('set the time position of ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c20') {
        if (lang == 0) {
            return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
        } else if (lang == 1) {
            return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
        }
    } else if (commandCode == 'c21q') {
        if (lang == 0) {
            return commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[2];
        } else if (lang == 1) {
            return commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[2];
        }
    } else if (commandCode == 'c21r') {
        if (lang == 0) {
            return 'the value of';
        } else if (lang == 1) {
            return 'the value of';
        }
    } else if (commandCode == 'c22') {
        if (lang == 0) {
            return commandValue.split('set the time position of ' + targetElement + ' to ')[1];
        } else if (lang == 1) {
            return commandValue.split('set the time position of ' + targetElement + ' to ')[1];
        }
    } else if (commandCode == 'c23qA') {
        if (lang == 0) {
            return commandValue.split('when clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qB') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qC') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer m8ved away from it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer m9ved away from it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer 10oved away from it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer11moved away from it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qD') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qE') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qF') {
        if (lang == 0) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qG') {
        if (lang == 0) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qH') {
        if (lang == 0) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qI') {
        if (lang == 0) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[5] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[6] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[8] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[9] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[10] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[11] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[12] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[5] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[6] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[8] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[9] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[10] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[11] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[12] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qJ') {
        if (lang == 0) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[5] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[6] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[8] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[9] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[10] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[11] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[12] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[5] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[6] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[8] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[9] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[10] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[11] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[12] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qK') {
        if (lang == 0) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[1] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[2] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[3] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[5] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[6] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[8] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[9] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[10] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[11] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[12] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[1] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[2] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[3] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[5] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[6] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[8] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[9] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[10] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[11] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[12] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qL') {
        if (lang == 0) {
            return commandValue.split('when focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when focused, ')[1].split(' ')[5] + ' ' + commandValue.split('when focused, ')[1].split(' ')[6] + ' ' + commandValue.split('when focused, ')[1].split(' ')[8] + ' ' + commandValue.split('when focused, ')[1].split(' ')[9] + ' ' + commandValue.split('when focused, ')[1].split(' ')[10] + ' ' + commandValue.split('when focused, ')[1].split(' ')[11] + ' ' + commandValue.split('when focused, ')[1].split(' ')[12] + ' ' + commandValue.split('when focused, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when focused, ')[1].split(' ')[5] + ' ' + commandValue.split('when focused, ')[1].split(' ')[6] + ' ' + commandValue.split('when focused, ')[1].split(' ')[8] + ' ' + commandValue.split('when focused, ')[1].split(' ')[9] + ' ' + commandValue.split('when focused, ')[1].split(' ')[10] + ' ' + commandValue.split('when focused, ')[1].split(' ')[11] + ' ' + commandValue.split('when focused, ')[1].split(' ')[12] + ' ' + commandValue.split('when focused, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qM') {
        if (lang == 0) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[5] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[6] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[8] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[9] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[10] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[11] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[12] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[5] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[6] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[8] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[9] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[10] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[11] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[12] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qN') {
        if (lang == 0) {
            return commandValue.split('when slept, ')[1].split(' ')[0] + ' ' + commandValue.split('when slept, ')[1].split(' ')[1] + ' ' + commandValue.split('when slept, ')[1].split(' ')[2] + ' ' + commandValue.split('when slept, ')[1].split(' ')[3] + ' ' + commandValue.split('when slept, ')[1].split(' ')[5] + ' ' + commandValue.split('when slept, ')[1].split(' ')[6] + ' ' + commandValue.split('when slept, ')[1].split(' ')[8] + ' ' + commandValue.split('when slept, ')[1].split(' ')[9] + ' ' + commandValue.split('when slept, ')[1].split(' ')[10] + ' ' + commandValue.split('when slept, ')[1].split(' ')[11] + ' ' + commandValue.split('when slept, ')[1].split(' ')[12] + ' ' + commandValue.split('when slept, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when slept, ')[1].split(' ')[0] + ' ' + commandValue.split('when slept, ')[1].split(' ')[1] + ' ' + commandValue.split('when slept, ')[1].split(' ')[2] + ' ' + commandValue.split('when slept, ')[1].split(' ')[3] + ' ' + commandValue.split('when slept, ')[1].split(' ')[5] + ' ' + commandValue.split('when slept, ')[1].split(' ')[6] + ' ' + commandValue.split('when slept, ')[1].split(' ')[8] + ' ' + commandValue.split('when slept, ')[1].split(' ')[9] + ' ' + commandValue.split('when slept, ')[1].split(' ')[10] + ' ' + commandValue.split('when slept, ')[1].split(' ')[11] + ' ' + commandValue.split('when slept, ')[1].split(' ')[12] + ' ' + commandValue.split('when slept, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qO') {
        if (lang == 0) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[3] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[5] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[6] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[8] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[9] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[10] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[11] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[12] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[3] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[5] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[6] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[8] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[9] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[10] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[11] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[12] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23qP') {
        if (lang == 0) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[1] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[2] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[3] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[5] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[6] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[8] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[9] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[10] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[11] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[12] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[13];
        } else if (lang == 1) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[1] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[2] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[3] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[5] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[6] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[8] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[9] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[10] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[11] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[12] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[13];
        }
    } else if (commandCode == 'c23r') {
        if (lang == 0) {
            return 'go to the database the branch and then insert the following data:';
        } else if (lang == 1) {
            return 'go to the database the branch and then insert the following data:';
        }
    } else if (commandCode == 'c24') {
        if (lang == 0) {
            return commandValue.split('go to the database ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c25') {
        if (lang == 0) {
            return commandValue.split('the branch ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('the branch ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c26') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then insert the following data: ')[1].split(', ');
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then insert the following data: ')[1].split(', ');
        }
    } else if (commandCode == 'c27qA') {
        if (lang == 0) {
            return commandValue.split('when clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[13] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[14] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[15] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[17] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[18] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[19] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[20] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[21] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[13] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[14] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[15] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[17] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[18] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[19] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[20] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[21] + ' ' + commandValue.split('when clicked, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qB') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[13] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[14] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[15] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[17] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[18] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[19] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[20] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[21] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[13] + ' ' + commandValue.split('when the mouse pointer moved on it, ')[1].split(' ')[14] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[15] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[17] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[18] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[19] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[20] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[21] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qC') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[13] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[14] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[15] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[17] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[18] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[19] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[20] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[21] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer m8ved away from it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer m9ved away from it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[13] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[14] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[15] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[17] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[18] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[19] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[20] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[21] + ' ' + commandValue.split('when the mouse pointer moved away from it, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qD') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[13] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[14] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[15] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[17] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[18] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[19] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[20] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[21] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[13] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[14] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[15] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[17] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[18] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[19] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[20] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[21] + ' ' + commandValue.split('when the mouse pointer is being moved out of it, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qE') {
        if (lang == 0) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[13] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[14] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[15] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[17] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[18] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[19] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[20] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[21] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[1] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[2] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[3] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[5] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[6] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[8] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[9] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[10] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[11] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[12] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[13] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[14] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[15] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[17] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[18] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[19] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[20] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[21] + ' ' + commandValue.split('when the mouse pointer is being moved on it, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qF') {
        if (lang == 0) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[13] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[14] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[15] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[17] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[18] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[19] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[20] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[21] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[13] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[14] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[15] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[17] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[18] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[19] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[20] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[21] + ' ' + commandValue.split('when it is no longer clicked, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qG') {
        if (lang == 0) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[13] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[14] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[15] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[17] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[18] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[19] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[20] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[21] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when double clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[13] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[14] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[15] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[17] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[18] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[19] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[20] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[21] + ' ' + commandValue.split('when double clicked, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qH') {
        if (lang == 0) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[13] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[14] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[15] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[17] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[18] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[19] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[20] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[21] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when right clicked, ')[1].split(' ')[0] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[1] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[2] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[3] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[5] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[6] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[8] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[9] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[10] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[11] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[12] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[13] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[14] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[15] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[17] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[18] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[19] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[20] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[21] + ' ' + commandValue.split('when right clicked, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qI') {
        if (lang == 0) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[5] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[6] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[8] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[9] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[10] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[11] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[12] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[13] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[14] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[15] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[17] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[18] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[19] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[20] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[21] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[5] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[6] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[8] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[9] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[10] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[11] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[12] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[13] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[14] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[15] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[17] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[18] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[19] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[20] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[21] + ' ' + commandValue.split('when a key pressed while focusing it, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qJ') {
        if (lang == 0) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[5] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[6] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[8] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[9] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[10] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[11] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[12] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[13] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[14] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[15] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[17] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[18] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[19] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[20] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[21] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[3] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[5] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[6] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[8] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[9] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[10] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[11] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[12] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[13] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[14] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[15] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[17] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[18] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[19] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[20] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[21] + ' ' + commandValue.split('when a key is being pressed while focusing it, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qK') {
        if (lang == 0) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[1] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[2] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[3] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[5] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[6] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[8] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[9] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[10] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[11] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[12] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[13] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[14] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[15] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[17] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[18] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[19] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[20] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[21] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when its contents have been changed, ')[1].split(' ')[0] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[1] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[2] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[3] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[5] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[6] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[8] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[9] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[10] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[11] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[12] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[13] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[14] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[15] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[17] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[18] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[19] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[20] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[21] + ' ' + commandValue.split('when its contents have been changed, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qL') {
        if (lang == 0) {
            return commandValue.split('when focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when focused, ')[1].split(' ')[5] + ' ' + commandValue.split('when focused, ')[1].split(' ')[6] + ' ' + commandValue.split('when focused, ')[1].split(' ')[8] + ' ' + commandValue.split('when focused, ')[1].split(' ')[9] + ' ' + commandValue.split('when focused, ')[1].split(' ')[10] + ' ' + commandValue.split('when focused, ')[1].split(' ')[11] + ' ' + commandValue.split('when focused, ')[1].split(' ')[12] + ' ' + commandValue.split('when focused, ')[1].split(' ')[13] + ' ' + commandValue.split('when focused, ')[1].split(' ')[14] + ' ' + commandValue.split('when focused, ')[1].split(' ')[15] + ' ' + commandValue.split('when focused, ')[1].split(' ')[17] + ' ' + commandValue.split('when focused, ')[1].split(' ')[18] + ' ' + commandValue.split('when focused, ')[1].split(' ')[19] + ' ' + commandValue.split('when focused, ')[1].split(' ')[20] + ' ' + commandValue.split('when focused, ')[1].split(' ')[21] + ' ' + commandValue.split('when focused, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when focused, ')[1].split(' ')[5] + ' ' + commandValue.split('when focused, ')[1].split(' ')[6] + ' ' + commandValue.split('when focused, ')[1].split(' ')[8] + ' ' + commandValue.split('when focused, ')[1].split(' ')[9] + ' ' + commandValue.split('when focused, ')[1].split(' ')[10] + ' ' + commandValue.split('when focused, ')[1].split(' ')[11] + ' ' + commandValue.split('when focused, ')[1].split(' ')[12] + ' ' + commandValue.split('when focused, ')[1].split(' ')[13] + ' ' + commandValue.split('when focused, ')[1].split(' ')[14] + ' ' + commandValue.split('when focused, ')[1].split(' ')[15] + ' ' + commandValue.split('when focused, ')[1].split(' ')[17] + ' ' + commandValue.split('when focused, ')[1].split(' ')[18] + ' ' + commandValue.split('when focused, ')[1].split(' ')[19] + ' ' + commandValue.split('when focused, ')[1].split(' ')[20] + ' ' + commandValue.split('when focused, ')[1].split(' ')[21] + ' ' + commandValue.split('when focused, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qM') {
        if (lang == 0) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[5] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[6] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[8] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[9] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[10] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[11] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[12] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[13] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[14] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[15] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[17] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[18] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[19] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[20] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[21] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when it is being focused, ')[1].split(' ')[0] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[1] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[2] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[3] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[5] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[6] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[8] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[9] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[10] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[11] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[12] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[13] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[14] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[15] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[17] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[18] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[19] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[20] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[21] + ' ' + commandValue.split('when it is being focused, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qN') {
        if (lang == 0) {
            return commandValue.split('when slept, ')[1].split(' ')[0] + ' ' + commandValue.split('when slept, ')[1].split(' ')[1] + ' ' + commandValue.split('when slept, ')[1].split(' ')[2] + ' ' + commandValue.split('when slept, ')[1].split(' ')[3] + ' ' + commandValue.split('when slept, ')[1].split(' ')[5] + ' ' + commandValue.split('when slept, ')[1].split(' ')[6] + ' ' + commandValue.split('when slept, ')[1].split(' ')[8] + ' ' + commandValue.split('when slept, ')[1].split(' ')[9] + ' ' + commandValue.split('when slept, ')[1].split(' ')[10] + ' ' + commandValue.split('when slept, ')[1].split(' ')[11] + ' ' + commandValue.split('when slept, ')[1].split(' ')[12] + ' ' + commandValue.split('when slept, ')[1].split(' ')[13] + ' ' + commandValue.split('when slept, ')[1].split(' ')[14] + ' ' + commandValue.split('when slept, ')[1].split(' ')[15] + ' ' + commandValue.split('when slept, ')[1].split(' ')[17] + ' ' + commandValue.split('when slept, ')[1].split(' ')[18] + ' ' + commandValue.split('when slept, ')[1].split(' ')[19] + ' ' + commandValue.split('when slept, ')[1].split(' ')[20] + ' ' + commandValue.split('when slept, ')[1].split(' ')[21] + ' ' + commandValue.split('when slept, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when slept, ')[1].split(' ')[0] + ' ' + commandValue.split('when slept, ')[1].split(' ')[1] + ' ' + commandValue.split('when slept, ')[1].split(' ')[2] + ' ' + commandValue.split('when slept, ')[1].split(' ')[3] + ' ' + commandValue.split('when slept, ')[1].split(' ')[5] + ' ' + commandValue.split('when slept, ')[1].split(' ')[6] + ' ' + commandValue.split('when slept, ')[1].split(' ')[8] + ' ' + commandValue.split('when slept, ')[1].split(' ')[9] + ' ' + commandValue.split('when slept, ')[1].split(' ')[10] + ' ' + commandValue.split('when slept, ')[1].split(' ')[11] + ' ' + commandValue.split('when slept, ')[1].split(' ')[12] + ' ' + commandValue.split('when slept, ')[1].split(' ')[13] + ' ' + commandValue.split('when slept, ')[1].split(' ')[14] + ' ' + commandValue.split('when slept, ')[1].split(' ')[15] + ' ' + commandValue.split('when slept, ')[1].split(' ')[17] + ' ' + commandValue.split('when slept, ')[1].split(' ')[18] + ' ' + commandValue.split('when slept, ')[1].split(' ')[19] + ' ' + commandValue.split('when slept, ')[1].split(' ')[20] + ' ' + commandValue.split('when slept, ')[1].split(' ')[21] + ' ' + commandValue.split('when slept, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qO') {
        if (lang == 0) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[3] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[5] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[6] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[8] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[9] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[10] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[11] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[12] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[13] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[14] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[15] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[17] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[18] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[19] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[20] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[21] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[3] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[5] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[6] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[8] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[9] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[10] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[11] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[12] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[13] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[14] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[15] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[17] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[18] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[19] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[20] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[21] + ' ' + commandValue.split('when the data of this form has been sent, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27qP') {
        if (lang == 0) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[1] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[2] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[3] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[5] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[6] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[8] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[9] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[10] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[11] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[12] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[13] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[14] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[15] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[17] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[18] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[19] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[20] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[21] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[22];
        } else if (lang == 1) {
            return commandValue.split('when scrolled, ')[1].split(' ')[0] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[1] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[2] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[3] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[5] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[6] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[8] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[9] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[10] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[11] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[12] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[13] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[14] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[15] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[17] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[18] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[19] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[20] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[21] + ' ' + commandValue.split('when scrolled, ')[1].split(' ')[22];
        }
    } else if (commandCode == 'c27r') {
        if (lang == 0) {
            return 'go to the database the branch and then get the value of the slot which has the same class of';
        } else if (lang == 1) {
            return 'go to the database the branch and then get the value of the slot which has the same class of';
        }
    } else if (commandCode == 'c28') {
        if (lang == 0) {
            return commandValue.split('go to the database ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c29') {
        if (lang == 0) {
            return commandValue.split('the branch ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('the branch ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c30') {
        if (lang == 0) {
            return commandValue.split('get the value of the slot ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('get the value of the slot ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c31') {
        if (lang == 0) {
            return commandValue.split('in the slot ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('in the slot ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c32q') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the value ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the value ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c32r') {
        if (lang == 0) {
            return 'of';
        } else if (lang == 1) {
            return 'of';
        }
    } else if (commandCode == 'c33') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the value of ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the value of ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c34q') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c34r') {
        if (lang == 0) {
            return 'sentence';
        } else if (lang == 1) {
            return 'sentence';
        }
    } else if (commandCode == 'c35') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the sentence ')[1].split(' in the slot ' + para4 + '')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the sentence ')[1].split(' in the slot ' + para4 + '')[0];
        }
    } else if (commandCode == 'c36q') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c36r') {
        if (lang == 0) {
            return 'word';
        } else if (lang == 1) {
            return 'word';
        }
    } else if (commandCode == 'c37') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the word ')[1].split(' in the slot ' + para4 + '')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the word ')[1].split(' in the slot ' + para4 + '')[0];
        }
    } else if (commandCode == 'c38q') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c38r') {
        if (lang == 0) {
            return 'words';
        } else if (lang == 1) {
            return 'words';
        }
    } else if (commandCode == 'c39') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the words ')[1].split(' in the slot ' + para4 + '')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the words ')[1].split(' in the slot ' + para4 + '')[0];
        }
    } else if (commandCode == 'c40q') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the ')[1].split(' ')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c40r') {
        if (lang == 0) {
            return 'value';
        } else if (lang == 1) {
            return 'value';
        }
    } else if (commandCode == 'c41') {
        if (lang == 0) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the value ')[1].split(' in the slot ' + para4 + '')[0];
        } else if (lang == 1) {
            return commandValue.split('go to the database ' + para1 + ' the branch ' + para2 + ' and then get the value of the slot ' + para3 + ' which has the same class of the value ')[1].split(' in the slot ' + para4 + '')[0];
        }
    } else if (commandCode == 'c42') {
        if (lang == 0) {
            return commandValue.split('and then set it as the value of ')[1];
        } else if (lang == 1) {
            return commandValue.split('and then set it as the value of ')[1];
        }
    } else if (commandCode == 'c43') {
        if (lang == 0) {
            return para1.split('the value of ')[1].split(' ')[0];
        } else if (lang == 1) {
            return para1.split('the value of ')[1].split(' ')[0];
        }
    } else if (commandCode == 'c44') {
        if (lang == 0) {
            return para1.split('in the slot ')[1];
        } else if (lang == 1) {
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

    function mathOperation(expression) {
        return math.eval(expression);
    }

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

    function execute(elementName, command) {
        var commands = command.split(' &&& ');
        var commandID;
        for (commandID = 0; commandID < commands.length; commandID++) {
            if (commandsFnTranslations('c1A', commands[commandID]).length > 1) {
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
                        $('#' + elementName + '').click(function () {
                            $('#' + elementName + '').val(newVal);
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qA', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').mouseenter(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qB', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').mouseenter(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').mouseleave(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qC', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').mouseleave(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').mouseout(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qD', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').mouseout(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').mousemove(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qE', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').mousemove(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').mouseup(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qF', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').mouseup(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').dblclick(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qG', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').dblclick(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').contextmenu(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qH', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').contextmenu(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').keypress(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qI', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').keypress(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').keydown(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qJ', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').keydown(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').change(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qK', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').change(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').focus(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qL', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').focus(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').focusin(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qM', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').focusin(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').focusout(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qN', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').focusout(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').submit(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qO', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').submit(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
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
                        var newVal = $('#' + commandsFnTranslations(c11, commands[commandID]) + '').val();
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
                    $('#' + elementName + '').scroll(function () {
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
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        });
                    });
                } else if (commandsFnTranslations('c27qP', commands[commandID]) == commandsFnTranslations('c27r')) {
                    var dbname = commandsFnTranslations('c28', commands[commandID]);
                    var tablename = commandsFnTranslations('c29', commands[commandID]);
                    var calledSlot = commandsFnTranslations('c30', commands[commandID]);
                    var resourceSlot = commandsFnTranslations('c31', commands[commandID]);
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').scroll(function () {
                            if (commandsFnTranslations('c32q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c32r')) {
                                resourceData = $('#' + commandsFnTranslations('c33', commands[commandID], dbname, tablename, calledSlot) + '').val();
                            } else if (commandsFnTranslations('c34q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c34r')) {
                                resourceData = commandsFnTranslations('c35', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c36q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c36r')) {
                                resourceData = commandsFnTranslations('c37', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c38q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c38r')) {
                                resourceData = commandsFnTranslations('c39', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            } else if (commandsFnTranslations('c40q', commands[commandID], dbname, tablename, calledSlot) == commandsFnTranslations('c40r')) {
                                resourceData = commandsFnTranslations('c41', commands[commandID], dbname, tablename, calledSlot, resourceSlot);
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commandsFnTranslations('c42', commands[commandID]) + '').val(returnedValue);
                            });
                        });
                    })(commandID);
                }
            }
        }
    }
    $(function () {
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
                    $('head').append('<[titleTranslations[lang]]>' + settings[titleTranslations[lang]] + '</[titleTranslations[lang]]>');
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
                $.fn[textFnTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [textTranslations[lang]]: 'It seems that you have typed nothing',
                        [colorTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<p id="' + name + '"></p>';
                        $('contents').append(out);
                        $('#' + name + '').text(settings[textTranslations[lang]]);
                        if (settings[colorTranslations[lang]]) {
                            setFontColour(name, settings[colorTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[sizeTranslations[lang]]) {
                            $('#' + name + '').css('font-[sizeTranslations[lang]]', settings[sizeTranslations[lang]]);
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
                $.fn[databaseCenterTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [hostTranslations[lang]]: 'localhost',
                        [usernameTranslations[lang]]: 'root',
                        [passwordTranslations[lang]]: 'root'
                    }, options);
                    return this.each(function () {
                        sessionStorage.dbhost = settings[hostTranslations[lang]];
                        sessionStorage.dbusername = settings[usernameTranslations[lang]];
                        sessionStorage.dbpassword = settings[passwordTranslations[lang]];
                    });
                };
                $.fn[buttonTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [textTranslations[lang]]: 'It seems that you have typed nothing',
                        [fontColourTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [disabledTranslations[lang]]: null,
                        raised: null,
                        switchedOn: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-button id="' + name + '"></paper-button>';
                        $('contents').append(out);
                        $('#' + name + '').text(settings[textTranslations[lang]]);
                        if (settings[fontColourTranslations[lang]]) {
                            setFontColour(name, settings[fontColourTranslations[lang]]);
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
                        if (settings[switchedOnTranslations[lang]] == yesTranslations[lang]) {
                            $('#' + name + '').attr('toggles', '');
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[sizeTranslations[lang]]) {
                            $('#' + name + '').css('font-[sizeTranslations[lang]]', settings[sizeTranslations[lang]]);
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
                $.fn[iconTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [iconColorTranslations[lang]]: null,
                        [iconTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var icon = settings[iconTranslations[lang]];
                        var out = '<iron-icon id="' + name + '" icon="' + icon + '"></iron-icon>';
                        $('contents').append(out);
                        if (settings[iconColorTranslations[lang]]) {
                            if (settings[iconColorTranslations[lang]] == blackTranslations[lang]) {
                                $('#' + name + '').css('color', '#000000');
                            } else if (settings[iconColorTranslations[lang]] == redTranslations[lang]) {
                                $('#' + name + '').css('color', '#F44336');
                            } else if (settings[iconColorTranslations[lang]] == blueTranslations[lang]) {
                                $('#' + name + '').css('color', '#2196F3');
                            } else if (settings[iconColorTranslations[lang]] == cyanTranslations[lang]) {
                                $('#' + name + '').css('color', '#00BCD4');
                            } else if (settings[iconColorTranslations[lang]] == grayTranslations[lang]) {
                                $('#' + name + '').css('color', '#9E9E9E');
                            } else if (settings[iconColorTranslations[lang]] == greenTranslations[lang]) {
                                $('#' + name + '').css('color', '#4CAF50');
                            } else if (settings[iconColorTranslations[lang]] == whiteTranslations[lang]) {
                                $('#' + name + '').css('color', '#FFFFFF');
                            } else if (settings[iconColorTranslations[lang]] == orangeTranslations[lang]) {
                                $('#' + name + '').css('color', '#FF9800');
                            } else if (settings[iconColorTranslations[lang]] == yellowTranslations[lang]) {
                                $('#' + name + '').css('color', '#FFEB3B');
                            } else if (settings[iconColorTranslations[lang]] == brownTranslations[lang]) {
                                $('#' + name + '').css('color', '#795548');
                            } else if (settings[iconColorTranslations[lang]] == tealTranslations[lang]) {
                                $('#' + name + '').css('color', '#009688');
                            } else if (settings[iconColorTranslations[lang]] == pinkTranslations[lang]) {
                                $('#' + name + '').css('color', '#E91E63');
                            } else if (settings[iconColorTranslations[lang]] == lightGreenTranslations[lang]) {
                                $('#' + name + '').css('color', '#8BC34A');
                            } else {
                                $('#' + name + '').css('color', settings[iconColorTranslations[lang]]);
                            }
                        }
                        if (settings[sizeTranslations[lang]]) {
                            $('#' + name + '').css('font-[sizeTranslations[lang]]', settings[sizeTranslations[lang]]);
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
                $.fn[buttonWithAnIconTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [iconColorTranslations[lang]]: null,
                        [iconTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var icon = settings[iconTranslations[lang]];
                        var out = '<paper-icon-button id="' + name + '" icon="' + icon + '"></paper-icon-button>';
                        $('contents').append(out);
                        if (settings[iconColorTranslations[lang]]) {
                            if (settings[iconColorTranslations[lang]] == blackTranslations[lang]) {
                                $('#' + name + '').css('color', '#000000');
                            } else if (settings[iconColorTranslations[lang]] == redTranslations[lang]) {
                                $('#' + name + '').css('color', '#F44336');
                            } else if (settings[iconColorTranslations[lang]] == blueTranslations[lang]) {
                                $('#' + name + '').css('color', '#2196F3');
                            } else if (settings[iconColorTranslations[lang]] == cyanTranslations[lang]) {
                                $('#' + name + '').css('color', '#00BCD4');
                            } else if (settings[iconColorTranslations[lang]] == grayTranslations[lang]) {
                                $('#' + name + '').css('color', '#9E9E9E');
                            } else if (settings[iconColorTranslations[lang]] == greenTranslations[lang]) {
                                $('#' + name + '').css('color', '#4CAF50');
                            } else if (settings[iconColorTranslations[lang]] == whiteTranslations[lang]) {
                                $('#' + name + '').css('color', '#FFFFFF');
                            } else if (settings[iconColorTranslations[lang]] == orangeTranslations[lang]) {
                                $('#' + name + '').css('color', '#FF9800');
                            } else if (settings[iconColorTranslations[lang]] == yellowTranslations[lang]) {
                                $('#' + name + '').css('color', '#FFEB3B');
                            } else if (settings[iconColorTranslations[lang]] == brownTranslations[lang]) {
                                $('#' + name + '').css('color', '#795548');
                            } else if (settings[iconColorTranslations[lang]] == tealTranslations[lang]) {
                                $('#' + name + '').css('color', '#009688');
                            } else if (settings[iconColorTranslations[lang]] == pinkTranslations[lang]) {
                                $('#' + name + '').css('color', '#E91E63');
                            } else if (settings[iconColorTranslations[lang]] == lightGreenTranslations[lang]) {
                                $('#' + name + '').css('color', '#8BC34A');
                            } else {
                                $('#' + name + '').css('color', settings[iconColorTranslations[lang]]);
                            }
                        }
                        if (settings[sizeTranslations[lang]]) {
                            $('#' + name + '').css('font-[sizeTranslations[lang]]', settings[sizeTranslations[lang]]);
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
                $.fn[sectionTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [textTranslations[lang]]: 'It seems that you have typed nothing',
                        [fontColourTranslations[lang]]: null,
                        [FXTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-card id="' + name + '"><div id="الحاجات_اللى_جوة_السيكشن" class="card-content"></div></paper-card>';
                        $('contents').append(out);
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[imageSourceTranslations[lang]]) {
                            $('#' + name + '').attr('image', settings[imageSourceTranslations[lang]]);
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
                $.fn[tooltipTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [textTranslations[lang]]: 'It seems that you have typed nothing',
                        [fontColourTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [emitterTranslations[lang]]: null,
                        [directionTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-tooltip id="' + name + '" for="' + settings[emitterTranslations[lang]] + '">' + settings[textTranslations[lang]] + '</paper-tooltip>';
                        $('contents').append(out);
                        if (settings[fontColourTranslations[lang]]) {
                            setFontColour(name, settings[fontColourTranslations[lang]]);
                        }
                        if (settings[fontStyleTranslations[lang]]) {
                            $('#' + name + '').css('font-style', settings[fontStyleTranslations[lang]]);
                        }
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[sizeTranslations[lang]]) {
                            $('#' + name + '').css('font-[sizeTranslations[lang]]', settings[sizeTranslations[lang]]);
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
                        if (settings[directionTranslations[lang]] == 'fromRight') {
                            $('#' + name + '').attr('position', 'right');
                        } else if (settings[directionTranslations[lang]] == 'fromLeft') {
                            $('#' + name + '').attr('position', 'left');
                        } else if (settings[directionTranslations[lang]] == 'fromUp') {
                            $('#' + name + '').attr('position', 'top');
                        } else if (settings[directionTranslations[lang]] == 'fromDown') {
                            $('#' + name + '').attr('position', 'bottom');
                        } else {}
                        if (settings[transparencyTranslations[lang]]) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings[transparencyTranslations[lang]] + '%)');
                        }
                    });
                };
                $.fn[colorsPaletteTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-swatch-picker id="' + name + '" color="{{selectedColor}}"></paper-swatch-picker>';
                        $('contents').append(out);
                        if (settings[fontColourTranslations[lang]]) {
                            setFontColour(name, settings[fontColourTranslations[lang]]);
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
                $.fn[loadingSpinnerTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        loading: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-spinner id="' + name + '"></paper-spinner>';
                        $('contents').append(out);
                        if (settings[fontColourTranslations[lang]]) {
                            setFontColour(name, settings[fontColourTranslations[lang]]);
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
                $.fn[loadingBarTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        loading: null,
                        [animationTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-progress id="' + name + '"></paper-progress>';
                        $('contents').append(out);
                        if (settings[fontColourTranslations[lang]]) {
                            setFontColour(name, settings[fontColourTranslations[lang]]);
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
                $.fn[imageTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [titleTranslations[lang]]: null,
                        source: null,
                        imageWidth: null,
                        imageLength: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var source = settings.source;
                        var out = '<img id="' + name + '" src="' + source + '"></img>';
                        $('contents').append(out);
                        if (settings[backgroundTranslations[lang]]) {
                            setBG(name, settings[backgroundTranslations[lang]]);
                        }
                        if (settings.imageWidth) {
                            $('#' + name + '').attr('width', settings.imageWidth);
                        }
                        if (settings.imageLength) {
                            $('#' + name + '').attr('length', settings.imageLength);
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
                $.fn[notificationCountTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [textTranslations[lang]]: 'It seems that you have typed nothing',
                        [iconTranslations[lang]]: null,
                        target: null,
                        [fontColourTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-badge id="' + name + '" for="' + target + '"></paper-badge>';
                        $('contents').append(out);
                        if (settings[fontColourTranslations[lang]]) {
                            setFontColour(name, settings[fontColourTranslations[lang]]);
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
                            if (settings[thicknessTranslations[lang]] == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[sizeTranslations[lang]]) {
                            $('#' + name + '').css('font-[sizeTranslations[lang]]', settings[sizeTranslations[lang]]);
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
                $.fn[checkboxTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [textTranslations[lang]]: null,
                        description: null,
                        [thicknessTranslations[lang]]: null,
                        [disabledTranslations[lang]]: null,
                        checked: null,
                        [rippleTranslations[lang]]: null,
                        [fontColourTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-checkbox id="' + name + '">' + text + '</paper-checkbox>';
                        $('contents').append(out);
                        if (settings[fontColourTranslations[lang]]) {
                            setFontColour(name, settings[fontColourTranslations[lang]]);
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
                        if (settings.description) {
                            $('#' + name + '').append('<span class="subtitle">' + settings.description + '</span>');
                        }
                        if (settings[thicknessTranslations[lang]]) {
                            if (settings[thicknessTranslations[lang]] == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[sizeTranslations[lang]]) {
                            $('#' + name + '').css('font-[sizeTranslations[lang]]', settings[sizeTranslations[lang]]);
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
                $.fn[dialogBoxTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [titleTranslations[lang]]: null,
                        [bodyTranslations[lang]]: null,
                        acceptButton: null,
                        cancelButton: null,
                        [emitterTranslations[lang]]: null,
                        scrollable: null,
                        [fontColourTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
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
                        $('contents').append(out);
                        if (settings[fontColourTranslations[lang]]) {
                            setFontColour(name, settings[fontColourTranslations[lang]]);
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
                            if (settings[thicknessTranslations[lang]] == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[sizeTranslations[lang]]) {
                            $('#' + name + '').css('font-[sizeTranslations[lang]]', settings[sizeTranslations[lang]]);
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
                $.fn[dropdownTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        [titleTranslations[lang]]: null,
                        items: null,
                        [rippleTranslations[lang]]: null,
                        preselected: null,
                        [disabledTranslations[lang]]: null,
                        [fontColourTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
                        [backgroundTranslations[lang]]: null,
                        [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings[nameTranslations[lang]];
                        var out = '<paper-dropdown-menu id="' + name + '" label="' + settings[titleTranslations[lang]] + '">';
                        if (settings.items) {
                            var items = settings.items.split(' &&& ');
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
                        $('contents').append(out);
                        if (settings[fontColourTranslations[lang]]) {
                            setFontColour(name, settings[fontColourTranslations[lang]]);
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
                            if (settings[thicknessTranslations[lang]] == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[sizeTranslations[lang]]) {
                            $('#' + name + '').css('font-[sizeTranslations[lang]]', settings[sizeTranslations[lang]]);
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
                $.fn[FABTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        description: null,
                        [iconTranslations[lang]]: null,
                        [textTranslations[lang]]: null,
                        [rippleTranslations[lang]]: null,
                        mini: null,
                        [disabledTranslations[lang]]: null,
                        [rippleTranslations[lang]]: null,
                        [fontColourTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
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
                        if (settings.description) {
                            out += '[titleTranslations[lang]]="' + settings.description + '" ';
                        }
                        out += 'id="' + name + '"></paper-fab>';
                        $('contents').append(out);
                        if (settings[fontColourTranslations[lang]]) {
                            setFontColour(name, settings[fontColourTranslations[lang]]);
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
                            if (settings[thicknessTranslations[lang]] == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[sizeTranslations[lang]]) {
                            $('#' + name + '').css('font-[sizeTranslations[lang]]', settings[sizeTranslations[lang]]);
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
                        [fontColourTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
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
                        if (settings.description) {
                            out += '[titleTranslations[lang]]="' + settings.description + '" ';
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
                            out += '<paper-icon-button suffix onclick="clearInput()" icon="clear" alt="clear" [titleTranslations[lang]]="clear"></paper-icon-button>';
                        }
                        if (settings[dynamicSizeTranslations[lang]] == yesTranslations[lang]) {
                            out += '</paper-textarea>';
                        } else {
                            out += '</paper-input>'
                        }
                        $('contents').append(out);
                        if (settings[fontColourTranslations[lang]]) {
                            setFontColour(name, settings[fontColourTranslations[lang]]);
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
                            if (settings[thicknessTranslations[lang]] == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[sizeTranslations[lang]]) {
                            $('#' + name + '').css('font-[sizeTranslations[lang]]', settings[sizeTranslations[lang]]);
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
                $.fn[sliderTranslations[lang]] = function (options) {
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
                        [fontColourTranslations[lang]]: null,
                        [sizeTranslations[lang]]: null,
                        [nameTranslations[lang]]: null,
                        [widthTranslations[lang]]: null,
                        [lengthTranslations[lang]]: null,
                        [thicknessTranslations[lang]]: null,
                        [fontStyleTranslations[lang]]: null,
                        [animationTranslations[lang]]: null,
                        [transparencyTranslations[lang]]: null,
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
                        $('contents').append(out);
                        if (settings[fontColourTranslations[lang]]) {
                            setFontColour(name, settings[fontColourTranslations[lang]]);
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
                            if (settings[thicknessTranslations[lang]] == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings[thicknessTranslations[lang]]);
                            }
                        }
                        if (settings[sizeTranslations[lang]]) {
                            $('#' + name + '').css('font-[sizeTranslations[lang]]', settings[sizeTranslations[lang]]);
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
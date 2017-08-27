//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------Commands Translations------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
 window.commandsFnTranslations = function (commandCode, eventRaw, commandValue, para1Raw, para2Raw, para3Raw, para4Raw, para5Raw) {
	if (document.lang == 0) {
		this.E1 = 'When it has been clicked, ';
		this.E2 = 'When the mouse pointer has been moved over it, ';
		this.E3 = 'When the mouse pointer has been moved away from it, ';
		this.E4 = 'When the mouse pointer is being moved out of it, ';
		this.E5 = 'When the mouse pointer is being moved over it, ';
		this.E6 = 'When it is no longer clicked, ';
		this.E7 = 'When it has been double clicked, ';
		this.E8 = 'When it has been right clicked, ';
		this.E9 = 'When a key has been pressed while focusing it, ';
		this.E10 = 'When a key is being pressed while focusing it, ';
		this.E11 = 'When its contents have been modified, ';
		this.E12 = 'When it has been focused, ';
		this.E13 = 'When it is being focused, ';
		this.E14 = 'When it is no longer focused, ';
		this.E15 = 'When the data of this form has been sent, ';
		this.E16 = 'When it has been scrolled, ';
		this.E17 = 'When the user said: ';
	} else if (document.lang == 1) {
		this.E1 = 'When it has been clicked, ';
		this.E2 = 'When the mouse pointer has been moved over it, ';
		this.E3 = 'When the mouse pointer has been moved away from it, ';
		this.E4 = 'When the mouse pointer is being moved out of it, ';
		this.E5 = 'When the mouse pointer is being moved over it, ';
		this.E6 = 'When it is no longer clicked, ';
		this.E7 = 'When it has been double clicked, ';
		this.E8 = 'When it has been right clicked, ';
		this.E9 = 'When a key has been pressed while focusing it, ';
		this.E10 = 'When a key is being pressed while focusing it, ';
		this.E11 = 'When its contents have been modified, ';
		this.E12 = 'When it has been focused, ';
		this.E13 = 'When it is being focused, ';
		this.E14 = 'When it is no longer focused, ';
		this.E15 = 'When the data of this form has been sent, ';
		this.E16 = 'When it has been scrolled, ';
		this.E17 = 'When the user said: ';
	} else if (document.lang == 2) {
		this.E1 = 'Quand il a été cliqué, ';
		this.E2 = "Lorsque le pointeur de souris a été déplacé au dessus, ";
		this.E3 = "Lorsque le pointeur de la souris s'a été éloigné de lui, ";
		this.E4 = "Lorsque le pointeur de la souris se est en train d'être déplace hors de lui, ";
		this.E5 = 'Lorsque le pointeur de la souris se déplace au dessus, ';
		this.E6 = "Quand il n'est plus fait cliqué, ";
		this.E7 = 'Quand il a été double-cliqué, ';
		this.E8 = 'Quand il a été droit-cliqué, ';
		this.E9 = "Lorsqu'une touche a été pressée tout en la focalisant, ";
		this.E10 = "Lorsqu'une touche est en train d'être pressée tout en la focalisant, ";
		this.E11 = 'Lorsque son contenu a été modifié, ';
		this.E12 = "Lorsqu'on a été focalisé, ";
		this.E13 = "Quand il est en train d'être focalisé, ";
		this.E14 = 'Quand il a dormi, ';
		this.E15 = 'Lorsque les données de ce formulaire ont été envoyées, ';
		this.E16 = "Lorsqu'il s'a été déroulé, ";
		this.E17 = "Si l'utilisateur a dit: ";
	} else if (document.lang == 3) {
		this.E1 = 'إذا نقر عليه, ';
		this.E2 = 'إذا مر به مؤشر الفأرة, ';
		this.E3 = 'إذا خرج مؤشر الفأرة منه, ';
		this.E4 = 'إذا كان مؤشر الفأرة يمر خارجه, ';
		this.E5 = 'إذا كان مؤشر الفأرة يمر به, ';
		this.E6 = 'إذا تم الإنتهاء من النقر عليه, ';
		this.E7 = 'إذا نقر عليه نقرتين مزدوجتين, ';
		this.E8 = 'إذا نقر عليه بالزر الأيمن,';
		this.E9 = 'إذا ضغط على زر اثناء نشاطه, ';
		this.E10 = 'إذا كان هناك زر يتم الضغط عليه اثناء نشاطه, ';
		this.E11 = 'إذا تغيرت محتوياته, ';
		this.E12 = 'إن أصبح نشطا, ';
		this.E13 = 'إذا كان نشطا, ';
		this.E14 = 'إن أصبح خاملا, ';
		this.E15 = 'إذا ارسلت بيانات هذه الإستمارة, ';
		this.E16 = 'إن تم تمريره, ';
		this.E17 = 'إذا قال المستخدم: ';
	} else if (document.lang == 4) {
		this.E1 = 'لما يضغط عليه, ';
		this.E2 = 'لما الماوس يعدى من فوقيه, ';
		this.E3 = 'لما الماوس يطلع منه, ';
		this.E4 = 'لما الماوس يكون بيمشى براه, ';
		this.E5 = 'لما الماوس يكون بيمشى فوقيه, ';
		this.E6 = 'لما يخلص الدوس عليه, ';
		this.E7 = 'لما يضغط عليه دبل كليك, ';
		this.E8 = 'لما يضغط عليك كليك لمين, ';
		this.E9 = 'لو زرار اضغط و هوة نشط, ';
		this.E10 = 'لما زرار يكون بيضغط و هوة نشط, ';
		this.E11 = 'لما محتوياته تتغير, ';
		this.E12 = 'لما يبقى نشط, ';
		this.E13 = 'لما يكون نشط, ';
		this.E14 = 'لما ينام, ';
		this.E15 = 'لما الداتا بتاعت الفورم دة تتبعت, ';
		this.E16 = 'لما يتمرر, ';
		this.E17 = 'لو المستخدم قال: ';
	} else if (document.lang == 5) {
		this.E1 = 'それがクリックされた場合には、 ';
		this.E2 = 'マウスポインタがその上に移動されると、 ';
		this.E3 = 'マウスポインタがそれを離れると、 ';
		this.E4 = 'When the mouse pointer is being moved out of it, ';
		this.E5 = 'When the mouse pointer is being moved over it, ';
		this.E6 = 'それがもはやクリックされないと、 ';
		this.E7 = 'それがダブルクリックされたときに、 ';
		this.E8 = 'それが右クリックされたときに、 ';
		this.E9 = 'When a key pressed while focusing it, ';
		this.E10 = 'When a key is being pressed while focusing it, ';
		this.E11 = 'その内容が変更されたとき、';
		this.E12 = 'それがフォーカスされたときに、 ';
		this.E13 = 'When it is being focused, ';
		this.E14 = 'When it is no longer focused, ';
		this.E15 = 'この形式のデータが送られたときに、 ';
		this.E16 = 'それがスクロールされると、';
		this.E17 = 'ユーザーが言った場合：';
	}
	if (eventRaw == 'E17') {
		var event = this[eventRaw] + para1Raw + ', ';
		var para1 = para2Raw;
		var para2 = para3Raw;
		var para3 = para4Raw;
		var para4 = para5Raw;
	} else {
		var event = this[eventRaw];
		var para1 = para1Raw;
		var para2 = para2Raw;
		var para3 = para3Raw;
		var para4 = para4Raw;
	}
	if (commandCode == 'c1') {
		if (document.lang == 0) {
			return commandValue.split(this[eventRaw]);
		} else if (document.lang == 1) {
			return commandValue.split(this[eventRaw]);
		} else if (document.lang == 2) {
			return commandValue.split(this[eventRaw]);
		} else if (document.lang == 3) {
			return commandValue.split(this[eventRaw]);
		} else if (document.lang == 4) {
			return commandValue.split(this[eventRaw]);
		} else if (document.lang == 5) {
			return commandValue.split(this[eventRaw]);
		}
	} else if (commandCode == 'c2q') {
		if (document.lang == 0) {
			return commandValue.split(event)[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split(event)[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split(event)[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split(event)[1].split(' ')[0].split('ه')[0];
		} else if (document.lang == 4) {
			return commandValue.split(event)[1].split(' ')[0].split('ه')[0];
		} else if (document.lang == 5) {
			return commandValue.split(event)[1].split(' ')[0];
		}
	} else if (commandCode == 'c2ruA') {
		if (document.lang == 0) {
			return 'remove';
		} else if (document.lang == 1) {
			return 'remove';
		} else if (document.lang == 2) {
			return 'supprimer';
		} else if (document.lang == 3) {
			return 'احذف';
		} else if (document.lang == 4) {
			return 'امسح';
		} else if (document.lang == 5) {
			return 'を削除';
		}
	} else if (commandCode == 'c2ruB') {
		if (document.lang == 0) {
			return 'play';
		} else if (document.lang == 1) {
			return 'play';
		} else if (document.lang == 2) {
			return 'lecture';
		} else if (document.lang == 3) {
			return 'شغل';
		} else if (document.lang == 4) {
			return 'شغل';
		} else if (document.lang == 5) {
			return 'lecture';
		}
	} else if (commandCode == 'c2ruC') {
		if (document.lang == 0) {
			return 'pause';
		} else if (document.lang == 1) {
			return 'pause';
		} else if (document.lang == 2) {
			return 'pause';
		} else if (document.lang == 3) {
			return 'أوقف';
		} else if (document.lang == 4) {
			return 'وقف';
		} else if (document.lang == 5) {
			return 'pause';
		}
	} else if (commandCode == 'c3q') {
		if (document.lang == 0) {
			return commandValue.split('remove ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('remove ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('supprimer ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('احذف')[1].split('')[0];
		} else if (document.lang == 4) {
			return commandValue.split('امسح')[1].split('')[0];
		} else if (document.lang == 5) {
			return commandValue.split('supprimer ')[1];
		}
	} else if (commandCode == 'c3r') {
		if (document.lang == 0) {
			return 'it';
		} else if (document.lang == 1) {
			return 'it';
		} else if (document.lang == 2) {
			return 'il';
		} else if (document.lang == 3) {
			return 'ه';
		} else if (document.lang == 4) {
			return 'ه';
		} else if (document.lang == 5) {
			return 'それ';
		}
	} else if (commandCode == 'c4') {
		if (document.lang == 0) {
			return commandValue.split('remove ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('remove ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('supprimer ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('احذف ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('امسح ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('を削除')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c5q') {
		if (document.lang == 0) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1];
		} else if (document.lang == 1) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1];
		} else if (document.lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1];
		} else if (document.lang == 3) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1];
		} else if (document.lang == 4) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1];
		} else if (document.lang == 5) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1];
		}
	} else if (commandCode == 'c5r') {
		if (document.lang == 0) {
			return 'go to';
		} else if (document.lang == 1) {
			return 'go to';
		} else if (document.lang == 2) {
			return 'aller à';
		} else if (document.lang == 3) {
			return 'اذهب إلى';
		} else if (document.lang == 4) {
			return 'روح إلى';
		} else if (document.lang == 5) {
			return 'に行く';
		}
	} else if (commandCode == 'c7') {
		if (document.lang == 0) {
			return commandValue.split('play ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('play ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('lecture ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('شغل ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('شغل ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('を再生する')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c8') {
		if (document.lang == 0) {
			return commandValue.split('pause ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('pause ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('pause ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('أوقف ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('وقف ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('一時停止')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c9q') {
		if (document.lang == 0) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3];
		} else if (document.lang == 1) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3];
		} else if (document.lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3];
		} else if (document.lang == 3) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2];
		} else if (document.lang == 4) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2];
		} else if (document.lang == 5) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3];
		}
	} else if (commandCode == 'c9r') {
		if (document.lang == 0) {
			return 'set its value to';
		} else if (document.lang == 1) {
			return 'set its value to';
		} else if (document.lang == 2) {
			return 'définir sa valeur à';
		} else if (document.lang == 3) {
			return 'غير قيمته إلى';
		} else if (document.lang == 4) {
			return 'غير قيمته إلى';
		} else if (document.lang == 5) {
			return 'にその値を設定';
		}
	} else if (commandCode == 'c10q') {
		if (document.lang == 0) {
			return commandValue.split('set its value to ')[1].split(' ')[0] + ' ' + commandValue.split('set its value to ')[1].split(' ')[1] + ' ' + commandValue.split('set its value to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set its value to ')[1].split(' ')[0] + ' ' + commandValue.split('set its value to ')[1].split(' ')[1] + ' ' + commandValue.split('set its value to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('غير قيمته إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('غير قيمته إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir sa valeur à ')[1].split(' ')[0] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[1] + ' ' + commandValue.split('définir sa valeur à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c10rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c10rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'の価値';
		}
	} else if (commandCode == 'c11') {
		if (document.lang == 0) {
			return commandValue.split('set its value to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set its value to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('غير قيمته إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('غير قيمته إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir sa valeur à la valeur de ')[1];
		}
	} else if (commandCode == 'c12') {
		if (document.lang == 0) {
			return commandValue.split('set its value to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set its value to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir sa valeur à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('غير قيمته إلى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('غير قيمته إلى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('にその値を設定')[0].split('、 ')[1];
		}
	} else if (commandCode == 'c13q') {
		if (document.lang == 0) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[5];
		} else if (document.lang == 1) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[5];
		} else if (document.lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[5];
		} else if (document.lang == 3) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[3];
		} else if (document.lang == 4) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[3];
		} else if (document.lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[5];
		}
	} else if (commandCode == 'c13r') {
		if (document.lang == 0) {
			return 'set the value of to';
		} else if (document.lang == 1) {
			return 'set the value of to';
		} else if (document.lang == 2) {
			return 'définir la valeur de à';
		} else if (document.lang == 3) {
			return 'غير قيمة إلى';
		} else if (document.lang == 4) {
			return 'غير قيمة إلى';
		} else if (document.lang == 5) {
			return 'définir la valeur de à';
		}
	} else if (commandCode == 'c14') {
		if (document.lang == 0) {
			return commandValue.split('set the value of ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('set the value of ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('غير قيمة ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('غير قيمة ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c15') {
		if (document.lang == 0) {
			return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + para1 + ' à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + para1 + ' à la valeur de ')[1];
		}
	} else if (commandCode == 'c16q') {
		if (document.lang == 0) {
			return commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the value of ' + para1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la valeur de ' + para1 + ' à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c16rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'la valeur de';
		}
	} else if (commandCode == 'c16rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'the result of';
		}
	} else if (commandCode == 'c17') {
		if (document.lang == 0) {
			return commandValue.split('set the value of ' + para1 + ' to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the value of ' + para1 + ' to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + para1 + ' à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + para1 + ' à ')[1];
		}
	} else if (commandCode == 'c18q') {
		if (document.lang == 0) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6];
		} else if (document.lang == 1) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6];
		} else if (document.lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[7];
		} else if (document.lang == 3) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[7];
		} else if (document.lang == 4) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[7];
		} else if (document.lang == 5) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[7];
		}
	} else if (commandCode == 'c18r') {
		if (document.lang == 0) {
			return 'set the time position of to';
		} else if (document.lang == 1) {
			return 'set the time position of to';
		} else if (document.lang == 2) {
			return 'définir la position de temps de à';
		} else if (document.lang == 3) {
			return 'définir la position de temps de à';
		} else if (document.lang == 4) {
			return 'définir la position de temps de à';
		} else if (document.lang == 5) {
			return 'définir la position de temps de à';
		}
	} else if (commandCode == 'c19') {
		if (document.lang == 0) {
			return commandValue.split('set the time position of ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('set the time position of ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('définir la position de temps de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c20') {
		if (document.lang == 0) {
			return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the value of ' + para1 + ' to the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la valeur de ' + para1 + ' à la valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('غير قيمة ' + para1 + ' إلى قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la valeur de ' + para1 + ' à la valeur de ')[1];
		}
	} else if (commandCode == 'c21q') {
		if (document.lang == 0) {
			return commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 1) {
			return commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[0] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[1] + ' ' + commandValue.split('set the time position of ' + para1 + ' to ')[1].split(' ')[2];
		} else if (document.lang == 2) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[2];
		} else if (document.lang == 3) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[2];
		} else if (document.lang == 4) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[2];
		} else if (document.lang == 5) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[0] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[1] + ' ' + commandValue.split('définir la position de temps de ' + para1 + ' à ')[1].split(' ')[2];
		}
	} else if (commandCode == 'c21rA') {
		if (document.lang == 0) {
			return 'the value of';
		} else if (document.lang == 1) {
			return 'the value of';
		} else if (document.lang == 2) {
			return 'la valeur de';
		} else if (document.lang == 3) {
			return 'قيمة';
		} else if (document.lang == 4) {
			return 'قيمة';
		} else if (document.lang == 5) {
			return 'la valeur de';
		}
	} else if (commandCode == 'c21rB') {
		if (document.lang == 0) {
			return 'the result of';
		} else if (document.lang == 1) {
			return 'the result of';
		} else if (document.lang == 2) {
			return "le résultat de";
		} else if (document.lang == 3) {
			return 'ناتج';
		} else if (document.lang == 4) {
			return 'ناتج';
		} else if (document.lang == 5) {
			return 'the result of';
		}
	} else if (commandCode == 'c22') {
		if (document.lang == 0) {
			return commandValue.split('set the time position of ' + para1 + ' to ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('set the time position of ' + para1 + ' to ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définir la position de temps de ' + para1 + ' à ')[1];
		}
	} else if (commandCode == 'c23q') {
		if (document.lang == 0) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[7] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14];
		} else if (document.lang == 1) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[7] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14];
		} else if (document.lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14] + ' ' + commandValue.split(event)[1].split(' ')[15] + ' ' + commandValue.split(event)[1].split(' ')[16];
		} else if (document.lang == 3) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12];
		} else if (document.lang == 4) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[7] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11];
		} else if (document.lang == 5) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13];
		}
	} else if (commandCode == 'c23r') {
		if (document.lang == 0) {
			return 'go to the database the branch and then insert the following data:';
		} else if (document.lang == 1) {
			return 'go to the database the branch and then insert the following data:';
		} else if (document.lang == 2) {
			return 'aller à la base de données la branche et ensuite insérer les données suivantes:';
		} else if (document.lang == 3) {
			return 'اذهب إلى قاعدة البيانات الفرع ثم قم بإدخال البيانات التالية:';
		} else if (document.lang == 4) {
			return 'روح لقاعدة البيانات الفرع و بعد كدة دخل البيانات دى:';
		} else if (document.lang == 5) {
			return 'aller à la base de données la branche et ensuite insérer les données suivantes:';
		}
	} else if (commandCode == 'c24') {
		if (document.lang == 0) {
			return commandValue.split('go to the ' + para1 + ' database ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('go to the ' + para1 + ' database ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ' + para1 + ' ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ' + para1 + ' ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ' + para1 + ' ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ' + para1 + ' ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c25') {
		if (document.lang == 0) {
			return commandValue.split('the branch ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('the branch ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('la branche ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('الفرع ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('الفرع ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('la branche ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c26') {
		if (document.lang == 0) {
			return commandValue.split('go to the ' + para1 + ' database ' + para2 + ' the branch ' + para3 + ' and then insert the following data: ')[1].split(', ');
		} else if (document.lang == 1) {
			return commandValue.split('go to the ' + para1 + ' database ' + para2 + ' the branch ' + para3 + ' and then insert the following data: ')[1].split(', ');
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ' + para1 + ' ' + para2 + ' la branche ' + para3 + ' et ensuite insérer les données suivantes: ')[1].split(', ');
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ' + para1 + ' ' + para2 + ' الفرع ' + para3 + ' ثم قم بإدخال البيانات التالية: ')[1].split(', ');
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ' + para1 + ' ' + para2 + ' الفرع ' + para3 + ' و بعد كدة دخل البيانات دى: ')[1].split(', ');
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ' + para1 + ' ' + para2 + ' la branche ' + para3 + ' et ensuite insérer les données suivantes: ')[1].split(', ');
		}
	} else if (commandCode == 'c27q') {
		if (document.lang == 0) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[7] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14] + ' ' + commandValue.split(event)[1].split(' ')[15] + ' ' + commandValue.split(event)[1].split(' ')[16];
		} else if (document.lang == 1) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[7] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14] + ' ' + commandValue.split(event)[1].split(' ')[15] + ' ' + commandValue.split(event)[1].split(' ')[16];
		} else if (document.lang == 2) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[4] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14] + ' ' + commandValue.split(event)[1].split(' ')[15] + ' ' + commandValue.split(event)[1].split(' ')[16] + ' ' + commandValue.split(event)[1].split(' ')[16];
		} else if (document.lang == 3) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13];
		} else if (document.lang == 4) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[7] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12];
		} else if (document.lang == 5) {
			return commandValue.split(event)[1].split(' ')[0] + ' ' + commandValue.split(event)[1].split(' ')[1] + ' ' + commandValue.split(event)[1].split(' ')[2] + ' ' + commandValue.split(event)[1].split(' ')[3] + ' ' + commandValue.split(event)[1].split(' ')[5] + ' ' + commandValue.split(event)[1].split(' ')[6] + ' ' + commandValue.split(event)[1].split(' ')[8] + ' ' + commandValue.split(event)[1].split(' ')[9] + ' ' + commandValue.split(event)[1].split(' ')[10] + ' ' + commandValue.split(event)[1].split(' ')[11] + ' ' + commandValue.split(event)[1].split(' ')[12] + ' ' + commandValue.split(event)[1].split(' ')[13] + ' ' + commandValue.split(event)[1].split(' ')[14] + ' ' + commandValue.split(event)[1].split(' ')[15];
		}
	} else if (commandCode == 'c27r') {
		if (document.lang == 0) {
			return 'go to the database the branch and then get the value of the slot';
		} else if (document.lang == 1) {
			return 'go to the database the branch and then get the value of the slot';
		} else if (document.lang == 2) {
			return 'aller à la base de données la branche et ensuite obtenir la valeur de la fente';
		} else if (document.lang == 3) {
			return 'اذهب إلى قاعدة البيانات الفرع ثم قم بالحصول على قيمة الشريحة';
		} else if (document.lang == 4) {
			return 'روح لقاعدة البيانات الفرع و بعد كدة هات قيمة الشريحة';
		} else if (document.lang == 5) {
			return 'aller à la base de données la branche et ensuite obtenir la valeur de la fente';
		}
	} else if (commandCode == 'c28') {
		if (document.lang == 0) {
			return commandValue.split('go to the ' + para1 + ' database ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('go to the ' + para1 + ' database ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ' + para1 + ' ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ' + para1 + ' ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ' + para1 + ' ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ' + para1 + ' ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c29') {
		if (document.lang == 0) {
			return commandValue.split('the branch ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('the branch ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('la branche ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('الفرع ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('الفرع ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('la branche ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c30') {
		if (document.lang == 0) {
			return commandValue.split('get the value of the slot ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('get the value of the slot ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('قم بالحصول على قيمة الشريحة ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('هات قيمة الشريحة ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c31') {
		if (document.lang == 0) {
			return commandValue.split('and set it as the value of ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('and set it as the value of ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('définissez-le comme valeur de ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('و اجعلها قيمة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('و خليها قيمة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('définissez-le comme valeur de ')[1];
		}
	} else if (commandCode == 'c32') {
		if (document.lang == 0) {
			return commandValue.split('the value of ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('the value of ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('la valeur de ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('قيمة ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('قيمة ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('la valeur de ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c33') {
		if (document.lang == 0) {
			return commandValue.split('in the slot ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('in the slot ')[1];
		} else if (document.lang == 2) {
			return commandValue.split('in the slot ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('فى الشريحة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('فى الشريحة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('in the slot ')[1];
		}
	} else if (commandCode == 'c34') {
		if (document.lang == 0) {
			return commandValue.split(' after a period of ');
		} else if (document.lang == 1) {
			return commandValue.split(' after a period of ');
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ');
		} else if (document.lang == 3) {
			return commandValue.split(' بعد مدة ');
		} else if (document.lang == 4) {
			return commandValue.split(' بعد مدة ');
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ');
		}
	} else if (commandCode == 'c35') {
		if (document.lang == 0) {
			return commandValue.split(' after a period of ')[0];
		} else if (document.lang == 1) {
			return commandValue.split(' after a period of ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		} else if (document.lang == 3) {
			return commandValue.split(' بعد مدة ')[0];
		} else if (document.lang == 4) {
			return commandValue.split(' بعد مدة ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		}
	} else if (commandCode == 'c36') {
		if (document.lang == 0) {
			if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' after a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' after a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' after a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 1) {
			if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' after a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' after a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' after a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 2) {
			if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' after a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' after a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' after a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 3) {
			if (commandValue.split(' بعد مدة ')[1] == 'ميلى ثانية') {
				return 1
			} else if (commandValue.split(' بعد مدة ')[1] == 'ثانية') {
				return 1000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'دقيقة') {
				return 60000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'ساعة') {
				return 3600000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'يوم') {
				return 86400000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]);
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ثوانى') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'دقائق') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ساعات') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ايام') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 4) {
			if (commandValue.split(' بعد مدة ')[1] == 'ميلى ثانية') {
				return 1
			} else if (commandValue.split(' بعد مدة ')[1] == 'ثانية') {
				return 1000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'دقيقة') {
				return 60000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'ساعة') {
				return 3600000;
			} else if (commandValue.split(' بعد مدة ')[1] == 'يوم') {
				return 86400000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]);
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ثوانى') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'دقائق') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ساعات') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' بعد مدة ')[1].split(' ')[1] == 'ايام') {
				return parseInt(commandValue.split(' بعد مدة ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 5) {
			if (commandValue.split(' after a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' after a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' after a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' after a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' after a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' after a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' after a period of ')[1].split(' ')[0]) * 86400000;
			}
		}
	} else if (commandCode == 'c37') {
		if (document.lang == 0) {
			return commandValue.split(' every a period of ');
		} else if (document.lang == 1) {
			return commandValue.split(' every a period of ');
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ');
		} else if (document.lang == 3) {
			return commandValue.split(' كل مدة ');
		} else if (document.lang == 4) {
			return commandValue.split(' كل مدة ');
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ');
		}
	} else if (commandCode == 'c38') {
		if (document.lang == 0) {
			return commandValue.split(' every a period of ')[0];
		} else if (document.lang == 1) {
			return commandValue.split(' every a period of ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		} else if (document.lang == 3) {
			return commandValue.split(' كل مدة ')[0];
		} else if (document.lang == 4) {
			return commandValue.split(' كل مدة ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		}
	} else if (commandCode == 'c39') {
		if (document.lang == 0) {
			if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' every a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' every a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' every a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 1) {
			if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' every a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' every a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' every a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 2) {
			if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' every a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' every a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' every a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 3) {
			if (commandValue.split(' كل مدة ')[1] == 'ميلى ثانية') {
				return 1
			} else if (commandValue.split(' كل مدة ')[1] == 'ثانية') {
				return 1000;
			} else if (commandValue.split(' كل مدة ')[1] == 'دقيقة') {
				return 60000;
			} else if (commandValue.split(' كل مدة ')[1] == 'ساعة') {
				return 3600000;
			} else if (commandValue.split(' كل مدة ')[1] == 'يوم') {
				return 86400000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]);
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ثوانى') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'دقائق') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ساعات') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ايام') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 4) {
			if (commandValue.split(' كل مدة ')[1] == 'ميلى ثانية') {
				return 1
			} else if (commandValue.split(' كل مدة ')[1] == 'ثانية') {
				return 1000;
			} else if (commandValue.split(' كل مدة ')[1] == 'دقيقة') {
				return 60000;
			} else if (commandValue.split(' كل مدة ')[1] == 'ساعة') {
				return 3600000;
			} else if (commandValue.split(' كل مدة ')[1] == 'يوم') {
				return 86400000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ميلى ثانية') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]);
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ثوانى') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'دقائق') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ساعات') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' كل مدة ')[1].split(' ')[1] == 'ايام') {
				return parseInt(commandValue.split(' كل مدة ')[1].split(' ')[0]) * 86400000;
			}
		} else if (document.lang == 5) {
			if (commandValue.split(' every a period of ')[1] == 'a millisecond') {
				return 1
			} else if (commandValue.split(' every a period of ')[1] == 'a second') {
				return 1000;
			} else if (commandValue.split(' every a period of ')[1] == 'a minuit') {
				return 60000;
			} else if (commandValue.split(' every a period of ')[1] == 'an hour') {
				return 3600000;
			} else if (commandValue.split(' every a period of ')[1] == 'a day') {
				return 86400000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'milliseconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]);
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'seconds') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 1000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'minuits') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 60000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'hours') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 3600000;
			} else if (commandValue.split(' every a period of ')[1].split(' ')[1] == 'days') {
				return parseInt(commandValue.split(' every a period of ')[1].split(' ')[0]) * 86400000;
			}
		}
	} else if (commandCode == 'c40') {
		if (document.lang == 0) {
			return commandValue.split(this.E17)[1].split(', ')[0];
		} else if (document.lang == 1) {
			return commandValue.split(this.E17)[1].split(', ')[0];
		} else if (document.lang == 2) {
			return commandValue.split(this.E17)[1].split(', ')[0];
		} else if (document.lang == 3) {
			return commandValue.split(this.E17)[1].split(', ')[0];
		} else if (document.lang == 4) {
			return commandValue.split(this.E17)[1].split(', ')[0];
		} else if (document.lang == 5) {
			return commandValue.split(this.E17)[1].split(', ')[0];
		}
	} else if (commandCode == 'c41') {
		if (document.lang == 0) {
			return window.evaluateExpression(commandValue.split('the result of ')[1]);
		} else if (document.lang == 1) {
			return window.evaluateExpression(commandValue.split('the result of ')[1]);
		} else if (document.lang == 2) {
			return window.evaluateExpression(commandValue.split("le résultat de ")[1]);
		} else if (document.lang == 3) {
			return window.evaluateExpression(commandValue.split('ناتج ')[1]);
		} else if (document.lang == 4) {
			return window.evaluateExpression(commandValue.split('ناتج ')[1]);
		} else if (document.lang == 5) {
			return window.evaluateExpression(commandValue.split('the result of ')[1]);
		}
	} else if (commandCode == 'c42') {
		if (document.lang == 0) {
			return window.evaluateExpression(commandValue.split('set the value of ' + para1 + ' to the result of ')[1]);
		} else if (document.lang == 1) {
			return window.evaluateExpression(commandValue.split('set the value of ' + para1 + ' to the result of ')[1]);
		} else if (document.lang == 2) {
			return window.evaluateExpression(commandValue.split("définir la valeur de ' + para1 + ' à le résultat de ")[1]);
		} else if (document.lang == 3) {
			return window.evaluateExpression(commandValue.split('غير قيمة ' + para1 + ' إلى ناتج ')[1]);
		} else if (document.lang == 4) {
			return window.evaluateExpression(commandValue.split('غير قيمة ' + para1 + ' إلى ناتج ')[1]);
		} else if (document.lang == 5) {
			return window.evaluateExpression(commandValue.split('set the value of ' + para1 + ' to the result of ')[1]);
		}
	} else if (commandCode == 'c43') {
		if (document.lang == 0) {
			return window.evaluateExpression(commandValue.split('set the value of ' + para1 + ' to the result of ')[1]);
		} else if (document.lang == 1) {
			return window.evaluateExpression(commandValue.split('set the value of ' + para1 + ' to the result of ')[1]);
		} else if (document.lang == 2) {
			return window.evaluateExpression(commandValue.split("définir la valeur de ' + para1 + ' à le résultat de ")[1]);
		} else if (document.lang == 3) {
			return window.evaluateExpression(commandValue.split('غير قيمة ' + para1 + ' إلى ناتج ')[1]);
		} else if (document.lang == 4) {
			return window.evaluateExpression(commandValue.split('غير قيمة ' + para1 + ' إلى ناتج ')[1]);
		} else if (document.lang == 5) {
			return window.evaluateExpression(commandValue.split('set the value of ' + para1 + ' to the result of ')[1]);
		}
	} else if (commandCode == 'c44q') {
		if (document.lang == 0) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("aller à ")[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c44r') {
		if (document.lang == 0) {
			return 'the url';
		} else if (document.lang == 1) {
			return 'the url';
		} else if (document.lang == 2) {
			return "l'url";
		} else if (document.lang == 3) {
			return 'الرابط';
		} else if (document.lang == 4) {
			return 'اللينك';
		} else if (document.lang == 5) {
			return 'に行く';
		}
	} else if (commandCode == 'c44t') {
		if (document.lang == 0) {
			return commandValue.split('the url ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('the url ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("l'url ")[1];
		} else if (document.lang == 3) {
			return commandValue.split('الرابط ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('اللينك ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('に行く ')[1];
		}
	} else if (commandCode == 'c45q') {
		if (document.lang == 0) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("aller à ")[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c45r') {
		if (document.lang == 0) {
			return 'the element';
		} else if (document.lang == 1) {
			return 'the element';
		} else if (document.lang == 2) {
			return "l'élément";
		} else if (document.lang == 3) {
			return 'العنصر';
		} else if (document.lang == 4) {
			return 'العنصر';
		} else if (document.lang == 5) {
			return 'に行く';
		}
	} else if (commandCode == 'c45t') {
		if (document.lang == 0) {
			return commandValue.split('the element ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('the element ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("l'élément ")[1];
		} else if (document.lang == 3) {
			return commandValue.split('العنصر ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('العنصر ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('に行く ')[1];
		}
	} else if (commandCode == 'c46q') {
		if (document.lang == 0) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("aller à ")[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('روح إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c46r') {
		if (document.lang == 0) {
			return 'the email';
		} else if (document.lang == 1) {
			return 'the email';
		} else if (document.lang == 2) {
			return 'le courriel';
		} else if (document.lang == 3) {
			return 'البريد الإلكترونى';
		} else if (document.lang == 4) {
			return 'الإيميل';
		} else if (document.lang == 5) {
			return 'Eメール';
		}
	} else if (commandCode == 'c46t') {
		if (document.lang == 0) {
			return commandValue.split('the email ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('the email ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("le courriel ")[1];
		} else if (document.lang == 3) {
			return commandValue.split('البريد الإلكترونى ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('الإيميل ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('Eメール ')[1];
		}
	} else if (commandCode == 'c47q') {
		if (document.lang == 0) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('go to ')[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("aller à ")[1].split(' ')[0] + ' ' + commandValue.split('go to ')[1].split(' ')[1];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح إلى ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('the result of ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c47r') {
		if (document.lang == 0) {
			return 'the page';
		} else if (document.lang == 1) {
			return 'the page';
		} else if (document.lang == 2) {
			return 'la page';
		} else if (document.lang == 3) {
			return 'الصفحة';
		} else if (document.lang == 4) {
			return 'الصفحة';
		} else if (document.lang == 5) {
			return 'ページ';
		}
	} else if (commandCode == 'c47t') {
		if (document.lang == 0) {
			return commandValue.split('the page ')[1];
		} else if (document.lang == 1) {
			return commandValue.split('the page ')[1];
		} else if (document.lang == 2) {
			return commandValue.split("le courriella page ")[1];
		} else if (document.lang == 3) {
			return commandValue.split('الصفحة ')[1];
		} else if (document.lang == 4) {
			return commandValue.split('الصفحة ')[1];
		} else if (document.lang == 5) {
			return commandValue.split('ページ ')[1];
		}
	} else if (commandCode == 'c48') {
		if (document.lang == 0) {
			return commandValue.split('go to the ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('go to the ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c49') {
		if (document.lang == 0) {
			return commandValue.split('go to the ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('go to the ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c50') {
		if (document.lang == 0) {
			return commandValue.split('which has the same class of the value of ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('which has the same class of the value of ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c51') {
		if (document.lang == 0) {
			return commandValue.split('which has the same class of the value of ' + para1 + ' in the slot ')[1].split(' ')[0];
		} else if (document.lang == 1) {
			return commandValue.split('which has the same class of the value of ' + para1 + ' in the slot ')[1].split(' ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		} else if (document.lang == 3) {
			return commandValue.split('اذهب إلى قاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 4) {
			return commandValue.split('روح لقاعدة البيانات ')[1].split(' ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('aller à la base de données ')[1].split(' ')[0];
		}
	} else if (commandCode == 'c52') {
		if (document.lang == 0) {
			return commandValue.split(' in the case that ');
		} else if (document.lang == 1) {
			return commandValue.split(' in the case that ');
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ');
		} else if (document.lang == 3) {
			return commandValue.split(' فى حالة أن ');
		} else if (document.lang == 4) {
			return commandValue.split(' فى حالة أن ');
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ');
		}
	} else if (commandCode == 'c53') {
		if (document.lang == 0) {
			return window.evaluateStatement(commandValue.split(' in the case that ')[1]);
		} else if (document.lang == 1) {
			return window.evaluateStatement(commandValue.split(' in the case that ')[1]);
		} else if (document.lang == 2) {
			return window.evaluateStatement(commandValue.split('obtenir la valeur de la fente ')[1]);
		} else if (document.lang == 3) {
			return window.evaluateStatement(commandValue.split(' فى حالة أن ')[1]);
		} else if (document.lang == 4) {
			return window.evaluateStatement(commandValue.split(' فى حالة أن ')[1]);
		} else if (document.lang == 5) {
			return window.evaluateStatement(commandValue.split('obtenir la valeur de la fente ')[1]);
		}
	} else if (commandCode == 'c54') {
		if (document.lang == 0) {
			return commandValue.split(' in the case that ')[0];
		} else if (document.lang == 1) {
			return commandValue.split(' in the case that ')[0];
		} else if (document.lang == 2) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		} else if (document.lang == 3) {
			return commandValue.split(' فى حالة أن ')[0];
		} else if (document.lang == 4) {
			return commandValue.split(' فى حالة أن ')[0];
		} else if (document.lang == 5) {
			return commandValue.split('obtenir la valeur de la fente ')[0];
		}
	}
}
var uniqueID = document.uniqueID();
    document[uniqueID + 'checker'] = setInterval(function () {
        if (document.lang == 0 || document.lang == 1 || document.lang == 2 || document.lang == 3 || document.lang == 4 || document.lang == 5) {
            if (document.lang == 0) {
                document.E1 = 'When it has been clicked, ';
                document.E2 = 'When the mouse pointer has been moved over it, ';
                document.E3 = 'When the mouse pointer has been moved away from it, ';
                document.E4 = 'When the mouse pointer is being moved out of it, ';
                document.E5 = 'When the mouse pointer is being moved over it, ';
                document.E6 = 'When it is no longer clicked, ';
                document.E7 = 'When it has been double clicked, ';
                document.E8 = 'When it has been right clicked, ';
                document.E9 = 'When a key has been pressed while focusing it, ';
                document.E10 = 'When a key is being pressed while focusing it, ';
                document.E11 = 'When its contents have been modified, ';
                document.E12 = 'When it has been focused, ';
                document.E13 = 'When it is being focused, ';
                document.E14 = 'When it is no longer focused, ';
                document.E15 = 'When the data of this form has been sent, ';
                document.E16 = 'When it has been scrolled, ';
                document.E17 = 'When the user said: ';
                document.E18 = 'When it becomes in the viewport, ';
                document.E19 = 'When it becomes out of the viewport, ';
            } else if (document.lang == 1) {
                document.E1 = 'When it has been clicked, ';
                document.E2 = 'When the mouse pointer has been moved over it, ';
                document.E3 = 'When the mouse pointer has been moved away from it, ';
                document.E4 = 'When the mouse pointer is being moved out of it, ';
                document.E5 = 'When the mouse pointer is being moved over it, ';
                document.E6 = 'When it is no longer clicked, ';
                document.E7 = 'When it has been double clicked, ';
                document.E8 = 'When it has been right clicked, ';
                document.E9 = 'When a key has been pressed while focusing it, ';
                document.E10 = 'When a key is being pressed while focusing it, ';
                document.E11 = 'When its contents have been modified, ';
                document.E12 = 'When it has been focused, ';
                document.E13 = 'When it is being focused, ';
                document.E14 = 'When it is no longer focused, ';
                document.E15 = 'When the data of this form has been sent, ';
                document.E16 = 'When it has been scrolled, ';
                document.E17 = 'When the user said: ';
                document.E18 = 'When it becomes in the viewport, ';
                document.E19 = 'When it becomes out of the viewport, ';
            } else if (document.lang == 2) {
                document.E1 = 'Quand il a été cliqué, ';
                document.E2 = "Lorsque le pointeur de souris a été déplacé au dessus, ";
                document.E3 = "Lorsque le pointeur de la souris s'a été éloigné de lui, ";
                document.E4 = "Lorsque le pointeur de la souris se est en train d'être déplace hors de lui, ";
                document.E5 = 'Lorsque le pointeur de la souris se déplace au dessus, ';
                document.E6 = "Quand il n'est plus fait cliqué, ";
                document.E7 = 'Quand il a été double-cliqué, ';
                document.E8 = 'Quand il a été droit-cliqué, ';
                document.E9 = "Lorsqu'une touche a été pressée tout en la focalisant, ";
                document.E10 = "Lorsqu'une touche est en train d'être pressée tout en la focalisant, ";
                document.E11 = 'Lorsque son contenu a été modifié, ';
                document.E12 = "Lorsqu'on a été focalisé, ";
                document.E13 = "Quand il est en train d'être focalisé, ";
                document.E14 = 'Quand il a dormi, ';
                document.E15 = 'Lorsque les données de ce formulaire ont été envoyées, ';
                document.E16 = "Lorsqu'il s'a été déroulé, ";
                document.E17 = "Si l'utilisateur a dit: ";
                document.E18 = "Quand il devient dans la fenêtre d'affichage, ";
                document.E19 = "Quand il devient hors de la fenêtre d'affichage, ";
            } else if (document.lang == 3) {
                document.E1 = 'إذا نقر عليه, ';
                document.E2 = 'إذا مر به مؤشر الفأرة, ';
                document.E3 = 'إذا خرج مؤشر الفأرة منه, ';
                document.E4 = 'إذا كان مؤشر الفأرة يمر خارجه, ';
                document.E5 = 'إذا كان مؤشر الفأرة يمر به, ';
                document.E6 = 'إذا تم الإنتهاء من النقر عليه, ';
                document.E7 = 'إذا نقر عليه نقرتين مزدوجتين, ';
                document.E8 = 'إذا نقر عليه بالزر الأيمن,';
                document.E9 = 'إذا ضغط على زر اثناء نشاطه, ';
                document.E10 = 'إذا كان هناك زر يتم الضغط عليه اثناء نشاطه, ';
                document.E11 = 'إذا تغيرت محتوياته, ';
                document.E12 = 'إن أصبح نشطا, ';
                document.E13 = 'إذا كان نشطا, ';
                document.E14 = 'إن أصبح خاملا, ';
                document.E15 = 'إذا ارسلت بيانات هذه الإستمارة, ';
                document.E16 = 'إن تم تمريره, ';
                document.E17 = 'إذا قال المستخدم: ';
                document.E18 = 'عندما يصبح في إطار العرض, ';
                document.E19 = 'عندما يصبح خارج إطار العرض, ';
            } else if (document.lang == 4) {
                document.E1 = 'لما يضغط عليه, ';
                document.E2 = 'لما الماوس يعدى من فوقيه, ';
                document.E3 = 'لما الماوس يطلع منه, ';
                document.E4 = 'لما الماوس يكون بيمشى براه, ';
                document.E5 = 'لما الماوس يكون بيمشى فوقيه, ';
                document.E6 = 'لما يخلص الدوس عليه, ';
                document.E7 = 'لما يضغط عليه دبل كليك, ';
                document.E8 = 'لما يضغط عليك كليك لمين, ';
                document.E9 = 'لو زرار اضغط و هوة نشط, ';
                document.E10 = 'لما زرار يكون بيضغط و هوة نشط, ';
                document.E11 = 'لما محتوياته تتغير, ';
                document.E12 = 'لما يبقى نشط, ';
                document.E13 = 'لما يكون نشط, ';
                document.E14 = 'لما ينام, ';
                document.E15 = 'لما الداتا بتاعت الفورم دة تتبعت, ';
                document.E16 = 'لما يتمرر, ';
                document.E17 = 'لو المستخدم قال: ';
                document.E18 = 'لما يبقى فى إطار العرض, ';
                document.E19 = 'لما يبقى خارج إطار العرض, ';
            } else if (document.lang == 5) {
                document.E1 = 'それがクリックされた場合には、 ';
                document.E2 = 'マウスポインタがその上に移動されると、 ';
                document.E3 = 'マウスポインタがそれを離れると、 ';
                document.E4 = 'When the mouse pointer is being moved out of it, ';
                document.E5 = 'When the mouse pointer is being moved over it, ';
                document.E6 = 'それがもはやクリックされないと、 ';
                document.E7 = 'それがダブルクリックされたときに、 ';
                document.E8 = 'それが右クリックされたときに、 ';
                document.E9 = 'When a key pressed while focusing it, ';
                document.E10 = 'When a key is being pressed while focusing it, ';
                document.E11 = 'その内容が変更されたとき、';
                document.E12 = 'それがフォーカスされたときに、 ';
                document.E13 = 'When it is being focused, ';
                document.E14 = 'When it is no longer focused, ';
                document.E15 = 'この形式のデータが送られたときに、 ';
                document.E16 = 'それがスクロールされると、';
                document.E17 = 'ユーザーが言った場合： ';
                document.E18 = 'ビューポートになると、 ';
                document.E19 = 'それは、ビューポートの外になったとき、 '
            }

            clearInterval(document[uniqueID + 'checker']);
        }
    }, 1);
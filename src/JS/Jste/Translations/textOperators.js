/*!
 * Text Operators Translations
 * https://project-jste.github.com/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.com/license
 *
 * Date: 2017-09-12
 */
window.customText = function (siteContents, keywordA, keywordB, keywordC, keywordD, keywordE, keywordF, keywordG, keywordH, keywordI, keywordJ, keywordK, keywordL, keywordM, keywordN, keywordO, keywordP, keywordQ, keywordR, keywordS, keywordT, keywordU) {
	var customTextsArrayA = siteContents.split("&lt;&lt; " + keywordA + ": ");
	for (i = 0; i < customTextsArrayA.length; i++) {
		var customTextA = customTextsArrayA[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordA + ": " + customTextA + " &gt;&gt;", "<b>" + customTextA + "</b>");
	}
	var customTextsArrayB = siteContents.split("&lt;&lt; " + keywordB + ": ");
	for (i = 0; i < customTextsArrayB.length; i++) {
		var customTextB = customTextsArrayB[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordB + ": " + customTextB + " &gt;&gt;", "<i>" + customTextB + "</i>");
	}
	var customTextsArrayC = siteContents.split("&lt;&lt; " + keywordC + ": ");
	for (i = 0; i < customTextsArrayC.length; i++) {
		var customTextC = customTextsArrayC[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordC + ": " + customTextC + " &gt;&gt;", "<u>" + customTextC + "</u>");
	}
	var customTextsArrayD = siteContents.split("&lt;&lt; " + keywordD + ": ");
	for (i = 0; i < customTextsArrayD.length; i++) {
		var customTextD = customTextsArrayD[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordD + ": " + customTextD + " &gt;&gt;", "<b><i>" + customTextD + "</b></i>");
	}
	var customTextsArrayE = siteContents.split("&lt;&lt; " + keywordE + ": ");
	for (i = 0; i < customTextsArrayE.length; i++) {
		var customTextE = customTextsArrayE[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordE + ": " + customTextE + " &gt;&gt;", "<i><b>" + customTextE + "</i></b>");
	}
	var customTextsArrayF = siteContents.split("&lt;&lt; " + keywordF + ": ");
	for (i = 0; i < customTextsArrayF.length; i++) {
		var customTextF = customTextsArrayF[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordF + ": " + customTextF + " &gt;&gt;", "<b><u>" + customTextF + "</b></u>");
	}
	var customTextsArrayG = siteContents.split("&lt;&lt; " + keywordG + ": ");
	for (i = 0; i < customTextsArrayG.length; i++) {
		var customTextG = customTextsArrayG[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordG + ": " + customTextG + " &gt;&gt;", "<u><b>" + customTextG + "</u></b>");
	}
	var customTextsArrayH = siteContents.split("&lt;&lt; " + keywordH + ": ");
	for (i = 0; i < customTextsArrayH.length; i++) {
		var customTextH = customTextsArrayH[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordH + ": " + customTextH + " &gt;&gt;", "<u><i>" + customTextH + "</u></i>");
	}
	var customTextsArrayI = siteContents.split("&lt;&lt; " + keywordI + ": ");
	for (i = 0; i < customTextsArrayI.length; i++) {
		var customTextI = customTextsArrayI[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordI + ": " + customTextI + " &gt;&gt;", "<i><u>" + customTextI + "</i></u>");
	}
	var customTextsArrayJ = siteContents.split("&lt;&lt; " + keywordJ + ": ");
	for (i = 0; i < customTextsArrayJ.length; i++) {
		var customTextJ = customTextsArrayJ[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordJ + ": " + customTextJ + " &gt;&gt;", "<b><i><u>" + customTextJ + "</b></i></u>");
	}
	var customTextsArrayK = siteContents.split("&lt;&lt; " + keywordK + ": ");
	for (i = 0; i < customTextsArrayK.length; i++) {
		var customTextK = customTextsArrayK[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordK + ": " + customTextK + " &gt;&gt;", "<b><u><i>" + customTextK + "</b></u></i>");
	}
	var customTextsArrayL = siteContents.split("&lt;&lt; " + keywordL + ": ");
	for (i = 0; i < customTextsArrayL.length; i++) {
		var customTextL = customTextsArrayL[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordL + ": " + customTextL + " &gt;&gt;", "<i><b><u>" + customTextL + "</i></b></u>");
	}
	var customTextsArrayM = siteContents.split("&lt;&lt; " + keywordM + ": ");
	for (i = 0; i < customTextsArrayM.length; i++) {
		var customTextM = customTextsArrayM[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordM + ": " + customTextM + " &gt;&gt;", "<i><u><b>" + customTextM + "</i></u></b>");
	}
	var customTextsArrayN = siteContents.split("&lt;&lt; " + keywordN + ": ");
	for (i = 0; i < customTextsArrayN.length; i++) {
		var customTextN = customTextsArrayN[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordN + ": " + customTextN + " &gt;&gt;", "<u><i><b>" + customTextN + "</u></i></b>");
	}
	var customTextsArrayO = siteContents.split("&lt;&lt; " + keywordO + ": ");
	for (i = 0; i < customTextsArrayO.length; i++) {
		var customTextO = customTextsArrayO[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordO + ": " + customTextO + " &gt;&gt;", "<u><b><i>" + customTextO + "</u></b></i>");
	}
	var customTextsArrayP = siteContents.split("&lt;&lt; " + keywordP + " ");
	for (i = 0; i < customTextsArrayP.length; i++) {
		var customTextP = customTextsArrayP[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordP + " &gt;&gt;", window.innerHeight);
	}
	var customTextsArrayQ = siteContents.split("&lt;&lt; " + keywordQ + " ");
	for (i = 0; i < customTextsArrayQ.length; i++) {
		var customTextQ = customTextsArrayQ[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordQ + " &gt;&gt;", window.innerWidth);
	}
	var customTextsArrayR = siteContents.split("&lt;&lt; " + keywordR + " ");
	for (i = 0; i < customTextsArrayR.length; i++) {
		var customTextR = customTextsArrayR[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordR + " &gt;&gt;", screen.height);
	}
	var customTextsArrayS = siteContents.split("&lt;&lt; " + keywordS + " ");
	for (i = 0; i < customTextsArrayS.length; i++) {
		var customTextS = customTextsArrayS[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordS + " &gt;&gt;", screen.width);
	}
	var customTextsArrayT = siteContents.split("&lt;&lt; " + keywordT + " ");
	for (i = 0; i < customTextsArrayT.length; i++) {
		var customTextT = customTextsArrayT[i].split(" &gt;&gt;")[0];
		siteContents = siteContents.replace("&lt;&lt; " + keywordT + " " + customTextT + " &gt;&gt;", "<i class='fa fa-" + customTextT + "' aria-hidden='true'></i>");
	}
	siteContents = siteContents.replace(new RegExp("&lt;&lt; " + keywordU + " &gt;&gt;", "g"), "<br />");
	return siteContents;
};
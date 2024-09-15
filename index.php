<!DOCTYPE html>
<html>
<head>
<title>chhandovishayakam tantram</title>
<link rel="stylesheet"  href="style.css">
</head>
<body>
<button onclick="show();" id="show-btn">तन्त्रमन्तर्निधेहि</button>

<br/>
<div id="chhandpath">
<embed type="text/html" src="Articles/chhand-shastram.html" id="emd"/>
</div>
<div class="contaner" id="contaner">
<h1>पैङ्गलं छन्दोविज्ञानम्</h1>
<textarea placeholder="इह श्लोकपादो निक्षिप्यताम्.........
" id="inp" onkeyup="lagabodhakam();"></textarea><br/><br/>
<!---<label>*निक्षिप्तपरिणामः*</label><br/><br/>--->
<label>*गणविश्लेषः*</label><br/><br/>
<h2 id="SI_vichched"></h2><br/>
<h2 id="falani" style="display:none"></h2>
<label>*गणनाम*</label><br/><br/>
<h2 id="fl"></h2><br/>
<label>*पादाक्षराणि</label>
<input id="padaksharani" type="number"  readonly=""/>
<label>*प्रस्तारभेदाः</label>
<input id="prastarabhedah" type="number" readonly=""/><br/><br/>
<label>*प्रकृतो भेदः</label>
<input id="prakritobhedah" type="number" readonly=""/>
<label>*छन्दसो नाम</label>
<input id="chhandasonama" type="text" readonly=""/>
<br/><br/>
<label>*वृत्तस्य नाम</label>
<input id="vname" type="text" readonly=""/><br/>
<span id="ktmtest" style="font-size:0px;"></span>
</div>
<script src="Javascript files/main-script.js"></script>
<script src="Javascript files/vritt-script.js"></script>
<script src="Javascript files/gan-script.js"></script>
<script src="Javascript files/other-script.js"></script>
</body>
</html>

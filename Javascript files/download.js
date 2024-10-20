// ###############################
// बटन पर क्लिक इवेंट जोड़ना
document.getElementById('download').addEventListener('click', downloadJSON);

function downloadJSON() {
  // टेक्स्ट एरिया और आउटपुट्स से डेटा प्राप्त करना
  const textAreaValue = document.getElementById('inp').value;
  const vivaran1 = document.getElementById('SI_vichched').innerText;
  const vivaran2 = document.getElementById('fl').innerText;
  const vivaran3 = document.getElementById('padaksharani').value;
  const vivaran4 = document.getElementById('prastarabhedah').value;
  const vivaran5 = document.getElementById('prakritobhedah').value;
  const vivaran6 = document.getElementById('chhandasonama').value;
  const vivaran7 = document.getElementById('vname').value;

if(textAreaValue.trim()===""){
  alert('आद्यं पुटं रिक्तं न भवितुमर्हति ।');
  return;
}

  // डेटा को JSON फॉर्मेट में तैयार करना
  const jsonData = {
    श्लोकः: textAreaValue,
    विवरणम्: {
      गणविभागः: vivaran1,
      गणनाम: vivaran2,
      अक्षरसंख्या: vivaran3,
      प्रस्तारभेदाः: vivaran4,
      प्रकृतभेदः: vivaran5,
      छन्दोनाम: vivaran6,
      वृत्तनाम: vivaran7
    }
  };

  // JSON को स्ट्रिंग में कनवर्ट करना
  const jsonString = JSON.stringify(jsonData, null, 2);

  // JSON डेटा को डाउनलोड करने के लिए एक ब्लॉब बनाना
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  // डाउनलोड लिंक बनाना और ऑटो-क्लिक करना
  const a = document.createElement('a');
  a.href = url;
  a.download = 'chh_data.txt';
  a.click();

  // URL को रिलीज़ करना
  URL.revokeObjectURL(url);
}
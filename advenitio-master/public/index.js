let n = '<br />'
document.write(`<div spellcheck="false" contenteditable="true">`);// style="padding:5px; border:1px solid black"
document.write(`${(4 > 2) && (10 < 15)} = ${(4 > 2)} && ${(10 < 15)} = (4 > 2) && (10 < 15)`+n);
document.write(1<2+`1<2`+n);

document.write(`</div>`);
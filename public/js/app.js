let buttonOriginal = document.getElementById('buttonOriginal'); let buttonAdd = document.querySelectorAll('.buttonAdd'); let buttonColor = document.getElementById('buttonColor'); let buttonImage = document.getElementById('buttonImage'); let sectionColor = document.getElementById('sectionColor'); let buttonColorClose = document.getElementById('buttonColorClose'); let sectionImage = document.getElementById('sectionImage'); let buttonImageClose = document.getElementById('buttonImageClose'); let buttonColor1 = document.getElementById('buttonColor1'); let buttonColor2 = document.getElementById('buttonColor2'); let buttonColor3 = document.getElementById('buttonColor3'); const linkColor2 = document.createElement('link'); linkColor2.rel = 'stylesheet'; linkColor2.href = './public/css/app/color_2.css'; linkColor2.id = 'linkColor2'; const linkColor3 = document.createElement('link'); linkColor3.rel = 'stylesheet'; linkColor3.href = './public/css/app/color_3.css'; linkColor3.id = 'linkColor3'; let buttonImage1 = document.getElementById('buttonImage1'); let buttonImage2 = document.getElementById('buttonImage2'); let buttonImage3 = document.getElementById('buttonImage3'); buttonOriginal.addEventListener('click', () => { buttonOriginal.classList.toggle('button_add_event'); buttonColor.classList.remove('button_add_event'); buttonImage.classList.remove('button_add_event'); sectionColor.classList.add('none'); sectionImage.classList.add('none'); }); buttonColor.addEventListener('click', () => { buttonImage.classList.remove('button_add_event'); buttonColor.classList.toggle('button_add_event'); sectionColor.classList.toggle('none'); sectionImage.classList.add('none'); }); buttonColorClose.addEventListener('click', () => { sectionColor.classList.add('none'); }); buttonImage.addEventListener('click', () => { buttonColor.classList.remove('button_add_event'); buttonImage.classList.toggle('button_add_event'); sectionImage.classList.toggle('none'); sectionColor.classList.add('none'); }); buttonImageClose.addEventListener('click', () => { sectionImage.classList.add('none'); }); buttonColor1.onclick = function() { const linkToRemove2 = document.getElementById('linkColor2'); const linkToRemove3 = document.getElementById('linkColor3'); if (linkToRemove2) { linkToRemove2.remove(); } if (linkToRemove3) { linkToRemove3.remove(); } }; buttonColor2.onclick = function() { if (!document.getElementById('linkColor2')) { document.head.appendChild(linkColor2); } }; buttonColor3.onclick = function() { if (!document.getElementById('linkColor3')) { document.head.appendChild(linkColor3); } }; buttonImage1.onclick = function() { document.body.classList.remove('image_event_2'); document.body.classList.remove('image_event_3'); }; buttonImage2.onclick = function() { document.body.classList.add('image_event_2'); document.body.classList.remove('image_event_3'); }; buttonImage3.onclick = function() { document.body.classList.remove('image_event_2'); document.body.classList.add('image_event_3'); };
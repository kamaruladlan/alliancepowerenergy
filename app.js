const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-nav');
function closeMenu(){ if(!menuButton) return; const wasOpen=menuButton.getAttribute('aria-expanded')==='true'; menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Open navigation'); mobileMenu.classList.remove('open'); document.body.classList.remove('menu-open'); mobileMenu.inert=true; document.querySelector('main').inert=false;document.querySelector('footer').inert=false;if(wasOpen)menuButton.focus(); }
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true'; if(!open){closeMenu();return;}menuButton.setAttribute('aria-expanded','true');menuButton.setAttribute('aria-label','Close navigation');mobileMenu.classList.add('open');mobileMenu.inert=false;document.body.classList.add('menu-open');document.querySelector('main').inert=true;document.querySelector('footer').inert=true;mobileMenu.querySelector('a').focus();});
document.addEventListener('keydown',event=>{if(event.key==='Tab' && menuButton?.getAttribute('aria-expanded')==='true'){const links=Array.from(mobileMenu.querySelectorAll('a'));const last=links[links.length-1];if(event.shiftKey&&document.activeElement===menuButton){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();menuButton.focus();}}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu(); document.querySelector('.nav-services')?.removeAttribute('open');}});
document.addEventListener('click',event=>{const dropdown=document.querySelector('.nav-services'); if(dropdown && !dropdown.contains(event.target)) dropdown.removeAttribute('open');});
window.matchMedia('(min-width: 901px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
const filters=document.querySelectorAll('.filter-btn');
filters.forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;filters.forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});let count=0;document.querySelectorAll('.gallery-card').forEach(card=>{card.hidden=filter!=='all' && card.dataset.category!==filter;if(!card.hidden)count++;});const status=document.querySelector('#gallery-status');if(status)status.textContent=`${count} images shown`; }));
const lightbox=document.querySelector('#image-dialog');
document.querySelectorAll('.gallery-card').forEach(card=>card.addEventListener('click',()=>{if(!lightbox)return;const photo=card.querySelector('img');const img=lightbox.querySelector('img');img.src=photo.src;img.alt=photo.alt;lightbox.querySelector('h3').textContent=card.querySelector('h3').textContent;lightbox.querySelector('p').textContent=card.dataset.caption;lightbox.showModal();document.body.classList.add('dialog-open');}));
lightbox?.querySelector('.dialog-close').addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',event=>{if(event.target===lightbox){const r=lightbox.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)lightbox.close();}});
lightbox?.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
const form=document.querySelector('#enquiry-form');
if(form){
 const initialService=new URLSearchParams(location.search).get('service');
 const serviceField=form.elements.namedItem('service');
 if(initialService && Array.from(serviceField.options).some(o=>o.value===initialService))serviceField.value=initialService;
 form.addEventListener('submit',event=>{
  event.preventDefault();if(!form.reportValidity())return;
  const data=new FormData(form);const name=String(data.get('name')).trim();const company=String(data.get('company')).trim();const email=String(data.get('email')).trim();const service=String(data.get('service'));const projectLocation=String(data.get('location')||'').trim();const details=String(data.get('message')).trim();
  if(!name||!company||!details){document.querySelector('#form-status').hidden=false;document.querySelector('#form-status').textContent='Please add your name, company and project details.';return;}
  const subject=`Project enquiry — ${service} — ${company}`;
  const body=`Hello Alliance team,\n\nI would like to discuss a project.\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nService: ${service}\nProject location: ${projectLocation||'To be discussed'}\n\nProject details:\n${details}\n\nRegards,\n${name}`;
  const mailto=`mailto:projects@alliancepower-energy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const whatsapp=`https://wa.me/60167601989?text=${encodeURIComponent(body)}`;
  const route=event.submitter?.value||'email';
  const result=document.querySelector('#prepared-result');result.hidden=false;document.querySelector('#prepared-message').textContent=body;
  const status=document.querySelector('#form-status');status.hidden=false;status.textContent=route==='whatsapp'?'Your WhatsApp message is ready. Review it in WhatsApp and press Send to contact Alliance.':'Your email draft is ready. Review it in your email app and press Send to contact Alliance.';
  const emailLink=document.querySelector('#open-email');emailLink.href=mailto;const waLink=document.querySelector('#open-whatsapp');waLink.href=whatsapp;
  document.querySelector('#copy-enquiry').onclick=async()=>{try{await navigator.clipboard.writeText(body);document.querySelector('#copy-enquiry').textContent='Message copied';}catch{document.querySelector('#copy-enquiry').textContent='Select and copy the message below';const sel=window.getSelection();const range=document.createRange();range.selectNodeContents(document.querySelector('#prepared-message'));sel.removeAllRanges();sel.addRange(range);}};
  if(route==='whatsapp')window.open(whatsapp,'_blank','noopener,noreferrer');else window.location.href=mailto;
 });
 document.querySelector('#enquiry-fields').disabled=false;
}

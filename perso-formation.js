document.querySelectorAll('.jeu-btn').forEach(function(b){b.addEventListener('click',function(){
var s=b.closest('.slot'),i=s.querySelector('img');
i.src=b.dataset.src;i.alt=b.dataset.alt;s.querySelector('h3').textContent=b.dataset.title;
s.querySelectorAll('.jeu-btn').forEach(function(x){x.classList.remove('on')});b.classList.add('on');});});
(function(){
var ov,img,tt,pr,dots,hint,px,pn,items=[],idx=0,slot=null,x0=0;
function build(){
ov=document.createElement('div');ov.className='gal';ov.setAttribute('role','dialog');ov.hidden=true;
ov.innerHTML='<button type="button" class="gal-x" aria-label="Fermer">\u00d7</button><button type="button" class="gal-p" aria-label="Pr\u00e9c\u00e9dent">\u2039</button><button type="button" class="gal-n" aria-label="Suivant">\u203a</button><div class="gal-box"><img alt=""><div class="gal-t"></div><div class="gal-pr"></div><div class="gal-d"></div><div class="gal-h">Glissez pour voir les autres mod\u00e8les</div></div>';
document.body.appendChild(ov);
img=ov.querySelector('img');tt=ov.querySelector('.gal-t');pr=ov.querySelector('.gal-pr');dots=ov.querySelector('.gal-d');hint=ov.querySelector('.gal-h');px=ov.querySelector('.gal-p');pn=ov.querySelector('.gal-n');
ov.querySelector('.gal-x').addEventListener('click',close);
px.addEventListener('click',function(e){e.stopPropagation();go(-1)});
pn.addEventListener('click',function(e){e.stopPropagation();go(1)});
ov.addEventListener('click',function(e){if(e.target===ov)close()});
ov.addEventListener('touchstart',function(e){x0=e.changedTouches[0].clientX},{passive:true});
ov.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)go(dx<0?1:-1)},{passive:true});
}
function show(){
var it=items[idx];img.src=it.src;img.alt=it.title;tt.textContent=it.title;pr.textContent=it.price;
dots.innerHTML='';var m=items.length>1;
items.forEach(function(_,k){var s=document.createElement('span');if(k===idx)s.className='on';dots.appendChild(s)});
dots.style.display=hint.style.display=px.style.display=pn.style.display=m?'':'none';
}
function go(d){if(items.length<2)return;img.classList.add('out');setTimeout(function(){idx=(idx+d+items.length)%items.length;show();img.classList.remove('out')},120)}
function open(s){
if(!ov)build();slot=s;var btns=s.querySelectorAll('.jeu-btn'),price=s.querySelector('.price').textContent;
if(btns.length){items=[].map.call(btns,function(b){return{src:b.dataset.src,title:b.dataset.title,price:price}});idx=Math.max(0,[].findIndex.call(btns,function(b){return b.classList.contains('on')}))}
else{var i=s.querySelector('img');items=[{src:i.src,title:s.querySelector('h3').textContent,price:price}];idx=0}
show();ov.hidden=false;document.body.style.overflow='hidden';
}
function close(){if(!ov||ov.hidden)return;ov.hidden=true;document.body.style.overflow='';
var btns=slot?slot.querySelectorAll('.jeu-btn'):[];if(btns.length&&btns[idx])btns[idx].click()}
document.addEventListener('click',function(e){
var im=e.target.closest&&e.target.closest('.slot:not(.empty) img');
if(!im)return;e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();open(im.closest('.slot'));
},true);
document.addEventListener('keydown',function(e){
if(!ov||ov.hidden)return;
if(e.key==='Escape')close();else if(e.key==='ArrowRight')go(1);else if(e.key==='ArrowLeft')go(-1);
});
})();

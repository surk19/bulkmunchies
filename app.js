(()=>{
const EMAIL='help@bulkmunchies.com',CDN='https://cdn.faire.com/fastly/';
const R=[['Cadbury Clinkers Pascall 160Gx12','Chocolate','Australia',12,10.99,21.99,'3fd57221c6b1a74e5aab8f669ea954264850e7ff460a8c671ea8d909a7d4a569.jpeg'],['Donsuemor Traditional Madeleines 28OZx6','Cookie','United States',6,16,28,'84e7110cd7d1081d643619d7528f7362121b25d517edd2f463de912161512b1c.jpeg'],['Frooti Mango Drink 7OZ x 12','Fruit Juice','India',12,0.75,1.5,'997398fca9384bf77f214b6236d62e17d4375876b19f13378ece07b21900e5f9.jpeg'],['Kurkure Chili Chatka 74Gx12','Chips','India',12,2.49,4.98,'cebdcf7e9a2763e8aae300454e1913d78d0bba53a0783f622f40dc41dd5a7c81.jpeg'],['Kurkure Masala Munch 80Gx12','Chips','India',12,2.49,4.98,'98278176fffdd44333d3b373cc3fd07465bb02f878063284e15842154fe7e265.jpeg'],['Lays American Cream & Onion 52Gx12','Chips','India',12,2.49,4.98,'1daf4841868bf6b464adb0e596ca8f942c87ffb86d6658018fc6ec552f89a425.jpeg'],['Lays Chile Limon 52Gx12','Chips','India',12,2.49,4.98,'e68a053e420042104f66767358bcb379423323a0af39692e7d7c20f3f67eb212.jpeg'],['Lays Magic Masala 52Gx12','Chips','India',12,2.49,4.98,'d75c6787ae9ed87a5fc34e88d9cca5d1314962e9b4592adb7bc502baf3e048e5.jpeg'],['Lays Sizzling Hot 52Gx12','Chips','India',12,2.49,4.98,'616f727f973dd2d54a320d2f0b15647ccbc2d99609d00b3301ca2177c3db9724.jpeg'],['Lays Spanish Tomato Tango 52Gx12','Chips','India',12,2.49,4.98,'f94019992edd3a11fd183860778dec28187d9f9e0e82d86f54811c2d77bd2ba2.jpeg'],['Lays West Indies Hot N Sweet Chilli 50Gx12','Chips','India',12,2.49,4.98,'efe5d53775f6ad37e780087e6cda442ab9ecf407e5aaec0a373dbc9ccdb5e3ac.jpeg'],['Pakola Soft Drink 8OZ','Soda/Carbonated Drink','Pakistan',12,2.49,4.98,'10f3d6606addcd413febdda03cd1372e5ea7299ce6412c2ab429dc0db57fa3cb.jpeg'],['Royal Family Mochi - Strawberry Cheese Cake 180gX12','Jam/Jelly','Taiwan',12,3.99,6.49,'57ac0f4b122deee60dfba7a62c6918102aae662769d5c8fe7968370402bd96ea.jpeg'],['Royal Family Mochi - Chocolate 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'7a15bcf64b348ae233ef3992881c829e0122288d67be68c051ba115c6c7df969.jpeg'],['Royal Family Mochi - Creamy Coconut 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'3b5b256b7f1ec43ed815f2808ead2aeb2635a50ede04e17317fb404665fbf7ef.jpeg'],['Royal Family Mochi - Maple Pancake 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'8845120b0b2511f4fce8a610097fff001fccbad5c30acae389c654dfafcf4faa.jpeg'],['Royal Family Mochi - Mint Chocolate Chip 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'ce302e209f582f7165afe760824261070d349ec7af6d6d7fe1de15087537623f.jpeg'],['Royal Family Mochi - Peanut Butter 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'3cc44039bf18206ba2329351913417a7da62f6dd85c417a325c37929aefce00e.jpeg'],['Royal Family Mochi - Salted Caramel 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'32f34b86bbb52007983b1fc36cdd2e6c8b3ec657b218525241e72b023b25c06a.jpeg'],['Royal Family Mochi - Tiramisu & Creme 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'f56c2bc85e8582b7dc6fd952e8a1db7867195c327b0e3172c482f9f4331a2403.jpeg'],['Royal Family Mochi - Vanilla Creme 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'19d484ec1d8808f180a6461dc229c9ce6e789f7456cfc61edd4c083bd7e9c56c.jpeg'],['Tiger Chilli and Lemon Flavored Chips 90Gx12','Chips','Egypt',12,2.99,5.99,'a2d20fa8d029704bd8f5369628b7f43ca11a542325887e21279e71ac47c5191f.webp'],['Tiger Chips - Seasoned Cheese 90gx12','Chips','Egypt',12,2.99,5.99,'346177308b6f7b5b3692742d4921fa613687695d770f16f2df746de9641b0f01.webp'],['Tiger Chips - Tomato flavor 90gx12','Chips','Egypt',12,2.99,5.99,'64049b44efb1c8ba96e363dddd6304e5317416e0e5fa4cc88221efb23c559e6a.webp'],['Tiger Chips Kebab Flavor Egypt 90gx12','Chips','Egypt',12,2.99,5.99,'b76a3da2fbe14d86010b1c345c5f1cd84b46c5d987ae99a3476be8cf9dbe03a5.webp'],['Tiger Chips Paprika Flavored Chips - 90gx12','Chips','Egypt',12,2.99,5.99,'791e4e0de33d58fd7da5b5887c423619fcdd2528910690ee89b401f63a251ac2.webp'],['Tiger Excellence Thai Sweet Chili Chips 80Gx10','Chips','Egypt',10,2.99,5.99,'586bda708f261ff2dbc124b99e664a0aa78491546617ac516c4679bdfdf2a128.jpeg'],['Tiger Kettle Dill Pickle & White Cheese 90gx10','Chips','Egypt',10,2.99,5.99,'58544bde9ffff9508d0551f8e15125aad7552524fa619989443d708d5eb2ecf4.webp'],['Tiger Kettle Prime Glazed Ribs 90g*10','Chips','Egypt',10,2.99,5.99,'8bc298fd801dc2eeb3a97c7da041ec8174d67dc5c5f2ce2c0ef4c01bdc2a0464.png']];
const P=R.map((r,i)=>({id:i,name:r[0],cat:r[1],origin:r[2],pack:r[3],unit:r[4],retail:r[5],img:CDN+r[6],case:Math.round(r[3]*r[4]*100)/100}));
const LB={'Jam/Jelly':'Mochi','Soda/Carbonated Drink':'Soda','Fruit Juice':'Juice'},lab=c=>LB[c]||c;
const $=id=>document.getElementById(id),money=n=>'$'+n.toFixed(2);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let cat='',cart={};
try{cart=JSON.parse(localStorage.getItem('bm-quote')||'{}')}catch(e){}
const save=()=>{try{localStorage.setItem('bm-quote',JSON.stringify(cart))}catch(e){}drawCart()};

$('sP').textContent=P.length;$('sC').textContent=new Set(P.map(p=>p.origin)).size;$('yr').textContent=new Date().getFullYear();
const cats=[...new Set(P.map(p=>p.cat))];
function drawCats(){
  $('cats').innerHTML=[['','All products',P.length],...cats.map(c=>[c,lab(c),P.filter(p=>p.cat==c).length])]
   .map(([c,l,n])=>`<button type="button" class="cat glass" data-cat="${esc(c)}" aria-pressed="${cat==c}"><b>${esc(l)}</b><small>${n} item${n>1?'s':''}</small></button>`).join('');
}
$('og').innerHTML+=[...new Set(P.map(p=>p.origin))].sort().map(o=>`<option>${esc(o)}</option>`).join('');

function render(){
  const q=$('q').value.trim().toLowerCase(),o=$('og').value,s=$('so').value;
  let l=P.filter(p=>(!cat||p.cat==cat)&&(!o||p.origin==o)&&(p.name+' '+p.cat+' '+lab(p.cat)+' '+p.origin).toLowerCase().includes(q));
  l.sort((a,b)=>s=='l'?a.case-b.case:s=='h'?b.case-a.case:a.name.localeCompare(b.name));
  $('count').textContent=`Showing ${l.length} of ${P.length} products`;
  $('grid').innerHTML=l.length?l.map(p=>`<article class="p glass">
    <button type="button" class="im" data-show="${p.id}" aria-label="View ${esc(p.name)}"><span class="tg">${esc(lab(p.cat))}</span><img loading="lazy" decoding="async" src="${p.img}" alt="${esc(p.name)}" width="400" height="400"></button>
    <div class="bd"><h3>${esc(p.name)}</h3><div class="meta">${p.pack} per case · ${money(p.unit)}/unit · ${esc(p.origin)}</div>
    <div class="pr">${money(p.case)} <small>/ case</small></div><div class="meta">Suggested retail ${money(p.retail)}</div>
    <button type="button" class="btn btn-glass btn-sm" data-add="${p.id}">Add to quote</button></div></article>`).join('')
    :'<p class="empty">No matches. Try another search or filter.</p>';
}
function setCat(c){cat=c;drawCats();render()}

function openDrawer(o){$('dr').classList.toggle('open',o);$('dr').setAttribute('aria-hidden',!o);$('scrim').classList.toggle('on',o);if(o)$('closeQuote').focus()}
function add(i){cart[i]=(cart[i]||0)+1;save();openDrawer(true)}
function change(i,d){cart[i]=(cart[i]||0)+d;if(cart[i]<=0)delete cart[i];save()}
function drawCart(){
  let n=0,t=0;
  const h=Object.entries(cart).map(([i,q])=>{const p=P[i];if(!p)return'';n+=q;t+=q*p.case;
    return `<div class="ci"><img src="${p.img}" alt=""><div class="nm"><b>${esc(p.name)}</b><br><span>${money(p.case)} / case</span></div><div class="qt"><button type="button" data-chg="${i}" data-d="-1" aria-label="Remove one case">−</button><span>${q}</span><button type="button" data-chg="${i}" data-d="1" aria-label="Add one case">+</button></div></div>`}).join('');
  $('it').innerHTML=h||'<p>Your quote is empty. Add cases from the catalog.</p>';
  $('qc').textContent=n;$('tt').textContent=money(t);
}
function showProduct(i){const p=P[i];$('mi').src=p.img;$('mi').alt=p.name;
  $('mt').innerHTML=`<h3>${esc(p.name)}</h3><p>${esc(lab(p.cat))} · Made in ${esc(p.origin)}</p><div class="pr">${money(p.case)} <small>/ case of ${p.pack}</small></div><p>${money(p.unit)} per unit · suggested retail ${money(p.retail)}</p><button type="button" class="btn btn-y" data-add="${i}" data-close="1">Add to quote</button>`;
  $('md').classList.add('open');$('closeModal').focus()}
const closeModal=()=>$('md').classList.remove('open');

async function send(subject,data,el,ok){
  el.className='status';el.textContent='Sending...';
  try{const r=await fetch('https://formsubmit.co/ajax/'+EMAIL,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(Object.assign({_subject:subject,_captcha:'false',_template:'table'},data))});
    const j=await r.json();if(r.ok&&String(j.success)!=='false'){el.className='status ok';el.textContent=ok;return true}throw new Error('fail')}
  catch(e){el.className='status err';el.textContent='Could not send. Please email '+EMAIL+' directly.';return false}
}
async function sendQuote(){
  const el=$('qs');
  if(!Object.keys(cart).length){el.className='status err';el.textContent='Add items to your quote first.';return}
  const b=$('qb').value.trim(),em=$('qe').value.trim();
  if(!b||!/^\S+@\S+\.\S+$/.test(em)){el.className='status err';el.textContent='Please enter your business name and a valid email.';return}
  let t=0;const lines=Object.entries(cart).map(([i,q])=>{const p=P[i];t+=q*p.case;return q+' case(s) - '+p.name+' @ '+money(p.case)});
  if(await send('Quote request: '+b,{Business:b,email:em,Items:lines.join('\n'),Estimated_total:money(t)},el,'Quote sent. We will reply by email.')){cart={};save()}
}

document.addEventListener('click',e=>{
  const t=e.target.closest('[data-cat],[data-add],[data-show],[data-chg]');if(!t)return;
  if(t.dataset.cat!==undefined)setCat(t.dataset.cat);
  else if(t.dataset.add!==undefined){if(t.dataset.close)closeModal();add(+t.dataset.add)}
  else if(t.dataset.show!==undefined)showProduct(+t.dataset.show);
  else if(t.dataset.chg!==undefined)change(+t.dataset.chg,+t.dataset.d);
});
$('openQuote').onclick=()=>openDrawer(true);$('closeQuote').onclick=()=>openDrawer(false);$('scrim').onclick=()=>openDrawer(false);
$('closeModal').onclick=closeModal;$('md').onclick=e=>{if(e.target===$('md'))closeModal()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();openDrawer(false)}});
$('sendQuote').onclick=sendQuote;
$('af').onsubmit=async e=>{e.preventDefault();const f=e.target;
  if(!f.checkValidity()){$('as').className='status err';$('as').textContent='Please fill in business name, your name and a valid email.';return}
  const d=Object.fromEntries(new FormData(f));
  if(await send('Wholesale application: '+d.Business,d,$('as'),'Thanks. We received your application and will be in touch.'))f.reset()};
['q','og','so'].forEach(i=>$(i).addEventListener('input',render));
drawCats();render();drawCart();
})();

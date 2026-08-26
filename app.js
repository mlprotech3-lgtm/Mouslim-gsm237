const products=[
{name:"AMT - Android Multi Tool Rent",duration:"2 Hours",price:350,category:"Android Tools",icon:"🤖"},
{name:"AMT - Android Multi Tool Rent",duration:"12 Hours",price:550,category:"Android Tools",icon:"🤖"},
{name:"AMT - Android Multi Tool Rent",duration:"24 Hours",price:700,category:"Android Tools",icon:"🤖"},
{name:"TSM Tool Rent",duration:"3 Hours",price:350,category:"Android Tools",icon:"🔧",popular:true},
{name:"TSM Tool Rent",duration:"12 Hours",price:550,category:"Android Tools",icon:"🔧",popular:true},
{name:"TFM Tool Pro Rent",duration:"6 Hours",price:450,category:"Android Tools",icon:"⚙️"},
{name:"TFM Tool Pro Rent with 5 Credit",duration:"12 Hours",price:1500,category:"Android Tools",icon:"⚙️"},
{name:"DFT Pro Tool Rent",duration:"48 Hours",price:1100,category:"Android Tools",icon:"🛠️"},
{name:"AnonySHU Tool Rent",duration:"12 Hours",price:1100,category:"Android Tools",icon:"🔐"},
{name:"APIZU MDM TOOL PRO Rent",duration:"6 Hours",price:750,category:"Android Tools",icon:"🛡️"},
{name:"AWT - AndroidWinTool",duration:"48 Hours",price:750,category:"Android Tools",icon:"💻"},
{name:"MDM FIX TOOL RENT",duration:"6 Hours",price:800,category:"Android Tools",icon:"🛡️"},
{name:"Unlock Tool Rent",duration:"6 Hours",price:300,category:"Android Tools",icon:"🔓",popular:true},
{name:"SigmaPlus - EFT Pro - Octoplus Samsung/LG",duration:"Service / Minutes",price:5250,category:"Android Tools",icon:"⚡",popular:true},
{name:"CM2 Dongle Rent (New Version)",duration:"1 Hour",price:1700,category:"Android Tools",icon:"🧰"},
{name:"Relogin EFT / OCTOPLUS / SIGMA / CM2",duration:"1–10 Minutes",price:0,category:"Android Tools",icon:"🔄"},

{name:"SamsungTool.us Credits For Existing User",duration:"Minutes",price:750,category:"Samsung Tools",icon:"📱"},
{name:"SamsungTool.us KG Bypass Tool Rent",duration:"12 Hours",price:1500,category:"Samsung Tools",icon:"🔐",popular:true},
{name:"Phoenix Service Tool - Credit Refill",duration:"Minutes",price:700,category:"Samsung Tools",icon:"🔥"},

{name:"#7946 Aladin Tool iCloud Hello & Passcode",duration:"Instant",price:2400,category:"iPhone / iCloud",icon:"🍎",popular:true},
{name:"iHPro Multi Tool - Ramdisk Hello Screen",duration:"Instant",price:700,category:"iPhone / iCloud",icon:"🍎"},
{name:"iHPro Ramdisk - A12-A13 Hello",duration:"Instant",price:1500,category:"iPhone / iCloud",icon:"🍎",popular:true},
{name:"iHPro Ramdisk - A12-A13 Passcode",duration:"Instant",price:1500,category:"iPhone / iCloud",icon:"🍎"},
{name:"iHPro Activator A5-A6",duration:"Instant",price:700,category:"iPhone / iCloud",icon:"🍎"},

{name:"Xiaomi Code Convert To IMEI Text",duration:"1–2 Days",price:1450,category:"Xiaomi Tools",icon:"📱"}
];

const productsContainer=document.getElementById("products");
const search=document.getElementById("search");
const count=document.getElementById("count");
const empty=document.getElementById("empty");
const totalServices=document.getElementById("totalServices");
const year=document.getElementById("year");
let currentCategory="Tous";

function formatPrice(price){
 if(price===0) return "GRATUIT";
 return new Intl.NumberFormat("fr-FR").format(price).replace(/\u202f/g," ")+" FCFA";
}
function whatsappLink(product){
 const message=`Bonjour MLPRO-GSM, je souhaite commander : ${product.name} — ${product.duration} — ${formatPrice(product.price)}.`;
 return "https://wa.me/237698169728?text="+encodeURIComponent(message);
}
function render(){
 const query=search.value.toLowerCase().trim();
 const filtered=products.filter(product=>{
  const categoryOK=currentCategory==="Tous"||product.category===currentCategory;
  const searchOK=product.name.toLowerCase().includes(query)||product.duration.toLowerCase().includes(query)||product.category.toLowerCase().includes(query);
  return categoryOK&&searchOK;
 });
 productsContainer.innerHTML="";
 filtered.forEach(product=>{
  const card=document.createElement("article");
  card.className="card";
  card.innerHTML=`
   ${product.popular?'<div class="popular-badge">🔥 PLUS VENDU</div>':""}
   <div class="card-icon">${product.icon}</div>
   <h3>${product.name}</h3>
   <div class="category">${product.category}</div>
   <div class="duration">⏱ ${product.duration}</div>
   <div class="bottom">
    <div class="price"><small>PRIX MLPRO-GSM</small>${formatPrice(product.price)}</div>
    <a class="order" href="${whatsappLink(product)}" target="_blank" rel="noopener">COMMANDER</a>
   </div>`;
  productsContainer.appendChild(card);
 });
 count.textContent=filtered.length;
 empty.style.display=filtered.length?"none":"block";
}
document.querySelectorAll(".cat-btn").forEach(button=>{
 button.addEventListener("click",()=>{
  document.querySelectorAll(".cat-btn").forEach(btn=>btn.classList.remove("active"));
  button.classList.add("active");
  currentCategory=button.dataset.category;
  render();
 });
});
search.addEventListener("input",render);
year.textContent=new Date().getFullYear();
totalServices.textContent=products.length;
render();

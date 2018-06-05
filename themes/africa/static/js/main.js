var body=$("body");body.addClass("fundo-preto"),$(window).scroll(function(o){$(window).scrollTop()<=300?(body.addClass("fundo-preto"),body.removeClass("fundo-branco")):(body.addClass("fundo-branco"),body.removeClass("fundo-preto"))});var _createClass=function(){function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var TextScramble=function(){function t(e){_classCallCheck(this,t),this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}return _createClass(t,[{key:"setText",value:function(e){var t=this,a=this.el.innerText,n=Math.max(a.length,e.length),s=new Promise(function(e){return t.resolve=e});this.queue=[];for(var r=0;r<n;r++){var i=a[r]||"",o=e[r]||"",h=Math.floor(40*Math.random()),u=h+Math.floor(40*Math.random());this.queue.push({from:i,to:o,start:h,end:u})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),s}},{key:"update",value:function(){for(var e="",t=0,a=0,n=this.queue.length;a<n;a++){var s=this.queue[a],r=s.from,i=s.to,o=s.start,h=s.end,u=s.char;this.frame>=h?(t++,e+=i):this.frame>=o?((!u||Math.random()<.28)&&(u=this.randomChar(),this.queue[a].char=u),e+='<span class="dud">'+u+"</span>"):e+=r}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}},{key:"randomChar",value:function(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}]),t}(),phrases=['<span class="sites">Sites</span>','<span class="mkt">Digital Marketing</span>','<span class="seo">SEO</span>','<span class="ecommerce">Ecommerce</span>','<span class="mkt">Google Adwords</span>'],el=document.querySelector(".random-titles"),fx=new TextScramble(el),counter=0,next=function e(){fx.setText(phrases[counter]).then(function(){setTimeout(e,800)}),counter=(counter+1)%phrases.length};next();
Macy({
container:'#clients-projects',
trueOrder:!1,
waitForImages:!1,
margin:15,
columns:2,
breakAt:{
768:1
}
});
var wrapper=$("#button-submit-content");$(".button-submit").click(function(){wrapper.not(".checked")&&(wrapper.addClass("checked"),setTimeout(function(){wrapper.removeClass("checked"),document.getElementById("name").value=""},8e3))});

$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

const email = document.querySelector('.required');
const update = document.querySelector('.button-submit');
email.addEventListener('input', inputEmail);

function inputEmail(e) {
    const input = e.target.value;
    if (input && /(^\w.*@\w+\.\w)/.test(input)) {
        update.classList.add('show-submit-button');
        update.classList.remove('failure')
    } else {
        update.classList.remove('show-submit-button');
        update.classList.add('failure')
    }
};
$('form input').on('keypress', function(e) {
    return e.which !== 13
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbxHoruJr4vhN8coU-wyRqtA6M2Xspp82Um9z7X6q6NEm6-oJeYP/exec'
const form = document.forms['integragoogle']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Successo!', response))
        .catch(error => console.error('Erro!', error.message))
})
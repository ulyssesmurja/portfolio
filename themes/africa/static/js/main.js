var body = $('body');
body.addClass('fundo-preto');
$(window).scroll(function(e) {
    var scroll = $(window).scrollTop();
    if (scroll <= 300) {
        body.addClass('fundo-preto');
        body.removeClass('fundo-branco')
    } else {
        body.addClass('fundo-branco');
        body.removeClass('fundo-preto')
    }
});
class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({
                from, to, start, end
            })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let {
                from, to, start, end, char
            } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="caracter">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}
const phrases = ['<span class="sites">Sites</span>', '<span class="mkt">Digital Marketing</span>', '<span class="seo">SEO</span>', '<span class="ecommerce">Ecommerce</span>', '<span class="mkt">Google Adwords</span>']
const el = document.querySelector('.random-titles')
const fx = new TextScramble(el)
let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 3200)
    })
    counter = (counter + 1) % phrases.length
}
next()
Macy({
    container: '#clients-projects',
    trueOrder: !1,
    waitForImages: !1,
    margin: 15,
    columns: 2,
    breakAt: {
        768: 1
    }
});
var wrapper = $("#button-submit-content");
$(".button-submit").click(function() {
    if (wrapper.not(".checked")) {
        wrapper.addClass("checked");
        setTimeout(function() {
            wrapper.removeClass("checked");
            document.getElementById('name').value = ""
        }, 8000)
    }
});

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


var $form = $('form#sayhello'),
    url = 'https://script.google.com/macros/s/AKfycbxHoruJr4vhN8coU-wyRqtA6M2Xspp82Um9z7X6q6NEm6-oJeYP/exec'

$('#button-submit').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbxHoruJr4vhN8coU-wyRqtA6M2Xspp82Um9z7X6q6NEm6-oJeYP/exec'
  const form = document.forms['sayhello']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })












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
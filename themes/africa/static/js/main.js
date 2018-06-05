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
















var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextScramble = function () {
  function TextScramble(el) {
    _classCallCheck(this, TextScramble);

    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  _createClass(TextScramble, [{
    key: 'setText',
    value: function setText(newText) {
      var _this = this;

      var oldText = this.el.innerText;
      var length = Math.max(oldText.length, newText.length);
      var promise = new Promise(function (resolve) {
        return _this.resolve = resolve;
      });
      this.queue = [];
      for (var i = 0; i < length; i++) {
        var from = oldText[i] || '';
        var to = newText[i] || '';
        var start = Math.floor(Math.random() * 40);
        var end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from: from, to: to, start: start, end: end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
  }, {
    key: 'update',
    value: function update() {
      var output = '';
      var complete = 0;
      for (var i = 0, n = this.queue.length; i < n; i++) {
        var _queue$i = this.queue[i],
            from = _queue$i.from,
            to = _queue$i.to,
            start = _queue$i.start,
            end = _queue$i.end,
            char = _queue$i.char;

        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += '<span class="dud">' + char + '</span>';
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  }, {
    key: 'randomChar',
    value: function randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }]);

  return TextScramble;
}();

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

var phrases = ['<span class="sites">Sites</span>', '<span class="mkt">Digital Marketing</span>', '<span class="seo">SEO</span>', '<span class="ecommerce">Ecommerce</span>', '<span class="mkt">Google Adwords</span>'];

var el = document.querySelector('.random-titles');
var fx = new TextScramble(el);

var counter = 0;
var next = function next() {
  fx.setText(phrases[counter]).then(function () {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};

next();























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
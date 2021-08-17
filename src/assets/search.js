// SETUP IS INSIDE OF A FUNCTION REMEMBER THAT!.


function setup() {
  //setup before functions
  let typingTimer;                //timer identifier
  let searchFunctionInterval = 300;  //time in ms (5 seconds)
  let myInput = document.getElementById('myinput');
  console.log(document.getElementById('myinput'));
  //on keyup, start the countdown
  myInput.addEventListener('keyup', () => {
      clearTimeout(typingTimer);
      if (myInput.value) {
          typingTimer = setTimeout(searchFunction, searchFunctionInterval);
      }
  });
}


function searchFunction() {
    console.log('Done Typing, Searching API now.')
    document.getElementById('wrapper').innerHTML = '';
    $.getJSON("https://core-anime-api.herokuapp.com/Search_Anime", function(data){
      var input, filter, ul, li, a, i;
      input = document.getElementById('myinput');
      filter = input.value.toUpperCase();
      inp = document.getElementById('myinput');
      for (i = 0; i < data.length; i++) {
        if(data[i].title.toUpperCase().includes(filter)) {
          var u, x, w, a;
          u = document.getElementById('wrapper')
          x = document.createElement('li');
          w = document.createElement('img');
          a = document.createElement('a');
          $(x).attr('id',data[i].id);
          $(x).attr('name',data[i].imdb_id);
          $(w).attr('src',data[i].horizontal_img);
          $(x).attr('title',data[i].content);
          $(x).attr('onclick',"document.getElementById('id').innerHTML = $(this).attr('Id'); document.getElementById('imdb_id').innerHTML = $(this).attr('name'); document.getElementById('content-type').innerHTML = $(this).attr('title'); popup();")
          a.innerHTML = data[i].title;
          $(u).append(x);
          $(x).append(w);
          $(x).append(a);
          //checkdoubles();
        }
      }
    })
  }
  function checkdoubles() {
    k = document.getElementById('wrapper');
    if(k.children[0].innerHTML === k.children[1].innerHTML) {
      k.children[1].remove()
    }
  }
  function popup() {
      console.log('starting to append')
      var content_id = document.getElementById('id').innerHTML;
      var JSON_URL = ('https://core-anime-api.herokuapp.com/Search_Anime/' + content_id)
      $.getJSON(JSON_URL, function(data){
          var title = data.title;
          var background = data.horizontal_img;
          var imdb = data.imdb_id;
          var popup = document.getElementsByClassName('popup');
          var popup_title = document.getElementsByClassName('popup_title');
          var popimg = document.getElementsByClassName('popimg');
          var backimg = (`linear-gradient(to left, rgb(0 0 0 / 0%), #05050500, #050505),
          linear-gradient(to bottom, rgb(0 0 0 / 0%), #050505),
          url(` + background + ')');
          //styling
          $(document.getElementById('imdb_id')).innerHTML = imdb;
          $(popimg).css('background-image', backimg)
          popup_title[0].innerHTML = title;
          $(popup).css('display', 'block')
      })
      var content_type = document.getElementById('content-type').innerHTML;
      if(content_type == 'movie'){
        $(document.getElementById('watchseasn')).css('display','none');
        $(document.getElementById('watchsepis')).css('display','none');
        $(document.getElementsByClassName('popup')).css('height','45vh');
      }
      else {
        $(document.getElementById('watchseasn')).css('display','inline-block');
        $(document.getElementById('watchsepis')).css('display','inline-block');
        $(document.getElementsByClassName('popup')).css('height','50vh');
      }
  }
  function watchnow() {
      var popup = document.getElementsByClassName('popup');
      var season_num = document.getElementById('watchseasn').value;
      var episode_num = document.getElementById('watchsepis').value;
      var watch_id = document.getElementById('imdb_id').innerHTML;
      var content_type = document.getElementById('content-type').innerHTML;
      var frame = document.getElementById('watchframe');
      var frame_src = ('https://www.2embed.ru/embed/imdb/tv?id=' + watch_id + '&s=' + season_num + '&e=' + episode_num);
      var frame_src_movie = ('https://www.2embed.ru/embed/imdb/movie?id=' + watch_id);
      var discont = document.getElementsByClassName('discont');
      if(content_type == 'movie'){
        frame.src = frame_src_movie;
      }
      else {
        frame.src = frame_src; 
      }
      $(discont).css('display', 'block');
      $(popup).css('display', 'block');
      
  }




$(document).ready(function() {
  $('#myCarousel').on('slid.bs.carousel', function() {
});   
});
$('.carousel').carousel({ interval: false });
$(document).ready(function() {
  $('.carousel').carousel({
    interval: false
  })
$(function(){
$('.carousel').carousel({
      interval: false
    });
$('.carousel-control.right').trigger('click');
});
});
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('wrapper');
    li = ul.getElementsByTagName('li');
    inp = document.getElementById('myinput');

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "inline-block";
        }

        else{
            li[i].style.display = 'none';
        }
    }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function parent() {
  test = $('.genre-title2').parent().prop('className');
  console.log(test);
}


function getinfo() {
  $('.goto-btn').click(function() { 
    var name = $(this).attr('name');
    var parent = $(this).parent().attr('name');
    console.log(parent);
  });
}

function create_top() {
      
    //variable decolartion
    var all_rows = document.getElementsByClassName("all-rows");
    var container = document.createElement("div");
    var genre_title = document.createElement("h2");
    var well = document.createElement("div");
    var col = document.createElement("div");
    var carousel = document.createElement("div");
    var carousel_inner = document.createElement("div");
    var lft_control = document.createElement("a");
    var rt_control = document.createElement("a");
    var item_1 = document.createElement("div");
    var item_2 = document.createElement("div");
    var item_3 = document.createElement("div");
    var row_1 = document.createElement("div");
    var row_2 = document.createElement("div");
    var row_3 = document.createElement("div");

    //applying attributes and styles
    genre_title.className = 'genre-title8';
    genre_title.innerHTML = 'Top Anime';

    container.className = 'container6';

    col.className = 'col-xs-12';

    well.className = 'well';
    well.style.outline = 'none';
    well.style.border = 'none';

    carousel.id = 'myCarousel9';
    carousel.className = 'carousel slide';
    carousel_inner.className = 'carousel-inner';
    $(carousel).attr("data-interval","false");

    lft_control.innerHTML = '<';
    lft_control.className = 'left carousel-control';
    $(lft_control).attr("href","#myCarousel9");
    $(lft_control).attr("data-slide","prev");
    lft_control.id = 'left9';

    rt_control.innerHTML = '>';
    rt_control.className = 'right carousel-control';
    $(rt_control).attr("href","#myCarousel9");
    $(rt_control).attr("data-slide","next");
    rt_control.id = 'right9';

    item_1.className = 'item';
    item_2.className = 'item';
    item_3.className = 'item active';

    row_1.className = 'row';
    row_2.className = 'row';
    row_3.className = 'row';

        container.append(genre_title);
    container.append(col);

    $(all_rows).append(container);

    col.append(well);

    well.append(carousel);

    carousel.append(carousel_inner);
    carousel.append(lft_control);
    carousel.append(rt_control);

    carousel_inner.append(item_1);
    carousel_inner.append(item_2);
    carousel_inner.append(item_3);

    item_1.append(row_1);
    item_2.append(row_2);
    item_3.append(row_3);

    row_num = 0;
  $.getJSON("https://core-anime-api.herokuapp.com/Top_Anime", function(data){
    for (i = 0; i < data.length; i++) {
      var clox_3 = document.createElement("div");
      clox_3.className = 'col-xs-3';
      if ([0, 1, 2, 3, 4, 5].includes(i)) {
        row_1.append(clox_3);
        console.log('Row 1 appended');
      }
      if ([6, 7, 8, 9, 10, 11].includes(i)) {
        row_2.append(clox_3);
        console.log('Row 2 appended');
      }
      if ([12, 13, 14, 15, 16, 17].includes(i)) {
        row_3.append(clox_3);
        console.log('Row 3 appended');
        loaded();
      }
      
    
      var thumbnail = document.createElement("a");
      var content_link = "https://www.2embed.ru/embed/imdb/tv?id=" + data[i].imdb_id +"&s=1&e=1"
      //$(thumbnail).attr("href",content_link);
      $(thumbnail).attr('title',data[i].id);
      $(thumbnail).attr("name",'Top_Anime');
      $(thumbnail).attr("onclick","document.getElementById('id').innerHTML = this.title; document.getElementById('genre').innerHTML = this.name; watch();");
      thumbnail.className = 'thumbnail';
      thumbnail.id = 'thumb';
      clox_3.append(thumbnail);

      var thumb_img = document.createElement("img");
      thumb_img.src = data[i].horizontal_img;
      thumbnail.append(thumb_img);

      var gotobtn = document.createElement("button");
      gotobtn.className = 'goto-btn';
      thumbnail.append(gotobtn);

      var gotoh4 = document.createElement("h4");
      gotoh4.innerHTML = '►';
      gotobtn.append(gotoh4);

    }

    //appending elements to their parents
  })
}




function create_adventure() {
  $.getJSON("https://core-anime-api.herokuapp.com/Adventure_Anime", function(data){
    console.log(data[0]);
    
    //variable decolartion
    var all_rows = document.getElementsByClassName("all-rows");
    var container = document.createElement("div");
    var genre_title = document.createElement("h2");
    var well = document.createElement("div");
    var col = document.createElement("div");
    var carousel = document.createElement("div");
    var carousel_inner = document.createElement("div");
    var lft_control = document.createElement("a");
    var rt_control = document.createElement("a");
    var item_1 = document.createElement("div");
    var item_2 = document.createElement("div");
    var item_3 = document.createElement("div");
    var row_1 = document.createElement("div");
    var row_2 = document.createElement("div");
    var row_3 = document.createElement("div");

    //applying attributes and styles
    genre_title.className = 'genre-title8';
    genre_title.innerHTML = 'Adventure Anime';

    container.className = 'container6';

    col.className = 'col-xs-12';

    well.className = 'well';
    well.style.outline = 'none';
    well.style.border = 'none';

    carousel.id = 'myCarousel10';
    carousel.className = 'carousel slide';
    carousel_inner.className = 'carousel-inner';
    $(carousel).attr("data-interval","false");

    lft_control.innerHTML = '<';
    lft_control.className = 'left carousel-control';
    $(lft_control).attr("href","#myCarousel10");
    $(lft_control).attr("data-slide","prev");
    lft_control.id = 'left10';

    rt_control.innerHTML = '>';
    rt_control.className = 'right carousel-control';
    $(rt_control).attr("href","#myCarousel10");
    $(rt_control).attr("data-slide","next");
    rt_control.id = 'right10';

    item_1.className = 'item active';
    item_2.className = 'item';
    item_3.className = 'item';

    row_1.className = 'row';
    row_2.className = 'row';
    row_3.className = 'row';

    row_num = 0;
    for (i = 0; i < data.length; i++) {
      var clox_3 = document.createElement("div");
      clox_3.className = 'col-xs-3';
      if ([0, 1, 2, 3, 4, 5].includes(i)) {
        row_1.append(clox_3);
        console.log('Row 1 appended');
      }
      if ([6, 7, 8, 9, 10, 11].includes(i)) {
        row_2.append(clox_3);
        console.log('Row 2 appended');
      }
      if ([12, 13, 14, 15, 16, 17].includes(i)) {
        row_3.append(clox_3);
        console.log('Row 3 appended');
      }
      
    
      var thumbnail = document.createElement("a");
      var content_link = "https://www.2embed.ru/embed/imdb/tv?id=" + data[i].imdb_id +"&s=1&e=1"
      //$(thumbnail).attr("href",content_link);
      $(thumbnail).attr('title',data[i].id);
      $(thumbnail).attr("name",'Adventure_Anime');
      $(thumbnail).attr("onclick","document.getElementById('id').innerHTML = this.title; document.getElementById('genre').innerHTML = this.name; watch();");
      thumbnail.className = 'thumbnail';
      thumbnail.id = 'thumb';
      clox_3.append(thumbnail);

      var thumb_img = document.createElement("img");
      thumb_img.src = data[i].horizontal_img;
      thumbnail.append(thumb_img);

      var gotobtn = document.createElement("button");
      gotobtn.className = 'goto-btn';
      thumbnail.append(gotobtn);

      var gotoh4 = document.createElement("h4");
      gotoh4.innerHTML = '►';
      gotobtn.append(gotoh4);


    }

    //appending elements to their parents
    container.append(genre_title);
    container.append(col);

    $(all_rows).append(container);

    col.append(well);

    well.append(carousel);

    carousel.append(carousel_inner);
    carousel.append(lft_control);
    carousel.append(rt_control);

    carousel_inner.append(item_1);
    carousel_inner.append(item_2);
    carousel_inner.append(item_3);

    item_1.append(row_1);
    item_2.append(row_2);
    item_3.append(row_3);

})
}

function create_comical() {
  $.getJSON("https://core-anime-api.herokuapp.com/Comical_Anime", function(data){
    console.log(data[0]);
    
    //variable decolartion
    var all_rows = document.getElementsByClassName("all-rows");
    var container = document.createElement("div");
    var genre_title = document.createElement("h2");
    var well = document.createElement("div");
    var col = document.createElement("div");
    var carousel = document.createElement("div");
    var carousel_inner = document.createElement("div");
    var lft_control = document.createElement("a");
    var rt_control = document.createElement("a");
    var item_1 = document.createElement("div");
    var item_2 = document.createElement("div");
    var item_3 = document.createElement("div");
    var row_1 = document.createElement("div");
    var row_2 = document.createElement("div");
    var row_3 = document.createElement("div");

    //applying attributes and styles
    genre_title.className = 'genre-title8';
    genre_title.innerHTML = 'Comical Anime';

    container.className = 'container6 last';

    col.className = 'col-xs-12';

    well.className = 'well';
    well.style.outline = 'none';
    well.style.border = 'none';

    carousel.id = 'myCarousel11';
    carousel.className = 'carousel slide';
    carousel_inner.className = 'carousel-inner';
    $(carousel).attr("data-interval","false");

    lft_control.innerHTML = '<';
    lft_control.className = 'left carousel-control';
    $(lft_control).attr("href","#myCarousel11");
    $(lft_control).attr("data-slide","prev");
    lft_control.id = 'left11';

    rt_control.innerHTML = '>';
    rt_control.className = 'right carousel-control';
    $(rt_control).attr("href","#myCarousel11");
    $(rt_control).attr("data-slide","next");
    rt_control.id = 'right11';

    item_1.className = 'item active';
    item_2.className = 'item';
    item_3.className = 'item';

    row_1.className = 'row';
    row_2.className = 'row';
    row_3.className = 'row';

    row_num = 0;
    for (i = 0; i < data.length; i++) {
      var clox_3 = document.createElement("div");
      clox_3.className = 'col-xs-3';
      if ([0, 1, 2, 3, 4, 5].includes(i)) {
        row_1.append(clox_3);
        console.log('Row 1 appended');
      }
      if ([6, 7, 8, 9, 10, 11].includes(i)) {
        row_2.append(clox_3);
        console.log('Row 2 appended');
      }
      if ([12, 13, 14, 15, 16, 17].includes(i)) {
        row_3.append(clox_3);
        console.log('Row 3 appended');
      }
      
    
      var thumbnail = document.createElement("a");
      var content_link = "https://www.2embed.ru/embed/imdb/tv?id=" + data[i].imdb_id +"&s=1&e=1"
      //$(thumbnail).attr("href",content_link);
      $(thumbnail).attr('title',data[i].id);
      $(thumbnail).attr("name",'Comical_Anime');
      $(thumbnail).attr("onclick","document.getElementById('id').innerHTML = this.title; document.getElementById('genre').innerHTML = this.name; watch();");
      thumbnail.className = 'thumbnail';
      thumbnail.id = 'thumb';
      clox_3.append(thumbnail);

      var thumb_img = document.createElement("img");
      thumb_img.src = data[i].horizontal_img;
      thumbnail.append(thumb_img);

      var gotobtn = document.createElement("button");
      gotobtn.className = 'goto-btn';
      thumbnail.append(gotobtn);

      var gotoh4 = document.createElement("h4");
      gotoh4.innerHTML = '►';
      gotobtn.append(gotoh4);

    }

    //appending elements to their parents
    container.append(genre_title);
    container.append(col);

    $(all_rows).append(container);

    col.append(well);

    well.append(carousel);

    carousel.append(carousel_inner);
    carousel.append(lft_control);
    carousel.append(rt_control);

    carousel_inner.append(item_1);
    carousel_inner.append(item_2);
    carousel_inner.append(item_3);

    item_1.append(row_1);
    item_2.append(row_2);
    item_3.append(row_3);

})
}


console.log('5');




function sleep (time) {
  console.log('Starting sleep timer....');
  return new Promise((resolve) => setTimeout(resolve, time));
}
function displayload() {
  $('.loading-display').css('-webkit-animation-duration','5s');
  $('.loading-display').css('animation-duration','5s');
  $('.loading-display').css('-webkit-animation-fill-mode','both');
  $('.loading-display').css('animation-fill-mode','both');
  $('.loading-display').css('-webkit-animation-name','none');
  $('.loading-display').css('animation-name','none');
  $('.loading-display').css('display','none');

  $('.loading-gif').css('-webkit-animation-duration','5s');
  $('.loading-gif').css('animation-duration','5s');
  $('.loading-gif').css('-webkit-animation-fill-mode','both');
  $('.loading-gif').css('animation-fill-mode','both');
  $('.loading-gif').css('-webkit-animation-name','none');
  $('.loading-gif').css('animation-name','none');
  $('.loading-gif').css('display','none');

  $('.loading-logo').css('-webkit-animation-duration','5s');
  $('.loading-logo').css('animation-duration','5s');
  $('.loading-logo').css('-webkit-animation-fill-mode','both');
  $('.loading-logo').css('animation-fill-mode','both');
  $('.loading-logo').css('-webkit-animation-name','none');
  $('.loading-logo').css('animation-name','none');

  //document.body.style.overflow = 'auto';
}
function createdevfaves() {
  //creating global variables
  var img_container = document.createElement("div");
  var title = document.createElement("h1");
  var img_a = document.createElement("img");
  var img_b = document.createElement("img");
  var img_c = document.createElement("img");
  var img_d = document.createElement("img");
  var img_e = document.createElement("img");
  var img_f = document.createElement("img");
  var img_g = document.createElement("img");

  //styling and attributing variables
  img_container.className = 'big-img-container';
  title.innerHTML = 'Developers Favorites';
  img_a.src = "https://i.ibb.co/47SfZ61/Screenshot-2021-02-19-205101.png";
  img_b.src = "https://i.imgur.com/jS5zmO7.png";
  img_c.src = "https://i.imgur.com/WIjZecf.png";
  img_d.src = "https://i.ibb.co/hFM6KL1/Screenshot-2021-02-19-204752.png";
  img_e.src = "https://i.ibb.co/vVSXQGg/Screenshot-2021-02-19-211546.png";
  img_f.src = "https://i.imgur.com/0hDkTS0.png";
  img_g.src = "https://i.imgur.com/VDJT2aJ.png";

  $(img_a).attr('onclick',"document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();");
  $(img_b).attr('onclick',"document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();");
  $(img_c).attr('onclick',"document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();");
  $(img_d).attr('onclick',"document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();");
  $(img_e).attr('onclick',"document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();");
  $(img_f).attr('onclick',"document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();");
  $(img_g).attr('onclick',"document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();");
 
  $(img_a).attr('title','Top_Anime');$(img_a).attr('name','0');
  $(img_b).attr('title','Top_Anime');$(img_b).attr('name','11');
  $(img_c).attr('title','Shows_Action');$(img_c).attr('name','2');
  $(img_d).attr('title','Search_Anime');$(img_d).attr('name','141');
  $(img_e).attr('title','Top_Anime');$(img_e).attr('name','2');
  $(img_f).attr('title','Top_Anime');$(img_f).attr('name','10');
  $(img_g).attr('title','Top_Anime');$(img_g).attr('name','1');
  
  //appending elements
  $('.all-rows').append(img_container);
  img_container.append(title, img_a, img_b, img_c, img_d, img_e, img_f, img_g )
}
function logname() {
  var x = document.getElementById("dem").innerHTML;
  console.log(x);
}
function nonepop() {
  console.log("Popup now invisable");
  $(".popup").css("display","none");
}
function extra() {
  var discover_container = document.createElement("div");
  var disco_text_container = document.createElement("div");
  var find_text = document.createElement("h1");
  var find_tv = document.createElement("h5");
  var find_movies = document.createElement("h5");
  var find_search = document.createElement("h5");

  //applying attributes
  console.log('i');
  $(discover_container).attr("class","discover");
  $(disco_text_container).attr("class","disco-text-container");

  //styling
  console.log('ii');

  find_text.innerHTML = 'Cant find what your looking for? Find more.';
  find_tv.innerHTML = 'Explore Shows →';
  find_movies.innerHTML = 'Explore Movies →';
  find_search.innerHTML = 'Search Content →';

  console.log('iii');

  $(disco_text_container).append(find_text,find_tv,find_movies,find_search);
  $(discover_container).append(disco_text_container);
  $(discover_container).insertAfter(".all-rows");


}

function watch() {
  var genre = document.getElementById('genre').innerHTML;
  var id = document.getElementById('id').innerHTML;
  var f = document.getElementsByClassName("popup");
  var c = document.getElementsByClassName('popup_title');
  var k  = document.getElementsByClassName('popimg');
  var JSONurl = 'https://core-anime-api.herokuapp.com/' + genre + '/' + id;

  $.getJSON(JSONurl, function(data){ 
    console.log(data)
    var u = data.horizontal_img;
    var title = data.title;
    document.getElementById('imdbid').innerHTML = data.imdb_id;
    var backimg = (`linear-gradient(to left, rgb(0 0 0 / 0%), #05050500, #050505),
    linear-gradient(to bottom, rgb(0 0 0 / 0%), #050505),
    url(` + u + ')');
    c[0].innerHTML = title;
    $(k).css('background-image',backimg)
  })
  $(f).css("display","block");
}

function returntitle() {
  var season_num = document.getElementById('watchseasn').value;
  var episode_num = document.getElementById('watchsepis').value;
  var imdb_id = document.getElementById('imdbid').innerHTML;
  console.log('getting Season ' + season_num + ' Episode ' + episode_num + ' of ' + imdb_id);

  var frame = document.getElementById('watchframe');
  var source = ('https://www.2embed.ru/embed/imdb/tv?id=' + imdb_id + '&s=' + season_num + '&e=' + episode_num);
  var discont = document.getElementsByClassName('discont');

  frame.src = source;
  $(discont).css('display','block');

  var p0pup = document.getElementsByClassName('popup');
  var homebtn = document.getElementsByClassName('gohome');
  $(homebtn).css('display','block');
  $(p0pup).css('display','none');
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}

function gohome() {
  var discont = document.getElementsByClassName('discont');
  var home = document.getElementsByClassName('gohome');
  $(discont).css('display','none');
  $(home).css('display','none');

}

// Comment Code Block Ctrl+K+C/Ctrl+K+U //
console.log('starting to create media content');
displayload(); create_top(); create_adventure(); createdevfaves(); create_comical();
console.log('finished creating media content');

function loaded() {
  $(document.getElementById('ld')).css('display','none');
  $(document.body).css('overflow','unset')
}
function returnnaruto() {
  var frame = document.getElementById('watchframe');
  var source = ('https://www.2embed.ru/embed/imdb/tv?id=tt0988824&s=1&e=1');
  var discont = document.getElementsByClassName('discont');

  frame.src = source;
  $(discont).css('display','block');

  var p0pup = document.getElementsByClassName('popup');
  var homebtn = document.getElementsByClassName('gohome');
  $(homebtn).css('display','block');
  $(p0pup).css('display','none');
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  $(document.body).css('overflow','hidden');

}
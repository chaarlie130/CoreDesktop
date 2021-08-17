function getrow_old() {
  $.getJSON("https://core-anime-api.herokuapp.com/Movies", function(data){
    console.log(data[0]);
    
    //variable decolartion
    var all_rows = document.body;
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
    genre_title.className = 'genre-title2';
    genre_title.innerHTML = 'Award Winning Movies';

    container.className = 'container2';

    col.className = 'col-xs-12';

    well.className = 'well';
    well.style.outline = 'none';
    well.style.border = 'none';

    carousel.id = 'myCarousel2';
    carousel.className = 'carousel slide';
    carousel_inner.className = 'carousel-inner';
    $(carousel).attr("data-interval","false");

    lft_control.innerHTML = '<';
    lft_control.className = 'left carousel-control';
    $(lft_control).attr("href","#myCarousel2");
    $(lft_control).attr("data-slide","prev");
    lft_control.id = 'left2';

    rt_control.innerHTML = '>';
    rt_control.className = 'right carousel-control';
    $(rt_control).attr("href","#myCarousel2");
    $(rt_control).attr("data-slide","next");
    rt_control.id = 'right2';

    item_1.className = 'item active';
    item_2.className = 'item';
    item_3.className = 'item';

    row_1.className = 'row';
    row_2.className = 'row';
    row_3.className = 'row';

    for (i = 0; i < data.length; i++) {
        var clox_3 = document.createElement("div");
        clox_3.className = 'col-xs-3';
        if ([0, 1, 2, 3, 4, 5, 6, 7, 8].includes(i)) {
          row_1.append(clox_3);
          console.log('Row 1 appended');
        }
        if ([9, 10, 11, 12, 13, 14, 15, 16, 17].includes(i)) {
          row_2.append(clox_3);
          console.log('Row 2 appended');
        }
        if ([18, 19, 20, 21, 22, 23, 24, 25, 26, 27].includes(i)) {
          row_3.append(clox_3);
          console.log('Row 3 appended');
        }
        
      
        var thumbnail = document.createElement("a");
        $(thumbnail).attr('title',data[i].id);
        $(thumbnail).attr("name",'Comical_Anime');
        $(thumbnail).attr("onclick","document.getElementById('id').innerHTML = this.title; document.getElementById('genre').innerHTML = this.name; watch();");
        thumbnail.className = 'thumbnail';
        thumbnail.id = 'thumb';
        clox_3.append(thumbnail);
  
        var thumb_img = document.createElement("img");
        thumb_img.src = data[i].vertical_img;
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
function createrow(genre,number) {
  if ($("#bigCntReg").length > 0){
    var c = document.createElement("div");
    var d = document.getElementsByClassName('cont')[1];
    $(c).attr('class','big-content-reg');
    $(c).attr('id','bigCntReg');
    c.innerHTML = `<div class="big-content-reg">       <h1>Eye Candy</h1>       <div class="big-content-images">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="65" src="https://occ-0-1091-299.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTFYZGNcatgSfkyp8mDDI_b-sU3xUSeCKSSlBiGlXad13FKAGJ5QrdSnup7SNjmOcFvE9ROLe8okMQgNKxiMa0U9N22c.jpg?r=ce7">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="58" src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYv4i_wWOIM_mu3WNc4inkSzRJIXp6_Fu3zblWw69LF5IzOMbLaFkOQbe87aAs2WLRnh0heSlZvIXAc4KywgcVjJxdQg.jpg?r=4d4">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="80" src="https://occ-0-2218-2219.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABaJei1U2qdNP6qwYfNwz8d-tAhrvPxgieYRiAz3AXLNrRxfjk8rc1i8vHDIUm-2JxhNFYpJafC3pN6ayGEYqfpzaspg9diK5C-VoChIffUOsdxYpMwRv2uCyM0PX7Q.jpg?r=ce3">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="157" src="https://occ-0-1091-299.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYZJmlktlV421VMcE4MkwPZNHM_rjk1EwFXHoQB2deEl0_Ygxg2KRNrDXGxjSKEalp2DH2Z5IZFfCZ_JvMpL2_HOfoNu.jpg?r=4bd">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="152" src="https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeXwWoSnibns3EJgkypTPYf4nrzoN8upN-cTPnqw1IddBGV6djadJ6FBc03OGZd2-DLLkHNk3EgwoAVmY64LwCYQBg3n.jpg?r=05d">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="56" src="https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQcuePeqMGmw0ggJMC0ZjF7zavbNfF-1taYd8xsxSpC7qxxiHEwrl2k_rz9lSYFYWAq0dFSmBUcWe-dnoIo1xB64Lb8x.jpg?r=3cf">                <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="66" src="https://occ-0-784-778.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQePnoE57n_KrayMsEbbkPtYr7HVvE8tvQWk1R_mqXwz1ciZsg7_SaaecIHoghqcH8V0eY2bW_YTLuPj2drNFxPmpFAQ.jpg?r=6c6"></div></div>`;
    $(c).insertAfter(d)
    console.log('inserted!');
    console.log(c);
  }
  var get_link = ('https://core-anime-api.herokuapp.com/movies');
  $.getJSON(get_link, function(data){
    console.log(data[0]);
    
    //variable decolartion
    var all_rows = document.body;
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
    var cat_title = genre;

    //applying attributes and styles
    genre_title.className = 'genre-title';
    genre_title.innerHTML = cat_title;

    container.className = 'cont container2';

    col.className = 'col-xs-12';

    well.className = 'well';
    well.style.outline = 'none';
    well.style.border = 'none';

    carousel.id = ('myCarousel' + number);
    carousel.className = 'carousel slide';
    carousel_inner.className = 'carousel-inner';
    $(carousel).attr("data-interval","false");

    lft_control.innerHTML = '<';
    lft_control.className = 'left carousel-control';
    $(lft_control).attr("href",('#' + carousel.id) );
    $(lft_control).attr("data-slide","prev");
    lft_control.id = ('left' + number);

    rt_control.innerHTML = '>';
    rt_control.className = 'right carousel-control';
    $(rt_control).attr("href",('#' + carousel.id) );
    $(rt_control).attr("data-slide","next");
    rt_control.id = ('right' + number);

    item_1.className = 'item active';
    item_2.className = 'item';
    item_3.className = 'item';

    row_1.className = 'row';
    row_2.className = 'row';
    row_3.className = 'row';

    row_num = 0;
    for (i = 0; i < data.length; i++) {
      if(data[i].genre == genre) {
        var clox_3 = document.createElement("div");
        clox_3.className = 'col-xs-3';
        //not working because only the first few include the id [0, 1, 2, 3, 4, 5, 6, 7, 8]
        if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 
            27, 28, 29, 30, 31, 32, 33, 34, 35, 
            51, 52, 53, 54, 55, 56, 57, 58, 59].includes(i)) {
          row_1.append(clox_3);
          console.log('Row 1 appended');
        }
        if ([9, 10, 11, 12, 13, 14, 15, 16, 17, 
            36, 37, 38, 39, 40, 41, 42, 43, 44, 
            60, 61, 62, 63, 64, 65, 66, 67, 68].includes(i)) {
          row_2.append(clox_3);
          console.log('Row 2 appended');
        }
        if ([18, 19, 20, 21, 22, 23, 24, 25, 26, 
             45, 46, 47, 48, 49, 50].includes(i)) {
          row_3.append(clox_3);
          console.log('Row 3 appended');
        }
    
      var thumbnail = document.createElement("a");
      $(thumbnail).attr("title",genre);
      $(thumbnail).attr("name",data[i].id);
      $(thumbnail).attr(
        "onclick",
        "document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watchmovie();"
      );
      thumbnail.className = 'thumbnail';
      thumbnail.id = 'thumb';
      clox_3.append(thumbnail);

      var thumb_img = document.createElement("img");
      thumb_img.src = data[i].vertical_img;
      thumbnail.append(thumb_img);

      var gotobtn = document.createElement("button");
      gotobtn.className = 'goto-btn';
      thumbnail.append(gotobtn);

      var gotoh4 = document.createElement("h4");
      gotoh4.innerHTML = '►';
      gotobtn.append(gotoh4);
      }
      else {
        console.log('genres ' + data[i].genre + ' and ' + genre + ' do not match ')
      }
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
function checkgenre() {
  $.getJSON("https://core-anime-api.herokuapp.com/Movies", function(data){
    for (i = 0; i < data.length; i++) {
        if(data[i].genre == 'award') {
           console.log(`
           name: ` + data[i].title + `
           image: ` + data[i].horizontal_img + `
           desc: ` + data[i].description + `
           `)
        }

    }
  })
}
function discont_handler() {
  var frame = document.getElementById('watchframe');
  var discont = document.getElementsByClassName('discont');
  var content_link = document.getElementById('link').innerHTML

  frame.src = content_link;
  $(discont).css('display','block');
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  $(document.body).css('overflow','hidden');
}
function watchmovie() {
  var genre = document.getElementById('genre').innerHTML;
  var id = document.getElementById('id').innerHTML;
  var f = document.getElementsByClassName("popup");
  var c = document.getElementsByClassName('popup_title');
  var k  = document.getElementsByClassName('popimg');
  var JSONurl = 'https://core-anime-api.herokuapp.com/movies/' + id;
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
function returntitlemovie() {
  var imdb_id = document.getElementById('imdbid').innerHTML;
  var frame = document.getElementById('watchframe');
  var source = ('https://www.2embed.ru/embed/imdb/movie?id=' + imdb_id);
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
function returnyourname() {
  var frame = document.getElementById('watchframe');
  var source = ('https://www.2embed.ru/embed/imdb/movie?id=tt5311514');
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

createrow('Award Winning Movies',2);
createrow('Studio Ghibli Films',8);
createrow('Films Based on Anime Shows',9);

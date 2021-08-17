function createrow(genre,number,title) {
  var get_link = ('https://core-anime-api.herokuapp.com/' + genre);
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
    var cat_title = title;

    //applying attributes and styles
    genre_title.className = 'genre-title0';
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
      if ([18, 19, 20, 21, 22, 23, 24, 25, 26].includes(i)) {
        row_3.append(clox_3);
        console.log('Row 3 appended');
      }
      
    
      var thumbnail = document.createElement("a");
      $(thumbnail).attr("title",genre);
      $(thumbnail).attr("name",data[i].id);
      $(thumbnail).attr(
        "onclick",
        "document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();"
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

    //appending elements to their parents
    container.append(genre_title);
    container.append(col);

    $(container).insertAfter(".big-content");

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
function createad() {
  var maincontainer = document.createElement("div");
  var title = document.createElement("h1");
  var paragraph = document.createElement("p");
  var play = document.createElement("button");
  var details = document.createElement("button");
  var btncontainer = document.createElement("div");
  var backimg = document.createElement("img");
  var insertplace = document.getElementsByClassName('container2')[1];
  var insertplace_2 = document.getElementsByClassName('container2')[1];
  var text_cont = document.createElement("div");

  $(text_cont).attr('class','ad-txt-cont')
  $(maincontainer).attr('class','main-container');
  $(btncontainer).attr('class','button-container');
  $(play).attr('id','play');
  $(details).attr('id','info');
  $(backimg).attr('src','https://media.cdn.adultswim.com/uploads/20191002/19102179503-DemonSlayer__mobileHero_norating.png');
  $(play).attr('onclick','playadvert()');
  $(details).attr('title','Shows_top');
  $(details).attr('name','8');
  $(details).attr('onclick',"document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();");

  title.innerHTML = 'Demon Slayer: Kimetsu no Yaiba';
  paragraph.innerHTML = 'The story takes place in Taishō-era Japan. It follows Tanjiro Kamado and his sister Nezuko Kamado as they seek a cure to Nezukos demon curse. Tanjiro and Nezuko become entangled in the affairs of a secret society, known as the Demon Slayer Corps, that have been waging a secret war against demons for centuries.';
  play.innerHTML = 'Play S1 E1';
  details.innerHTML = 'More Details';

  $(maincontainer).insertAfter(insertplace);
  $(maincontainer).append(text_cont)
  $(maincontainer).append(backimg);
  $(text_cont).append(title,paragraph);
  $(btncontainer).insertAfter(paragraph);
  $(btncontainer).append(play,details);
  var c = document.createElement("div");
  $(c).attr('class','big-content-reg');
  c.innerHTML = `       <h1>Big Hits</h1>       <div class="big-content-images">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="119" src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABfDr7ALY6sLcFgzfqb-kbFvfnxXlcNMGRPK3FiF50iOg5_D6sDzgd0q2SSfVbfS6Y1oAOORYeuKAg8tfRPcYZbRRhq-B.jpg?r=710">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="11" src="https://occ-0-2042-299.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABafG6kJaCUxwagB-l5IPorYozPwLBxB6Ys-01OBB54rmnNNoEAk3gSZID7ag2DVL2RPLesUODAA8z5ZxexKR7bKfyOH-.jpg?r=d14">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="0" src="https://occ-0-2773-1490.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZwj18BUsz3XI-qpeEuA6_NsK268pnmv28mGz2-ZZAC95Zg3oIBO3zA7KElnEiWzhD2IJYyG1UnKTzE2c4TpwF7HmAOT.jpg?r=07b">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="3" src="https://occ-0-37-33.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRf4vWaa22I_QZvYeE_q48qPosYj_d2Bftx_lv8mgI6StVDlNo8kgeFYzpyl5eHXjFzHQpL_rDWHghBOr2l4zxyQI4LA.jpg?r=e32">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="2" src="https://occ-0-1168-299.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYIIlE5g6yDdtbvw7fXwhIDDlHZAYA8AwHXBIsVM4Wkf28EQ4Gs-eHF96n-DNanRHZspUKPjp2Iy8rMN5U8w6nWZBSij.jpg?r=67c">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="4" src="https://art-s.nflximg.net/a4cef/17da0ea16daedba09fcd87b8f4ec3749268a4cef.jpg">                <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="5" src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRAjtMeY05KW6P2dYt6ps0nIe2UBAoIdgsm_OsDLp8nhzpYyFB9K9fntdw-mdczmf3Mzy5YiyZ_CMFMFJilbghaSDRJF.jpg?r=81d"></div>`;
  $(c).insertAfter(insertplace_2);
  console.log('inserted!');
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
  $(document.body).css('overflow','hidden');

}
createrow("Shows_top",1,"Top Anime");
createrow("Shows_Shonen",2,"Shonen Anime");
createad()
createrow("Shows_Action",3,"Action Anime");
createrow("Shows_Romance",4,"Romance Anime");

function playadvert() {
  var frame = document.getElementById('watchframe');
  var source = ('https://www.2embed.ru/embed/imdb/tv?id=tt9335498&s=1&e=1');
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
function insertbigimg() {
  var d = document.getElementsByClassName('container2')[2];
  var c = document.createElement("div");
  c.className = 'big-content-reg';
  c.innerHTML = `       <h1>Big Hits</h1>       <div class="big-content-images">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="119" src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABfDr7ALY6sLcFgzfqb-kbFvfnxXlcNMGRPK3FiF50iOg5_D6sDzgd0q2SSfVbfS6Y1oAOORYeuKAg8tfRPcYZbRRhq-B.jpg?r=710">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="11" src="https://occ-0-2042-299.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABafG6kJaCUxwagB-l5IPorYozPwLBxB6Ys-01OBB54rmnNNoEAk3gSZID7ag2DVL2RPLesUODAA8z5ZxexKR7bKfyOH-.jpg?r=d14">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="0" src="https://occ-0-2773-1490.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZwj18BUsz3XI-qpeEuA6_NsK268pnmv28mGz2-ZZAC95Zg3oIBO3zA7KElnEiWzhD2IJYyG1UnKTzE2c4TpwF7HmAOT.jpg?r=07b">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="3" src="https://occ-0-37-33.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRf4vWaa22I_QZvYeE_q48qPosYj_d2Bftx_lv8mgI6StVDlNo8kgeFYzpyl5eHXjFzHQpL_rDWHghBOr2l4zxyQI4LA.jpg?r=e32">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="2" src="https://occ-0-1168-299.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYIIlE5g6yDdtbvw7fXwhIDDlHZAYA8AwHXBIsVM4Wkf28EQ4Gs-eHF96n-DNanRHZspUKPjp2Iy8rMN5U8w6nWZBSij.jpg?r=67c">         <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="4" src="https://art-s.nflximg.net/a4cef/17da0ea16daedba09fcd87b8f4ec3749268a4cef.jpg">                <img onclick="document.getElementById('genre').innerHTML = this.title; document.getElementById('id').innerHTML = this.name; watch();" title="search_anime" name="5" src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRAjtMeY05KW6P2dYt6ps0nIe2UBAoIdgsm_OsDLp8nhzpYyFB9K9fntdw-mdczmf3Mzy5YiyZ_CMFMFJilbghaSDRJF.jpg?r=81d"></div>`;
  $(c).insertAfter(d);
  console.log('inserted!')
}
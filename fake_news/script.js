//Images
var images = document.querySelectorAll("img");
var pics = [];
pics[0] = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1200px-Grosser_Panda.JPG";
pics[1] = "//www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg";
pics[2] = "https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.nbcnews-ux-2880-1000.jpg";
pics[3] = "https://www.pandasinternational.org/wptemp/wp-content/uploads/2012/10/slider1.jpg";
pics[4] = "https://pbs.twimg.com/media/C6NjDDZUoAIpmSu.jpg";
pics[5] = "http://www.rantlifestyle.com/wp-content/uploads/2014/07/panda-playing_1703682i1.jpg";
pics[6] = "http://cdn.history.com/sites/2/2017/03/GettyImages-157278376.jpg";
pics[7] = "https://www.gannett-cdn.com/-mm-/cd480b45780d6fababc295d1b435b32632390dbd/c=326-0-5433-3840&r=x513&c=680x510/local/-/media/2017/04/18/USATODAY/USATODAY/636281134078453865-BIC-101.jpg";
pics[8] = "http://media.npr.org/assets/news/2010/01/30/tianshan2-1a2a29b83bc7a670bf8210d9c6daefa3ba46f971-s900-c85.jpg";
pics[9] = "http://d2ouvy59p0dg6k.cloudfront.net/img/web_113974_1_434279.jpg";
pics[10] = "https://nationalzoo.si.edu/sites/default/files/styles/slide_small_scale/public/newsroom/0038_nz_panda_0823_c_2014_david_galen.jpg?itok=tgnTpCfH";
pics[11] = "https://www.gxsoftware.com/upload_mm/9/c/b/cid904_Panda.jpg";
pics[12] = "https://cdn.searchenginejournal.com/wp-content/uploads/2016/07/Depositphotos_81405258_m-2015.jpg";
pics[13] = "http://assets.nydailynews.com/polopoly_fs/1.1891575.1407184981!/img/httpImage/image.jpg_gen/derivatives/article_970/123075154.jpg";
pics[14] = "http://www.futuretimeline.net/blog/images/1704.jpg";
pics[15] = "http://img.timeinc.net/time/photoessays/2011/panda_wolong/panda_wolong_01.jpg";
pics[16] = "http://static4.businessinsider.com/image/59285ce05124c93144b8cd3e-1190-625/fingers-crossed-washington-zoo-hopes-to-get-panda-pregnant-again.jpg";
pics[17] = "http://www.stevebloom.com/images/b/002683-SB1.jpg";
pics[18] = "http://3.bp.blogspot.com/_ZtkXOONKbQI/TOesgMcSQEI/AAAAAAAAABI/Gip4hrQvrZY/s1600/Picture+8.png";
pics[19] = "https://timedotcom.files.wordpress.com/2015/02/panda-cub.jpg?w=720&quality=85";
pics[20] = "https://pbs.twimg.com/media/C-ZEDzgUMAArpTK.jpg";
pics[21] = "https://pbs.twimg.com/media/CFH_bAMWAAEwwIf.jpg:large";
pics[22] = "https://c402277.ssl.cf1.rackcdn.com/photos/1618/images/story_full_width/giant-panda-what-wwf-is-doingHI_113976.jpg?1345548891";
pics[23] = "https://pbs.twimg.com/media/BzBNj92CYAA13cB.jpg";
pics[24] = "http://giantpandaglobal.com/wp-content/uploads/2012/10/121010-r9c0699dt1-620x413.jpg";
pics[25] = "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/26/1g/p0261gbz.jpg";
pics[26] = "https://travelbrigade.files.wordpress.com/2013/05/mother-panda-bai-yun-and-baby-panda-yun-zi-courtesy-san-diego-zoo.jpg";
pics[27] = "https://www.zoossa.com.au/wp-content/uploads/GiantPanda3Slider.jpg";
pics[28] = "https://thumbs-prod.si-cdn.com/CwSCnNmriuXNNF9Gz2Vr0CGkKPw=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/ad/4b/ad4be279-14e2-4c57-af26-a9b8305d8ec2/panda_baby.jpeg";
pics[29] = "https://media1.s-nbcnews.com/j/newscms/2016_39/1162497/panda-today-160930-03_6845ae9da2fc8c2ce6005218c55f4900.today-inline-large.jpg";
pics[30] = "https://ichef-1.bbci.co.uk/news/624/cpsprodpb/9D30/production/_98004204_gettyimages-97653323.jpg";
pics[31] = "http://www.mommymusings.com/wp-content/uploads/2017/06/panda1.jpeg";
pics[32] = "http://nation.com.pk/print_images/large/2015-03-16/chinese-man-wins-payout-over-panda-bite-1426524350-5223.jpg";
pics[33] = "https://goparabolic.com/wp-content/uploads/2017/06/how_to_hug.png";
pics[34] = "https://cdn.thinglink.me/api/image/746526321227595777/1240/10/scaletowidth"; 

for (var i = 0; i < images.length; i++) {
	images[i].src = pics[i];
}

//Writing
var h1s = document.querySelectorAll("h1");
var ps = document.querySelectorAll("p");

for (var i = 0; i < h1s.length; i++) {
	if (i % 2 === 0) {
		h1s[i].innerHTML = "PANDAS ARE AWESOME!!!"
	} else {
		h1s[i].innerHTML = "PANDAS RULLEEEE!!!"
	}
}

for (var i = 0; i < h1s.length; i++) {
	ps[i].innerHTML = ps[i].innerHTML.replace(/\s\w{1,3}\s/g, ' !?! ');
	ps[i].innerHTML = ps[i].innerHTML.replace(/\s\w{7,9}\s/g, '<em> pandas equal fluffy </em>');
	ps[i].innerHTML = ps[i].innerHTML.replace(/\s\w{4}\s/g, ' <u>bamboo</u> ');
}

//Hover

function changeBrightness(number) {
	images[number].addEventListener('mouseover', function() { 
    	images[number].setAttribute('style','filter: brightness(200%)'); 
	});

	images[number].addEventListener('mouseout', function() { 
    	images[number].setAttribute('style','filter: brightness(100%)'); 
	});
}

changeBrightness(15);
changeBrightness(20);
changeBrightness(24);
changeBrightness(27);

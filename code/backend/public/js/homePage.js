window.onload = start;



// slider
var number = Math.floor(Math.random()*3)+1;
		
var timer1=0;
var timer2=0;
var lockSlider= false;
				
function setSlide(slideNumber)
{
		clearTimeout(timer1);
		clearTimeout(timer2);
		number = slideNumber - 1;		
		hideSlide();
		setTimeout("slider()", 500);
}

function hideSlide()
{
		$("#photo-hotel").fadeOut(500);

}

function slider()
{
	number ++; if (number>3) number=1;
	
	var file=[];
	for (i=0; i<6; i++)
	{
					
		file[i] = "<img src=\"img/home/"+number+".jpg\"/>";
		$('#photo-hotel').html(file[i]).fadeIn(500);	
	}			
	timer1=setTimeout("slider()",3500);
	timer2=setTimeout("hideSlide()",3000);
}


// timer
function timer()
{
	var time = new Date();
    var day = time.getDate();
        if (day == 1 || day == 21 || day == 31) day = day + "st";
        else if (day == 2 || day == 22) day = day + "nd";
        else if (day == 3 || day ==23) day = day + "rd";
        else  day = day +"th";
	var month = time.getMonth()+1;
		if (month==1) month="Jan";
		if (month==2) month="Feb";
		if (month==3) month="Mar";
		if (month==4) month="Apr";
		if (month==5) month="May";
		if (month==6) month="Jun";
		if (month==7) month="Jul";
		if (month==8) month="Aug";
		if (month==9) month="Sep";
		if (month==10) month="Oct";
		if (month==11) month="Nov";
		if (month==12) month="Dec"; 
	var year = time.getFullYear();
	
	var hour = time.getHours();
		if (hour<10) hour= "0"+hour;
	var minute = time.getMinutes();
		if (minute<10) minute = "0"+minute;
	var second = time.getSeconds();
		if (second<10) second = "0"+second;
			
	document.getElementById("clock").innerHTML= hour+":"+minute+":"+second +"</br>  "+day+" "+month+" "+year;
	setTimeout("timer()",1000);
}


//start
function start(){
	timer();
	slider();
	homeButtons();
}


function homeButtons(){
	$('.contact').on('click', function(){
		if (lockSlider == false){
			hideSlide();
			setTimeout('showContact()',500);
			lockSlider = true;
			clearTimeout(timer1);
			clearTimeout(timer2);
		}else {
			hideSlide();
			lockSlider = false;
			setTimeout('slider()',500).fadeIn(500);
		}
	})
}

function showContact(){
	$('#photo-hotel').html('<h1>Good Hotel</h1><div> Adama Zielińskiego 35 St. </br> 32-059 Kraków POLAND</br>Tel.No. +48 12 345 67 89</div> <h2>Reception</h2> <div> Tel.No.  +48 12 345 67 89</br> Email: reception@goodhotel.com</div> <h2>Group Booking Department</h2> <div>Tel.No. +48 12 345 67 89</br>Email: busines@goodhotel.com</div>').slideDown(800);
}

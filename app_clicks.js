function open_window(ele_clicked) {
    var window_2_be_opened = NaN;
    var button_id = ele_clicked.id
    //console.log(ele_clicked.id)
    if (button_id == "open_start_widow") {
        window_2_be_opened = document.getElementById("title page")
    }
    else if (button_id == "open_tracks_part") {
        window_2_be_opened = document.getElementById("window_tracks_and_sponsors")
        console.log("blahbalah",window_2_be_opened.style.display)

    }
    else if (button_id == "open_sponsors_part") {
        window_2_be_opened = document.getElementById("window_sponsors_only")

    }


    if (window_2_be_opened.style.display != "block") {

        window_2_be_opened.style.display = 'block'
        console.log(document.documentElement.clientWidth)
        var whereX = Math.floor(Math.random() * (30))+10;
        var whereY = Math.floor(Math.random() * (40));

        window_2_be_opened.style.top = whereX+"%";
        window_2_be_opened.style.left = whereY+"%";
        console.log("niwuefhuiwehfuiehfw",whereX, whereY, window_2_be_opened.style.top,window_2_be_opened.style.left )


    }
}

function app_back_color(ele_clicked){
    // console.log("color change")

    ele_clicked.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    
    document.onmousedown = function (e) {
        ele_clicked.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
}
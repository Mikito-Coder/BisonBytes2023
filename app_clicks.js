function open_window(ele_clicked) {
    var window_2_be_opened = NaN;
    var button_id = ele_clicked.id;
    var bottom_bar_id_button = NaN
    //console.log(ele_clicked.id)
    if (button_id == "open_start_widow") {
        window_2_be_opened = document.getElementById("title page")
        bottom_bar_id_button = document.getElementById("bottom_bar_info")
    }
    else if (button_id == "open_tracks_part") {
        window_2_be_opened = document.getElementById("window_tracks_and_sponsors")
        bottom_bar_id_button = document.getElementById("bottom_bar_registration")
    }
    else if (button_id == "open_sponsors_part") {
        window_2_be_opened = document.getElementById("window_sponsors_only")
        bottom_bar_id_button = document.getElementById("bottom_bar_sponsors")

    }
    else if (button_id == "open_registration_part") {
        window_2_be_opened = document.getElementById("window_registration")

    }
    else if (button_id == "open_questions_screen") {
        window_2_be_opened = document.getElementById("fqa_page")

    }
    else if(button_id == "open_insta"){
        window.open("https://www.instagram.com/bison.bytes/", "_blank");


    }
    else{
        console.log("doesn't exits",window_2_be_opened,window_2_be_opened.toString()=="NaN",window_2_be_opened.toString())
    }


    if (window_2_be_opened.toString()!="NaN" && window_2_be_opened.style.display != "block") {

        window_2_be_opened.style.display = 'block'
        console.log(document.documentElement.clientWidth)
        var whereX = Math.floor(Math.random() * (40))+20;
        var whereY = Math.floor(Math.random() * (5))+10;

        window_2_be_opened.style.top = whereY+"%";
        window_2_be_opened.style.left = whereX+"%";
        console.log("niwuefhuiwehfuiehfw",whereX, whereY, window_2_be_opened.style.top,window_2_be_opened.style.left )
        
        const windows = document.querySelectorAll(".window_box");
        windows.forEach(other_window => {
            other_window.parentNode.style.zIndex = "1";
        });
        window_2_be_opened.style.zIndex = "10";

        if (button_id == "open_registration_part") {
            window_2_be_opened.style.top = 20+"%";
            window_2_be_opened.style.left = 35+"%";
            window_2_be_opened.style.zIndex = "1";

        }

        // hree is wher the button will look pressed
        bottom_bar_id_button.style.backgroundColor = 'rgb(164, 164, 164)';
    }
}

function app_back_color(ele_clicked){
    // console.log("color change")
    ele_clicked =  ele_clicked.getElementsByClassName("app_text_tille")[0]
    ele_clicked.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    
    document.onmousedown = function (e) {
        ele_clicked.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
}

function remove_all_window(ele_clicked){
    const windows = document.querySelectorAll(".window_box");
    // console.log("ufihu3rhuif3f",windows)

    windows.forEach(other_window => {
        other_window.parentNode.style.display = 'none'
    });
}
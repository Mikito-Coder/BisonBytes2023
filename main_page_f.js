function black_out(ele_cliked) {
    var black_out_screen = document.getElementsByClassName("bottom_blackout")[0];
    var black_out_button = document.getElementsByClassName("bottom_start_button")[0];

    if (black_out_screen.style.display != 'block') {
        black_out_screen.style.display = 'block';
        const windows = document.querySelectorAll(".window_box");

        windows.forEach(other_window => {
            other_window.parentNode.style.display = 'none'
        });


        black_out_button.style.backgroundColor = 'rgb(180, 255, 186)';

    }
    else {
        black_out_screen.style.display = 'none';
        black_out_button.style.backgroundColor = 'rgb(72, 72, 72)';

    }
    console.log("thhehthythtehtehet", black_out_screen.style)

}

function hover_button(ele_cliked) {
    console.log("byebyebyet")
    ele_cliked.style.backgroundColor = 'rgb(0, 0, 0,0.1)';

    document.onmouseout = (e) => {
        //ele_cliked.style.padding = "1px";
        ele_cliked.style.backgroundColor = 'rgba(72, 72, 72,0)';
    }

}
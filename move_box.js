// var exit = document.querySelectorAll(".exit_box");
// var display = 0;
function hideShow(the_exit_box) {

    const whole_window = the_exit_box.parentElement.parentElement.parentElement;

    if (whole_window.display == 1) {
        whole_window.style.display = 'block';
    }
    else {
        whole_window.style.display = 'none';
    }

}


function move(ele_clicked) {
    console.log("yooo",ele_clicked)
    if (ele_clicked == "window_box" ){
        console.log("yooo",)
    }

    var the_element;

    const windows = document.querySelectorAll(".window_box");

    windows.forEach(each_window => {
        const window_mover = each_window.getElementsByClassName("top_box")[0].getElementsByClassName("top_click_box")[0]
        window_mover.addEventListener("mousedown", () => {

            each_window.parentNode.style.position = "absolute"
            the_element = each_window

            document.onmousemove = (e) => {
                if (the_element!=null){
                    const mouseX = e.movementX;
                    const mouseY = e.movementY;
                    each_window.parentNode.style.left = each_window.parentNode.offsetLeft + mouseX + 'px';
                    each_window.parentNode.style.top = each_window.parentNode.offsetTop + mouseY + 'px';
                    console.log(mouseX,mouseY, each_window.parentNode.style.left, each_window.parentNode.style.top)
                 
                }



            }
        })

        document.onmouseup = function (e) {
            the_element = null
        }
    });
}
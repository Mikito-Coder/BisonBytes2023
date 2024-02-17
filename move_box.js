window.onload = function () {



    const windows = document.querySelectorAll(".window_box");





    windows.forEach(each_window => {
        const window_mover = each_window.getElementsByClassName("top_box")[0].getElementsByClassName("top_click_box")[0]
        window_mover.addEventListener("touchmove", (e) => {


            console.log("ufihu3rhuif3f hi")
            // each_window.parentNode.style.position = "absolute"

            //const = each_window.parentNode.style.left

            //const has_to_be = true;
            if (each_window != null) {
                console.log("YOOOOOOOO")

                var has_to_be = parseInt(each_window.parentNode.style.left.substring(0, each_window.parentNode.style.length));
                var filler = has_to_be > 0;
                //console.log("has ", typeof has_to_be, has_to_be, filler)
                if (true) {// idk why this isn;rt workinh
                    const mouseX = e.movementX;
                    const mouseY = e.movementY;
                    let x = e.pageX - this.state.rel.x;
                    let y = e.pageY - this.state.rel.y;
                    each_window.parentNode.style.left = e.targetTouches[0].pageX + 'px';
                    each_window.parentNode.style.top = e.targetTouches[0].pageY + 'px';
                    console.log("NAHHHHHHh", e.changedTouches[0].pageX,e.changedTouches[0].pageY,)

                    if (x < 0 || x > each_window.innerWidth - this.state.dialogWidth) {
                        each_window.parentNode.style.left = each_window.innerWidth - this.state.dialogWidth+ 'px';

                    }
                    else{
                        each_window.parentNode.style.left = each_window.parentNode.offsetLeft + mouseX + 'px';
                    }
                    if (y < 0 || y > each_window.innerHeight - this.state.dialogHeight) {
                        each_window.parentNode.style.top = each_window.innerHeight - this.state.dialogHeight;
                    }
                    else{
                        each_window.parentNode.style.top = each_window.parentNode.offsetTop + mouseY + 'px';

                    }
                    console.log("moved")
                    //console.log(mouseX, mouseY, each_window.parentNode.style.left, each_window.parentNode.style.top)
                    //console.log(parseInt(each_window.parentNode.style.left.substring(0, each_window.parentNode.style.length)))


                }
                // stops window from moving off scren
                
            }





            document.onmouseup = function (e) {
                each_window = null
                //console.log("STOPPPP")
            }
        })


    });

}


// var exit = document.querySelectorAll(".exit_box");
// var display = 0;
function hideShow(the_exit_box) {
    var bottom_bar_id_button = NaN

    const whole_window = the_exit_box.parentElement.parentElement.parentElement.parentElement;
    console.log(whole_window.id, "hi")
    if (whole_window.display == 1) {
        whole_window.style.display = 'block';
    }
    else {
        whole_window.style.display = 'none';

        if (whole_window.id == "title page") {

        }
        else if (whole_window.id == "window_sponsors_only") {
            bottom_bar_id_button = document.getElementById("bottom_bar_sponsors")
            bottom_bar_id_button.style.backgroundColor = 'rgb(164, 164, 164)';
        }

    }

}


function move(ele_clicked) {

    //console.log(document.getElementById("all_windows").childNodes)

    var the_element;

    const windows = document.querySelectorAll(".window_box");
    // console.log("ufihu3rhuif3f",windows)

    windows.forEach(other_window => {
        // console.log("parenttt ", other_window.parentNode)
        other_window.parentNode.style.zIndex = "1";
    });
    ele_clicked.style.zIndex = "10";

    // console.log("ummmmmmmmmmemefmefer",other_window.className,other_window.style.zIndex);


    windows.forEach(each_window => {
        const window_mover = each_window.getElementsByClassName("top_box")[0].getElementsByClassName("top_click_box")[0]
        window_mover.addEventListener("mousedown", () => {



            // each_window.parentNode.style.position = "absolute"

            document.onmousemove = (e) => {
                //const = each_window.parentNode.style.left

                //const has_to_be = true;
                if (each_window != null) {


                    var has_to_be = parseInt(each_window.parentNode.style.left.substring(0, each_window.parentNode.style.length));
                    var filler = has_to_be > 0;
                    //console.log("has ", typeof has_to_be, has_to_be, filler)
                    if (true) {// idk why this isn;rt workinh
                        const mouseX = e.movementX;
                        const mouseY = e.movementY;
                        each_window.parentNode.style.left = each_window.parentNode.offsetLeft + mouseX + 'px';
                        each_window.parentNode.style.top = each_window.parentNode.offsetTop + mouseY + 'px';
                        //console.log(mouseX, mouseY, each_window.parentNode.style.left, each_window.parentNode.style.top)
                        //console.log(parseInt(each_window.parentNode.style.left.substring(0, each_window.parentNode.style.length)))

                    }

                }



            }

            document.onmouseup = function (e) {
                each_window = null
                //console.log("STOPPPP")
            }
        })


    });
}





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
                console.log("TOOOOOO", window.width)

                var has_to_be = parseInt(each_window.parentNode.style.left.substring(0, each_window.parentNode.style.length));
                var filler = has_to_be > 0;
                //console.log("has ", typeof has_to_be, has_to_be, filler)
                if (true) {// idk why this isn;rt workinh
                    const mouseX = e.movementX;
                    const mouseY = e.movementY;
                    each_window.parentNode.style.left = e.targetTouches[0].pageX + 'px';
                    each_window.parentNode.style.top = e.targetTouches[0].pageY + 'px';
                    // console.log("NAHHHHHHh", e.changedTouches[0].pageX,e.changedTouches[0].pageY,)
                 


                    each_window.parentNode.style.left = each_window.parentNode.offsetLeft + mouseX + 'px';
                    each_window.parentNode.style.top = each_window.parentNode.offsetTop + mouseY + 'px';
                    var w = window.screen.width;
                    
                    var h = window.screen.height;
                    console.log("NAHHHHHHh",w,h,each_window.parentNode.offsetLeft,each_window.parentNode.offsetWidth)

                    // each_window.parentNode.style.top = each_window.parentNode.offsetTop + mouseY + 'px';
                    // each_window.parentNode.style.left = each_window.parentNode.offsetLeft + mouseX + 'px';



                    if (each_window.parentNode.offsetLeft<0){
                        each_window.parentNode.style.left = 0 + 'px';
                        console.log("backkkkk")
                    }
                    if (each_window.parentNode.offsetTop<0){
                        each_window.parentNode.style.top = 0 + 'px';
                        console.log("backkkkk")
                    }
                    if (w<=each_window.parentNode.offsetLeft){
                        each_window.parentNode.style.left =w+ 'px';
                        console.log("WOWWWWWWW:  :EWDQWDQDeqwd",each_window.parentNode.offsetLeft,each_window.parentNode.offsetWidth,w)
                    }
                   
                    if (each_window.parentNode.offsetTop>window.innerHeight-each_window.parentNode.offsetHeight){
                        each_window.parentNode.style.top = window.innerHeight-each_window.parentNode.offsetHeight + 'px';
                        console.log("bottommmmm")
                    }
                    console.log("moved")
                   
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
                        // console.log("YOOOOOOOO", window.innerWidth,window.innerHeight,each_window.parentNode.style.left, each_window.parentNode.style.top,each_window.parentNode.clientHeight ,each_window.parentNode.offsetHeight)
                        // console.log("YOOOOOOOO", window.innerWidth,window.innerHeight,each_window.parentNode.style.left, each_window.parentNode.style.top,each_window.parentNode.clientHeight ,each_window.parentNode.offsetHeight)

                        console.log("YOOOOOOOO", window.innerWidth,window.innerHeight,each_window.parentNode.style.left, each_window.parentNode.style.top,each_window.parentNode.clientHeight ,each_window.parentNode.offsetHeight)
                    }
                    if (each_window.parentNode.offsetLeft<0){
                        each_window.parentNode.style.left = 0 + 'px';
                        console.log("backkkkk")
                    }
                    if (each_window.parentNode.offsetTop<0){
                        each_window.parentNode.style.top = 0 + 'px';
                        console.log("backkkkk")
                    }
                    if (each_window.parentNode.offsetLeft+each_window.parentNode.offsetWidth>window.innerWidth){
                        each_window.parentNode.style.left = window.innerWidth-each_window.parentNode.offsetWidth + 'px';
                        console.log("UGLYYYYY")
                    }
                    if (each_window.parentNode.offsetTop>window.innerHeight-each_window.parentNode.offsetHeight){
                        each_window.parentNode.style.top = window.innerHeight-each_window.parentNode.offsetHeight + 'px';
                        console.log("bottommmmm")
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






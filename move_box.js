// var exit = document.querySelectorAll(".exit_box");
// var display = 0;
function hideShow(the_exit_box) {

    const whole_window = the_exit_box.parentElement.parentElement.parentElement.parentElement;

    if (whole_window.display == 1) {
        whole_window.style.display = 'block';
    }
    else {
        whole_window.style.display = 'none';
    }

}


function move(ele_clicked) {

    console.log(document.getElementById("all_windows").childNodes)

    var the_element;

    const windows = document.querySelectorAll(".window_box");
    // console.log("ufihu3rhuif3f",windows)

    windows.forEach(other_window => {
        console.log("parenttt ",other_window.parentNode)
        other_window.parentNode.style.zIndex = "1";
        // console.log("ummmmmmmmmmemefmefer",other_window.className,other_window.style.zIndex);
    });
    ele_clicked.style.zIndex = "10";




    windows.forEach(each_window => {
        const window_mover = each_window.getElementsByClassName("top_box")[0].getElementsByClassName("top_click_box")[0]
        window_mover.addEventListener("mousedown", () => {
            


            // each_window.parentNode.style.position = "absolute"

            document.onmousemove = (e) => {
                //const = each_window.parentNode.style.left
                
                //const has_to_be = true;
                if (each_window!=null ){
                    

                    var has_to_be = parseInt(each_window.parentNode.style.left.substring(0,each_window.parentNode.style.length));
                    var filler = has_to_be>0;
                    console.log("has ",typeof has_to_be, has_to_be, filler)
                    if(true){// idk why this isn;rt workinh
                        const mouseX = e.movementX;
                        const mouseY = e.movementY;
                        each_window.parentNode.style.left = each_window.parentNode.offsetLeft + mouseX + 'px';
                        each_window.parentNode.style.top = each_window.parentNode.offsetTop + mouseY + 'px';
                        console.log(mouseX,mouseY, each_window.parentNode.style.left, each_window.parentNode.style.top)
                        console.log(parseInt(each_window.parentNode.style.left.substring(0,each_window.parentNode.style.length)))
    
                    }
                   
                }



            }

            document.onmouseup = function (e) {
                each_window = null
                console.log("STOPPPP")
            }
        })

        
    });
}
function move(ele_clicked) {
    console.log("yooo",ele_clicked)
    // if (ele_clicke == "window_box" ){
    //     console.log("yooo",)
    // }

    var the_element;

    const each_window = ele_clicked;
    const window_mover = each_window.getElementsByClassName("top_box")[0].getElementsByClassName("top_click_box")[0]
    window_mover.addEventListener("mousedown", (ea) => {

        each_window.style.position = "absolute"
        the_element = each_window

        document.onmousemove   = (e) => {


            const elementW = window_mover.offsetLeft;
            const elementH = window_mover.offsetTop;

            ea.clientX
            const x = elementW + e.clientX-ea.clientX ;
            const y = elementH+ e.clientY- ea.clientY;
            

            if (the_element!=null){
                the_element.style.position = 'absolute';
                the_element.style.left = `${x}px`;
                the_element.style.top = `${y}px`;
                //console.log(x,y)

            }

            // const elementW = window_mover.offsetWidth;
            // const elementH = window_mover.offsetHeight;

            // const x = e.clientX - elementW / 2;
            // const y = e.clientY - elementH / 2;

            // if (the_element!=null){
            //     the_element.style.position = 'absolute';
            //     the_element.style.left = `${x}px`;
            //     the_element.style.top = `${y}px`;
            //     //console.log(x,y)

            // }


        }
    })
    document.onmouseup = function (e) {
        the_element = null
    }
 
    // window.forEach(each_window => {
    //     const window_mover = each_window.getElementsByClassName("top_box")[0].getElementsByClassName("top_click_box")[0]

        
    // });
}
// function move(ele_clicked) {
//     console.log("yooo",ele_clicked)
//     if (ele_clicke == "window_box" ){
//         console.log("yooo",)
//     }

//     var the_element;

//     const window = document.querySelectorAll(".window_box");

//     window.forEach(each_window => {
//         const window_mover = each_window.getElementsByClassName("top_box")[0].getElementsByClassName("top_click_box")[0]

//         window_mover.addEventListener("mousedown", () => {

//             each_window.style.position = "absolute"
//             the_element = each_window

//             document.onmousemove = (e) => {


//                 const elementW = window_mover.offsetWidth;
//                 const elementH = window_mover.offsetHeight;

//                 const x = e.clientX - elementW / 2;
//                 const y = e.clientY - elementH / 2;

//                 if (the_element!=null){
//                     the_element.style.position = 'absolute';
//                     the_element.style.left = `${x}px`;
//                     the_element.style.top = `${y}px`;
//                     console.log(x,y)

//                 }



//             }
//         })
//         document.onmouseup = function (e) {
//             the_element = null
//         }
//     });
// }



// var exit = document.querySelectorAll(".exit_box");
// var display = 0;
function hideShow(the_exit_box) {

    const whole_window = the_exit_box.parentElement.parentElement.parentElement;

    if (whole_window.display == 1) {
        whole_window.style.display = 'block';
        //display = 0;
    }
    else {
        whole_window.style.display = 'none';
        //display = 1;
    }

}



// const div = document.getElementById("window_box");

// function onDrag({movementX, movementX}){
//     let getStyle = winodw
// }



// let offsetX, offsetY;

// const move = (e) => {
//     div.style.left = `${e.clientX - offsetX}px`;
//     div.style.top = `${e.clientY - offsetY}px`;
// }

// div.addEventListener("mousedown", (e) => {
//     offsetX = e.clientX - div.offsetLeft;
//     offsetY = e.clientY - div.offsetTop; // Corrected to use e.clientY
//     document.addEventListener("mousemove", move);
// });

// document.addEventListener("mouseup", () => {
//     document.removeEventListener("mousemove", move); // Corrected the typo here
// });



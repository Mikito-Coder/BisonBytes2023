function move() {
    var the_element;
    const window = document.querySelectorAll(".window_box");

    window.forEach(each_window => {
        const window_mover = each_window.getElementsByClassName("top_box")[0].getElementsByClassName("top_click_box")[0]

        window_mover.addEventListener("mousedown", () => {

            each_window.style.position = "absolute"
            the_element = each_window

            document.onmousemove = (e) => {


                const elementW = window_mover.offsetWidth;
                const elementH = window_mover.offsetHeight;

                const x = e.clientX - elementW / 2;
                const y = e.clientY - elementH / 2;

                the_element.style.position = 'absolute';
                the_element.style.left = `${x}px`;
                the_element.style.top = `${y}px`;


                cousole.log(the_element)
            }
        })
        document.onmouseup = function (e) {
            the_element = null
        }
    });
}



// var exit = document.querySelectorAll(".exit_box");
// var display = 0;
function hideShow(the_exit_box) {

    const whole_window = the_exit_box.parentElement.parentElement;

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



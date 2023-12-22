
function move() {
    var the_element;
    const window = document.querySelectorAll(".window_box");

    window.forEach(each_window => {
        each_window.addEventListener("mousedown", () => {

            each_window.style.position = "absolute"
            the_element = each_window

            document.onmousemove = (e) => {
                var x = e.pageX
                var y = e.pageY

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






var exit = document.querySelectorAll(".exit");
var display = 0;
function hideShow() {
    console.log("hiiiiii")
    if (display == 1) {
        exit.style.display = 'block';
        display = 0;
    }
    else {
        exit.style.display = 'none';
        display = 1;
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



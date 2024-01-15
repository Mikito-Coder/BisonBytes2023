function open_window(ele_clicked) {
  const button = ele_clicked;
  const button_type = button.getElementsByClassName("app_icon")[0];
  // const names = button_type.getElementById()
  const the_id = ele_clicked.id;
  if (the_id == "start_widow") {

    document.getElementById('all_windows').insertAdjacentHTML(
        'afterbegin',
        `<div class="square_mid_window" onclick="move(this);">
        <div class="window_box">
            <div class="top_box">
                <div class="top_click_box">

                </div>
                <div class="exit_box" onclick="hideShow(this)">
                    <h1>X</h1>

                </div>
            </div>
            <div class="start_page">

                <h1 class="bison_title">BisonBytes</h1>
                <h1 class="howard_title">Howard Univeristy</h1>
                <h1 class="date_title">March 2024</h1>
                <img src="images/logos/BisonBytes-blueCompMark-plain.png" />


            </div>

        </div>

    </div>
    </div>`      
      )
    
        console.log("ummmm")
  }
  console.log("done")

document.appendChild(div);
}



function add_text(the_button){
    var the_question = the_button.parentNode;
    console.log("yooooo",the_question);
    var extra_stuff = the_question.getElementsByClassName("extra_text")[0];
    extra_stuff.style.display = 'block';
    the_button.style.display = 'none';
    console.log("adededed texttt",the_button);
    var remove_button = the_question.getElementsByClassName("remove_button")[0];
    remove_button.style.display = 'block';
}   


function remove_text(the_button){
    var the_question = the_button.parentNode;
    console.log("yooooo",the_question);
    var extra_stuff = the_question.getElementsByClassName("extra_text")[0];
    extra_stuff.style.display = 'none';
    the_button.style.display = 'none';
    console.log("adededed texttt",the_button);
    var remove_button = the_question.getElementsByClassName("add_button")[0];
    remove_button.style.display = 'block';
}

// getElementsByClassName("top_box")[0]
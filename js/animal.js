const images = [...document.images];
const onebox = [...document.querySelectorAll(".onebox")];
const strar = [
    {title:"tori",str:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title:"kirin.",str:"bbb"},
    {title:"zou",str:"bbb"},
    {title:"sirocuma",str:"bbb"},
    {title:"yagi",str:"bbb"},
    {title:"panda",str:"bbb"},
    {title:"tuyoitori",str:"bbb"},
    {title:"necochan",str:"bbb"},
    {title:"usi",str:"bbb"},
    {title:"yukihyou",str:"bbb"}

];
const textbox = document.querySelector(".textbox");


let x = 0;
images.forEach(function(tmp,index){
    tmp.addEventListener("load",() => {
        x++;
        if(x === images.length){
            onebox.forEach(function(tmp2,index){
                tmp2.classList.remove("start");
            });
        }
    });
});






onebox.forEach(function(tmp,index){
    tmp.addEventListener("click",() => {
        tmp.classList.add("on");
        textbox.classList.add("on");
        document.querySelector("#textbox_title").innerHTML= strar[index].title;
        document.querySelector("#textbox_str").innerHTML= strar[index].str;
        console.log("enter : " + strar[index].title + tmp);

    });
//    tmp.addEventListener("click",restore);


    tmp.addEventListener("mouseleave",() => {
        console.log("leave : " + index);


    });

});
textbox.addEventListener("click",restore);
function restore(){
    onebox.forEach(tmp => {
        tmp.classList.remove("on");
        textbox.classList.remove("on");
    });
}

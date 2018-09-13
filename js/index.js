window.onload = function(){
    let game = new Game()
    //创建
    game.screen = document.querySelector('.scr_top');
    game.fenbox = document.querySelector('#fenbox');
    game.smbox = document.querySelector('#smbox');
    let num = 6;
    for(let i=1;i<=num;i++){
        game.createLetter();
        
    }
    //下落
    game.run();
    //消失
    let key = this.document.querySelector('.bg_c .keyBoard');
    // console.log(key);
    key.onclick = function(event){
        if(event.target.className!="keyBoard"){
            let text = event.target.innerText;
            game.remove(text,1);
        }
    }
    //暂停
    let pause = document.querySelector('.pause');
    let play = document.querySelector('.scr_top .play');
    let pauseBox = document.querySelector('.pauseBox');
    let c_tinue =  document.querySelector('.pauseBox .play_B .continue');
    pause.onclick = function(){
        game.pause();
        pause.style.zIndex = 0; 
        play.style.zIndex = 10;
        pauseBox.style.display = "block";
    }
    //开始
    c_tinue.onclick = function(){
        game.play();
        pause.style.zIndex = 10; 
        play.style.zIndex = 0;
        pauseBox.style.display = "none";
    }
    //重新开始
    // let r_btn = document.querySelector('.alertBox .r_btn');
    // r_btn.onclick = function () {
        
    // }
}   



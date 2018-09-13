class Game{
    constructor(){
        this.screen = "";
        this.letters = [];
        this.sm = 10;
        this.fen = 0;
        this.fenbox;
        this.smbox;
    }
    // 创建字母
    createLetter(){
        let div = document.createElement('div');
        div.className="l_d";
        
        let asc,letter;

        do{
            asc = Math.floor(Math.random()*26+65);
            letter = String.fromCharCode(asc);
        }while(letterrepeat(letter,this.letters))

        div.style.backgroundImage = `url(image/A_Z/${letter}.png)`;
        let left;
        // console.log(left,top)
        
        do{
            left =Math.random()*(7.5-0.53*3)+0.53;
        }while(leftrepeat(left,this.letters));
        
        div.style.left = `${left}rem`;
        
        let top =Math.random();
        div.style.top = `${top}rem`;

        this.screen.appendChild(div);
        let obj = {}

        let speed =Math.random()*0.05+0.05;

        obj['top' ]= top;        //obj.top = top;
        obj['left'] = left;
        obj['node'] = div;
        obj['name'] = letter;
        obj['speed'] = speed;
        this.letters.push(obj);
        // console.log(obj)
    }
    // 字母下落
    run(){
        // let that = this;
        this.t = setInterval(()=>{
            for(let item of this.letters){
                item['top'] += item['speed'];
                if(item['top']>=8.2){
                    // this.screen.removeChild(item['node'])
                    // let index = this.letters.indexOf(item);
                    // this.letters.splice(index,1);
                    // this.remove();
                    // this.createLetter();
                    this.remove(item['name'],0);
                    continue;
                }
                item['node'].style.top = item['top'] + "rem";
            }
        },50)
    }
    // 字母消失
    remove(letter,type){
        //需要传入字母
        //从screen中移除对应节点
        //从this.letters中移除对应的数据
        //type  0 减生命  1 加分
        for(item of this.letters){
            if(item['name']==letter){
                let index = this.letters.indexOf(item);
                this.screen.removeChild(item['node'])
                this.letters.splice(index,1);
                this.createLetter();

                if(type==0){
                    this.sm--;
                }else if(type==1){
                    this.fen++;
                }
                this.smbox.innerText = this.sm;
                this.fenbox.innerText = this.fen;
                let alertBox = document.querySelector('.alertBox');
                if(this.smbox.innerText == 0){
                    // console.log(this.smbox.innerText)
                    alertBox.style.display = "block";
                    clearInterval(this.t)
                }
            }
        }
    }
    //暂停
    pause(){
        clearInterval(this.t);     
    }
    //开始
    play(){
        this.run();    
    }
    //重新开始
    // repeat(){
    //     this.letters = [];
    //     game.run(); 
    // }





}











function leftrepeat(left,letters) {
    //重复返回true      不重复返回false
    for(item of letters){
        if(Math.abs(item['left']-left)<0.53){
            return true;
        }
    }
    return false;
}
function letterrepeat(letter,letters) {
    for(item of letters){
        if(item['name']==letter){
            return true;
        }
    }
    return false;
}
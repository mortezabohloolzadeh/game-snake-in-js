let _divasli = document.getElementById("mar")
   let _kalemar = document.getElementById("kalemar")
let _clear_right
let _clear_bottom
let _clear_top
let _clear_left


// start function haye harekat mar

   let i = 0

   let _px = 0
   let _pxtb = 0



   let f = 0
function _creat(){
 _divasli.appendChild( document.createElement("div"))


}
function _remove(){


    for(i = 0; i<document.querySelectorAll("div>div").length;i++){
        document.querySelectorAll("div>div")[i].remove()
    }

}


_creat()
_creat()
_creat()
_creat()
_creat()
_creat()

let _loghmeh =  document.getElementById("loghmeh") 
function _loghmeh1(){
let adad_pl = parseInt((Math.random() * 98))
let adad_pt = parseInt((Math.random() * 98))
_loghmeh.style.left = adad_pl + "%"
    _loghmeh.style.top = adad_pt + "%"

}


_loghmeh1()



function _right(){
   _clear_right = setInterval(() => {
    
    console.log(document.querySelectorAll("div>div").length)
        if(i<document.querySelectorAll("div>div").length ){
            _kalemar.style.left = _px + "%"
            document.querySelectorAll("div>div")[i].style.left = _px + "%"
            document.querySelectorAll("div>div")[i].style.top = _pxtb + "%"
        _kalemar.style.top = _pxtb + "%"
        _px = (_px + 1)
        i++
       
        }
     
        else{
i=0
        }
        _chek()  
    
        if(_px > 99){
            clearInterval(_clear_right)
            _remove()
            _px = 0
            _pxtb = 0
            alert("game over");
            
        }
    
    }, 80);
}


function _left(){
     _clear_left = setInterval(() => {
        if(i<document.querySelectorAll("div>div").length ){
            _kalemar.style.left = _px + "%"
            document.querySelectorAll("div>div")[i].style.left = _px + "%"
            document.querySelectorAll("div>div")[i].style.top = _pxtb + "%"
        _kalemar.style.top = _pxtb + "%"
        _px = (_px - 1)
        i++
        }
     
        else{
i=0
        }
        _chek()

        if(_px < -1){
            clearInterval(_clear_left)
            _remove()
            _px = 0
            _pxtb = 0
            alert("game over")
            
        }

    }, 80);
}

function _bottom(){ 
    _clear_bottom = setInterval(() => {
        if(i<document.querySelectorAll("div>div").length ){
            _kalemar.style.top = _pxtb  + "%"
            document.querySelectorAll("div>div")[i].style.top = _pxtb + "%"
        
            document.querySelectorAll("div>div")[i].style.left = _px + "%"
        _kalemar.style.left = _px  + "%"
        
        _pxtb = (_pxtb + 1)
        i++
        }
         
        else{
i=0
        }
        _chek()

        if(_pxtb > 99){
            clearInterval(_clear_bottom)
            _remove()
            _px = 0
            _pxtb = 0
            alert("game over")
        }
    }, 80);
}


function _top(){ 
    
     _clear_top = setInterval(() => {
        if(i<document.querySelectorAll("div>div").length ){
        
            document.querySelectorAll("div>div")[i].style.top = (_pxtb +1) + "%"
            document.querySelectorAll("div>div")[i].style.left = _px + "%"
        _kalemar.style.top = _pxtb + "%"
        _kalemar.style.left = _px  + "%"
        _pxtb = (_pxtb - 1)
        i++
        }
         
        else{
i=0
        }
        _chek()

        if(_pxtb < -1){
            clearInterval(_clear_top)
            _remove()
            _px = 0
            _pxtb = 0
            alert("game over")
        }



    }, 80);
}

//  end function haye harekat mar
// start click haye, chap, rast, bala va pain

let _flagup = 0
let _flagright = 0
let _flagdown = 0
let _flagleft = 0
window.addEventListener("keyup" , (event)=>{

 
    if(event.keyCode == 37){
        if(_flagleft == 0){
       _flagleft++
       _flagup = 0
      _flagright++
      _flagdown = 0
        clearInterval(_clear_right)
        clearInterval(_clear_bottom)
        clearInterval(_clear_top)
            _left()
            
        }
        }
        else if(event.keyCode == 38){
            if(_flagup == 0){
       _flagleft = 0
       _flagup++
      _flagright = 0
      _flagdown++
            clearInterval(_clear_left)
        clearInterval(_clear_bottom)
        clearInterval(_clear_right)
            _top()
            }
        }
        else if(event.keyCode == 39){ 
            if(_flagright == 0){
       _flagleft++
       _flagup=0
      _flagright++
      _flagdown = 0   
            clearInterval(_clear_left)
        clearInterval(_clear_bottom)
        clearInterval(_clear_top)
            _right()
            }
        }
        else if(event.keyCode == 40){ 
            if(_flagdown == 0){
       _flagleft = 0
       _flagup++
      _flagright=0
      _flagdown++  
            clearInterval(_clear_top) 
            clearInterval(_clear_left)
        clearInterval(_clear_right)
            _bottom()
            }
        }



        
    })// end click haye, chap, rast, bala va pain

    function _chek(){
    if((_px+"%" == _loghmeh.style.left || (_px+1)+"%" == _loghmeh.style.left  ||  (_px-1)+"%" == _loghmeh.style.left ) && (_pxtb+"%" == _loghmeh.style.top || (_pxtb+1)+"%" == _loghmeh.style.top   || (_pxtb-1)+"%" == _loghmeh.style.top  ) ){
        let s = document.querySelectorAll("div>div").length
       
        _creat()
        _creat()
        _creat()
        _creat()
        _creat()
      
_loghmeh1()



}

}


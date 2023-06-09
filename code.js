//########//
//Ver. 1.0//
//########//



//setting starting variables
var score=0;

var multiplier=1;
var adder=1;
var rePlier=1;

var adderLevel=0;
var multiLevel=0;

var multiPrice=100;
var addPrice=10;
var rePlierPrice=2000000;

//makes stuff into scientific notation
function sciNot(take){
  var digits = take.toString().length;
  if (digits > 3){
    var zero = "0";
    var zeroes = '';
    
    for (var len = 0; len < (digits-1); len++) {
      zeroes += zero;
    }
    var sci = ('1'+zeroes);
    
    return (Math.round(100*(take/sci))/100+"e"+digits);
  }else{
    return take;
  }
}
//function to increase score by the multipliers
function increase(){
  score=Math.round(score=(score+(adder*multiplier)*rePlier));
  setText("scoreLabel", sciNot(score));
//if score is 10000 show rebirth button and score requirement
  if (score >= 10000){
    showElement('rebirth');
    showElement('rePlierPriceLabel');
    setText('rePlierPriceLabel', sciNot(2000000));
    showElement('rePlierLabel');
  }
  
}
//when main button is clicked or space is pressed -> increase()
onEvent("btn", "click", increase); 
onEvent('screen1', 'keydown', function(event){
  if (event.key == "space"){
    increase();
  }
});

//increase Adder
onEvent('add', 'click', function (){
  if (score >= addPrice && (score-addPrice) >= 0){
    score=score-addPrice;
    adderLevel+=1;

    adder+=(1+((adder*0.1)*multiplier*0.5));
    setText('addLabel', sciNot(Math.round(adder)));
    setText('scoreLabel', sciNot(score));
    addPrice=Math.round(addPrice+(adder*2));
    setText('addPriceLabel', sciNot(addPrice));
  }
});
//increase Multiplier
onEvent('plier', "click", function(){
  if (score >= multiPrice && (score-multiPrice) >= 0){
    score=score-multiPrice;
    multiLevel+=1;
    
    multiplier=multiplier+1;
    setText('plierLabel', sciNot(Math.round(multiplier)));
    setText('scoreLabel', sciNot(score));
    multiPrice=Math.round(multiPrice+multiplier*(multiPrice*5));
    setText('multiPriceLabel', sciNot(multiPrice));
  }
});
//rebirth button
onEvent('rebirth','click', function rebirth(){
  if (score >= rePlierPrice && (score-rePlierPrice) >= 0){
    var hide = ['btn',
                'scoreLabel',
                'add',
                'addLabel',
                'addPriceLabel',
                'plier',
                'plierLabel',
                'multiPriceLabel',
                'rebirth',
                'rePlierLabel',
                'rePlierPriceLabel'];
    for (var i = 0; i < (hide.length); i++){
      hideElement(hide[i]);
  
    }
    showElement('image2');
    showElement('label1');
    showElement('label2');
    setProperty("screen1", "background-color", '#f6d4f9');
        
  }
});
onEvent

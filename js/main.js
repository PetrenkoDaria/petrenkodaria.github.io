$(document).ready(showLetter);


imgCount = 8;
var showingSource =false, isInEditMode=true;

//methods

function generateRandom() {
    //lets do it based on percentage!!!
    var num = Math.floor(Math.random() * 90);
    return num;
}

function showLetter() {
    	console.log("test");
    	for (i = 0; i < imgCount; i++) {
    		var left = generateRandom();
    		var top = generateRandom();
    		console.log("left: " + left + " ,top: " + top);
    		$(".draggable").next().css({"top": top + "vh", "left": left + "vw"});
    	}
    }
    
    function enableEditMode() {
       richTextField.document.designMode='On';
     }
    
     function execCmd(command) {
       richTextField.document.execCommand(command,false,null);
     }
    
     function execCommandWithArg(command,arg){
       richTextField.document.execCommand(command,false,arg);
     }
     
     function toggleSource(){
       if(showingSource){
         richTextField.document.getElementsByTagName('body')[0].innerHTML=richTextField.document.getElementsByTagName('body')[0].textContent;
         showingSource=false;
       }else {
         richTextField.document.getElementsByTagName('body')[0].textContent=richTextField.document.getElementsByTagName('body')[0].innerHTML;
    
         showingSource=true;
       }
     }
     function toggleEdit(){
       if(isInEditMode){
         richTextField.document.designMode='off';
         isInEditMode=false;
       }else {
         richTextField.document.designMode='On';
         isInEditMode=true;
       }
     }


// Пример использования localStorage для хранения текущей темы (светлой или темной)
     const currentTheme = localStorage.getItem('theme');
     
     // Установите тему, основываясь на значении в localStorage
     if (currentTheme === 'dark') {
         document.body.classList.add('dark-theme');
     } else {
         document.body.classList.add('light-theme');
     }

// // Получаем элемент, который можно изменять в размере
//      const resizableElement = document.getElementById("resizable");
//      
//      // Переменные для отслеживания состояния изменения размера
//      let isResizing = false;
//      let startX, startY, startWidth, startHeight;
//      
//      // Обработчик события начала изменения размера
//      resizableElement.addEventListener("mousedown", (e) => {
//        isResizing = true;
//        startX = e.clientX;
//        startY = e.clientY;
//        startWidth = parseInt(
//          document.defaultView.getComputedStyle(resizableElement).width,
//          10
//        );
//        startHeight = parseInt(
//          document.defaultView.getComputedStyle(resizableElement).height,
//          10
//        );
//      });
     // 
     // // Обработчик события перемещения мыши при изменении размера
     // document.addEventListener("mousemove", (e) => {
     //   if (!isResizing) return;
     //   const width = startWidth + e.clientX - startX;
     //   const height = startHeight + e.clientY - startY;
     //   resizableElement.style.width = width + "px";
     //   resizableElement.style.height = height + "px";
     // });
     // 
     // // Обработчик события окончания изменения размера
     // document.addEventListener("mouseup", () => {
     //   isResizing = false;
     // });


function enableEditModeQ() {
        richTextFieldQ.document.designMode='On';
}
     
function execCmdQ(command) {
richTextFieldQ.document.execCommand(command,false,null);
}

function execCommandWithArgQ(command,arg){
richTextFieldQ.document.execCommand(command,false,arg);
}

function toggleSourceQ(){
if(showingSource){
  richTextFieldQ.document.getElementsByTagName('body')[0].innerHTML=richTextFieldQ.document.getElementsByTagName('body')[0].textContent;
  showingSource=false;
}else {
  richTextFieldQ.document.getElementsByTagName('body')[0].textContent=richTextFieldQ.document.getElementsByTagName('body')[0].innerHTML;

  showingSource=true;
}
}


function simulateMacRestart() {
    document.querySelector('.desktop').style.backgroundColor = '#000';
    document.querySelector('.apple-logo').style.display = 'block';
    document.querySelector('.loading-bar').style.display = 'block';

    setTimeout(function() {
        document.querySelector('.apple-logo').style.display = 'none';
        document.querySelector('.loading-bar').style.display = 'none';
        document.querySelector('.desktop').style.backgroundColor = '#fff'; // Можете изменить цвет фона обратно на белый или на ваш выбор
    }, 2000); // Измените эту цифру, чтобы регулировать длительность "перезагрузки"
}

document.getElementById('apple-button').addEventListener('click', simulateMacRestart);





$(document).ready(function(){

var stackArray = new Array();

create = function(){
var size = $("#stackSize").val();
var i;
var top = -1;


for(i=0; i<size;i++){
	stackArray.push(i);
	top = stackArray[i];	
}
 
displayStack = function(){
		for(var i=0; i<=top;i++){
			$("#stackResult").append("    " + stackArray[i]);
		}
	}
displayStack();

}

pushStack = function(n){
	stackArray.push(n);
	var s = stackArray.length;
	top = stackArray[s];
	$("#pushResult").text(stackArray);
}

pullStack = function(){
	if(stackArray.length)
	{
	stackArray.pop();
	$("#pullResult").text(stackArray);
}
 else
 {
 	$("#pullResult").text("No elements yet! Try adding some and then deleting");
 }

}



$("#createButton").on('click',function(){
	create();
});
	
$("#push").on('click',function(){
	$("#pushDesc").show();
	$("#pushInput").show();
	$("#pushShowDesc").show();
	$("#pushButton").show();
});

$("#pushButton").on('click',function(){
	var n = $("#pushInput").val();
	pushStack(n);

});

$("#pull").on('click',function(){
	$("#pullDesc").show();
	$("#pullInput").show();
	$("#pullShowDesc").show();
	$("#pullButton").show();
});

$("#pullButton").on('click',function(){
	pullStack();

});



})
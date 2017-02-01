$(document).ready(function() {
	var count=1;
	var turn= true ;//true for "x", false for "o"
	$(".box").click(function(){
		if(count < 9){	
			if($(this).text() == ""){	
				if(turn){
					$("span").empty();
					$("span").append(`<h4>O's turn</h4>`);
					$(this).text("X");
					$(this).attr("id", "X");
					turn = false;
					count++;
					checkGame();

				}
				else{
					$("span").empty();
					$("span").append(`<h4>X's turn</h4>`);
					$(this).text("O");
					$(this).attr("id", "O");
					turn = true;
					count++
					checkGame();
				}
			}
		}else{
			alert("Draw!");
			location.reload();
		}
	});

	function checkGame(){
		var rowA= $(".box-a.box-1, .box-a.box-2, .box-a.box-3").text();
		var rowB= $(".box-b.box-1, .box-b.box-2, .box-b.box-3").text();
		var rowC= $(".box-c.box-1, .box-c.box-2, .box-c.box-3").text();
		var colunm1= $(".box-1").text();
		var colunm2= $(".box-2").text();
		var colunm3= $(".box-3").text();
		var diagonal1= $(".box-a.box-1, .box-b.box-2, .box-c.box-3").text();
		var diagonal2= $(".box-a.box-3, .box-b.box-2, .box-c.box-1").text();
		if(rowA == "XXX" || rowB == "XXX" || rowC == "XXX" || colunm1 == "XXX" || colunm2 == "XXX" || colunm3 == "XXX" || diagonal1 == "XXX" || diagonal2 == "XXX"){
		alert("X won!");
		location.reload();
		}
		if(rowA == "OOO" || rowB =="OOO" || rowC == "OOO" || colunm1 == "OOO" || colunm2 == "OOO" || colunm3 == "OOO" || diagonal1 == "OOO" || diagonal2 == "OOO"){
		alert("O won!");
		location.reload();
		} 
	}
});
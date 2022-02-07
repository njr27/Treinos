	
		function ampliartexto() {
			document.getElementById('exemplo').style.fontSize='20px';	
			window.alert("Texto apliado!");
		}

		function diminuirtexto() {
			document.getElementById('exemplo').style.fontSize='12px';	
			window.alert("Texto diminuido!");
		}
		

		function red_color(){	
			document.getElementById('exemplo').style.color='red';
			window.alert("Cor vermelha aplicada!");
		}


		function blue_color(){
			document.getElementById('exemplo').style.color='blue';
			window.alert("Cor azul aplicada!");
		}


		function armazenar_numero(){
			
			console.log(parseInt(document.getElementById('num').value));
		}
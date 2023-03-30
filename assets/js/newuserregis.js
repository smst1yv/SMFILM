const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const kayitOl = document.getElementById("kayit-ol");



kayitOl.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

var user = [{userName: 'admin', password: 'admin'},
            // {userName: 'user', password:'user'},
            // {userName: 'sexavet', password: 'sexavet'}
        ];

	var enteredUsername;
	var enteredPassword;
	var x;

	function idareEt(){
		enteredUsername = document.getElementById('email').value;
		enteredPassword = document.getElementById('Password').value;
		
		for(x of user){
			if((x.userName == enteredUsername) && (x.password == enteredPassword)){
				return true;
			}else{
				return false;
			}
		}
	}

	function loginConfirm(){
		idareEt();
		if(idareEt()){
			window.open('http://127.0.0.1:5501/newlogin.html','_self');
		}else{
			alert('Kullanıcı adı ve ya Şifre hatalı');
		}
	}

	// const kayitolbtn =document.getElementById('kayitolbtn')
	// const kullanici = document.getElementById('kullaniciadi')
	// const kullanicieposta = document.getElementById('kullanicieposta')
	// const kullanicisifre = document.getElementById('kullanicisifre')
	// const sifretekrar = document.getElementById('sifretekrar')


	function validateForm() {
		var textInput = document.getElementById("kullaniciadi");
		var emailInput = document.getElementById("kullanicieposta");
		var passwordInput = document.getElementById("kullanicisifre");
		var confirmPasswordInput = document.getElementById("sifretekrar");

		if (textInput.value == "" || emailInput.value == "" || passwordInput.value == "" || confirmPasswordInput.value == "") {
			alert("Lütfen boş alanları doldurun.");
		} else if (passwordInput.value !== confirmPasswordInput.value) {
			alert("şifreler eşleşmiyor.");
		} else {
			window.location.href = "http://127.0.0.1:5501/newuser.html";
		}
	}


	


fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
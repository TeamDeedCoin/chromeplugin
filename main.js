
$(document).ready(function() {

	/* Ethereum 
	var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"},{"indexed":false,"name":"_data","type":"bytes"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}];
	var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/b132dd2604d743339549679749cbfedf"));
	var adminaddress = "0x48F5C3f4012A46c3F1331b7590EcCaD8fa96f4bC";
	var deedcontract = "0x7046b8988d591b46c1e4562a1166745f24167a17";
	/* */

	/* GoChain */
	var abi = [{"constant": true, "inputs": [], "name": "name", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "_address", "type": "address"} ], "name": "balanceOf", "outputs": [{"name": "balance", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "owner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "symbol", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transfer", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}, {"name": "_data", "type": "bytes"} ], "name": "transfer", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "newOwner", "type": "address"} ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {"payable": false, "stateMutability": "nonpayable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "previousOwner", "type": "address"}, {"indexed": true, "name": "newOwner", "type": "address"} ], "name": "OwnershipTransferred", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {"indexed": true, "name": "_to", "type": "address"}, {"indexed": false, "name": "_value", "type": "uint256"}, {"indexed": false, "name": "_data", "type": "bytes"} ], "name": "Transfer", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {"indexed": true, "name": "_to", "type": "address"}, {"indexed": false, "name": "_value", "type": "uint256"} ], "name": "Transfer", "type": "event"} ];
	var web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.gochain.io/"));
	var adminaddress = "0x48F5C3f4012A46c3F1331b7590EcCaD8fa96f4bC";
	var deedcontract = "0xDEED20dBe09a9306f4beAa32Be70A06Bc12bd241";
	/*var deedcontract = "0x799884b029D94ce695006d39AdD1935796428bB9";*/
	/* */

	var getGasPrice = web3.eth.gasPrice;
	var loggedin = false;
	var gasIndex = 0.000000001;
	var ethaddress = localStorage.getItem('ethaddress');
	var localfirstname = localStorage.getItem('firstname');
	var locallastname = localStorage.getItem('lastname');
	var localemail = localStorage.getItem('email');
	var localphone = localStorage.getItem('phone');
	var encpk = localStorage.getItem('pk');
	var ethbalance = 0;
	var deedbalance = 0;
	var wei = 1000000000000000000;
	var abiobject = web3.eth.contract(abi);
	var Contract = abiobject.at(deedcontract);
	if(!ethaddress) ethaddress = "";
	//var DOMAIN = "http://127.0.0.1";
	var DOMAIN = "https://www.deedcoin.com";
	var TOKEN = "";
	var zws_id = "X1-ZWz18acpdyyrd7_8jmj2";

	if(localfirstname === null)
		localfirstname = "";
	if(locallastname === null)
		locallastname = "";
	if(localemail === null)
		localemail = "";
	if(localphone == null)
		localphone = "";


	chrome.cookies.get({
		url: DOMAIN,
		name: "DCPLUGINTOKEN"
	}, function(cookie) {
		if(cookie) {
			loggedin = true;
			TOKEN = cookie.value;
			$("#localname").html(fcap(localfirstname)+' '+fcap(locallastname)+'<br><span style="opacity: 0.5; font-size: 13px;">DEED: '+getDeedBalance(ethaddress)+'</span>');
			$(".logoutbtn").html("Logout");
			$(".loginbtn").html("");
			$("#ethaddress").val(ethaddress);
			$("#ethbalance").val(getEthBalance(ethaddress));
			$("#deedbalance").val(getDeedBalance(ethaddress));
			$("#instructions").html("<h2>Click on <b>next</b> to see this property in person,<br>or you can continue browsing Zillow for other<br>properties you may be interested in.</h2>");
		} else {
			$(".logoutbtn").html("");
			$("#ethaddress").val("0x0000000000000000000000000000000000000000");
			$("#ethbalance").val("0");
			$("#deedbalance").val("0");
			$("#instructions").html("<h3>1) Click on <b>LOGIN</b> to sign into your Deedcoin profile.</h3><h3>2) If you do not have a profile yet, you can create one.</h3><h3>3) after logging in, click <b>NEXT</b> to get paired with your agent.</h3>");
		}
	});


	/* EVENTS */

	$("#beginbtn").click(function() {
		$("#page0").css({
			"opacity" : "0",
			"pointer-events" : "none"
		});
		$("#page1").css({
			"opacity" : "1",
			"pointer-events" : "all"
		});
	});


	$("#next").click(function() {
		chrome.cookies.get({
			url: DOMAIN,
			name: "DCPLUGINTOKEN"
		}, function(cookie) {
			if(cookie) {
				$("#page1").css({
					"opacity" : "0",
					"pointer-events" : "none"
				});
				$("#page2").css({
					"opacity" : "1",
					"pointer-events" : "all"
				});
			} else {
				$("#loginform").css({
					"pointer-events" : "all",
					"opacity" : "1"
				});
			}
		});
	});

	$(".TnC").click(function() {
		window.open(DOMAIN+"/documents/terms.pdf");
	});

	$("#back1").click(function() {
		$("#page0").css({
			"opacity" : "1",
			"pointer-events" : "all"
		});
		$("#page1").css({
			"opacity" : "0",
			"pointer-events" : "none"
		});
	});

	$("#back2").click(function() {
		$("#page1").css({
			"opacity" : "1",
			"pointer-events" : "all"
		});
		$("#page2").css({
			"opacity" : "0",
			"pointer-events" : "none"
		});
	});


	$("#request").click(function() {
		if(document.getElementById("agree").checked === false) {
			$("#agreelabel").css({ "color" : "#aa0000", "text-decoration" : "underline" });
			return false;
		}
		if(!customPrompt()) {
			return false;
		}
	});


	$("#home").click(function() {
		$("#page0").css({
			"opacity" : "1",
			"pointer-events" : "all"
		});
		$("#page1").css({
			"opacity" : "0",
			"pointer-events" : "none"
		});
		$("#page2").css({
			"opacity" : "0",
			"pointer-events" : "none"
		});
		$("#page3").css({
			"opacity" : "0",
			"pointer-events" : "none"
		});
	});


	$(".loginbtn").click(function() {
		$("#loginform").css({
			"pointer-events" : "all",
			"opacity" : "1"
		});
	});

	$(".closelogin").click(function() {
		$("#loginform").css({
			"pointer-events" : "none",
			"opacity" : "0"
		});
	});

	$("#registerbtn").click(function() {
		$("#registerform").css({
			"pointer-events" : "all",
			"opacity" : "1"
		});
	});

	$("#gobacktologin").click(function() {
		$("#registerform").css({
			"pointer-events" : "none",
			"opacity" : "0"
		});
		$("#loginform").css({
			"pointer-events" : "all",
			"opacity" : "1"
		});
	});

	$(".closeregister").click(function() {
		$("#registerform").css({
			"pointer-events" : "none",
			"opacity" : "0"
		});
	});

	$(".logoutbtn").click(function() {
		ajaxstart();
		var data = {
			token: TOKEN
		};

		$.ajax({
			url: DOMAIN+"/plugin/api/user/logouttoken",
			type: "POST",
			dataType: "json",
			data: data
		})
		.done(function(res) {
			ajaxend();

			if(res.message == "Success, logged out") {
				chrome.cookies.remove({
					url: DOMAIN,
					name: "DCPLUGINTOKEN"
				}, function() {
					window.location.reload();
				});
			} else {
				console.log(res);
			}
		});
	});

	$(".zillowlink").click(function() {
		window.open('https://www.zillow.com');
	});


	$(".avatarimg").click(function() {
		if(loggedin) {
			$("#profilepage").css({
				"pointer-events" : "all",
				"opacity" : "1"
			});
		} else {
			$("#loginform").css({
				"pointer-events" : "all",
				"opacity" : "1"
			});
		}
	});

	$(".closeprofile").click(function() {
		$("#pk").val("");
		$("#pwinput").val("");
		$("#pwinput2").val("");
		$("#profilepage").css({
			"pointer-events" : "none",
			"opacity" : "0"
		});
	});


	$("#updateprofile").click(function() {
		let pk = $("#pk").val();
		let pwinput = $("#pwinput").val();
		let pwinput2 = $("#pwinput2").val();
		var re = /^[a-fA-F0-9]{64}$/g;
		var validpk = re.test(String(pk).toLowerCase());

		if(!validpk) {
			if(pk != "") {
				$("#pk").css({ "border-color" : "red" });
				$("#profileMsg").html("");
				$("#profileMsgError").html("Please enter a valid private key <b>without</b> the '0x'");
				return false;
			}
		} else {
			if(!pwinput || pwinput == "") {
				$("#pwinput").css({ "border-color" : "red" });
				$("#profileMsg").html("");
				$("#profileMsgError").html("Please enter a password to encrypt your private key");
				return false;
			}

			if(pwinput.length < 8) {
				$("#pwinput").css({ "border-color" : "red" });
				$("#profileMsg").html("");
				$("#profileMsgError").html("For safety, passwords must be at least 8 characters long");
				return false;
			}

			if(pwinput != pwinput2) {
				$("#pwinput").css({ "border-color" : "red" });
				$("#pwinput2").css({ "border-color" : "red" });
				$("#profileMsg").html("");
				$("#profileMsgError").html("Passwords don't match");
				return false;
			}

			ethaddress = getAddressFromPK(pk);
			encpk = encryptPK(pk, pwinput);
			pk = "";
			pwinput = "";
			pwinput2 = "";
		}

		if(encpk) {
			localStorage.setItem('pk', encpk);
			localStorage.setItem('ethaddress', ethaddress);
			$("#profileMsgError").html("");
			$("#profileMsg").html("Profile Updated!");
			$("#ethbalance").val(getEthBalance(ethaddress));
			$("#deedbalance").val(getDeedBalance(ethaddress));
			$("#ethaddress").val(ethaddress);
			$("#pk").val("");
			$("#pwinput").val("");
			$("#pwinput2").val("");
			$("#rx_pk").val("");
			$("#rx_pkpw").val("");

			setTimeout(function() {
				$("#profileMsg").html("");
			},5000);

		} else {
			$("#profileMsgError").html("Error saving profile");
			console.log("Error saving profile");
			return false;
		}
	});


	$("#loginsubmit").click(function() {
		var email = $("#email").val();
		let password_raw = $("#password").val();
		var password = md5("ras@*mus1Llerdorf-"+password_raw+"_iv_");

		if(email == "") {
			$("#email").css({ "border-color" : "red" });
			return false;
		}

		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var validemail = re.test(String(email).toLowerCase());

		if(!validemail) {
			$("#email").css({ "border-color" : "red" });
			return false;
		}

		if(password_raw == "") {
			$("#password").css({ "border-color" : "red" });
			return false;
		}

		$("#password").val("");
		$("#loginMsg").html("");
		ajaxstart();

		var data = {
			email: email,
			password: password
		};

		$.ajax({
			url: DOMAIN+"/plugin/api/user/login",
			type: "POST",
			dataType: "json",
			data: data
		})
		.done(function(res) {
			ajaxend();
			console.log(res);

			if(res.message == "Invalid crendentials!") {
				$("#loginMsg").html("Invalid email / password");
			} else
			if(res.message == "You are already logged in!") {
				$("#loginMsg").html("");
				$("#email").val("");

				let sessiontoken = res.data.token;
				localfirstname = res.data.user.firstname;
				locallastname = res.data.user.lastname;
				localemail = res.data.user.email;
				localphone = res.data.user.phone;
				localStorage.setItem('firstname', localfirstname);
				localStorage.setItem('lastname', locallastname);
				localStorage.setItem('email', localemail);
				localStorage.setItem('phone', localphone);

				if(sessiontoken != "") {
					//setCookie('DCPLUGINTOKEN', sessiontoken, 1);
					chrome.cookies.set({
						url: DOMAIN,
						name: "DCPLUGINTOKEN",
						value: sessiontoken
						/*secure: true*/
					});
				}

				$("#loginform").css({
					"pointer-events" : "none",
					"opacity" : "0"
				});

				window.location.reload();

			} else
			if(res.message == "You have been successfully logged in!") {
				$("#loginMsg").html("");
				$("#email").val("");

				//console.log(res.data.token);
				//console.log(res.data.user);

				let sessiontoken = res.data.token;
				localfirstname = res.data.user.firstname;
				locallastname = res.data.user.lastname;
				localemail = res.data.user.email;
				localphone = res.data.user.phone;
				localStorage.setItem('firstname', localfirstname);
				localStorage.setItem('lastname', locallastname);
				localStorage.setItem('email', localemail);
				localStorage.setItem('phone', localphone);

				if(sessiontoken != "") {
					//setCookie('DCPLUGINTOKEN', sessiontoken, 1);
					chrome.cookies.set({
						url: DOMAIN,
						name: "DCPLUGINTOKEN",
						value: sessiontoken
						/*secure: true*/
					});
				}

				$("#loginform").css({
					"pointer-events" : "none",
					"opacity" : "0"
				});

				window.location.reload();

			} else {
				$("#loginMsg").html("");
				$("#email").val("");
			}
		});
	});


	$("#registersubmit").click(function() {
		var firstname = $("#firstname_r").val();
		var lastname = $("#lastname_r").val();
		var email = $("#email_r").val();
		var phone = $("#phone_r").val();
		let password_raw = $("#password_r").val();
		let password2_raw = $("#password2_r").val();
		var password = md5("ras@*mus1Llerdorf-"+password_raw+"_iv_");

		if(firstname == "") {
			$("#firstname_r").css({ "border-color" : "red" });
			return false;
		}

		if(lastname == "") {
			$("#lastname_r").css({ "border-color" : "red" });
			return false;
		}

		if(email == "") {
			$("#email_r").css({ "border-color" : "red" });
			return false;
		}

		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var validemail = re.test(String(email).toLowerCase());

		if(!validemail) {
			$("#email_r").css({ "border-color" : "red" });
			$("#regMsg").html("Please enter a valid email address");
			return false;
		}

		if(phone == "") {
			$("#phone_r").css({ "border-color" : "red" });
			return false;
		}

		if(password_raw == "") {
			$("#password_r").css({ "border-color" : "red" });
			return false;
		}

		if(password2_raw == "") {
			$("#password2_r").css({ "border-color" : "red" });
			return false;
		}

		if(password_raw != password2_raw) {
			$("#password_r").css({ "border-color" : "red" });
			$("#password2_r").css({ "border-color" : "red" });
			$("#regMsg").html("Passwords don't match");
			return false;
		}

		$("#password_r").val("");
		$("#password2_r").val("");
		$("#phone_r").val("");
		$("#email_r").val("");
		$("#firstname_r").val("");
		$("#lastname_r").val("");
		$("#regMsg").html("");
		ajaxstart();

		var data = {
			email: email,
			password: password,
			phone: phone,
			firstname: firstname,
			lastname: lastname
		};

		$.ajax({
			url: DOMAIN+"/plugin/api/user/saferegister",
			type: "POST",
			dataType: "json",
			data: data
		})
		.done(function(res) {
			//console.log(res);

			if(res.message == "This account already exists") {
				alert("Oops! That account already exists");
			} else if(res.message == "You have been successfully registered!") {
				$.ajax({
					url: DOMAIN+"/plugin/api/user/login",
					type: "POST",
					dataType: "json",
					data: { email: email, password: password }
				})
				.done(function(msg) {
					//console.log(msg);
					ajaxend();
					let sessiontoken = "";

					if(msg.data.token) {
						sessiontoken = msg.data.token;
						localfirstname = res.data.user.firstname;
						locallastname = res.data.user.lastname;
						localemail = res.data.user.email;
						localphone = res.data.user.phone;
						localStorage.setItem('firstname', localfirstname);
						localStorage.setItem('lastname', locallastname);
						localStorage.setItem('email', localemail);
						localStorage.setItem('phone', localphone);
					}

					if(sessiontoken != "") {
						//setCookie('DCPLUGINTOKEN', sessiontoken, 1);
						chrome.cookies.set({
							url: DOMAIN,
							name: "DCPLUGINTOKEN",
							value: sessiontoken
							/*secure: true*/
						});

						$("#registerform").css({
							"pointer-events" : "none",
							"opacity" : "0"
						});

					} else {
						console.log('logged in');
					}

					window.location.reload();
				});
			} else {
				alert("Oops, there was an internal error. Please contact support");
			}
		});
	});


	$("#email").focusin(function() {
		$("#email").css({ "border-color" : "#999" });
	});

	$("#password").focusin(function() {
		$("#password").css({ "border-color" : "#999" });
	});

	$("#password_r").focusin(function() {
		$("#password_r").css({ "border-color" : "#999" });
	});

	$("#password2_r").focusin(function() {
		$("#password2_r").css({ "border-color" : "#999" });
	});

	$("#email_r").focusin(function() {
		$("#email_r").css({ "border-color" : "#999" });
	});

	$("#firstname_r").focusin(function() {
		$("#firstname_r").css({ "border-color" : "#999" });
	});

	$("#lastname_r").focusin(function() {
		$("#lastname_r").css({ "border-color" : "#999" });
	});

	$("#phone_r").focusin(function() {
		$("#phone_r").css({ "border-color" : "#999" });
	});

	$("#ethaddress").focusin(function() {
		$("#ethaddress").css({ "border-color" : "#999" });
	});

	$("#pk").focusin(function() {
		$("#pk").css({ "border-color" : "#999" });
	});

	$("#agree").click(function() {
		$("#agreelabel").css({ "color" : "black", "text-decoration" : "none" });
	});

	$("#pwinput").focusin(function() {
		$("#pwinput").css({ "border-color" : "#999" });
		$("#profileMsgError").html("");
		$("#profileMsg").html("Pick and remember a password at least 8 characters long");
	})
	.focusout(function() {
		if($("#pwinput").val().length < 1) {
			$("#profileMsg").html("");
		}
	});

	$("#pwinput2").focusin(function() {
		$("#pwinput2").css({ "border-color" : "#999" });
	});

	$("#submitpassword").click(function() {
		$(".enterpassword").animate({
			"opacity" : "0",
			"margin-top" : "30px"
		},200)
		.css({
			"pointer-events" : "none"
		});
		sendRequest();
	});

	$("#cancelpassword").click(function() {
		$(".enterpassword").animate({
			"opacity" : "0",
			"margin-top" : "30px"
		},200)
		.css({
			"pointer-events" : "none"
		});
		ajaxend();
	});



	/* ~~~~ OK HERE WE GO... ~~~~ */



	var location = "~~not set~~";
	var zpid = "";
	var newlocation = "";
	var address = "";
	var address2 = "";
	var agent_email = "";
	var savings = "$$$";
	var propertyprice = "";
	var propertypricetrimmed = "";

	setInterval(function() {
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
			var newlocation = tabs[0].url;
			//console.log(newlocation);

			if(newlocation != location && newlocation != null && newlocation != undefined) {
				location = newlocation;

				if(newlocation.indexOf("zillow") !== -1 && newlocation.indexOf("_zpid") !== -1) {

					$("#disableoverlay").css({
						"opacity" : "0",
						"pointer-events" : "none"
					});

					let _zpid = location.split("_zpid")[0].split("/");
					zpid = _zpid[_zpid.length-1];

					$.ajax({
						url: "https://www.zillow.com/webservice/GetZestimate.htm?zws-id="+zws_id+"&zpid="+zpid,
						type: "GET",
						crossDomain: true,
						contentType: "application/x-www-form-urlencoded",
						dataType: "xml"
					})
					.done(function(xml) {
						let _street = $(xml).find("street")[0].innerHTML;
						let _city = $(xml).find("city")[0].innerHTML;
						let _state = $(xml).find("state")[0].innerHTML;
						let _zip = $(xml).find("zipcode")[0].innerHTML;
						let _price = $(xml).find("amount")[0].innerHTML;
						address = _street+", "+_city+", "+_state+" "+_zip;
						address2 = address;
					});

					$.ajax({
						url: location,
						type: "GET",
						crossDomain: true
					})
					.done(function(res) {
						let trimmed = $.trim(res);
						/*address = trimmed.split("<title>")[1].split("</title>")[0];
						address2 = address.split("|")[0];
						console.log(address);*/

						let propertyprice = trimmed.split('ds-value">')[1].split("<")[0];

						if(/^\$/.test(propertyprice)) {
							_savings = propertyprice.replace("$", "").replace(",", "");
							let html1 = calculate(_savings);
							propertypricetrimmed = _savings;
							$("#biggreen").html(html1);
							$("#propertyprice").html(propertyprice);
						} else {
							savings = "$$$";
							propertyprice = "";
							$("#biggreen").html("$$$");
							$("#propertyprice").html("");
						}
						

						if(address2 != "") {
							// console.log(encodeURI(address2));
							$(".address").html(address2);
						} else {
							// console.log(address);
							$(".address").html(address);
						}

						var data = { 'fullAddress' : encodeURI(address2) };

						$.ajax({
							url: DOMAIN+'/plugin/api/plugin/getNearestAgent',
							type: "POST",
							/*contentType: "application/json",*/
							dataType: "json",
							data: data
						})
						.done(function(res) {
							var msg = res; //$.trim(res);
							var avatar = "";

							if(msg.data.avatar != null && msg.data.avatar != "") {
								avatar = msg.data.avatar;
							} else {
								avatar = DOMAIN+"/assets/dashboard/img/default-avatar.png";
							}

							$(".agent_fname").html(fcap(msg.data.firstname));
							$(".agent_lname").html(fcap(msg.data.lastname));
							$(".agent_city").html(fcap(msg.data.city));
							$(".agent_state").html(fcap(msg.data.state));
							$("#brokerage").html(fcap(msg.data.company));
							$("#agent_img").attr('src', avatar);
							$("#agent_img2").attr('src', avatar);

							chrome.cookies.get({
								url: DOMAIN,
								name: "DCPLUGINTOKEN"
							}, function(cookie) {
								if(cookie) {
									$("#localname").html(fcap(localfirstname) + ' ' + fcap(locallastname)+'<br><span style="opacity: 0.5; font-size: 13px;">DEED: '+getDeedBalance(ethaddress)+'</span>');
									$("#localname2").html(fcap(localfirstname) + ' ' + fcap(locallastname));
									$("#localemail").html(localemail);
									$("#localphone").html(localphone);
								}
							});
							agent_email = msg.data.email;
						});
					});
				} else {
					console.log('please go to zillow and start searching');
					$("#disableoverlay").css({
						"opacity" : "1",
						"pointer-events" : "all"
					});
				}
			}
		});
	},1000);


	/* FUNCTIONS */

	function fcap(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function calculate(value) {
		value = value.replace(',', '');
		let result = parseInt(value * 2 / 100);
		return "$" + numberFormat(result);
	}

	function numberFormat(x) {
		let temp = x.toString().split('.');
		let prefix = '';

		if(temp.length > 1) {
			prefix = '.' + temp[1].substring(0, 2);
		}

		return temp[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + prefix;
	}

	function customPrompt() {
		ajaxstart();

		if(address == "") {
			console.log("No property address");
			ajaxend();
			return false;
		}

		chrome.cookies.get({
			url: DOMAIN,
			name: "DCPLUGINTOKEN"
		}, function(cookie) {
			if(cookie) {
				TOKEN = cookie.value;
			} else {
				TOKEN = "";
			}
		});

		if(TOKEN == "") {
			console.log("Please login");
			alert("Please login");
			ajaxend();
			return false;
		}

		if(agent_email == "" || agent_email == null || agent_email == undefined) {
			console.log("No agent selected");
			ajaxend();
			return false;
		}

		$(".enterpassword").animate({
			"opacity" : "1",
			"margin-top" : "0"
		},300)
		.css({
			"pointer-events" : "all"
		});

		return false;
	}

	function sendRequest() {
		$(".enterpassword").css({
			"pointer-events" : "none",
			"opacity" : "0",
			"margin-top" : "30px"
		});

		var txid = genTX();

		if(!txid) {
			ajaxend();
			alert("Something went wrong");
			return false;
		}

		if(deedbalance < 20) {
			console.log("Not enough DEED. :(");
			alert("Not enough Deedcoins :(");
			ajaxend();
			return false;
		}

		var addr = "";

		if(address2 != "") {
			addr = address2;
		} else {
			addr = address;
		}

		var data = {
			action: "confirmBegin",
			addr : addr,
			price : propertypricetrimmed,
			agent_email : agent_email,
			token: TOKEN,
			txid: txid
		};

		$.ajax({
			url: DOMAIN+"/plugin/api/plugin/confirmBegin",
			type: "POST",
			data: data
		})
		.done(function(res) {
			ajaxend();
			var msg = $.trim(res);
			console.log(msg);

			/*if(msg.message == "Success, TX created, emails sent, broker sms sent" || msg.message == "Success, TX created, emails sent, WARNING, SMS NOT SENT") {
				$("#page2").css({
					"opacity" : "0",
					"pointer-events" : "none"
				});
				$("#page3").css({
					"opacity" : "1",
					"pointer-events" : "all"
				});
			} else {
				alert("There was a technical problem. Please contact a staff member for help.");
			}*/

			$("#page2").css({
				"opacity" : "0",
				"pointer-events" : "none"
			});
			$("#page3").css({
				"opacity" : "1",
				"pointer-events" : "all"
			});
		});

		return true;
	}

	function ajaxstart() {
		$(".ajaxdiv").css({
			"opacity" : "1",
			"pointer-events" : "all"
		});
	}

	function ajaxend() {
		$(".ajaxdiv").css({
			"opacity" : "0",
			"pointer-events" : "none"
		});
	}

	function setCookie(name,value,days) {
		var expires = "";

		if(days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "")  + expires + "; path=/";
		//console.log(document.cookie);
	}

	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');

		for(var i=0;i < ca.length;i++) {
			var c = ca[i];

			while(c.charAt(0)==' ') {
				c = c.substring(1,c.length);
			}

			if(c.indexOf(nameEQ) == 0)
				return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	function eraseCookie(name) {   
		document.cookie = name+'=; Max-Age=-99999999;';  
	}

	function getEthBalance(etha) {
		if(etha && etha > 0 && etha != "") {
			var rawbalance = web3.eth.getBalance(etha);
			return web3.toDecimal(rawbalance) / wei;
		}
		return 0;
	}

	function getDeedBalance(etha) {
		if(etha && etha > 0 && etha != "") {
			var err, tokenbalance = Contract.balanceOf.call(etha);
			let result = tokenbalance.c[0] / 10000;
			deedbalance = result;
			return result;
		}
		return 0;
	}

	function genTX() {
		try {
			let _encpk = localStorage.getItem("pk");
			let _pk = decryptPK(_encpk, $("#enterpassword").val());

			$("#enterpassword").val("");

			if(!_pk) {
				alert("Incorrect password");
				customPrompt();
				return false;
			}

			let pk = ethereumjs.Buffer.Buffer.from(_pk, 'hex');
			_pk = "";
			var nonce = web3.eth.getTransactionCount(ethaddress);
			var gasPrice = web3.eth.gasPrice;
			var txData = Contract.transfer.getData(adminaddress, 20 * Math.pow(10, 18), {from: ethaddress});

			var rawTx = {
				nonce: web3.toHex(nonce),
				gasPrice: web3.toHex(gasPrice),
				gasLimit: web3.toHex(400000),
				from: ethaddress,
				to: deedcontract,
				value: '0x00',
				data: txData,
				chainId: '0x3C' /* GoChain */
				/*chainId: '0x01' /* Ethereum */
			};

			// Sign
			var tx = new ethereumjs.Tx(rawTx);
			tx.sign(pk);
			pk = "";
			var serializedTx = tx.serialize();
			//console.log("serialized: 0x"+serializedTx.toString('hex'));

			// Execute
			var txhash = web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'));

			return txhash;

		} catch(err) {
			console.log(err);
			return false;
		}
	}

	function getAddressFromPK(pk) {
		try {
			//return web3.eth.accounts.privateKeyToAccount(pk);
			var ec = new elliptic.ec('secp256k1');
			var pair = ec.keyFromPrivate(pk);
			var _pub = pair.getPublic(false, 'hex').slice(2);
			var pub = "0x" + (web3.sha3("0x" + _pub, { encoding: 'hex' })).slice(26);
			getGas(pub);
			return pub;

		} catch(err) {
			console.log(err);
			return false;
		}
	}

	function encryptPK(pk, pw) {
		try {
			GibberishAES.size(256);
			return GibberishAES.enc(pk, pw);
		} catch(err) {
			console.log(err);
			return false;
		}
	}

	function decryptPK(pk, pw) {
		try {
			GibberishAES.size(256);
			return GibberishAES.dec(pk, pw);
		} catch(err) {
			console.log(err);
			return false;
		}
	}

	/*function hex2bin(hex) {
		console.log(hex);
		console.log(parseInt(hex, 16)).toString(2);
		return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
	}*/

	function hex2bin(hex) {
	    var bytes = [], str;

	    for(var i=0; i< hex.length-1; i+=2)
	        bytes.push(parseInt(hex.substr(i, 2), 16));

	    //console.log(String.fromCharCode.apply(String, bytes));
	    return String.fromCharCode.apply(String, bytes);
	}

	function regexcheck(element, value) {
		switch(element) {
			case "pk":
				var re = /^[a-fA-F0-9]{64}$/g;
				return re.test(value);
			break;
			case "pkpw":
				var re = /^(?=.{8,})/;
				return re.test(value);
			break;
			case "regpw":
				var re = /^(?=.{8,})/;
				return re.test(value);
			break;
			case "regemail":
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(value);
			break;
			case "phone":
				var re = /^[0-9 -]*$/g;
				return re.test(value);
			break;
		}
		return false;
	}

	function getGas(wallet = "") {

		if(wallet == "")
			return false;

		var data = {
			action: "getGas",
			wallet : wallet
		};

		$.ajax({
			type: "POST",
			url: DOMAIN+"/plugin/api/plugin/getGas",
			data: data
		})
		.done(function(res) {
			var msg = $.trim(res);
			console.log(msg);
		});
	}


	/* LISTENERS */

	document.getElementById('slider1').addEventListener('input', function() {
		let slider1 = document.getElementById('slider1');
		let rval = slider1.value;

		let P = (rval - 50) / (1000 - 50);
		let Q = P * (500 - 9) + 9;

		let rtooltip = document.getElementById('rtooltip');
		rtooltip.style.left = String(Q)+"px";
		rtooltip.innerHTML = "$"+rval+"k";

		document.getElementById('biggreen0').innerHTML = calculate(rval*1000);
	});

	document.getElementById('email_r').addEventListener('keyup', function() {
		let value = this.value;
		var valid = regexcheck('regemail', value);

		if(value != "") {
			if(!valid) {
				$("#rx_regemail").attr('src', 'x.svg');
			} else {
				$("#rx_regemail").attr('src', 'check.svg');
			}
		} else {
			$("#rx_regemail").attr('src', 'empty.svg');
		}
	});

	document.getElementById('phone_r').addEventListener('keyup', function() {
		let value = this.value;
		var valid = regexcheck('phone', value);

		if(value != "") {
			if(!valid) {
				$("#rx_phone").attr('src', 'x.svg');
			} else {
				$("#rx_phone").attr('src', 'check.svg');
			}
		} else {
			$("#rx_phone").attr('src', 'empty.svg');
		}
	});

	document.getElementById('password_r').addEventListener('keyup', function() {
		let value = this.value;
		var valid = regexcheck('regpw', value);

		if(value != "") {
			if(!valid) {
				$("#rx_regpw").attr('src', 'x.svg');
			} else {
				$("#rx_regpw").attr('src', 'check.svg');
			}
		} else {
			$("#rx_regpw").attr('src', 'empty.svg');
		}
	});

	document.getElementById('pwinput').addEventListener('keyup', function() {
		let value = this.value;
		var valid = regexcheck('pkpw', value);

		if(value != "") {
			if(!valid) {
				$("#rx_pkpw").attr('src', 'x.svg');
			} else {
				$("#rx_pkpw").attr('src', 'check.svg');
			}
		} else {
			$("#rx_pkpw").attr('src', 'empty.svg');
		}
	});

	document.getElementById('pk').addEventListener('keyup', function() {
		let value = this.value;
		var valid = regexcheck('pk', value);

		if(value != "") {
			if(!valid) {
				$("#rx_pk").attr('src', 'x.svg');
			} else {
				$("#rx_pk").attr('src', 'check.svg');
			}
		} else {
			$("#rx_pk").attr('src', 'empty.svg');
		}
	});

});

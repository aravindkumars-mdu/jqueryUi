// Finds the maximum of two numbers and (val1:string, val2:string)
function max(val1, val2) {
	if (isNaN(val1) || isNaN(val2) || val1 === "" || val2 === "") {
		document.getElementById("max1").innerHTML = "please enter both numbers!";
		return;
	}
	if (Number(val1) > Number(val2)) {
		document.getElementById("max1").innerHTML =
		"maximum value of two number is " + val1;
	} else if (Number(val2) > Number(val1)) {
		document.getElementById("max1").innerHTML =
		"maximum value of two number is " + val2;
	}
}
// Reverses the given string and (inputText:string)
function reverse(inputText) {
	if (inputText !== "") {
		const arr = inputText.split("");
		const revarr = arr.reverse();
		document.getElementById("rev1").innerHTML = revarr.join("");
	} else {
		alert("please enter text");
		return;
	}
}
// Finds and displays the largest word from user input
function showLargestWord() {
	let val = document.getElementById("inp-str").value;
	if (val === "") {
		return alert("please enter text");
	}
	let largestWord = findLongestWord(val);
	document.getElementById("heading3-largestWord").innerHTML =
		"largest word:" + largestWord;
}
// Returns the longest word from a comma-separated string and (val:string)
function findLongestWord(val) {
    if (val !== "") {
		const valArray = val.split(",");
		let largest = valArray[0];
		for (let x of valArray) {
		if (largest.length < x.length) {
			largest = x;
		}
		}
		return largest;
	}
	return alert("please fill the input!");
}
// Saves name and phone in cookies and updates display
function saveCookie() {
	let name = document.getElementById("inp-cookieid1").value;
	let phone = document.getElementById("inp-cookieid2").value;
	if (name === "" || phone === "") {
		return alert("please fill the input!");
	}
	document.cookie =
		"name=" +
		encodeURIComponent(name) +
		"; expires=Fri, 31 Dec 2026 23:59:59 UTC; path=/";
	document.cookie =
		"phone=" +
		encodeURIComponent(phone) +
		"; expires=Fri, 31 Dec 2026 23:59:59 UTC; path=/";
	document.getElementById("heading-1").innerText = name;
	document.getElementById("phone").innerText = phone;
}
// Returns a cookie value by name and (name:string)
function getCookie(name) {
	let decode = decodeURIComponent(document.cookie);
	let cookies = decode.split("; ");
	for (let c of cookies) {
		if (c.startsWith(name + "=")) {
		return c.split("=")[1];
		}
	}
	return "";
}
// Loads saved cookies on page load
window.onload = function () {
	let savedName = getCookie("name");
	let savedPhone = getCookie("phone");
	if (savedName !== "") {
		document.getElementById("heading-1").innerText = savedName;
	}
	if (savedPhone !== "") {
		document.getElementById("phone").innerText = savedPhone;
	}
};

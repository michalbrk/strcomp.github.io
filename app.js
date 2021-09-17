let handler = () => {
    let field1val = document.getElementById("field1").value
    let field2val = document.getElementById("field2").value
    let result = document.getElementById("result")
    result.innerText = ""
    if(field1val != "" && field2val != "") {
        (function comparator(str1, str2){
            if(str1.includes(str2) && str2.includes(str1)){
                result.classList.remove("failure")
                result.classList.add("success")
                result.innerText = "Match!"
            }  else {
                result.classList.remove("success")
                result.classList.add("failure")
                result.innerText = "Nope!"
            }
        })(field1val,field2val)
    }
}

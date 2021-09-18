let handler = () => {
    let field1val = document.getElementById("field1").value
    let field2val = document.getElementById("field2").value
    let result = document.getElementById("result")
    let firstParam = document.getElementById("firstParam")
    let secondParam = document.getElementById("secondParam")

    function highlight(firstString,secondString){
        let tempValueFirstParam = ""
        let tempValueSecondParam = ""
        firstParam.innerText = firstString
        secondParam.innerText = secondString
        if(firstString.length > secondString.length){
            firstString.split("").forEach((value, index) => {
                if(value != secondString.charAt(index)){
                    tempValueFirstParam += `<span class="highlight">${value}</span>`
                    tempValueSecondParam += `<span class="highlight">${secondString.charAt(index)}</span>`
                } else {
                    tempValueFirstParam += value
                    tempValueSecondParam += value
                }
            })
            firstParam.innerHTML = tempValueFirstParam
            secondParam.innerHTML = tempValueSecondParam
        } else {
            secondString.split("").forEach((value, index) => {
                if(value != firstString.charAt(index)){
                    tempValueSecondParam += `<span class="highlight">${value}</span>`
                    tempValueFirstParam += `<span class="highlight">${firstString.charAt(index)}</span>`
                } else {
                    tempValueSecondParam += value
                    tempValueFirstParam += value
                }
            })
            secondParam.innerHTML = tempValueSecondParam
            firstParam.innerHTML = tempValueFirstParam
        }
    }

    result.innerText = ""
    firstParam.innerText = ""
    secondParam.innerText = ""
    firstParam.classList.remove("highlight")
    secondParam.classList.remove("highlight")


    if(field1val != "" && field2val != "") {
        (function comparator(str1, str2){
            if(str1.includes(str2) && str2.includes(str1)){
                result.classList.remove("failure")
                result.classList.add("success")
                result.innerText = "Match!"
            }  else {
                result.classList.remove("success")
                result.classList.add("failure")
                result.innerText = "Nope!";
                highlight(str1,str2)
            }
        })(field1val,field2val)
    }
}

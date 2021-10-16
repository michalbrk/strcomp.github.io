let handler = () => {
    let field1val = document.getElementById("field1").value
    let field2val = document.getElementById("field2").value
    let result = document.getElementById("result")
    let firstPara = document.getElementById("firstParam")
    let secondPara = document.getElementById("secondParam")
    
    function clearFields(){
        if(field1val.length > 0 || field2val.length > 0){
            result.innerText = ""
            firstPara.innerText = ""
            secondPara.innerText = ""
            firstPara.classList.remove("highlight")
            secondPara.classList.remove("highlight")
        }
    }
    function highlight(firstString,secondString){
        let tempValueFirstPara = ""
        let tempValueSecondPara = ""
        if(firstString.length > secondString.length){
            firstString.split("").forEach((value, index) => {
                let secondStrCurrentLetter = secondString.charAt(index)
                if(value != secondStrCurrentLetter){
                    tempValueFirstPara += value.replace(value, `<span class="highlight">${value}</span>`)
                    tempValueSecondPara += secondStrCurrentLetter.replace(secondStrCurrentLetter, `<span class="highlight">${secondStrCurrentLetter}</span>`)
                } else {
                    tempValueFirstPara += value
                    tempValueSecondPara += secondStrCurrentLetter
                }
            })
            firstPara.innerHTML = tempValueFirstPara
            secondPara.innerHTML = tempValueSecondPara
        } else {
            secondString.split("").forEach((value, index) => {
                let firstStrCurrentLetter = firstString.charAt(index)
                if(value != firstStrCurrentLetter){
                    tempValueSecondPara += value.replace(value, `<span class="highlight">${value}</span>`)
                    tempValueFirstPara += firstStrCurrentLetter.replace(firstStrCurrentLetter, `<span class="highlight">${firstStrCurrentLetter}</span>`)
                } else {
                    tempValueSecondPara += value
                    tempValueFirstPara += firstStrCurrentLetter
                }
            })
            secondPara.innerHTML = tempValueSecondPara
            firstPara.innerHTML = tempValueFirstPara
        }
    }

    clearFields()

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
        })(field1val.trim(),field2val.trim())
   }
}

function cleanup(storageToClean){
    for (let property in storageToClean) {
        if (storageToClean.hasOwnProperty(property)){
            storageToClean.clear()
        }
    }
}

(function clearCookiesAndCheckStorageAvailability(...storages){
    if(document.cookie.length > -1){
        document.cookie = "u=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;"
    }
    storages.forEach(storage => {
        if(typeof storage != "undefined"){
            cleanup(storage)
        }
    })
})(localStorage,sessionStorage)

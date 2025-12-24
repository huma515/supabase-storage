import supabase from "./config.js"


let imgUp = document.getElementById("imgInp")
let btn = document.getElementById("btn")

let picName;

async function uploadF(e) {
  e.preventDefault()
 
let fileName = imgUp.files[0].name
let file = imgUp.files[0]

const { data, error } = await supabase
  .storage
  .from('myfile')
  .upload( fileName, file,)

  if(data){

picName = data.path
console.log(  "upload successfully"     , picName)

  }

  else {
    console.log("Upload error:", error)
  }
   
 



}
btn.addEventListener("click" , uploadF)
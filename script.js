import supabase from "./config.js"


let imgUp = document.getElementById("imgInp")
let btn = document.getElementById("btn")
let main = document.getElementById("main")

let picName;

async function uploadF(e) {
  e.preventDefault()

  let fileName = imgUp.files[0].name
  let file = imgUp.files[0]

  const { data, error } = await supabase
    .storage
    .from('myfile')
    .upload(fileName, file,)

  if (data) {

    picName = data.path
    console.log("upload successfully", picName)

    const { data: urlData } = supabase
      .storage
      .from('myfile')
      .getPublicUrl(picName)

    if (urlData) {
      console.log(urlData)
      console.log(urlData.publicUrl)

      const { error } = await supabase
  .from('image')
  .insert({ url: urlData.publicUrl})
  getPic() 
    }
  }
}
btn.addEventListener("click", uploadF)


async function getPic() {
  

  try {
    


const { data, error } = await supabase
  .from('image')
  .select("*")
   data.forEach(pic => {

    main.innerHTML += `
    <div style="display:inline-block; margin:5px;">
    <img src='${pic.url}' style="width:100%; max-width:200px; height:auto; border-radius:8px;">
  </div>
    
    `
   });



  } catch (error) {
    console.log(error)
  }
}

 
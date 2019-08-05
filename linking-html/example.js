greeter = () =>{
  let handleName = document.getElementById("inputField").value
  document.getElementById("outputField").innerHTML = `Hello, ${handleName}`
  popUp(handleName)
}

popUp = (name) => {
  alert(`Hello, ${name}!`)
}

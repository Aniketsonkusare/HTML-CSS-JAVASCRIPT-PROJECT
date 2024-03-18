let arr = [
    {dp: "https://media.istockphoto.com/id/537389352/photo/tropical-rainforest.jpg?s=1024x1024&w=is&k=20&c=19pnNAWHMuCVfskgXWpLJwMIEaECXZxSWb7JKr6qjCs=", story: "https://images.unsplash.com/photo-1613339027986-b94d85708995?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1614914135224-925593607248?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

let clutter = ""
let stories = document.querySelector('#stories')

arr.forEach((ele,idx) => {
    clutter += `<div class="story">
        <img id="${idx}" src="${ele.dp}" alt=""/>
    </div>`
})

stories.innerHTML = clutter

stories.addEventListener('click',function (dets) {
    // console.log();
    // let value = arr[dets.target.id].story
    document.querySelector('#full-screen').style.display = "block"
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    setTimeout(() => {
        document.querySelector('#full-screen').style.display = "none"
        
    }, 3000);
})


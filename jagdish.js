
//Event propagation is a JavaScript mechanism that describes how events travel through the Document Object Model (DOM) tree. The DOM tree is a structure that contains parent, child, and sibling elements in relation to each other

//Bubbling and Capturing are the two phases of propagation. In their simplest definitions, bubbling travels from the target to the root, and capturing travels from the root to the target. However, that doesn’t make much sense without first defining what a target and a root is.

// event bubbling
// document.getElementById('child').addEventListener('click', (e)=>{
//     console.log(`child click from ${e.target.id}`)
// })

// document.getElementById('parent').addEventListener('click', (e)=>{
//     console.log(`parent click from ${e.target.id}`)
// })

// document.getElementById('grandparent').addEventListener('click', (e)=>{
//     console.log(`grandparent click from ${e.target.id}`)
// })


//event  Capturing
document.getElementById('child').addEventListener('click', (e)=>{
    console.log(`child click from ${e.target.id}`)
},true)

document.getElementById('parent').addEventListener('click', (e)=>{
    console.log(`parent click from ${e.target.id}`)
},true)

document.getElementById('grandparent').addEventListener('click', (e)=>{
    console.log(`grandparent click from ${e.target.id}`)
},true)



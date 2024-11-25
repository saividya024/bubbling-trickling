let gp=document.getElementById("gp")
let p=document.getElementById("p")
let c=document.getElementById("c")

//---------------------------------- event bubbling --------------------------------------------

gp.addEventListener("click",()=>{
    console.log("Grand parent clicked")
    gp.style.backgroundColor="red"
})
p.addEventListener("click",()=>{
    console.log("Parent cliked")
    p.style.backgroundColor="yellow"
})
c.addEventListener("click",()=>{
    console.log("Chlid clicked")
    c.style.backgroundColor="blue"
})

// // settimeout only for grand parent

// gp.addEventListener("click",()=>{
//    setTimeout(()=>{
//      console.log("Grand parent clicked")
//     gp.style.backgroundColor="red"
//    },2000)
// })
// p.addEventListener("click",()=>{
//     console.log("Parent cliked")
//     p.style.backgroundColor="yellow"
// })
// c.addEventListener("click",()=>{
//     console.log("Chlid clicked")
//     c.style.backgroundColor="blue"
// })

// // set time out only for parent

// gp.addEventListener("click",()=>{
//         console.log("parent clicked")
//         gp.style.backgroundColor="yellow"
// })
// p.addEventListener("click",()=>{
//     setTimeout(()=>{
//         console.log("Parent clicked")
//         p.style.backgroundColor="green"
//     },2000)
// })
// c.addEventListener("click",()=>{
//     console.log("chlid child")
//     c.style.backgroundColor="red"
// })

// // set timeout only for chlid

// gp.addEventListener("click",()=>{
//     console.log("grandparent")
//     gp.style.backgroundColor="red"
// })
// p.addEventListener("click",()=>{
//     console.log("parent")
//     p.style.backgroundColor="green"
// })
// c.addEventListener("click",()=>{
//     setTimeout(()=>{
//         console.log("chlid")
//         c.style.backgroundColor="yellow"
//     },2000)
// })

// // SetTimeout for all div elements

// gp.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Grandparent clicked")
//         gp.style.backgroundColor="red"
//     },6000)
// })
// p.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     setTimeout(()=>{
//         console.log("Parent cliked")
//         p.style.backgroundColor="green"
//     },4000)
    
// })
// c.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Chlid clicked")
//         c.style.backgroundColor="yellow"
//     },2000)
// })





//----------------------------- event trickling or event capturing ---------------------------------------------

// gp.addEventListener("click",()=>{
//     console.log("Grand Parent")
//     gp.style.backgroundColor="red"
// },true)
// p.addEventListener("click",()=>{
//     console.log("Parent")
//     p.style.backgroundColor="green"
// },true)
// c.addEventListener("click",()=>{
//     console.log("Chlid")
//     c.style.backgroundColor="blue"
// },true)


// setTimeout only for grandparent

// gp.addEventListener("click",()=>{
//     setTimeout(()=>{
//         console.log("gp")
//     gp.style.backgroundColor="red"
//     },2000)
// },true)
// p.addEventListener("click",()=>{
//     console.log("p")
//     p.style.backgroundColor="black"
// },true)
// c.addEventListener("click",()=>{
//     console.log("c")
//     c.style.backgroundColor='green'
// },true)


// setTimeout only for parent

// gp.addEventListener("click",()=>{
//     console.log("gp")
//     gp.style.backgroundColor="red"
// },true)
// p.addEventListener("click",()=>{
//     setTimeout(()=>{
//         console.log("p")
//     p.style.backgroundColor="black"
//     },2000)
// },true)
// c.addEventListener("click",()=>{
//     console.log("c")
//     c.style.backgroundColor='green'
// },true)

//setTimeout only for chlid

// gp.addEventListener("click",()=>{
//      console.log("gp")
//     gp.style.backgroundColor="red"
// },true)
// p.addEventListener("click",()=>{
//     console.log("p")
//     p.style.backgroundColor="black"
// },true)
// c.addEventListener("click",()=>{
//     setTimeout(()=>{
//         console.log("c")
//     c.style.backgroundColor='green'
//     },2000)
// },true)


// SetTimeout for all div elements

// gp.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Grandparent clicked")
//         gp.style.backgroundColor="red"
//     },6000)
// },true)
// p.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     setTimeout(()=>{
//         console.log("Parent cliked")
//         p.style.backgroundColor="green"
//     },4000)
    
// },true)
// c.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Chlid clicked")
//         c.style.backgroundColor="pink"
//     },2000)
// },true)




//--------------------------------- event bubbling & event trcickling ----------------------


// gp.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Grandparent clicked")
//         gp.style.backgroundColor="red"
//     })
// },false)
// p.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     setTimeout(()=>{
//         console.log("Parent cliked")
//         p.style.backgroundColor="green"
//     })
// },true)
// c.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Chlid clicked")
//         c.style.backgroundColor="pink"
//     })
// },true)

// gp.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Grandparent clicked")
//         gp.style.backgroundColor="red"
//     })
// },false)
// p.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     setTimeout(()=>{
//         console.log("Parent cliked")
//         p.style.backgroundColor="green"
//     })
    
// },false)
// c.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Chlid clicked")
//         c.style.backgroundColor="pink"
//     })
// },true)

// gp.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Grandparent clicked")
//         gp.style.backgroundColor="red"
//     })
// },false)
// p.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     setTimeout(()=>{
//         console.log("Parent cliked")
//         p.style.backgroundColor="green"
//     })
    
// },true)
// c.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Chlid clicked")
//         c.style.backgroundColor="pink"
//     })
// },false)


// gp.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Grandparent clicked")
//         gp.style.backgroundColor="red"
//     })
// },true)
// p.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     setTimeout(()=>{
//         console.log("Parent cliked")
//         p.style.backgroundColor="green"
//     })
    
// },false)
// c.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Chlid clicked")
//         c.style.backgroundColor="pink"
//     })
// },false)


// gp.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//         console.log("Grandparent clicked")
//         gp.style.backgroundColor="red"
// },true)
// p.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//         console.log("Parent cliked")
//         p.style.backgroundColor="green"
// },true)
// c.addEventListener("click",(e)=>{   
//     e.stopPropagation()
//         console.log("Chlid clicked")
//         c.style.backgroundColor="pink"
// },false)


//-------------------SetTimeout on eventbubbling & event trickling--------------------

//we cannot control the event phase using seTimeout
//you can't cancel the event propagation using setTimeout

// gp.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Grandparent clicked")
//         gp.style.backgroundColor="red"
//     },2000)
// },true)
// p.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     setTimeout(()=>{
//         console.log("Parent cliked")
//         p.style.backgroundColor="green"
//     },3000)
    
// },true) 
// c.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Chlid clicked")
//         c.style.backgroundColor="pink"
//     },6000)
// },false)


// gp.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Grandparent clicked")
//         gp.style.backgroundColor="red"
//     },2000)
// },true)
// p.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     setTimeout(()=>{
//         console.log("Parent cliked")
//         p.style.backgroundColor="green"
//     },3000)
    
// },true) 
// c.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Chlid clicked")
//         c.style.backgroundColor="pink"
//     },6000)
// },true)



// gp.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Grandparent clicked")
//         gp.style.backgroundColor="red"
//     },2000)
// },false)
// p.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     setTimeout(()=>{
//         console.log("Parent cliked")
//         p.style.backgroundColor="green"
//     },3000)
    
// },false) 
// c.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Chlid clicked")
//         c.style.backgroundColor="pink"
//     },6000)
// },false)
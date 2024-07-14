let dmsn = 14;



const colors = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Black",
    "White",
    "Gray",
    "Cyan",
    "Magenta",
    "Lime",
    "Maroon",
    "Navy",
    "Olive",
    "Teal",
    "Aqua",
    "Silver"
];

function darken(id){
    console.log(id)
}

function draw(col){
        dmsn = Number(col);
        console.log(col)
        let parent = document.querySelector(".main")
        for (let i = 0;i<=dmsn;i++){
            let box1 = document.createElement("div");
            box1.classList = `r${i}`;
            parent.appendChild(box1);
            
            let parent2 = document.querySelector(`.r${i}`);
            for (let j = 0;j<=dmsn;j++){
                let box = document.createElement("div");
                box.style = "width:20px;height:20px;background-color:white;border:0px solid black;padding:0px;margin:0px;";
                // box.textContent = i;
                box.classList = `r${i}c${j}`;
                box.addEventListener("mouseover",function darken(){
                    let temp = document.querySelector(`.r${i}c${j}`);
                    temp.style.backgroundColor = "black";
                    
                    console.log(`r${i}c${j}`);
                    }
                );box.addEventListener("ontouchstart",function darken(){
                    let temp = document.querySelector(`.r${i}c${j}`);
                    temp.style.backgroundColor = "black";
                    
                    console.log(`r${i}c${j}`);
                    }
                );
                parent2.appendChild(box);
            }
        }
}
function reset(){
    for (let i = 0;i<=dmsn;i++){
        
        let parent2 = document.querySelector(`.r${i}`).childNodes;
        for (let j = 0;j<=dmsn;j++){
            parent2[j].style.backgroundColor = "white";
            
        }
    }
}
function changecolor(){
    for (let i = 0;i<=dmsn;i++){
        
        let parent2 = document.querySelector(`.r${i}`).childNodes;
        for (let j = 0;j<=dmsn;j++){
            parent2[j].addEventListener("mouseover",function darken(){
                let temp = document.querySelector(`.r${i}c${j}`);
                temp.style.backgroundColor = colors[j*i%colors.length];
            
        })
        parent2[j].addEventListener("ontouchstart",function darken(){
            let temp = document.querySelector(`.r${i}c${j}`);
            temp.style.backgroundColor = colors[j*i%colors.length];
        
    })

    }  
}
}
draw(20);
parent.style.width = "640px";
parent.style.height = "640px";
parent.style.flexWrap = "wrap";

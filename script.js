let filters = {
    brightness:{
        value:100,
        unit:"%",
        min:0,
        max:200
    },
    contrast:{
        value:100,
        unit:"%",
        min:0,
        max:200
    },
    saturation:{
        value:100,
        unit:"%",
        min:0,
        max:200
    },
    hueRotation:{
        value:0,
        unit:"deg",
        min:0,
        max:360
    },
    blur:{
        value:0,
        unit:"px",
        min:0,
        max:20
    },
    grayscale:{
        value:0,
        unit:"%",
        min:0,
        max:100
    },
    sepia:{
        value:0,
        unit:"%",
        min:0,
        max:100
    },
   opacity:{
        value:100,
        unit:"%",
        min:0,
        max:100
    },

   invert:{
        value:0,
        unit:"%",
        min:0,
        max:100
    },
}

const imageCanvas = document.querySelector("#image-canvas")
const imgInput = document.querySelector("#image-input")
const canvasctx = imageCanvas.getContext("2d")
const filtersConatiner = document.querySelector(".filters")
let resetButton = document.querySelector("#reset-btn")
let downloadButton = document.querySelector("#download-btn")
const presetsConatiner =document.querySelector(".presets")

let file =null
let image =null

function createFilterElement(name,unit="%",value,min,max ) {
    const div = document.createElement("div")
    div.classList.add("filter")

    const input = document.createElement("input")
    input.type="range"
    input.value=value
    input.min=min
    input.max=max
    input.id=name

    const p = document.createElement("p")
    p.innerText = name

    div.appendChild(p)
    div.appendChild(input)

    input.addEventListener("input",(event)=>{

        filters[name].value = input.value
        // console.log(name,filters[name]);
        applyfilters()


    })

    return div
}

function createFilters(){
Object.keys(filters).forEach(keys =>{
   
    const filterElement = createFilterElement(
        keys,
        filters[keys].unit,
        filters[keys].value,
        filters[keys].min,
        filters[keys].max
    )
filtersConatiner.appendChild(filterElement)
})
}
createFilters()

imgInput.addEventListener("change", (event)=>{

  file = event.target.files[0]
const imageplaceholder = document.querySelector(".placeholder")
imageCanvas.style.display="block"
 imageplaceholder.style.display="none"
   
    const img = new Image()
    img.src=URL.createObjectURL(file)

    img.onload = ()=>{
        image=img
        imageCanvas.width=img.width
        imageCanvas.height=img.height
   canvasctx.drawImage(img,0,0)
    }
})

function applyfilters(){

    canvasctx.clearRect(0,0,imageCanvas.width,imageCanvas.height)
    canvasctx.filter =
    `
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturation.value}${filters.saturation.unit})
    hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
    blur(${filters.blur.value}${filters.blur.unit})
    grayscale(${filters.grayscale.value}${filters.grayscale.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit})
    invert(${filters.invert.value}${filters.invert.unit})
    `.trim()

    canvasctx.drawImage(image,0,0)
}

resetButton.addEventListener("click",()=>{

    filters = {
    brightness:{
        value:100,
        unit:"%",
        min:0,
        max:200
    },
    contrast:{
        value:100,
        unit:"%",
        min:0,
        max:200
    },
    saturation:{
        value:100,
        unit:"%",
        min:0,
        max:200
    },
    hueRotation:{
        value:0,
        unit:"deg",
        min:0,
        max:360
    },
    blur:{
        value:0,
        unit:"px",
        min:0,
        max:20
    },
    grayscale:{
        value:0,
        unit:"%",
        min:0,
        max:100
    },
    sepia:{
        value:0,
        unit:"%",
        min:0,
        max:100
    },
   opacity:{
        value:100,
        unit:"%",
        min:0,
        max:100
    },

   invert:{
        value:0,
        unit:"%",
        min:0,
        max:100
    },
     }
      applyfilters()
    filtersConatiner.innerHTML=""
    createFilters()

})

downloadButton.addEventListener("click",()=>{

    const link = document.createElement("a")
    link.download="your-edited-image.png"
    link.href=imageCanvas.toDataURL()
    link.click()
})

const presets = {
  normal: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  drama: {
    brightness: 95,
    contrast: 140,
    saturation: 120,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  vintage: {
    brightness: 105,
    contrast: 90,
    saturation: 80,
    hueRotation: 10,
    blur: 0,
    grayscale: 0,
    sepia: 35,
    opacity: 100,
    invert: 0
  },

  oldSchool: {
    brightness: 110,
    contrast: 85,
    saturation: 70,
    hueRotation: 0,
    blur: 1,
    grayscale: 20,
    sepia: 50,
    opacity: 100,
    invert: 0
  },

  blackAndWhite: {
    brightness: 100,
    contrast: 120,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  faded: {
    brightness: 105,
    contrast: 80,
    saturation: 75,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 10,
    opacity: 100,
    invert: 0
  },

  coolTone: {
    brightness: 100,
    contrast: 110,
    saturation: 105,
    hueRotation: 200,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  warmTone: {
    brightness: 105,
    contrast: 105,
    saturation: 110,
    hueRotation: 30,
    blur: 0,
    grayscale: 0,
    sepia: 15,
    opacity: 100,
    invert: 0
  }
};

Object.keys(presets).forEach(presetName => {
    const presetbutton = document.createElement("button")
    presetbutton.classList.add("btn")
    presetbutton.innerText=presetName
    presetsConatiner.appendChild(presetbutton)

    presetbutton.addEventListener("click",()=>{
        const preset = presets[presetName]
        console.log(preset);

        Object.keys(preset).forEach(filterName =>{
            filters[filterName].value = preset[filterName]
        })
        applyfilters()
        filtersConatiner.innerHTML=""
        createFilters()

    })
})

const buton=document.getElementsByClassName("yet");
const left=document.querySelector("#leftColumns");
const baslik=document.getElementsByClassName("yet-title");



class Ekle{
    constructor(title){
        this.title=title;
    }
}


class UI{
    yetenekEkle(ekle){
        const listItem=document.createElement("div");
        listItem.classList="elemen";
        listItem.innerHTML=
        `
        <button class="yet">${ekle.title}</button>

        `
        left.appendChild(listItem)
    }
   
   




}

for (let i = 0; i < buton.length; i++) {
    buton[i].addEventListener("click",function(e){
        let title=buton[i].getElementsByClassName("yet-title")[0].textContent;

        let ekle =new Ekle(title);
        let ui=new UI();


        ui.yetenekEkle(ekle)
        e.preventDefault();
    })
    
}
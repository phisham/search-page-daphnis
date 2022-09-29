import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'daphnis-search-page';
  content:any="Medical Durpan >";
  sub:any;
  boxes:any=['','','','','','','','']
  medicine:any;
  inp:any;
  medArray:any=[];
  head:any=[0,0,0,0,0,0,0]
  ngOnInit(): void {
    this.head[0]=1;
  }

  press(ev:any,wd:any){
    if(wd=='Medical Darpan'){
      this.content="Medical Darpan >";
      for(var i=0;i<this.head.length;i++){
        this.head[i]=0;
      }
      this.head[0]=1;
      
    }
    else if(wd=='Home'){
      this.content="Home >";
      
      for(var i=0;i<this.head.length;i++){
        this.head[i]=0;
      }
      this.head[1]=1;
    }
    else if(wd=='Products'){
      this.content="Products >";
      
      for(var i=0;i<this.head.length;i++){
        this.head[i]=0;
      }
      this.head[2]=1;
    }
    else if(wd=='Distributors'){
      this.content="Distributors >";
      
      for(var i=0;i<this.head.length;i++){
        this.head[i]=0;
      }
      this.head[3]=1;
    }
    else if(wd=='Manufactures'){
      this.content="Manufactures >";
      
      for(var i=0;i<this.head.length;i++){
        this.head[i]=0;
      }
      this.head[4]=1;
    }
    else if(wd=='About Us'){
      this.content="About Us >";
      for(var i=0;i<this.head.length;i++){
        this.head[i]=0;
      }
      this.head[5]=1;

    }
    else if(wd=='Blog'){
      this.content="Blog >";
      for(var i=0;i<this.head.length;i++){
        this.head[i]=0;
      }
      this.head[6]=1;

    }
  }

  searchInput(ev:any){
    this.inp=ev.target.value;
  }

  search(){
    this.medicine=this.inp + "  (8 Products)";
    this.content+= " "+this.inp;
  }
  check:any=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  textchange(ev:any,txt:any,ind:any){
    if(!this.check[ind]){
        // (ev.target as HTMLButtonElement).style.backgroundColor="rgb(10, 173, 156)";
        // (ev.target as HTMLButtonElement).style.color="white";
        // (ev.target as HTMLButtonElement).style.borderRadius="5px";
        // (ev.target as HTMLButtonElement).disabled=true;
        this.medArray.push(txt)
        console.log(this.medArray)
        this.check[ind]=1;
        
    }
    else{
        
        // (ev.target as HTMLButtonElement).style.backgroundColor="white";
        // (ev.target as HTMLButtonElement).style.color="black";
        // (ev.target as HTMLButtonElement).style.borderRadius="5px";
        
        this.check[ind]=0;
        this.remove(txt)
    }
  }
  textchange2(ev:any){
    (ev.target as HTMLElement).style.backgroundColor="rgb(10, 173, 156)";
    (ev.target as HTMLElement).style.color="white";
    (ev.target as HTMLElement).style.borderRadius="5px";
    
  }
  remove(b:any){
    let i=this.medArray.indexOf(b)
    this.medArray.splice(i,1);
    
    switch (b){
      case 'Paracetamol Tablets':{
        this.check[0]=0;
        break;
      }
      case 'Paracetamol Syrup':{
        this.check[1]=0;
        break;
      }
      case 'Paracetamol Powder':{
        this.check[2]=0;
        break;
      }
      case 'Aceclofenac':{
        this.check[3]=0;
        break;
      }
      case 'Magaladrate Simethicone Oral Suspension':{
        this.check[4]=0;
        break;
      }
      case 'Mefanamic Paracetamol Syrup':{
        this.check[5]=0;
        break;
      }
      case 'Cipmol Paracetamol':{
        this.check[6]=0;
        break;
      }
      case 'Pandal Paracetamol Tablets':{
        this.check[7]=0;
        break;
      }
      case 'Combiflam':{
        this.check[8]=0;
        break;
      }
      case 'Crocin Tablets':{
        this.check[9]=0;
        break;
      }
      case 'Calpol Paracetamol Tablets':{
        this.check[10]=0;
        break;
      }
      case 'Sumo Tablet':{
        this.check[11]=0;
        break;
      }
      case 'WholeSaler':{
        this.check[12]=0;
        break;
      }
      case 'Manufacturer':{
        this.check[13]=0;
        break;
      }
      case 'Retailer':{
        this.check[14]=0;
        break;
      }
      case 'Exporter':{
        this.check[15]=0;
        break;
      }
      case '500mg':{
        this.check[16]=0;
        break;
      }
      case '650mg':{
        this.check[17]=0;
        break;
      }
      case 'Intas Pharmaceutical ltd':{
        this.check[18]=0;
        this.check[20]=0;
        break;
      }
      case 'Alkem Laboratories ltd':{
        this.check[19]=0;
        this.check[21]=0;
        break;
      }
      
    }
    

  }

  
}

// javascript
const gender= document.getElementById("gender")
const height=document.getElementById("height")
const bodyWeight = document.getElementById("body-weight")
const targetHb=document.getElementById("target-hb")
const actualHb= document.getElementById("actual-hb")
const calculateDose= document.getElementById("calculate-dose")
const renderDose=document.getElementById("render-dose")
const ivIron= document.getElementById("ivIron")

        calculateDose.addEventListener("click",function(){
        const patientGender=gender.value
        const patientHeight = JSON.parse(height.value)
        const patientWeight= JSON.parse(bodyWeight.value)
        const patientTargetHb= JSON.parse(targetHb.value)
        const patientActualHb= JSON.parse(actualHb.value)
        const myIron=ivIron.value
        
// for (let i= 0; i<myPatientParameters.length; i++){
  //   console.log(myPatientParameters[i]+typeof myPatientParameters[i]) 
 //}    
        function render(){  renderDose.innerHTML=""
                renderDose.innerHTML+= `
                
                <h3><div> Calculated dose: for ${myIron}</h3></div> 
                <h4><div >Total Iron required is <span>${(finalCalculation)}mg</span>, using ${modifier} weight: ${finalWeight}kg.</div></h4>
               
               <h4 id="box">${testdose}</h4>
                <h4 id="box"> ${message} </h4>
                 
                `}
        
        let bmi= patientWeight*10000/(patientHeight*patientHeight)
        let factor = 50
                    if (gender.value == "Female")    {  factor =45.5    }
                    else if (gender.value=="Male")  { factor =50}        
        let ibw= factor + ((height.value-152)/2.54)*2.3.toFixed(0)
        let ddw= ibw+ 0.4*(patientWeight-ibw)
        console.log("ddw= "+ddw+ " ibw= "+ibw)
        let finalWeight = 0 
        let modifier= " actual"
       
        if (bmi<25){
            finalWeight=patientWeight.toFixed(0)
            modifier=" actual body"
           
        } 
        else if (bmi>24.9 && bmi<30){
            finalWeight=ibw.toFixed(0) 
            modifier=" ideal body"
           
        } else if (bmi>30){
            finalWeight=ddw.toFixed(0)
            modifier=" adjusted body" }
        else{  finalWeight=patientWeight  
                     modifier=" actual body"}
        
        let calculation = Math.round((0.24*finalWeight*(patientTargetHb-patientActualHb)).toFixed(0) / 100) * 100
       
        if (JSON.parse(calculation)>1700){
            calculation="1700"}
        
        
         let ironstore= 500
        if (patientWeight<35){ironstore=0}
        
        
        let finalCalculation =(Math.round((JSON.parse(calculation) / 100) * 100))+ironstore
        console.log(finalCalculation+ " "+typeof +finalCalculation)
        let firstInfusion = ""
        let secondInfusion= ""
        let message=""
        let testdose=""
        if (ivIron.value=="Cosmofer"){
            testdose= `The first 25mg of the first infusion needs to be given as a <span>test dose</span> over 15 minutes.`
        } 
        
      
        if (finalWeight.value>90){
            finalWeight=90
        }
        
        if (finalWeight*20<finalCalculation)
            {firstInfusion= Math.round(finalWeight*20 / 100) * 100
            if (finalWeight.value>90){
            finalWeight=90 }
          
            secondInfusion= finalCalculation-firstInfusion
            
            if (ivIron.value=="Cosmofer"){
            message = ` <div>
        
            <li> First infusion: ${firstInfusion}mg</li><li>Second infusion: ${secondInfusion} mg</li>
            
           <h5> Add the required quantity for each infusion to 500ml 0.9% Sodium Chloride.</h5>
           <h5> After giving the test dose , give over 4-6 hours</h5>
           <h5> Leave a minimum of <span> one week</span> between the first and second infusions </h5>
            </div>`}
            
            if (ivIron.value=="Monofer"){
            message = ` <div>
        
            <li> First infusion: ${firstInfusion}mg</li><li>Second infusion: ${secondInfusion} mg</li>
            
           <h5> Add the required quantity for each infusion to 500ml 0.9% Sodium Chloride.</h5>
           <h5> Give over 30minutes</h5>
           <h5> Leave a minimum of <span> one week</span> between the first and second infusions </h5>
            </div>`
            testdose=`No test dose is required`
            }
           
            } 
        else{ firstInfusion= finalCalculation
            testdose= ` The first 25mg of this infusion is to be given as a <span>test dose</span> over 15 minutes.`
            
              if (ivIron.value=="Cosmofer"){
            
            message=`<div> <div id="single">A single infusion of ${finalCalculation}mg is required.</div>
           
          <h5> Add to 500ml 0.9% Sodium Chloride.</h5>
           
           <h5> After giving the test dose , give the remainder of the infusion over 4-6 hours</h5>
            
           </div> `} 
         
           
             if (ivIron.value==="Monofer" || ivIron.value==="Ferinject") 
        {
            testdose= `No test dose is required`
               if(ivIron.value==="Monofer"){
                
            message=`<div> <div id="single">A single infusion of ${finalCalculation}mg is required.</div>
           
          <h5> Add to 500ml 0.9% Sodium Chloride.</h5>
           
           <h5> Give over 30 minutes</h5>
            
           </div> `
            }
           
        }
            
            
                  
            }
            
            
        
        render()
                
      


  })
  { /*  
 calculateDose.addEventListener("click", function(){
  

  if (bodyWeight.value,targetHb.value,actualHb.value){
        
        renderDose.innerText=""
        let weight= bodyWeight.value

        let bmi= bodyWeight.value*10000/(height.value*height.value)
      
        let factor = 50
     
        let patientGender = gender.value
        console.log(patientGender)
 
                     if (gender.value == "Female")
                        {  factor =45.5    }
                    else if (gender.value=="Male")
                        { factor =50}       
     
        let ibw= factor + ((height.value-152)/2.54)*2.3.toFixed(0)
        let modifier=""
        
        if (bmi<25 && bmi>10)
       { modifier=" actual "}
        
        else if (bmi=>25 && bmi<30)
        {console.log(bmi) 
        modifier=" ideal body " 
        weight=ibw.toFixed(0) }
        
        else if(bmi>30){
        let ddw= ibw+ 0.4*(weight-ibw)
        console.log( ddw) 
        weight= ddw.toFixed(0)
        modifier= "adjusted body "}
        
         let calculation = (0.24*weight*(targetHb.value-actualHb.value)).toFixed(0)
        console.log(calculation)
            let firstInfusion=""
           let secondInfusion=""
            let infusionNumber= `a single infusion of ${calculation}mg`
      let maxSingleDose= 20*weight
       
        if (calculation>2000){
           
            calculation=2000
        }
       
        if (calculation>maxSingleDose) {
            infusionNumber= "two infusions "
            firstInfusion= `The first infusion is ${maxSingleDose}mg` 
            if (weight<35){secondInfusion= `the second infusion is ${calculation -maxSingleDose}mg`}
            else {secondInfusion= `the second infusion is ${calculation -maxSingleDose}mg`}
        }
        if( weight<=35){ calculation-= 500
            
           renderDose.innerHTML+= `Total Iron required ${(calculation+500)}mg, bmi=${bmi.toFixed(2)} using ${modifier} weight =${weight}kg. The patient will need ${infusionNumber} 
           ${firstInfusion}, ${secondInfusion}`
        }   
        else {
           renderDose.innerHTML+= `Total Iron required ${(calculation)}mg, bmi=${bmi.toFixed(2)} using ${modifier} weight =${weight}kg. The patient will need ${infusionNumber} 
           ${firstInfusion}, ${secondInfusion}`}
   
    
        
         }
         
    
  
})*/}

 
 

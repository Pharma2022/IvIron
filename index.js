// javascript
let  patientGender= "Male"
const height=document.getElementById("height")
const bodyWeight = document.getElementById("body-weight")
const targetHb=document.getElementById("target-hb")
const actualHb= document.getElementById("actual-hb")
const calculateDose= document.getElementById("calculate-dose")
const renderDose=document.getElementById("render-dose")
const ivIron= document.getElementById("ivIron")
const reset= document.getElementById("reset")
const male = document.getElementById("male")
const female = document.getElementById("female")
male.addEventListener("click",function(e){
    e.preventDefault()
    
    patientGender= male.value
    console.log(patientGender)
    female.style.backgroundColor="white"
   female.style.color=  "darkslategray"
      female.style.textShadow= " 0px 0px 0px black"
    male.style.backgroundColor="darkslategray"
    male.style.color= "white"
        male.style.textShadow= " 0px 0px 4px black"

    
    
}
)
female.addEventListener("click",function(e){
    e.preventDefault()
    console.log(patientGender)
   patientGender = female.value
    console.log(patientGender)
        male.style.backgroundColor="white"
    male.style.color=  "darkslategray"
    male.style.textShadow= " 0px 0px 0px black"
    female.style.backgroundColor="darkslategray"
    female.style.color= "white" 
       female.style.textShadow= " 0px 0px 4px black" 
}
)
reset.addEventListener("click",function(){

    reset.style.display="none"
})

        calculateDose.addEventListener("click",function(){
           
                const patientHeight = JSON.parse(height.value)
                const patientWeight= JSON.parse(bodyWeight.value)
                const patientTargetHb= JSON.parse(targetHb.value)
                const patientActualHb= JSON.parse(actualHb.value)
                const myIron=ivIron.value
                reset.style.display="block"
        
  
        function render(){  renderDose.innerHTML=""
                renderDose.innerHTML+= `
                
                <h3><div> Calculated dose: for ${myIron}        Target Hb:<span>${patientTargetHb} g/L</span>    Actual Hb: <span>${patientActualHb} g/L</span> </h3></div> 
                <h4><div >Total Iron required is <span>${(finalCalculation)}mg</span>, using ${modifier} weight: ${finalWeight}kg.</div></h4>
               
               <h4 id="box">${testdose}</h4>
                <h4 id="box"> ${message} </h4>
                 
                `}
        
        let bmi= patientWeight*10000/(patientHeight*patientHeight)
        let factor = 50
                    if (patientGender == "Female")    {  factor =45.5    }
                    else if (patientGender=="Male")  { factor =50}        
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
        if (patientWeight<35){ironstore=Math.round(patientWeight*15/ 100) * 100;
        console.log(ironstore)}
        
        
        let finalCalculation =(Math.round((JSON.parse(calculation) / 100) * 100))+ironstore
        console.log(finalCalculation+ " "+typeof +finalCalculation)
        let firstInfusion = ""
        let secondInfusion= ""
        let message=""
        let testdose=""
        
        if(ivIron.value==="Ferinject")


    {testdose="No test dose is required"
         
            let minutes =""
            let volume = ""
            let firstVolume=""
            let firstTime=""
             let secondVolume=""
            let secondTime=""
            let thirdVolume=""
            let thirdTime=""
            let thirdInfusion=""
        
            function ferinjectMessageSingle(){
            
                if (finalCalculation<=200)
                    {volume =50
                    minutes = 6}
                
                else if (finalCalculation>200&&finalCalculation<=500)
                    {volume = 250
                    minutes = 6}
                
                if (finalCalculation>500)
                    { volume = 250
                    minutes = 15}
                
                message=`<div> <div id="single">A single infusion of ${finalCalculation}mg             is required.</div>
                    
                        <h5> Add to maximum ${volume}ml 0.9% Sodium Chloride.</h5>
                    
                        <h5> Give over a minimum of ${minutes} minutes</h5>
                        </div>` }
            
            
            function ferinjectInfusionDouble(){
               if (firstInfusion<=200)
                    {firstVolume =50
                    firstTime = 6}
                
                else if (firstInfusion>200&&firstInfusion<=500)
                    {firstVolume = 250
                    firstTime = 6}
                
                if (secondInfusion>500)
                    { secondVolume = 250
                    secondTime = 15}
                   if (secondInfusion<=200)
                    {secondVolume =50
                    secondTime = 6}
                
                else if (secondInfusion>200&&secondInfusion<=500)
                    {secondVolume = 250
                    secondTime = 6}
                
                if (firstInfusion>500)
                    { firstVolume = 250
                    firstTime = 15}
                
                 message = ` <div>
                        <li> First infusion: ${firstInfusion}mg</li><li>Second infusion: ${secondInfusion} mg</li>
                        
                    <h5> Add the first infusion of ${firstInfusion} mg to a maximum of ${firstVolume} Sodium Chloride. Give over a minimum ${firstTime} minutes</h5>
                    <h5> Leave a minimum of <span> one week</span> between the first and second infusions. </h5>
                     <h5> Add the second infusion of ${secondInfusion}mg to a maximum of ${secondVolume}ml Sodium Chloride. Give over a minimum ${secondTime} minutes</h5> </div>`}
                
                function ferinjectInfusionTriple(){
                    ferinjectInfusionDouble()
                    if (thirdInfusion>500)
                    { thirdVolume = 250
                    thirdTime = 15}
                   if (thirdInfusion<=200)
                    {thirdVolume =50
                    thirdTime = 6}
                
                 if (thirdInfusion>200&&thirdInfusion<=500)
                    {thirdVolume = 250
                    thirdTime = 6}
                    
                    message =`<li> First infusion: ${firstInfusion}mg</li><li>Second infusion: ${secondInfusion} mg</li><li>Third infusion: ${thirdInfusion} mg</li>
                        
                    <h5> Add the first infusion of ${firstInfusion} mg to a maximum of ${firstVolume}ml Sodium Chloride. Give over a minimum ${firstTime} minutes</h5>
                    <h5> Leave a minimum of <span> one week</span> between the first and second infusions and third infusions. To avoid using three infusions, please consider Monofer or Cosmofer </h5>
                     <h5> Add the second infusion of ${secondInfusion}mg to a maximum of ${secondVolume}ml Sodium Chloride. Give over a minimum ${secondTime} minutes</h5>
                     <h5> Add the third infusion of ${thirdInfusion}mg to a maximum of ${thirdVolume}ml Sodium Chloride. Give over a minimum ${thirdTime} minutes</h5> </div>`   }
                
                
                
                 
            if(finalWeight<35||patientActualHb>=140)
                {finalCalculation= 500
                
                   message=`<div> <div id="single">A single infusion of ${finalCalculation}mg             is required.</div>
                    
                        <h5> Add to maximum ${volume}ml 0.9% Sodium Chloride.</h5>
                    
                        <h5> Give over a minimum of ${minutes} minutes</h5>
                        </div>`
                        ferinjectMessageSingle()}
          
                
                
                      
                      
                      
            }
           
           
           
           
              
                    
                        
                             
                           
                                
                  
                      
            if (patientActualHb<=100)
            
                {   if (finalWeight>=35&&finalWeight<70)
                        { finalCalculation=1500
                            firstInfusion=1000
                            secondInfusion=500
                    if(finalWeight>=38&&finalWeight<40)
                    {firstInfusion=750
                    secondInfusion=750}
                    if(finalWeight>=40&&finalWeight<50)
                    {firstInfusion=800
                    secondInfusion=700}
                    ferinjectInfusionDouble()
                    if(finalWeight>=35&&finalWeight<38){
                        firstInfusion=700
                        secondInfusion=700
                        thirdInfusion=100          
                        ferinjectInfusionTriple()}    }
                    
                    if (finalWeight>=70)
                        {finalCalculation=2000
                        firstInfusion= 1000
                        secondInfusion=1000
                        ferinjectInfusionDouble()}
                
                }
                
                              
            if (patientActualHb>100&&patientActualHb<140){
                
                
                if(finalWeight>=35&&finalWeight<=39)
                        { firstInfusion= 700
                        secondInfusion=300}
                 if(finalWeight>=40&&finalWeight<=44)
                            { firstInfusion = 800
                            secondInfusion= 200}  
                   if(finalWeight>=45&&finalWeight<=49)
                            { firstInfusion=900
                            secondInfusion=100
                            } 
                 if (finalWeight>=35&&finalWeight<70)
                    {finalCalculation=1000
                       if (finalWeight>=35&&finalWeight<=49)
                        { ferinjectInfusionDouble()  }
                    
                    
                    if (finalWeight>=50&&finalWeight<70)
                    {ferinjectMessageSingle()}
                     }
                    
                     if (finalWeight>=70)
                    {finalCalculation=1500
                    firstInfusion= 1000
                    secondInfusion=500
                    ferinjectInfusionDouble()}
                    
                    
                   
                 
                
                      
                      
                      
            }
        
        
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
            
           <h5> Add the required quantity for each infusion to 100ml 0.9% Sodium Chloride.</h5>
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
           
          <h5> Add to 100ml 0.9% Sodium Chloride.</h5>
           
           <h5> Give over 30 minutes</h5>
            
           </div> `
            }
           
        }
            
            
                  
            }
            
            
        
        render()
                
      


  })
  
 

import React, { useState } from 'react'
import { Typography,Paper} from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Pair from '../Journal/Pair';
import PriceInput from '../Journal/PriceInput';
import ProfitLoss from '../Journal/ProfitLoss';
import Documentation from '../Journal/Documentation';

function JournalInput() {
  const [value, setValue] = useState(2);
  const [file,setFile]=useState()
  const [fileName,setFileName]=useState()
  // states for journal input 
  const [pair, setPair] = useState("")
  const [riskReward, setRiskReward] = useState("")
  const [riskPrice, setRiskPrice] = useState("")
  const [takeProfiePrice, setTakeProfitPrice] = useState("")
  const [stopLossPrice, setStopLossPrice] = useState("")
  const [riskAmount, setRiskAmount] = useState("")
  const [stopLossAmount, setStopLossAmount] = useState("")
  const [takeProfitAmount, setTakeProfitAmount] = useState("")
  const [StrategyName, setStrategyName] = useState("")
  const [explanationOfEntry, setExplantionEntry] = useState("")

  // full journal data 
  const data={
    pair:pair,
    riskReward:riskReward,
    riskPrice:riskPrice,
    takeProfiePrice:takeProfiePrice,
    stopLossPrice:stopLossPrice,
    riskAmount:riskAmount,
    stopLossAmount:stopLossAmount,
    takeProfitAmount:takeProfitAmount,
    StrategyName:StrategyName,
    explanationOfEntry:explanationOfEntry
  };
 
  
  // function for handling file upload
    let name = ""
    const HandleFileUpload=async(event)=>{
      const files = event.target.files;
      files &&  setFile(files)
      console.log(file,"the file")
      setFileName(file[0].name) 
    }
   if(!file){
      name = "please upload movie image"
   }else if(file){
     name = fileName
   }
  return (
    <section>
       <Paper sx={{opacity:"0.9",width:{xs:"100%",lg:"100%"},p:3,ml:{xs:3,lg:4}}}> 
       <Typography variant="h4" sx={{textAlign:{xs:"center",lg:"start"}}}>Trade Journal</Typography>
        <FormGroup >
            <Pair  setPair={setPair} name={name} HandleFileUpload={HandleFileUpload} pair={pair} setRiskReward={setRiskReward}/>
            <PriceInput setRiskPrice={setRiskPrice}  setTakeProfitPrice={setTakeProfitPrice} setStopLossPrice={setStopLossPrice}/>  
            <ProfitLoss setRiskAmount={setRiskAmount}  setStopLossAmount={ setStopLossAmount} setTakeProfitAmount={setTakeProfitAmount}/>  
            <Documentation setStrategyName={setStrategyName} setExplantionEntry={setExplantionEntry}/> 
            <Button  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} component="label" variant="contained" endIcon={<SendIcon />}>
                Save To Journal
            </Button>
        </FormGroup>
          
        </Paper>
    </section>
  )
}

export default JournalInput
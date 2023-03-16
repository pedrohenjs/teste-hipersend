import { Button } from "@mui/material";
import { apiPut } from "../api/axios";
import { dataRequest } from "../api/request";

export default function Save() {
    
    
    function api() {
        console.log(dataRequest)
        apiPut(dataRequest).then(()=>{
            console.log('requisitou')
        })
    }
    return (
        <Button onClick={
            api
        } variant="contained">Salvar</Button>
    )
}
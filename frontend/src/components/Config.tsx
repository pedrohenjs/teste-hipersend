import { Box, Checkbox, Container, FormControlLabel, FormGroup, MenuItem, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { dataRequest } from "../api/request";


export default function Config(props: any) {
    const [isChecked, setIsChecked] = useState<boolean>(props.check)
    const [send, setSend] = useState((props.send ? '1' : '0'));


    useEffect(() => {
        dataRequest.isActive = isChecked ? isChecked : false
        dataRequest.send = send == '0' ? false : true
        console.log(dataRequest)
    }, [isChecked, send])     

    const handleConfigChange = (e: any) => {
        setSend(e.target.value as string);
    };

    function check() {
        setIsChecked(!isChecked)
    }
    return (
        <Container sx={{
            marginTop: "10%"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <Typography fontSize={20}>Configuração jornada de trabalho</Typography>
                <FormGroup>
                    <FormControlLabel checked={isChecked} onChange={check} control={<Checkbox />} label="Ativar horário de trabalho" />
                </FormGroup>
                <div style={{
                    marginTop: "1%"
                }}>
                    <TextField
                        value={send}
                        select
                        label='Configuração jornada de trabalho'
                        onChange={handleConfigChange}
                        style={
                            {
                                minWidth: '300px'
                            }
                        }

                    >
                        <MenuItem value={1}>Enviar no próximo expediente</MenuItem>
                        <MenuItem value={0}>Abortar</MenuItem>
                    </TextField>
                </div>
            </div>
        </Container>
    )
}



const schedules = [
    {
        id: '0',
        day: "Dom",
        start: '11:00',
        end: '12:00',
    },
    {
        id: '1',
        day: "Seg",
        start: '11:00',
        end: '12:00',
    },
    {
        id: '2',
        day: "Ter",
        start: '11:00',
        end: '12:00',
    },
    {
        id: '3',
        day: "Qua",
        start: '11:00',
        end: '12:00',
    },
    {
        id: '4',
        day: "Qui",
        start: '11:00',
        end: '12:00',
    },
    {
        id: '5',
        day: "Sex",
        start: '11:00',
        end: '12:00',
    },
    {
        id: '6',
        day: "Sab",
        start: '11:00',
        end: '12:00',
    },

]

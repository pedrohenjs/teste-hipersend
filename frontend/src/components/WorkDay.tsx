import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { dataRequest } from "../api/request";

export default function WorkDay(props: any) {
    const [startsAt, setStartsAt] = useState(props.startsAt ? props.startsAt : '00:00')
    const [endsAt, setEndsAt] = useState(props.endsAt ? props.endsAt : '00:00')

  
    useEffect(() => {
        dataRequest.days = dataRequest.days.filter((e)=> e.id != props.dayId)
        dataRequest.days.push({
            id: props.dayId,
            startsAt,
            endsAt
        })        
    }, [startsAt, endsAt])

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '15px', fontFamily: 'sans-serif' }}>
            <div style={{
                marginRight: "10px"
            }}>{props.day}</div>
            <TextField
                onChange={(e) => {
                    setStartsAt(e.target.value)
                }
                }
                value={startsAt}
                type="time"
                label="Inicio"
                defaultValue="00:00"
                size="small"
                style={{
                    width: "25%",

                }}
            />
            <div style={{
                marginLeft: "15px",
                marginRight: "15px"
            }}>até</div>
            <TextField
                onChange={(e) => setEndsAt(e.target.value)}
                value={endsAt}
                type="time"
                label="Fim"
                defaultValue="00:00"
                size="small"
                style={{
                    width: "25%",

                }}
            />
        </div>
    )
}
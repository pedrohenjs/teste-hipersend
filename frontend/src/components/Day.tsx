import CircleIcon from '@mui/icons-material/Circle';
import { useEffect, useState } from 'react';
import { dataRequest } from '../api/request';

export const selectedDays: string[] = []
export let workScheludes = null

export default function Day(props: any) {
    const [selected, setSelected] = useState(props.isSelected ? props.isSelected : false)
    const day: string = props.day

    useEffect(() => {
        dataRequest.days = dataRequest.days.filter((e) => e.id != day)
    }, [selected])

    
    function selectButton() {
        props.handler()
        setSelected(!selected)
        if (!selected === true) {
            selectedDays.push(day)
        } else {
            selectedDays.splice(selectedDays.indexOf(day), 1)
        }
    }

    return (
        <div>
            <div onClick={selectButton} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '25px'
            }}>
                <div>
                    <CircleIcon style={
                        {
                            fontSize: 60,
                            color: selected ? '#1565C0' : 'grey'
                        }
                    } />
                </div>
                <p style={{
                    position: 'absolute',
                    fontSize: "30px",
                    color: 'white',
                    fontFamily: 'sans-serif',
                    userSelect: 'none'
                }}>
                    {props.letter}
                </p>
            </div>

        </div>
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

import { useState } from "react";
import Day, { selectedDays } from "./Day";
import WorkDay from "./WorkDay";

export default function Days(props: any) {
    let [trigger, setTrigger] = useState(0)

    const handleTrigger = () => {
        setTrigger(++trigger);
    }


    return (
        <div>
            <div style={
                { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '15px', }
            }>
                {
                    schedules.map((s) => {
                        return <Day isSelected={props.days.find((d:any)=> {
                            return d.id == s.id
                        }) ? true : false} trigger={trigger} handler={handleTrigger} letter={s.day[0]} day={s.id}/>
                    })
                }

            </div>
            {
                schedules.map((obj) => {
                    
                    if (selectedDays.find(e => e == obj.id) != undefined) {
                        return <WorkDay startsAt={props.days.find((d: any)=> {
                            return d.id == obj.id
                        })?.startsAt}  endsAt={props.days.find((d: any)=> {
                            return d.id == obj.id
                        })?.endsAt} dayData={props.days} day={obj.day} dayId={obj.id} />
                    }
                })
            }
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

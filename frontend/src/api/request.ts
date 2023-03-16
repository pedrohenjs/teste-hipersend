export let dataRequest: Request = {
    isActive: false,
    send: false,
    days: []
}

interface Request {
    isActive: boolean
    send: boolean
    days: Day[

    ]
}
interface Day {

    id: string,
    startsAt: string
    endsAt: string

}
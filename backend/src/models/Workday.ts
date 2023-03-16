export interface Workday {
    sessionId: string,
    isActive: boolean,
    send: boolean,
    days: Day[]
}


interface Day {
    id: string,
    startsAt: string,
    endsAt: string
}
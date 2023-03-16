import { randomUUID } from "crypto";
import { Router } from "express";
import { Workday } from "../models/Workday";

export const workdayRoute = Router()

const workdays: Workday[] = []

workdayRoute.get('/workdays', async (req, res) => {
    const sessionId: string = req.cookies.sessionId

    const workdayInCache = workdays.find((wd) => {
        return wd.sessionId === sessionId
    })

    return res.send(workdayInCache)
})


workdayRoute.put('/workdays', async (req, res) => {
    const data = req.body

    let sessionId = req.cookies?.sessionId

    if (!sessionId) {
        sessionId = randomUUID()
        res.cookie('sessionId', sessionId, {
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 // 1 hour
        })
    }

    const workdayInCache = workdays.find((wd) => {
        return wd.sessionId === sessionId
    })

    if (!workdayInCache) {
        workdays.push({
            days: data.days,
            isActive: data.isActive,
            send: data.send,
            sessionId
        })
        return res.send()
    }

    workdays.splice(workdays.indexOf(workdayInCache), 1, {
        days: data.days,
        isActive: data.isActive,
        send: data.send,
        sessionId
    })

    return res.send()
})
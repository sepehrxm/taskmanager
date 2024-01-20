import prisma from "@/utils/connect"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    try {
        const {userId} = auth()
        const {title, content, date, completed} = await req.json()
        if(!title || !content || !date) {
            return NextResponse.json({error: "missing fields", status: 500})
        }
        const task = await prisma.task.create({
            data: {
                title,
                content,
                date,
                completed,
                userId,
            }
        })
        
        return NextResponse.json(task)

    } catch (error) {
        console.log("error with creating task")
        return new NextResponse.json({error: 'error creating task', status: 500})
    } 
}

export const GET = async (req) => {
    try {
        const {userId} = auth()
        const tasks = await prisma.task.findMany({
            where: {
                userId,
            }
        })
        return NextResponse.json(tasks)
    } catch (error) {
        console.log("error with getting task")
        return new NextResponse.json({error: 'error getting task', status: 500})
    }
}


import { NextResponse } from "next/server"
import prisma from "@/utils/connect"
import { auth } from "@clerk/nextjs"

export const PUT = async (req, {params}) => {
    try {
        const {id, completed} = params
        const task = await prisma.task.update({
            where: {
                id,
            }, 
            data: {
                completed: !completed,
            }
        })
        return NextResponse.json(task)
    } catch (error) {
        console.log("error with updating task")
        return new NextResponse.json({error: 'error updating task', status: 500})
    }
}

export const DELETE = async (req, {params}) => {
    try {
        const {id} = params
        const task = await prisma.task.delete({
            where: {
                id,
            }
        })
        return NextResponse.json(task)
    } catch (error) {
        console.log("error with deleting task")
        return new NextResponse.json({error: 'error deleting task', status: 500})
    }
}
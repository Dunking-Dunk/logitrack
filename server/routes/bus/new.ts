import express, { Request, Response } from 'express'
import { body } from 'express-validator'

import { Bus } from '../../models/Bus'
import { Stop } from '../../models/Stop'
import { Tracker } from '../../models/Tracking'
import { ValidateRequest } from '../../middleware/validate-request'
import { requireAuth } from '../../middleware/require-auth'
import { io } from '../../app'
import { Driver } from '../../models/Driver'

const router = express.Router()

router.post('/api/bus', 
    async (req: Request, res: Response) => {
        let bus = Bus.build({
            ...req.body,
            driver: req.body.driver ? req.body.driver : null
        })
        
        // await bus.stops.map(async (stop) => {
        //     let doc = await Stop.findById(stop)
        //     doc?.busId?.push(bus._id)
        //     await doc?.save()
        // })

        if (req.body.driver) {
            await Driver.findByIdAndUpdate(bus.driver, { busId: bus._id })
        }

        await bus.save()

        io.emit('newBusAdded', bus)

        res.status(201).json(bus)
    })

export { router as NewBusRoute } 
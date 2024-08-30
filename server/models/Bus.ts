import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";
import { StopDoc } from "./Stop";
import { RouteDoc } from "./Route";

interface BusAttrs {
    busNumber: number,
    busSet: string,
    busName: string,
    description: string,
    origin: string,
    tracker?: string,
    driver?: string,
    seats: number,
    status: boolean,
    ac: boolean,
    trackerId: string
    route?: RouteDoc
}
export interface BusDoc extends mongoose.Document {
    busNumber: number,
    busSet: string,
    busName: string,
    description: string,
    origin: string,
    version: number,
    tracker?: string,
    driver?: string,
    seats: number,
    status: boolean,
    ac: boolean,
    trackerId: string
    route?: RouteDoc
}

interface BusModel extends mongoose.Model<BusDoc> {
    build(attrs: BusAttrs): BusDoc
}

export const Schema = new mongoose.Schema({
    busNumber: {
        type: String,
        required: true,
    },
    busSet: {
        type: String,
    },
    busName: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
    },
    description: {
        type: String
    },
    seats: {
        type: Number,
        default: 64
    },
    ac: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean
    },
    trackerId: {
        type: String,
        required: true,
        unique: true
    },
    tracker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tracker'
    },
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    },
    route: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        },
        virtuals: true
    }
})

Schema.set("versionKey", "version");
Schema.plugin(updateIfCurrentPlugin);

Schema.statics.build = (attrs: BusAttrs) => {
    return new Bus(attrs)
}

const Bus = mongoose.model<BusDoc, BusModel>('Bus', Schema)

export { Bus }
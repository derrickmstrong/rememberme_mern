import express from 'express'
import bodyParser from 'body-parser' 
import mongoose from 'mongoose'
import cors from 'cors'

// Initialize app
const app = express()

// Setup
app.use(express.json({limit: "30mb", extended: true}))

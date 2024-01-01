const express=require('express')
const ytdl = require('ytdl-core')
const YT=express.Router()

YT.get('/:parameter',async(req,res)=>{
    const Data=[]
    const ID=req.params.parameter
    const info=await ytdl.getInfo(ID)
    const Video=ytdl.chooseFormat(info.formats,{quality:'highestvideo'})
    const Audio=ytdl.chooseFormat(info.formats,{quality:'highestaudio'})
    Data.push(Video,Audio)
    res.send(Data)
    res.end()
})

module.exports=YT
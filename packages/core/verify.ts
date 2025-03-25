import faceApi from 'face-api.js'
import { createCanvas, loadImage } from '@napi-rs/canvas'

function verifyPasswd() {}
function verifyOTP() {}

function verifyFaceId() {
  const loadModels = async ()=>{
    await faceApi.nets.ssdMobilenetv1.loadFromDisk('')
    await faceApi.nets.faceLandmark68Net.loadFromDisk('')
    await faceApi.nets.faceRecognitionNet.loadFromDisk('')
  }

  const detectFace = async (imagePath:string)=>{
    const img = await loadImage(imagePath)
    const detections = await faceApi.detectAllFaces(img as any)
      .withFaceLandmarks()
      .withFaceDescriptors()
    return detections
  }

}

export function verifyAuth() {
  return true
}

import { commonAPI } from "./CommonAPI"
import { Server_URL } from "./Server_URL"

export const registerUserAPI=async(reqBody)=>{
  return await commonAPI("POST",`${Server_URL}/register`,reqBody,"")
}
export const loginUserAPI=async(reqBody)=>{
  return await commonAPI("POST",`${Server_URL}/login`,reqBody,"")
}
export const submitGrievanceAPI=async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${Server_URL}/submit`,reqBody,reqHeader)
}
export const getUserSubmissionAPI=async(reqHeader)=>{
  return await commonAPI("GET",`${Server_URL}/getusersubs`,{},reqHeader)
}
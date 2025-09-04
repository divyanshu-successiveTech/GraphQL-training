import {users,messages} from "./dataSource.js"
import { AllMessages } from "./mutation.js"

export const chatQueryResolver ={
    chatUsers: () => users,
    chatMessages: () => messages,
    AllMessages: ()=> AllMessages
}
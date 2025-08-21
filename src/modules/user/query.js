import { usersSample } from "./dataSource.js"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const UserQueryResolver={

    UserById:async (_,{id})=>{
        await delay(2000)
        const user = usersSample.find((user) => user.id === id);

        if (!user) {
            return {
                message: "User not found",
                code: 404
            }
        }

        return user
    }

}
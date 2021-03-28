import {Request, Response} from "express";
import {UserDto} from "../../../common/dto/user.dto";
import {UserEntity} from "../model/user.entity";

export class UserController {
    public static async getMe(req: Request, res: Response) {
        const user = req.user as UserEntity;
        const userDto: UserDto = {
            id: user.id,
            username: user.username,
            name: user.name,
        };
        res.send(userDto);
    }
}

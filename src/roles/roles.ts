import {SetMetadata} from '@nestjs/common';
import { Role } from 'src/role.enum/role.enum';


export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
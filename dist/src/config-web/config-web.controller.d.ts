import { IConfigWebService } from './i.config-web.service';
import { ConfigWebDto } from './DTO/config-web.dto';
export declare class ConfigWebController {
    private readonly IConfigWebService;
    constructor(IConfigWebService: IConfigWebService);
    getConfigWeb(): Promise<ConfigWebDto>;
    updateConfigWeb(params: ConfigWebDto): Promise<any>;
}

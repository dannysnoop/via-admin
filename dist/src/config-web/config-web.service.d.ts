import { IConfigWebService } from './i.config-web.service';
import { ConfigWebDto } from './DTO/config-web.dto';
import { ConfigWebRepository } from './config-web.repository';
export declare class ConfigWebService implements IConfigWebService {
    private readonly repository;
    constructor(repository: ConfigWebRepository);
    createConfig(param: ConfigWebDto): Promise<any>;
    updateConfig(param: ConfigWebDto): Promise<any>;
    getConfig(): Promise<ConfigWebDto>;
}

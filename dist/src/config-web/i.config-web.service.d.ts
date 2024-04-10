import { ConfigWebDto } from "./DTO/config-web.dto";
export interface IConfigWebService {
    createConfig(param: ConfigWebDto): Promise<any>;
    updateConfig(param: ConfigWebDto): Promise<any>;
    getConfig(): Promise<ConfigWebDto>;
}

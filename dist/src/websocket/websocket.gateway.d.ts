import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class ChatWsGatewayService implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    constructor();
    autoSendAmountToClient(amount?: number, userId?: number): void;
    sendMessageToClient(client: Socket, token?: string): Promise<void>;
    afterInit(server: any): any;
    handleConnection(client: Socket, ...args: any[]): Promise<void>;
    handleDisconnect(client: any): any;
}

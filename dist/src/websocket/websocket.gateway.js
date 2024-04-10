"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatWsGatewayService = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const jwt = require('jsonwebtoken');
const data = {};
const tokenCheck = {};
let ChatWsGatewayService = class ChatWsGatewayService {
    constructor() { }
    autoSendAmountToClient(amount = 0, userId = 0) {
        const clientId = data[userId];
        this.server.to(clientId).emit('amountClient', amount);
    }
    async sendMessageToClient(client, token = '') {
        const clientId = client.id;
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            data[payload.id] = clientId;
        }
        catch (e) {
        }
    }
    afterInit(server) { }
    async handleConnection(client, ...args) {
        const clientId = client.id;
        const token = client.handshake.auth.token;
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            data[payload.id] = clientId;
        }
        catch (e) {
        }
    }
    handleDisconnect(client) { }
};
exports.ChatWsGatewayService = ChatWsGatewayService;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatWsGatewayService.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('verifyAuth'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ChatWsGatewayService.prototype, "sendMessageToClient", null);
exports.ChatWsGatewayService = ChatWsGatewayService = __decorate([
    (0, websockets_1.WebSocketGateway)(4001, { cors: true }),
    __metadata("design:paramtypes", [])
], ChatWsGatewayService);
//# sourceMappingURL=websocket.gateway.js.map
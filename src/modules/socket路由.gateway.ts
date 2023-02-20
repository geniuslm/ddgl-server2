import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { 功能 } from './socket方法.service';
import { Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import { 用户类, 订单类, 镜片类 } from 'src/db/接口';
import { AnyAaaaRecord } from 'dns';
import { 日志 } from 'src/main';

// 创建一个网关，用于接收客户端的请求 端口号为8081 允许跨域请求
@WebSocketGateway(8081, { cors: { origin: '*' }, })// 允许跨域

// 定义一个类，用于处理客户端的请求  
// 用SubscribeMessage配对
// 用 emit() 发送消息给客户端 
export class C客户端接口的控制类 {
  constructor(private readonly 功能: 功能,) { }

  @SubscribeMessage('测试socket')                                  // 接收客户端发送的消息
  socketTest(@MessageBody() data: any, @ConnectedSocket() 客户端: Socket) {
    客户端.broadcast.emit('广播', `-广播出去-${data.test}`);         // 广播到其他的客户端
    return "服务器收到";                                            // 发回给自己的客户端
  }

  //测试
  @SubscribeMessage('测试')
  测试(@MessageBody() 数据: any) { return this.功能.测试(数据[0], 数据[1]); }
  //订单
  @SubscribeMessage('订单')
  订单(@MessageBody() 数据: any) { return this.功能.订单(数据[0], 数据[1]); }
  //镜片
  @SubscribeMessage('镜片')
  镜片(@MessageBody() 数据: any) { return this.功能.镜片(数据[0], 数据[1]); }
  //用户
  @SubscribeMessage('用户')
  用户(@MessageBody() 数据: any) { return this.功能.用户(数据[0], 数据[1]); }
  //登录
  @SubscribeMessage('登录验证')
  登录(@MessageBody() 数据: any) { return this.功能.登录验证(数据); }
  
}


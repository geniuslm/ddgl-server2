import { Module } from '@nestjs/common';
import { 功能 } from './socket方法.service';
import { C客户端接口的控制类 } from './socket路由.gateway';
import { 数据库Module } from '../db/数据库.module';

@Module({
  imports: [数据库Module],
  providers: [C客户端接口的控制类, 功能]
})
export class 客户端接口模块 {}

import { NestFactory } from '@nestjs/core';
import * as fs from "fs";
import { Logger } from '@nestjs/common/services/logger.service';
import { 数据库Module } from './db/数据库.module';
import { 客户端接口模块 } from './modules/socket-test.module';
import * as compression from 'compression';


export let 日志 = (文字: any) => {
  new Logger('日志').log(文字);
}

async function bootstrap() {
  const app = await NestFactory.create(客户端接口模块)
  
  app.use(compression());//启用压缩 
  await app.listen(45556);
}

bootstrap();

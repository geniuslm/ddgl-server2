import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';
import { 用户类, 订单类, 镜片类 } from 'src/db/接口';
import { 日志, } from 'src/main';





@Injectable()                  // 可以在这里添加其他的服务
export class 功能 {
  constructor(
    @InjectModel('M用户控制模块') private 用户集合控制: Model<用户类>,
    @InjectModel('M订单控制模块') private 订单集合控制: Model<订单类>,
    @InjectModel('M镜片控制模块') private 镜片集合控制: Model<镜片类>,
  ) { }
  //测试
  public async 测试(操作: string, 数据: any) {
    if (操作 == "增") { await new this.订单集合控制(数据).save(); 日志("测试增" + 数据); return await this.订单集合控制.find() }
    if (操作 == "删") { await this.订单集合控制.deleteOne({ _id: 数据._id }); 日志("测试删" + 数据); return await this.订单集合控制.find() }
    if (操作 == "改") { await this.订单集合控制.updateOne({ _id: 数据._id }, { $set: 数据 }); 日志("测试改" + 数据); return await this.订单集合控制.find() }
    if (操作 == "查") { return await this.订单集合控制.find({ _id: 数据._id }) }
    if (操作 == "获") { return await this.订单集合控制.find() }
    else return '未定义操作'
  }
  //订单
  public async 订单(操作: any, 数据: any) {
    if (操作 == "增") { await new this.订单集合控制(数据).save(); 日志("订单增:" + 数据.订单号); return await this.订单集合控制.find() }
    if (操作 == "删") { await this.订单集合控制.deleteOne({ _id: 数据._id }); 日志("订单删" + 数据.订单号); return await this.订单集合控制.find() }
    if (操作 == "改") { await this.订单集合控制.updateOne({ _id: 数据._id }, { $set: 数据 }); 日志("订单改" + 数据.订单号); return await this.订单集合控制.find() }
    if (操作 == "获") { return await this.订单集合控制.find() }
    else return '未定义操作'
  }
  //镜片
  public async 镜片(操作: any, 数据: any) {
    if (操作 == "增") { await new this.镜片集合控制(数据).save(); 日志("镜片增" + 数据.镜片名); return await this.镜片集合控制.find() }
    if (操作 == "删") { await this.镜片集合控制.deleteOne({ _id: 数据._id }); 日志("镜片删" + 数据.镜片名); return await this.镜片集合控制.find() }
    if (操作 == "改") { await this.镜片集合控制.updateOne({ _id: 数据._id }, { $set: 数据 }); 日志("镜片改" + 数据.镜片名); return await this.镜片集合控制.find() }
    if (操作 == "获") { return await this.镜片集合控制.find() }
    else return '未定义操作'
  }
  //用户
  public async 用户(操作: any, 数据: any) {
    if (操作 == "增") { await new this.用户集合控制(数据).save(); 日志("用户增" + 数据.用户名); return await this.用户集合控制.find() }
    if (操作 == "删") { await this.用户集合控制.deleteOne({ _id: 数据._id }); 日志("用户删" + 数据._id); return await this.用户集合控制.find() }
    if (操作 == "改") { await this.用户集合控制.updateOne({ _id: 数据._id }, { $set: 数据 }); 日志("用户改" + 数据.用户名); return await this.用户集合控制.find() }
    if (操作 == "获") { return await this.用户集合控制.find() }
    else return '未定义操作'
  }
  //登录验证
  public async 登录验证(数据: any) {
    let 查询结果 = await this.用户集合控制.find({ 用户名: 数据.用户名 })
    if (查询结果.length == 0) return '用户名不存在'
    if (查询结果[0].密码 == 数据.密码) return '登录成功'
    else return '密码错误'
  }
}


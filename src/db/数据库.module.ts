import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { 用户Schema, 订单Schema, 镜片Schema,镜片订单Schema, 镜框Schema, 镜框订单Schema, 删除订单Schema } from './接口';


const M数据库用户集合 = MongooseModule.forFeature([      // 定义数据库模块
    {
        name: 'M用户控制模块',   // 这个模块的名称
        schema: 用户Schema,
        collection: '用户集合',      // 数据库中的集合名称
    }
])

const M数据库订单集合 = MongooseModule.forFeature([      // 定义数据库模块
    {
        name: 'M订单控制模块',   // 这个模块的名称
        schema: 订单Schema,
        collection: '旧订单',      // 数据库中的集合名称
    }
])

const M数据库镜片集合 = MongooseModule.forFeature([      // 定义数镜片模块
    {
        name: 'M镜片控制模块',   // 这个模块的名称
        schema: 镜片Schema,
        collection: '镜片集合',      // 数据库中的集合名称
    }
])

const M数据库镜片订单集合 = MongooseModule.forFeature([      // 定义数镜片模块
    {
        name: 'M镜片订单控制模块',   // 这个模块的名称
        schema: 镜片订单Schema,
        collection: '镜片订单集合',      // 数据库中的集合名称
    }
])

const M数据库镜框集合 = MongooseModule.forFeature([      // 定义数镜片模块
    {
        name: 'M镜框控制模块',   // 这个模块的名称
        schema: 镜框Schema,
        collection: '镜框集合',      // 数据库中的集合名称
    }
])

const M数据库镜框订单集合 = MongooseModule.forFeature([      // 定义数镜片模块
    {
        name: 'M镜框订单控制模块',   // 这个模块的名称
        schema: 镜框订单Schema,
        collection: '镜框订单集合',      // 数据库中的集合名称
    }
])

const M数据库删除订单集合 = MongooseModule.forFeature([      // 定义数据库模块
    {
        name: 'M删除订单控制模块',   // 这个模块的名称
        schema: 删除订单Schema,
        collection: '删除的订单',      // 数据库中的集合名称
    }
])



@Global()
@Module({
    imports:
        [
            // 定义数据库连接 'mongodb://用户名:密码@地址:端口/数据库名?options...') 这是个模块
            //MongooseModule.forRoot('mongodb://geniuslmt:geniuslmt@120.53.103.135:27017', { dbName: 'data' }), 
            //MongooseModule.forRoot('mongodb://geniuslmt:geniuslmt@localhost:27017', { dbName: '订单' }), 
            //MongooseModule.forRoot('mongodb://geniuslmt:geniuslmt@0.0.0.0:27017', { dbName: 'data' }), 
            //MongooseModule.forRoot('mongodb://geniuslmt:geniuslmt@127.0.0.1:27017', { dbName: 'data' }), 
            //MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'data' }), 
            MongooseModule.forRoot('mongodb://geniuslmt:geniuslmt@localhost:27017/data'),

            // 这里是要导出的模块
            M数据库用户集合, M数据库订单集合, M数据库镜片集合,M数据库镜片订单集合, M数据库镜框集合, M数据库镜框订单集合, M数据库删除订单集合
        ],
    exports: [M数据库用户集合, M数据库订单集合, M数据库镜片集合,M数据库镜片订单集合, M数据库镜框集合, M数据库镜框订单集合, M数据库删除订单集合],   // 导出数据库模块
})

export class 数据库Module { }

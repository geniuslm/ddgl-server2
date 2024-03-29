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

const M订单备份控制模块 = MongooseModule.forFeature([      // 定义数据库模块
    {
        name: 'M订单备份控制模块',   // 这个模块的名称
        schema: 镜片订单Schema,
        collection: '订单备份',      // 数据库中的集合名称
    }
])


@Global()
@Module({
    imports:
        [
            // 这是服务器地址
            MongooseModule.forRoot('mongodb://geniuslmt:genius@localhost:27017/Data?authSource=admin'),
            // MongooseModule.forRoot('mongodb://geniuslmt:genius@38.105.26.244:27017/Data?authSource=admin'),
            
 
            // 这里是要导出的模块
            M订单备份控制模块,M数据库用户集合, M数据库订单集合, M数据库镜片集合,M数据库镜片订单集合, M数据库镜框集合, M数据库镜框订单集合, M数据库删除订单集合
        ],
    exports: [M订单备份控制模块,M数据库用户集合, M数据库订单集合, M数据库镜片集合,M数据库镜片订单集合, M数据库镜框集合, M数据库镜框订单集合, M数据库删除订单集合],   // 导出数据库模块
})

export class 数据库Module { }

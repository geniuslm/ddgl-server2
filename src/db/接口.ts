import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Schema as 模式 } from 'mongoose';

export class 单类 {
    订单号: string;
    删除信息: string;
    年: string;
    月: string;
    日: string;
    镜片下单日: string;
    收件人: string;
}

// 用户的数据模型
@Schema()
export class 用户类 extends Document {       // 定义数据模型 之后通过这个class建立对象
    @Prop() 用户名: string;
    @Prop() 密码: string;
    @Prop() 类型: string;

}
export const 用户Schema = SchemaFactory.createForClass(用户类);  // 用一个用户类 创建一个Schema对象


// 订单的数据模型
@Schema()
export class 订单类 extends Document {       // 定义数据模型 之后通过这个class建立对象
    @Prop() 订单号: string;
    @Prop() 删除信息: string;

    @Prop() 收件人: string;
    @Prop() 旺旺名: string;
    @Prop() 镜片: string;

    @Prop() 右近视: string;
    @Prop() 右散光: string;
    @Prop() 右轴向: string;
    @Prop() 右瞳距: string;

    @Prop() 左近视: string;
    @Prop() 左散光: string;
    @Prop() 左轴向: string;
    @Prop() 左瞳距: string;
    @Prop() 备注: string;

    @Prop() 镜片下单日: string;
    @Prop() 镜片订货日: string;
    @Prop() 右镜片订货日: string;
    @Prop() 左镜片订货日: string;
    @Prop() 镜片备好日: string;
    @Prop() 右镜片备好日: string;
    @Prop() 左镜片备好日: string;
    @Prop() 镜片供应商: string;
    @Prop() 右镜片供应商: string;
    @Prop() 左镜片供应商: string;
    @Prop() 镜片进货价: number;
    @Prop() 镜片售价: number;



    @Prop() 镜框选项: string;
    @Prop() 选定镜框: string;
    @Prop() 镜框运单号: string;
    @Prop() 镜框下单日: string;
    @Prop() 镜框发货日: string;
    @Prop() 镜框备好日: string;
    @Prop() 镜框进货价: number;
    @Prop() 镜框售价: number;

    @Prop() 订单进度: string;
    @Prop() 订单完成日: string;

    @Prop() 镜片利润: number;
    @Prop() 镜框利润: number;
    @Prop() 优惠: number;
    @Prop() 总利润: number;

    @Prop({ type: [String] }) 试戴镜框: string[];
    @Prop({ type: [String] }) 编辑记录: string[];
    @Prop({ type: [String] }) 购买记录: string[];
    @Prop({
        订单号: String,
        删除信息: String,
        年: String,
        月: String,
        日: String,
        镜片下单日: String,
        收件人: String,
    }) 对象: 单类;
}
export const 订单Schema = SchemaFactory.createForClass(订单类);  // 用一个订单类 创建一个Schema对象

// 删除订单的数据模型
@Schema()
export class 删除订单类 extends Document {       // 定义数据模型 之后通过这个class建立对象

    @Prop() 订单号: string;
    @Prop() 删除信息: string;

    @Prop() 收件人: string;
    @Prop() 旺旺名: string;
    @Prop() 镜片: string;

    @Prop() 右近视: string;
    @Prop() 右散光: string;
    @Prop() 右轴向: string;
    @Prop() 右瞳距: string;

    @Prop() 左近视: string;
    @Prop() 左散光: string;
    @Prop() 左轴向: string;
    @Prop() 左瞳距: string;
    @Prop() 备注: string;

    @Prop() 镜片下单日: string;
    @Prop() 镜片订货日: string;
    @Prop() 镜片备好日: string;
    @Prop() 镜片供应商: string;
    @Prop() 镜片进货价: number;
    @Prop() 镜片售价: number;



    @Prop() 镜框选项: string;
    @Prop() 镜框运单号: string;
    @Prop() 镜框下单日: string;
    @Prop() 镜框发货日: string;
    @Prop() 镜框备好日: string;
    @Prop() 订单进度: string;
    @Prop() 订单完成日: string;

    @Prop() 镜片利润: number;
    @Prop() 镜框利润: number;
    @Prop() 优惠: number;
    @Prop() 总利润: number;

    @Prop({ type: [String] }) 试戴镜框: string[];
    @Prop({ type: [String] }) 编辑记录: string[];
    @Prop({ type: [String] }) 购买记录: string[];
    @Prop({
        订单号: String,
        删除信息: String,
        年: String,
        月: String,
        日: String,
        镜片下单日: String,
        收件人: String,
    }) 对象: 单类;

}
export const 删除订单Schema = SchemaFactory.createForClass(订单类);  // 用一个订单类 创建一个Schema对象


// 镜片与镜片订单
interface 库存 {
    [key: string]: any;
}

@Schema()
export class 镜片类 extends Document {       // 定义数据模型 之后通过这个class建立对象
    @Prop() 镜片名: string;
    @Prop() 品牌名: string;
    @Prop() 系列名: string;
    @Prop() 折射率: string;
    @Prop() 高散定制: string;
    @Prop() 染色变色: string;



    @Prop() 售价: number;

    @Prop() 湖北和益: number;
    @Prop() 山东臻视: number;
    @Prop() 上海老周: number;
    @Prop() 湖北蔡司: number;
    @Prop() 丹阳夏总: number;
    @Prop() 店铺库存: number;
    @Prop({ type: [String] }) 光度范围: [];
    @Prop({ type: Object }) 库存: 库存;
    @Prop({ type: [String] }) 库存变更记录: [];
}
export const 镜片Schema = SchemaFactory.createForClass(镜片类);  // 用一个订单类 创建一个Schema对象

@Schema()
export class 镜片订单类 extends Document {       // 定义数据模型 之后通过这个class建立对象
    @Prop() 镜片名: string;
    @Prop() 近视: string;
    @Prop() 散光: string;
    @Prop() 订单日期: string;
    @Prop() 进货价格: number;
    @Prop() 充值金额: number;
    @Prop() 预存余额: number;
    @Prop() 供货商: string;
    @Prop() 订单类型: string;
    @Prop() 订单号: string;
    @Prop() 镜片收到日: string;
}
export const 镜片订单Schema = SchemaFactory.createForClass(镜片订单类);  // 用一个订单类 创建一个Schema对象

//镜框与镜框订单
@Schema()
export class 镜框类 {
    @Prop() 镜框名: string;
    @Prop() 详细信息: string;
    @Prop() 供货商: string;
    @Prop() 颜色: string;

    @Prop() 库存数量: number;
    @Prop() 进货价格: number;
    @Prop() 售价: number;
    // @Prop({ type: [String] }) 库存变更记录: string[];
    @Prop({
        变更日期: String,
        变更数量: Number,
        变更后库存: Number,
        变更原因: String,
    }) 库存变更记录: [];
}
export const 镜框Schema = SchemaFactory.createForClass(镜框类);

@Schema()
export class 镜框订单类 {
    @Prop() 镜框名: string;
    @Prop() 订单日期: string;
    @Prop() 订货数量: number;
    @Prop() 进货价格: number;
    @Prop() 供货商: string;
    @Prop() 订单状态: string;
}
export const 镜框订单Schema = SchemaFactory.createForClass(镜框订单类); 
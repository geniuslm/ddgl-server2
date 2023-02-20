import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Schema as 模式 } from 'mongoose';

export class 单类 {
    订单号  : string;
    删除信息 : string;
    年    : string;
    月    : string;
    日    : string;
    镜片下单日: string;
    收件人  : string;
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
    @Prop() 订单号  : string;
    @Prop() 删除信息 : string;

    @Prop() 收件人 : string;
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

    @Prop() 镜框选项   : string;
    @Prop() 镜框运单号   : string;
    @Prop() 镜框下单日: string;
    @Prop() 镜框发货日: string;
    @Prop() 镜框备好日: string;
    @Prop() 订单进度: string;

    @Prop() 镜片利润: number;
    @Prop() 镜框利润: number;
    @Prop() 优惠: number;
    @Prop() 总利润: number;

    @Prop({ type: [String] })试戴镜框: string[];
    @Prop({ type: [String] })编辑记录: string[];
    @Prop({ type: [String] })购买记录: string[];
    @Prop({
        订单号: String,
        删除信息: String,
        年: String,
        月: String,
        日: String,
        镜片下单日: String,
        收件人: String,
    }) 对象: 单类 ;
}
export const 订单Schema = SchemaFactory.createForClass(订单类);  // 用一个订单类 创建一个Schema对象



// 新订单的数据模型
@Schema()
export class 镜片类 extends Document {       // 定义数据模型 之后通过这个class建立对象
    @Prop() 镜片名: string;
    @Prop() 品牌名: string;
    @Prop() 系列名: string;
    @Prop() 折射率: string;
    @Prop() 染色变色: string;
    @Prop() 高散车房: string;

    @Prop() 最高近视光度: number;
    @Prop() 最高散光光度: number;
    @Prop() 最高联合光度: number;
    @Prop() 最高远视光度: number;
    @Prop() 最高远视散光: number;


    @Prop() 供应商: string;
    @Prop() 售价: number;
    @Prop() 进货价: number;
    @Prop() 湖北和益: number;
    @Prop() 湖北蔡司: number;
    @Prop() 上海老周: number;
    @Prop() 丹阳臻视: number;

}
export const 镜片Schema = SchemaFactory.createForClass(镜片类);  // 用一个订单类 创建一个Schema对象

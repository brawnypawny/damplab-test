import { ObjectType, Field } from '@nestjs/graphql';
import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Announcement extends Document {
    @Prop()
    @Field(() => String,{  description: 'body text of announcement' })
    text: string;

    @Prop()
    @Field(() => Date, { description: 'time of creation' })
    timestamp: Date;

    @Prop({default: true})
    @Field(() => Boolean)
    is_displayed: boolean;
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
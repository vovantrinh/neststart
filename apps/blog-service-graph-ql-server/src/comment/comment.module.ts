import { Module } from "@nestjs/common";
import { CommentModuleBase } from "./base/comment.module.base";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { CommentGrpcController } from "./comment.grpc.controller";
import { CommentResolver } from "./comment.resolver";

@Module({
  imports: [CommentModuleBase],
  controllers: [CommentController, CommentGrpcController],
  providers: [CommentService, CommentResolver],
  exports: [CommentService],
})
export class CommentModule {}

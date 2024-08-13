/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { CommentService } from "../comment.service";
import { CommentCreateInput } from "./CommentCreateInput";
import { CommentWhereInput } from "./CommentWhereInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { CommentFindManyArgs } from "./CommentFindManyArgs";
import { CommentUpdateInput } from "./CommentUpdateInput";
import { Comment } from "./Comment";
import { Post } from "../../post/base/Post";

export class CommentGrpcControllerBase {
  constructor(protected readonly service: CommentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Comment })
  @GrpcMethod("CommentService", "createComment")
  async createComment(
    @common.Body() data: CommentCreateInput
  ): Promise<Comment> {
    return await this.service.createComment({
      data: {
        ...data,

        post: data.post
          ? {
              connect: data.post,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,
        id: true,

        post: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Comment] })
  @ApiNestedQuery(CommentFindManyArgs)
  @GrpcMethod("CommentService", "comments")
  async comments(@common.Req() request: Request): Promise<Comment[]> {
    const args = plainToClass(CommentFindManyArgs, request.query);
    return this.service.comments({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,

        post: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CommentService", "comment")
  async comment(
    @common.Param() params: CommentWhereUniqueInput
  ): Promise<Comment | null> {
    const result = await this.service.comment({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,

        post: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CommentService", "updateComment")
  async updateComment(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() data: CommentUpdateInput
  ): Promise<Comment | null> {
    try {
      return await this.service.updateComment({
        where: params,
        data: {
          ...data,

          post: data.post
            ? {
                connect: data.post,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          content: true,
          createdAt: true,
          id: true,

          post: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CommentService", "deleteComment")
  async deleteComment(
    @common.Param() params: CommentWhereUniqueInput
  ): Promise<Comment | null> {
    try {
      return await this.service.deleteComment({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,

          post: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

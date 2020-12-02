module Api
  module V1
    class PostsController < ApplicationController
      def index
        posts = Post.all

        render json: PostSerializer.new(posts, options).serializable_hash
      end

      def show
        post = Post.find_by(slug: params[:slug])

        render json: PostSerializer.new(post, options).serializable_hash
      end

      def create
        post = Post.new(post_params)

        if post.save
          render json: PostSerializer.new(post).serializable_hash
        else
          render json: { error: post.errors.messages }, status: 422
        end
      end

      def update
        post = Post.find_by(slug: params[:slug])

        if post.update(post_params)
          render json: PostSerializer.new(post, options).serializable_hash
        else
          render json: { error: post.errors.messages }, status: 422
        end
      end

      def destroy
        post = Post.find_by(slug: params[:slug])

        if post.destroy
          head :no_content
        else
          render json: { error: post.errors.messages }, status: 422
        end
      end

      private

      def post_params
        params.require(:post).permit(:name, :image_url)
      end

      def options
        @options ||= { include: %i[reviews] }
      end

    end
  end
end
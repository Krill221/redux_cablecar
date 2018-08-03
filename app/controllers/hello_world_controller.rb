# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = { name: "HLLLO" }
  end


  def add
    #sleep 1
    @hello_world_props = { name: params[:text] }
    render json: @hello_world_props
  end
end

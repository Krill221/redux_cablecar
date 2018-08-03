class ChatChannel < ApplicationCable::Channel


  def subscribed
    stream_from "chat_room"
  end



  def receive(action)
    logger.info "CABLECAR ACTION: #{action['type']}"

    case action["type"]
      when "CABLE_ALL"
          msg = Message.all
          action[:type] = 'SERVER_ALL'
          action[:items] = msg.as_json
          transmit(action)
      when "CABLE_ADD"
          new_msg = Message.create(text: action['text'])
          action[:type] = 'SERVER_ADD'
          action[:item] = new_msg.as_json
          rebroadcast(action)
      when "CABLE_UPDATE"
          #msg = Message.create(name: current_user, msg: action['msg'])
          action[:type] = 'SERVER_UPDATE'
          rebroadcast(action)
      when "CABLE_DELETE"
          Message.find(action['id']).destroy
          action[:type] = 'SERVER_DELETE'
          rebroadcast(action)
      when "CABLE_DELETE_ALL"
          Message.destroy_all
          action[:type] = 'SERVER_DELETE_ALL'
          rebroadcast(action)
    end


  end

  def rebroadcast(action)
    ActionCable.server.broadcast("chat_room", action)
  end

end

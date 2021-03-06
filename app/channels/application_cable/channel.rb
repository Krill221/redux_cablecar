module ApplicationCable
  class Channel < ActionCable::Channel::Base

    @@model = "default_room"
    @@broadcast = true

    def subscribed
      stream_from @@model.name
      self.transmit_all()
    end

    def receive(action)
      #logger.info "CABLECAR ACTION: #{action['type']}"

      case action["type"]
        when "CABLE_ALL"
            self.transmit_all()
        when "CABLE_ADD"
            new_msg = Message.create(text: action['text'])
            action = {:type => 'SERVER_ADD', :item => new_msg.as_json}
            rebroadcast(action)
        when "CABLE_UPDATE"
            msg = Message.update(action['id'].to_i, text: action['text'])
            action = {:type => 'SERVER_UPDATE', :item => msg.as_json}
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

    def transmit_all
        msg = Message.all
        action = {:type => 'SERVER_ALL', :items => msg.as_json}
        transmit(action)
    end
    def rebroadcast(action)
      if @@broadcast == true
        ActionCable.server.broadcast(@@model.name, action)
      else
        transmit(action)
      end
    end

  end
end

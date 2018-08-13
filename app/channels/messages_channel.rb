class MessagesChannel < ApplicationCable::Channel
  @@model = Message
  @@broadcast = true
end

Rails.application.routes.draw do

  resources :messages, only: [:create]
  #mount ActionCable.server => '/cable'

  get 'hello_world', to: 'hello_world#index'
  get 'hello_world/add', to: 'hello_world#add'
  root to: 'hello_world#index'

end

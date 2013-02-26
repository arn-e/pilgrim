class EventsController < ApplicationController

  def index
    @events = Event.event_list    
  end

end

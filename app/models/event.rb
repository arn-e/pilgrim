class Event < ActiveRecord::Base
  attr_accessible :name
  validates :name, :presence => true
  
  def self.event_list(location = nil)
    Event.all
  end

end

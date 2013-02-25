require 'spec_helper'

describe Event do
  context 'mock test, pending PostGIS integration' do
    
    let(:event) { mock_model(Event) }

    before(:each) do 
      # where is this mysterious method?
      Event.stub(:all).and_return(event)    
    end

    it 'returns all events' do 
      Event.event_list.should eql(event)
    end
  end

end

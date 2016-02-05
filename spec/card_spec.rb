require_relative '../lib/card.rb'

describe 'Card' do
  describe '#initilize' do

    let (:suit) { :club }
    let (:value) { :seven }
    let(:card) { Card.new(suit, value) }


    it 'has suit' do
      expect(card.suit).to eq(:club)
    end

    it 'has value' do
      expect(card.value).to eq(:seven)
    end


  end
end

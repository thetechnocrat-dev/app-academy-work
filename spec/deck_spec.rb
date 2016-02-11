require_relative '../lib/deck.rb'

describe 'Deck' do
  let(:stack) { Deck.new }
  let(:stack2) { Deck.new }

  describe '#generate' do
    it 'generates the deck at the start' do
      expect(stack.deck.length).to eq(52)
    end
  end

  describe '#shuffle' do
    it 'shuffles all the cards randomly' do
      stack2.shuffle
      stack.shuffle

      expect(stack2.deck).to_not eq(stack.deck)
    end
  end

  #
  # describe '#deal_out' do
  #   it 'can deal 5 cards to each player at start of each hand' do
  #
  #   end
  #
  #   it 'takes two parameters, player_who_gets_card and number_of_cards_given' do
  #
  #   end
  # end
  #
  # describe '#receive_cards' do
  #     it 'adds discarded cards from players back to bottom of deck' do
  #
  #     end
  # end
end

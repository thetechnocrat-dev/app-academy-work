require_relative 'card'

class Deck

  attr_reader :deck

  def initialize
    @deck = []
    self.generate
  end

  def generate
    values = [:ace, :two, :three, :four, :five, :six, :seven, :eight, :nine,
              :ten, :jack, :queen, :king]
    suits = [:heart, :diamond, :club, :spade]

    suits.each do |suit|
      values.each do |value|
        self.deck << Card.new(suit, value) #unless self.deck.length == 52
      end
    end
  end

  def shuffle
    self.deck.shuffle!
  end

end

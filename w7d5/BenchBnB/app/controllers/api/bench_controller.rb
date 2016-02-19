class Api::BenchController < ApplicationController

  def index
    @benches = Bench.all
  end

end

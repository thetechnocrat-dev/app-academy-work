class TracksController < ApplicationController

  def new
    render :new
  end

  def create
    @track = Track.new(track_params)

    if @track.save()
      flash[:notes] = ["Track Created"]
      redirect_to track_url(@track)
    else
      flash[:notes] = ["Track Not Created"]
      render :new
    end
  end

  private

  def track_params
    params.require(:track).permit(:name, :album, :bonus, :lyrics)
  end

end

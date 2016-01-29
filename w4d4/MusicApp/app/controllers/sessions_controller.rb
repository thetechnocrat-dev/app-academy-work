class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(login_params[:email],
                                      login_params[:password])

    if @user
      log_in_user!(@user)
      flash[:notes] = ["Login Success"]
      redirect_to users_url
    else
      flash[:notes] = ["Login Failure"]
      render :new
    end
  end

  private

  def login_params
    params.require(:login).permit(:email, :password)
  end

end

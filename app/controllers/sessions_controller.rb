class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(login_params[:email],
                                      login_params[:password])

    if @user
      render(
        json: "Login success"
      )
    else
      render(
        json: "Login failed"
      )
    end
  end

  private

  def login_params
    params.require(:login).permit(:email, :password)
  end

end
